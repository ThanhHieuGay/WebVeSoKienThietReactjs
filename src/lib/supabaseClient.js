// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// ⚠️ QUAN TRỌNG: Thay thế bằng thông tin từ Supabase Dashboard
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Tạo Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Tự động persist session
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Đồng bộ user từ Firebase vào Supabase
 * Gọi sau khi đăng nhập Firebase thành công
 */
export const syncUserToSupabase = async (firebaseUser) => {
  try {
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('*')
      .eq('firebase_uid', firebaseUser.uid)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      throw checkError;
    }

    // Nếu user chưa tồn tại, tạo mới
    if (!existingUser) {
      const { data, error } = await supabase
        .from('users')
        .insert([
          {
            firebase_uid: firebaseUser.uid,
            email: firebaseUser.email,
            display_name: firebaseUser.displayName || '',
            avatar_url: firebaseUser.photoURL || '',
            phone_number: firebaseUser.phoneNumber || '',
            role: 'user',
            status: 'active',
            balance: 0
          }
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    }

    // Nếu đã tồn tại, cập nhật thông tin
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update({
        email: firebaseUser.email,
        display_name: firebaseUser.displayName || existingUser.display_name,
        avatar_url: firebaseUser.photoURL || existingUser.avatar_url,
        updated_at: new Date().toISOString()
      })
      .eq('firebase_uid', firebaseUser.uid)
      .select()
      .maybeSingle()

    if (updateError) throw updateError;
    return updatedUser;
  } catch (error) {
    console.error('Error syncing user to Supabase:', error);
    throw error;
  }
};

/**
 * Lấy thông tin user từ Supabase bằng Firebase UID
 */
export const getUserByFirebaseUid = async (firebaseUid) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('firebase_uid', firebaseUid)
      .maybeSingle();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};

// ============================================
// API FUNCTIONS - LOTTERY RESULTS
// ============================================

/**
 * Lấy kết quả xổ số theo miền và ngày
 */
export const getLotteryResults = async (region, date) => {
  try {
    const { data, error } = await supabase
      .from('v_lottery_results')
      .select('*')
      .eq('region', region)
      .eq('draw_date', date)
      .order('province_name');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching lottery results:', error);
    return [];
  }
};

/**
 * Lấy kết quả mới nhất (7 ngày gần nhất)
 */
export const getLatestResults = async (limit = 10) => {
  try {
    const { data, error } = await supabase
      .from('v_lottery_results')
      .select('*')
      .eq('status', 'completed')
      .order('draw_date', { ascending: false })
      .order('province_name')
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching latest results:', error);
    return [];
  }
};

/**
 * Kiểm tra vé trúng thưởng - FIXED VERSION
 */
export const checkTicketWinner = async (ticketNumber, provinceCode, drawDate) => {
  try {
    // Lấy kết quả xổ số
    const { data: result, error } = await supabase
      .from('v_lottery_results')
      .select('*')
      .eq('province_code', provinceCode)
      .eq('draw_date', drawDate)
      .single();

    if (error) throw error;
    if (!result) return { isWinner: false, message: 'Chưa có kết quả', result: null };

    // Helper function để chuẩn hóa số
    const normalize = (num, length) => String(num).padStart(length, '0');
    
    // Chuẩn hóa số vé
    const ticket = normalize(ticketNumber, 6);
    const last2 = ticket.slice(-2);
    const last3 = ticket.slice(-3);
    const last4 = ticket.slice(-4);
    const last5 = ticket.slice(-5);

    // Kiểm tra Giải Đặc Biệt (6 số)
    if (result.prize_special && normalize(result.prize_special, 6) === ticket) {
      return {
        isWinner: true,
        prizeName: 'Giải Đặc Biệt (ĐB)',
        prizeAmount: 2000000000,
        matchInfo: `Trúng 6 số: ${ticket}`,
        result
      };
    }

    // Kiểm tra Giải Nhất (5 số cuối hoặc 6 số)
    if (result.prize_first) {
      if (normalize(result.prize_first, 6) === ticket) {
        return {
          isWinner: true,
          prizeName: 'Giải Nhất (G1)',
          prizeAmount: 30000000,
          matchInfo: `Trúng 6 số: ${ticket}`,
          result
        };
      }
      if (normalize(result.prize_first, 5) === last5) {
        return {
          isWinner: true,
          prizeName: 'Giải Nhất (G1)',
          prizeAmount: 30000000,
          matchInfo: `Trúng 5 số cuối: ${last5}`,
          result
        };
      }
    }

    // Kiểm tra Giải Nhì (5 số cuối hoặc 6 số)
    if (result.prize_second && Array.isArray(result.prize_second)) {
      for (const prize of result.prize_second) {
        if (normalize(prize, 6) === ticket) {
          return {
            isWinner: true,
            prizeName: 'Giải Nhì (G2)',
            prizeAmount: 15000000,
            matchInfo: `Trúng 6 số: ${ticket}`,
            result
          };
        }
        if (normalize(prize, 5) === last5) {
          return {
            isWinner: true,
            prizeName: 'Giải Nhì (G2)',
            prizeAmount: 15000000,
            matchInfo: `Trúng 5 số cuối: ${last5}`,
            result
          };
        }
      }
    }

    // Kiểm tra Giải Ba (5 số cuối hoặc 6 số)
    if (result.prize_third && Array.isArray(result.prize_third)) {
      for (const prize of result.prize_third) {
        if (normalize(prize, 6) === ticket) {
          return {
            isWinner: true,
            prizeName: 'Giải Ba (G3)',
            prizeAmount: 10000000,
            matchInfo: `Trúng 6 số: ${ticket}`,
            result
          };
        }
        if (normalize(prize, 5) === last5) {
          return {
            isWinner: true,
            prizeName: 'Giải Ba (G3)',
            prizeAmount: 10000000,
            matchInfo: `Trúng 5 số cuối: ${last5}`,
            result
          };
        }
      }
    }

    // Kiểm tra Giải Tư (4 số cuối hoặc 6 số)
    if (result.prize_fourth && Array.isArray(result.prize_fourth)) {
      for (const prize of result.prize_fourth) {
        if (normalize(prize, 6) === ticket) {
          return {
            isWinner: true,
            prizeName: 'Giải Tư (G4)',
            prizeAmount: 3000000,
            matchInfo: `Trúng 6 số: ${ticket}`,
            result
          };
        }
        if (normalize(prize, 4) === last4) {
          return {
            isWinner: true,
            prizeName: 'Giải Tư (G4)',
            prizeAmount: 3000000,
            matchInfo: `Trúng 4 số cuối: ${last4}`,
            result
          };
        }
      }
    }

    // Kiểm tra Giải Năm (4 số cuối hoặc 6 số)
    if (result.prize_fifth && Array.isArray(result.prize_fifth)) {
      for (const prize of result.prize_fifth) {
        if (normalize(prize, 6) === ticket) {
          return {
            isWinner: true,
            prizeName: 'Giải Năm (G5)',
            prizeAmount: 1000000,
            matchInfo: `Trúng 6 số: ${ticket}`,
            result
          };
        }
        if (normalize(prize, 4) === last4) {
          return {
            isWinner: true,
            prizeName: 'Giải Năm (G5)',
            prizeAmount: 1000000,
            matchInfo: `Trúng 4 số cuối: ${last4}`,
            result
          };
        }
      }
    }

    // Kiểm tra Giải Sáu (3 số cuối hoặc 6 số)
    if (result.prize_sixth && Array.isArray(result.prize_sixth)) {
      for (const prize of result.prize_sixth) {
        if (normalize(prize, 6) === ticket) {
          return {
            isWinner: true,
            prizeName: 'Giải Sáu (G6)',
            prizeAmount: 400000,
            matchInfo: `Trúng 6 số: ${ticket}`,
            result
          };
        }
        if (normalize(prize, 3) === last3) {
          return {
            isWinner: true,
            prizeName: 'Giải Sáu (G6)',
            prizeAmount: 400000,
            matchInfo: `Trúng 3 số cuối: ${last3}`,
            result
          };
        }
      }
    }

    // Kiểm tra Giải Bảy (2 số cuối hoặc 6 số)
    if (result.prize_seventh && Array.isArray(result.prize_seventh)) {
      for (const prize of result.prize_seventh) {
        if (normalize(prize, 6) === ticket) {
          return {
            isWinner: true,
            prizeName: 'Giải Bảy (G7)',
            prizeAmount: 200000,
            matchInfo: `Trúng 6 số: ${ticket}`,
            result
          };
        }
        if (normalize(prize, 2) === last2) {
          return {
            isWinner: true,
            prizeName: 'Giải Bảy (G7)',
            prizeAmount: 200000,
            matchInfo: `Trúng 2 số cuối: ${last2}`,
            result
          };
        }
      }
    }

    // Kiểm tra Giải Tám (2 số cuối) - Chỉ có ở Miền Bắc
    if (result.prize_eighth) {
      if (normalize(result.prize_eighth, 2) === last2) {
        return {
          isWinner: true,
          prizeName: 'Giải Tám (G8)',
          prizeAmount: 100000,
          matchInfo: `Trúng 2 số cuối: ${last2}`,
          result
        };
      }
    }

    // Không trúng giải nào
    return {
      isWinner: false,
      message: 'Vé không trúng thưởng',
      result
    };
  } catch (error) {
    console.error('Error checking ticket:', error);
    return { isWinner: false, error: error.message, result: null };
  }
};

// ============================================
// API FUNCTIONS - TICKETS
// ============================================

/**
 * Lấy danh sách vé có thể mua
 */
export const getAvailableTickets = async (filters = {}) => {
  try {
    let query = supabase
      .from('v_tickets')
      .select('*')
      .eq('status', 'available')
      .gte('draw_date', new Date().toISOString().split('T')[0])
      .gt('quantity_available', 0);

    // Apply filters
    if (filters.region) {
      query = query.eq('region', filters.region);
    }
    if (filters.provinceCode) {
      query = query.eq('province_code', filters.provinceCode);
    }
    if (filters.drawDate) {
      query = query.eq('draw_date', filters.drawDate);
    }
    if (filters.ticketNumber) {
      query = query.ilike('ticket_number', `%${filters.ticketNumber}%`);
    }

    query = query.order('draw_date').order('created_at', { ascending: false });

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return [];
  }
};

/**
 * Kiểm tra số lượng vé còn lại
 */
export const checkTicketAvailability = async (ticketId) => {
  try {
    const { data, error } = await supabase
      .from('tickets')
      .select('quantity_available')
      .eq('id', ticketId)
      .single();

    if (error) throw error;
    return data?.quantity_available || 0;
  } catch (error) {
    console.error('Error checking ticket availability:', error);
    return 0;
  }
};

// ============================================
// API FUNCTIONS - ORDERS
// ============================================

/**
 * Tạo đơn hàng mới
 */
export const createOrder = async (orderData, cartItems) => {
  try {
    // Tạo mã đơn hàng
    const orderCode = `DH${Date.now()}`;

    // 1️⃣ KIỂM TRA SỐ LƯỢNG VÉ TRƯỚC KHI ĐẶT HÀNG
    for (const item of cartItems) {
      const { data: ticket, error } = await supabase
        .from('tickets')
        .select('quantity_available')
        .eq('id', item.ticketId)
        .single();

      if (error) throw new Error(`Lỗi kiểm tra vé ${item.ticketNumber}`);
      
      if (!ticket || ticket.quantity_available < item.quantity) {
        throw new Error(`Vé ${item.ticketNumber} không đủ số lượng (còn ${ticket?.quantity_available || 0})`);
      }
    }

    // 2️⃣ TẠO ĐƠN HÀNG
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          order_code: orderCode,
          user_id: orderData.userId,
          customer_name: orderData.customerName,
          customer_phone: orderData.customerPhone,
          customer_email: orderData.customerEmail,
          customer_address: orderData.customerAddress,
          subtotal: orderData.subtotal,
          discount: orderData.discount || 0,
          total: orderData.total,
          payment_method: orderData.paymentMethod,
          payment_status: 'paid',      // ✅ Set paid luôn
          status: 'completed'           // ✅ Set completed luôn
        }
      ])
      .select()
      .single();

    if (orderError) throw orderError;

    // 3️⃣ TẠO ORDER ITEMS
    const orderItems = cartItems.map(item => ({
      order_id: order.id,
      ticket_id: item.ticketId,
      ticket_number: item.ticketNumber,
      province_name: item.provinceName,
      draw_date: item.drawDate,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.price * item.quantity
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    // 4️⃣ ✅ GIẢM SỐ LƯỢNG VÉ TRONG KHO
    for (const item of cartItems) {
      const { error: updateError } = await supabase
        .from('tickets')
        .update({ 
          quantity_available: supabase.rpc('decrement_ticket_quantity', {
            ticket_id: item.ticketId,
            qty: item.quantity
          })
        })
        .eq('id', item.ticketId);

      // Nếu không có function RPC, dùng cách thủ công:
      if (updateError) {
        // Fallback: Lấy số lượng hiện tại và trừ đi
        const { data: currentTicket } = await supabase
          .from('tickets')
          .select('quantity_available')
          .eq('id', item.ticketId)
          .single();

        if (currentTicket) {
          await supabase
            .from('tickets')
            .update({ 
              quantity_available: Math.max(0, currentTicket.quantity_available - item.quantity)
            })
            .eq('id', item.ticketId);
        }
      }
    }

    return { success: true, order, orderCode };
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Lấy đơn hàng của user
 */
export const getUserOrders = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('v_orders')
      .select(`
        *,
        order_items (
          *,
          tickets (province_name, region)
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching user orders:', error);
    return [];
  }
};

/**
 * Cập nhật trạng thái thanh toán
 */
export const updatePaymentStatus = async (orderId, status) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update({
        payment_status: status,
        status: status === 'paid' ? 'completed' : 'pending'
      })
      .eq('id', orderId)
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error updating payment status:', error);
    return { success: false, error: error.message };
  }
};

// ============================================
// API FUNCTIONS - NEWS
// ============================================

/**
 * Lấy tin tức
 */
export const getNews = async (limit = 10, category = null) => {
  try {
    let query = supabase
      .from('news')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

/**
 * Lấy chi tiết tin tức
 */
export const getNewsById = async (newsId) => {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', newsId)
      .single();

    if (error) throw error;

    // Tăng lượt xem
    await supabase
      .from('news')
      .update({ views: (data.views || 0) + 1 })
      .eq('id', newsId);

    return data;
  } catch (error) {
    console.error('Error fetching news detail:', error);
    return null;
  }
};

// ============================================
// API FUNCTIONS - PROVINCES
// ============================================

/**
 * Lấy danh sách tỉnh theo miền
 */
export const getProvincesByRegion = async (region) => {
  try {
    const { data, error } = await supabase
      .from('provinces')
      .select('*')
      .eq('region', region)
      .eq('is_active', true)
      .order('name');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching provinces:', error);
    return [];
  }
};

/**
 * Lấy tất cả tỉnh
 */
export const getAllProvinces = async () => {
  try {
    const { data, error } = await supabase
      .from('provinces')
      .select('*')
      .eq('is_active', true)
      .order('region')
      .order('name');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching all provinces:', error);
    return [];
  }
};

/**
 * Lấy chi tiết kết quả xổ số theo mã tỉnh và ngày
 * Thêm function này vào file supabaseClient.js
 */
export const getLotteryResultDetail = async (provinceCode, drawDate) => {
  try {
    const { data, error } = await supabase
      .from('v_lottery_results')
      .select('*')
      .eq('province_code', provinceCode)
      .eq('draw_date', drawDate)
      .single();

    if (error) {
      console.error('Error fetching result detail:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getLotteryResultDetail:', error);
    return null;
  }
};

// ============================================
// EXPORT ALL
// ============================================

export default supabase;