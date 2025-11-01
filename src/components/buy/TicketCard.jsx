// src/components/buy/TicketCard.jsx

import React from 'react';
import { MapPin, Calendar, Award, TrendingUp, Sparkles, Clock, X } from 'lucide-react';
import { formatDate, isTicketUrgent } from './utils';

/**
 * Component hiển thị thẻ vé số
 * TO RÕ - ĐẸP - CÓ TRẠNG THÁI (HOT/NEW/LOW/SOLD)
 * 
 * Props:
 * - ticket: object { id, so, gia, ngay, dai, soLuong, status }
 * - onAddToCart: function(ticketId) - thêm vé vào giỏ
 */
export const TicketCard = ({ ticket, onAddToCart }) => {
  const isUrgent = isTicketUrgent(ticket.ngay);
  const soldOut = ticket.soLuong === 0;

  // Cấu hình status badge
  const statusConfig = {
    hot: { 
      bg: 'bg-gradient-to-r from-orange-500 to-red-500', 
      text: '🔥 HOT', 
      icon: TrendingUp 
    },
    new: { 
      bg: 'bg-gradient-to-r from-green-500 to-emerald-500', 
      text: '✨ MỚI', 
      icon: Sparkles 
    },
    low: { 
      bg: 'bg-gradient-to-r from-yellow-500 to-orange-500', 
      text: '⚡ SẮP HẾT', 
      icon: Clock 
    },
    sold: { 
      bg: 'bg-gray-500', 
      text: '❌ HẾT VÉ', 
      icon: X 
    }
  };

  const status = soldOut ? statusConfig.sold : statusConfig[ticket.status] || statusConfig.new;
  const StatusIcon = status.icon;

  return (
    <div className={`bg-white border-4 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
      soldOut 
        ? 'border-gray-300 opacity-75' 
        : 'border-red-200 hover:border-red-500 hover:shadow-2xl hover:-translate-y-3'
    }`}>
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-yellow-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
      
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 ${status.bg} text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2 ${ticket.status === 'hot' ? 'animate-pulse' : ''}`}>
        <StatusIcon size={16} />
        {status.text}
      </div>
      
      {/* Số vé - TO RÕ HƠN */}
      <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 text-center my-6 tracking-wider relative z-10">
        {ticket.so}
      </div>
      
      {/* Thông tin vé */}
      <div className="space-y-3 text-base text-gray-700 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-red-600" />
          <strong>Đài:</strong> 
          <span className="font-semibold text-red-700">{ticket.dai}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-red-600" />
          <strong>Quay:</strong> 
          <span className="font-semibold">{formatDate(ticket.ngay)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Award size={18} className="text-red-600" />
          <strong>Còn lại:</strong> 
          <span className={`font-bold ${ticket.soLuong < 20 ? 'text-orange-600' : 'text-green-600'}`}>
            {ticket.soLuong} vé
          </span>
        </div>
      </div>
      
      {/* Giá vé - TO RÕ */}
      <div className="text-3xl font-extrabold text-yellow-600 text-center my-5 relative z-10">
        {ticket.gia.toLocaleString()} ₫
      </div>
      
      {/* Nút mua - TO RÕ */}
      <button
        onClick={() => onAddToCart(ticket.id)}
        disabled={soldOut}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform ${
          soldOut
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105'
        }`}
      >
        {soldOut ? '❌ HẾT VÉ' : '🛒 THÊM VÀO GIỎ'}
      </button>
    </div>
  );
};