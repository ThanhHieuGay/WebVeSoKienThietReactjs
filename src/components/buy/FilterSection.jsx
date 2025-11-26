// src/components/buy/FilterSection.jsx

import React from 'react';
import { Filter, Calendar, MapPin, Hash } from 'lucide-react';
import { PROVINCES, getTodayDate, getDayAfterTomorrowDate } from './utils';

/**
 * Component bộ lọc tìm kiếm vé
 * GRADIENT ĐẸP - ICON MÀU - INPUT TO RÕ
 * 
 * Props:
 * - selectedRegion: miền đang chọn
 * - filters: object chứa giá trị filter { date, province, number }
 * - onFilterChange: function(field, value) - thay đổi giá trị filter
 * - onApplyFilter: function() - áp dụng bộ lọc
 */
export const FilterSection = ({ 
  selectedRegion, 
  filters, 
  onFilterChange, 
  onApplyFilter 
}) => {
  const today = getTodayDate();
  const maxDate = getDayAfterTomorrowDate();

  // Chỉ sửa phần return, phần còn lại giữ nguyên
return (
  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl mb-8 shadow-xl border-2 border-gray-200">
    <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
      <Filter size={28} />
      Tìm Vé May Mắn Của Bạn
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Ngày */}
      <input
        type="date"
        value={filters.date}
        onChange={(e) => onFilterChange('date', e.target.value)}
        min={today}
        max={maxDate}
        className="px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 outline-none text-lg"
        placeholder="Ngày quay"
      />

      {/* Đài */}
      <select
        value={filters.province}
        onChange={(e) => onFilterChange('province', e.target.value)}
        className="px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 outline-none text-lg"
      >
        <option value="">Tất cả đài</option>
        {PROVINCES[selectedRegion].map(p => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {/* Số yêu thích */}
      <input
        type="text"
        value={filters.number}
        onChange={(e) => {
          const val = e.target.value.replace(/[^0-9]/g, '').slice(0,6);
          onFilterChange('number', val);
        }}
        placeholder="Nhập số yêu thích (VD: 68)"
        className="px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 outline-none text-lg font-semibold text-center"
        maxLength={6}
      />
    </div>
  </div>
);
};