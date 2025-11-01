// src/components/buy/FloatingCart.jsx

import React from 'react';
import { ShoppingCart } from 'lucide-react';

/**
 * Component nút giỏ hàng floating (nổi góc phải dưới)
 * TO HƠN - RING EFFECT - BADGE PULSE
 * 
 * Props:
 * - itemCount: số lượng vé trong giỏ
 * - onClick: function() - xử lý khi click vào giỏ hàng
 */
export const FloatingCart = ({ itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 ring-4 ring-red-300 hover:ring-6"
      aria-label="Giỏ hàng"
    >
      <ShoppingCart size={32} />
      
      {/* Badge hiển thị số lượng - TO HƠN VÀ PULSE */}
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 w-9 h-9 bg-yellow-400 text-red-700 rounded-full flex items-center justify-center text-base font-black shadow-lg animate-pulse">
          {itemCount}
        </span>
      )}
    </button>
  );
};