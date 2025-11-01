// src/pages/Buy.jsx

import { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  BuyPageHeader,
  RegionTabs,
  FilterSection,
  TicketGrid,
  FloatingCart,
  CartModal,
  TICKET_DATA
} from '../components/buy';

/**
 * Trang Mua Vé Số
 * REDESIGNED - ĐẸP HƠN - NHIỀU SỐ HƠN - CÓ TRẠNG THÁI
 * 
 * Chức năng:
 * - Chọn miền (Nam/Trung/Bắc) với UI bo tròn đẹp
 * - Lọc vé theo ngày, đài, số
 * - Hiển thị trạng thái vé (HOT/NEW/LOW/SOLD)
 * - Thêm vé vào giỏ hàng
 * - Quản lý giỏ hàng (tăng/giảm/xóa)
 * - Thanh toán
 */
const Buy = () => {
  // ============ STATE MANAGEMENT ============
  
  // Miền đang được chọn
  const [selectedRegion, setSelectedRegion] = useState('nam');
  
  // Bộ lọc
  const [filters, setFilters] = useState({ 
    date: '', 
    province: '', 
    number: '' 
  });
  
  // Dữ liệu vé (có thể cập nhật khi mua)
  const [ticketData, setTicketData] = useState(TICKET_DATA);
  
  // Giỏ hàng
  const [cart, setCart] = useState([]);
  
  // Trạng thái mở/đóng modal giỏ hàng
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Danh sách vé sau khi lọc
  const [filteredTickets, setFilteredTickets] = useState(TICKET_DATA.nam);

  // ============ EFFECTS ============
  
  // Khi đổi miền -> reset bộ lọc và load vé mới
  useEffect(() => {
    applyFilter();
  }, [selectedRegion]);

  // ============ HANDLERS ============
  
  /**
   * Thay đổi giá trị bộ lọc
   */
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  /**
   * Áp dụng bộ lọc
   */
  const applyFilter = () => {
    let tickets = ticketData[selectedRegion];

    // Lọc theo ngày
    if (filters.date) {
      tickets = tickets.filter(t => t.ngay === filters.date);
    }
    
    // Lọc theo đài
    if (filters.province) {
      tickets = tickets.filter(t => t.dai === filters.province);
    }
    
    // Lọc theo số
    if (filters.number) {
      tickets = tickets.filter(t => t.so.includes(filters.number));
    }

    setFilteredTickets(tickets);
  };

  /**
   * Thêm vé vào giỏ hàng
   */
  const handleAddToCart = (ticketId) => {
    const allTickets = [...ticketData.nam, ...ticketData.trung, ...ticketData.bac];
    const ticket = allTickets.find(t => t.id === ticketId);
    
    // Kiểm tra vé có tồn tại và còn hàng không
    if (!ticket || ticket.soLuong === 0) {
      alert('❌ Vé đã hết!');
      return;
    }

    // Kiểm tra vé đã có trong giỏ chưa
    const existingItem = cart.find(item => item.id === ticketId);
    
    if (existingItem) {
      // Nếu đã có -> tăng số lượng
      if (ticket.soLuong > 0) {
        setCart(cart.map(item => 
          item.id === ticketId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ));
        updateTicketQuantity(ticketId, -1);
        alert(`✅ Đã thêm thêm 1 vé! Tổng: ${existingItem.quantity + 1} vé`);
      } else {
        alert('❌ Không còn đủ vé!');
      }
      return;
    }

    // Thêm vé mới vào giỏ
    setCart([...cart, { ...ticket, quantity: 1 }]);
    updateTicketQuantity(ticketId, -1);
    alert('✅ Đã thêm vé vào giỏ hàng!');
  };

  /**
   * Cập nhật số lượng vé còn lại trong kho
   */
  const updateTicketQuantity = (ticketId, change) => {
    setTicketData(prev => {
      const newData = { ...prev };
      Object.keys(newData).forEach(region => {
        newData[region] = newData[region].map(ticket =>
          ticket.id === ticketId
            ? { ...ticket, soLuong: ticket.soLuong + change }
            : ticket
        );
      });
      return newData;
    });
    applyFilter(); // Cập nhật lại danh sách vé hiển thị
  };

  /**
   * Tăng/giảm số lượng vé trong giỏ
   */
  const handleUpdateQuantity = (index, change) => {
    const item = cart[index];
    
    if (change > 0) {
      // Tăng số lượng
      const allTickets = [...ticketData.nam, ...ticketData.trung, ...ticketData.bac];
      const ticket = allTickets.find(t => t.id === item.id);
      
      if (ticket && ticket.soLuong > 0) {
        setCart(cart.map((cartItem, i) => 
          i === index 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        ));
        updateTicketQuantity(item.id, -1);
      } else {
        alert('❌ Không còn đủ vé!');
      }
    } else {
      // Giảm số lượng
      if (item.quantity > 1) {
        setCart(cart.map((cartItem, i) => 
          i === index 
            ? { ...cartItem, quantity: cartItem.quantity - 1 } 
            : cartItem
        ));
        updateTicketQuantity(item.id, 1);
      } else {
        // Nếu còn 1 vé -> xóa khỏi giỏ
        handleRemoveFromCart(index);
      }
    }
  };

  /**
   * Xóa vé khỏi giỏ hàng
   */
  const handleRemoveFromCart = (index) => {
    const item = cart[index];
    updateTicketQuantity(item.id, item.quantity); // Trả lại số lượng vào kho
    setCart(cart.filter((_, i) => i !== index));
  };

  /**
   * Thanh toán
   */
  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + (item.gia * item.quantity), 0);
    const ticketList = cart.map(item => `${item.so} (x${item.quantity})`).join(', ');
    
    alert(
      `🎉 THANH TOÁN THÀNH CÔNG!\n\n` +
      `💰 Tổng đơn hàng: ${total.toLocaleString()} VNĐ\n` +
      `🎫 Vé đã mua: ${ticketList}\n\n` +
      `✅ Chúc bạn may mắn!`
    );
    
    // Reset giỏ hàng
    setCart([]);
    setIsCartOpen(false);
  };

  // Tính tổng số vé trong giỏ
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // ============ RENDER ============
  
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
          onFilterChange={handleFilterChange}
          onApplyFilter={applyFilter}
        />
        
        <TicketGrid 
          tickets={filteredTickets}
          onAddToCart={handleAddToCart}
        />
        
        <FloatingCart 
          itemCount={cartItemCount}
          onClick={() => setIsCartOpen(true)}
        />
        
        <CartModal
          isOpen={isCartOpen}
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Buy;