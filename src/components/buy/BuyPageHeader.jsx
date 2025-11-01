// src/components/buy/BuyPageHeader.jsx

import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Component hiển thị tiêu đề trang Mua Vé
 * - Tiêu đề chính với icon
 * - Mô tả ngắn với emoji
 */
export const BuyPageHeader = () => {
  return (
    <div className="text-center mb-10 animate-fadeIn">
      <div className="inline-flex items-center gap-3 mb-4">
        <Sparkles className="text-yellow-500" size={36} />
        <h1 className="text-5xl font-extrabold text-red-700">
          Mua Vé Số Trực Tuyến
        </h1>
        <Sparkles className="text-yellow-500" size={36} />
      </div>
      <p className="text-gray-600 text-xl font-medium">
        🎯 Chọn vé may mắn • ⚡ Thanh toán nhanh • 🔒 An toàn 100%
      </p>
    </div>
  );
};