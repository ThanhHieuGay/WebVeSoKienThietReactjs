// src/components/buy/TicketGrid.jsx

import React from 'react';
import { TicketCard } from './TicketCard';

/**
 * Component hiển thị lưới vé số
 * RESPONSIVE TỐT - 4 CỘT TRÊN XL SCREEN
 * 
 * Props:
 * - tickets: mảng các vé số
 * - onAddToCart: function(ticketId) - thêm vé vào giỏ
 */
export const TicketGrid = ({ tickets, onAddToCart }) => {
  // Nếu không có vé nào
  if (tickets.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-2xl">
        <p className="text-2xl font-bold mb-2">😢 Không tìm thấy vé số phù hợp</p>
        <p className="text-lg">Vui lòng thử lại với bộ lọc khác</p>
      </div>
    );
  }

  // Hiển thị lưới vé - 4 cột trên màn hình XL
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
      {tickets.map(ticket => (
        <TicketCard 
          key={ticket.id} 
          ticket={ticket} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  );
};