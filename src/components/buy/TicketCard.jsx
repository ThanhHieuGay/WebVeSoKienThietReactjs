// src/components/buy/TicketCard.jsx - HÌNH CHỮ NHẬT GỌN GÀ
import React from 'react';

export const TicketCard = ({ ticket, onAddToCart }) => {
  const soldOut = ticket.soLuong === 0;

  return (
    <div
      onClick={() => !soldOut && onAddToCart(ticket.id)}
      className={`
        relative overflow-hidden rounded-xl shadow-md transition-all duration-300 cursor-pointer
        border-3
        ${soldOut 
          ? 'opacity-40 grayscale cursor-not-allowed border-gray-300' 
          : 'border-red-600 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-red-300 hover:border-red-700'
        }
      `}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-yellow-50" />

      {/* SỐ VÉ - HÌNH CHỮ NHẬT GỌN */}
      <div className="relative flex items-center justify-center px-4 py-6">
        <div className={`
          text-3xl md:text-4xl font-extrabold tracking-wide
          ${soldOut ? 'text-gray-400' : 'text-red-700'}
        `}>
          {ticket.so}
        </div>
      </div>

      {/* Badge hết vé */}
      {soldOut && (
        <div className="absolute top-1 right-1 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
          HẾT
        </div>
      )}
    </div>
  );
};