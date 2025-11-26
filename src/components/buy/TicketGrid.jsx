// src/components/buy/TicketGrid.jsx

import React from 'react';
import { TicketCard } from './TicketCard';

export const TicketGrid = ({ tickets, onAddToCart }) => {
  if (tickets.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-3xl font-bold text-gray-400 mb-4">😢 Không tìm thấy vé nào</p>
        <p className="text-lg text-gray-500">Thử thay đổi bộ lọc nhé!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mb-20">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};