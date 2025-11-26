// src/pages/Buy.jsx - ĐÃ SỬA HOÀN HẢO: ĐĂNG NHẬP XONG TỰ ĐỘNG MỞ GIỎ HÀNG
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import {
  BuyPageHeader,
  RegionTabs,
  FilterSection,
  TicketGrid,
  FloatingCart,
  CartModal,
  CheckoutModal,
} from '../components/buy';
import {
  getAvailableTickets,
  createOrder,
} from '../lib/supabaseClient';

const Buy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();

  const [selectedRegion, setSelectedRegion] = useState('nam');
  const [filters, setFilters] = useState({ date: '', province: '', number: '' });
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Giỏ hàng: lưu trong localStorage cho cả khách vãng lai
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('lottery_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Lưu giỏ hàng mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem('lottery_cart', JSON.stringify(cart));
  }, [cart]);

  // QUAN TRỌNG: TỰ ĐỘNG MỞ GIỎ HÀNG KHI ĐĂNG NHẬP THÀNH CÔNG TỪ THANH TOÁN
  useEffect(() => {
    if (currentUser && location.state?.fromCart && cart.length > 0) {
      setIsCartOpen(true);
      toast.success('Chào mừng quay lại! Giỏ hàng của bạn đây');
      
      // Xóa state để tránh mở lại lần sau
      window.history.replaceState({}, document.title);
    }
  }, [currentUser, location.state, cart.length]);

  // Tải vé (ai cũng xem được)
  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      try {
        const regionMap = { nam: 'south', trung: 'central', bac: 'north' };
        const data = await getAvailableTickets({
          region: regionMap[selectedRegion],
          provinceCode: filters.province || undefined,
          drawDate: filters.date || undefined,
          ticketNumber: filters.number || undefined,
        });

        const formatted = data.map(t => ({
          id: t.id,
          so: t.ticket_number,
          dai: t.province_name,
          ngay: t.draw_date,
          gia: Number(t.price),
          soLuong: t.quantity_available,
          status: t.badge || 'new',
        }));

        setTickets(formatted);
      } catch (err) {
        console.error('Error loading tickets:', err);
        toast.error('Không tải được danh sách vé');
        setTickets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [selectedRegion, filters]);

  // Thêm vào giỏ (ai cũng được thêm)
  const handleAddToCart = (ticketId) => {
    const ticket = tickets.find(t => t.id === ticketId);
    if (!ticket || ticket.soLuong <= 0) {
      toast.error('Vé đã hết hoặc không tồn tại!');
      return;
    }

    const existIndex = cart.findIndex(item => item.id === ticketId);
    if (existIndex >= 0) {
      const newQty = cart[existIndex].quantity + 1;
      if (newQty > ticket.soLuong) {
        toast.error(`Chỉ còn ${ticket.soLuong} vé cho số này!`);
        return;
      }
      const newCart = [...cart];
      newCart[existIndex].quantity = newQty;
      setCart(newCart);
      toast.success(`Đã thêm ${ticket.so} vào giỏ hàng!`);
    } else {
      setCart([...cart, {
        id: ticket.id,
        so: ticket.so,
        dai: ticket.dai,
        ngay: ticket.ngay,
        gia: ticket.gia,
        quantity: 1
      }]);
      toast.success(`Đã thêm ${ticket.so} vào giỏ hàng!`);
    }
  };

  // Cập nhật số lượng
  const updateQuantity = (index, change) => {
    const newCart = [...cart];
    const newQty = newCart[index].quantity + change;

    if (newQty <= 0) {
      newCart.splice(index, 1);
    } else {
      const ticket = tickets.find(t => t.id === newCart[index].id);
      if (ticket && newQty > ticket.soLuong) {
        toast.error(`Chỉ còn ${ticket.soLuong} vé!`);
        return;
      }
      newCart[index].quantity = newQty;
    }
    setCart(newCart);
  };

  // Xóa khỏi giỏ
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    toast.success('Đã xóa vé khỏi giỏ hàng');
  };

  // Bắt đầu thanh toán → kiểm tra đăng nhập
  const handleCheckout = () => {
    if (!currentUser) {
      // Lưu trạng thái để quay lại giỏ hàng sau khi login
      navigate('/login', { state: { fromCart: true } });
      toast.error('Vui lòng đăng nhập để thanh toán!');
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Xác nhận thanh toán
  const handleConfirmPayment = async ({ customerInfo, paymentMethod, total }) => {
    const orderData = {
      userId: currentUser.uid,
      totalAmount: total,
      paymentMethod,
      customerName: customerInfo.fullName,
      customerPhone: customerInfo.phone,
      customerEmail: customerInfo.email,
      customerAddress: customerInfo.address || null,
      status: 'pending'
    };

    const cartItems = cart.map(item => ({
      ticketId: item.id,
      ticketNumber: item.so,
      provinceName: item.dai,
      drawDate: item.ngay,
      quantity: item.quantity,
      price: item.gia,
    }));

    try {
      const result = await createOrder(orderData, cartItems);
      if (result.success) {
        toast.success('Đặt hàng thành công! Cảm ơn bạn đã mua vé');
        setCart([]);
        localStorage.removeItem('lottery_cart');
        setIsCheckoutOpen(false);

        // Reload vé
        const regionMap = { nam: 'south', trung: 'central', bac: 'north' };
        const data = await getAvailableTickets({ region: regionMap[selectedRegion] });
        const formatted = data.map(t => ({
          id: t.id,
          so: t.ticket_number,
          dai: t.province_name,
          ngay: t.draw_date,
          gia: Number(t.price),
          soLuong: t.quantity_available,
          status: t.badge || 'new',
        }));
        setTickets(formatted);
      } else {
        toast.error('Thanh toán thất bại: ' + result.error);
      }
    } catch (err) {
      console.error('Payment error:', err);
      toast.error('Lỗi kết nối, vui lòng thử lại');
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-yellow-50">
      <Header currentPage="Mua Số" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <BuyPageHeader />

        <RegionTabs
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
        />

        <FilterSection
          selectedRegion={selectedRegion}
          filters={filters}
          onFilterChange={(field, value) => setFilters(prev => ({ ...prev, [field]: value }))}
        />

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
            <p className="mt-4 text-lg">Đang tải vé mới nhất...</p>
          </div>
        ) : tickets.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-xl">
            Không tìm thấy vé nào phù hợp
          </div>
        ) : (
          <TicketGrid
            tickets={tickets}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* Floating Cart: luôn hiện nếu có vé */}
        {cartCount > 0 && (
          <FloatingCart
            itemCount={cartCount}
            onClick={() => setIsCartOpen(true)}
          />
        )}

        <CartModal
          isOpen={isCartOpen}
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          cart={cart}
          onClose={() => setIsCheckoutOpen(false)}
          onConfirmPayment={handleConfirmPayment}
          currentUser={currentUser}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Buy;