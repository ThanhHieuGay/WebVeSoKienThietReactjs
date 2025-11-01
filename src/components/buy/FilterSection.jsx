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

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl mb-8 shadow-xl border-2 border-gray-200">
      <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
        <Filter size={28} />
        Bộ Lọc Tìm Kiếm
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-end">
        {/* Filter theo ngày */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <Calendar size={18} className="text-red-600" />
            Ngày quay số:
          </label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => onFilterChange('date', e.target.value)}
            min={today}
            max={maxDate}
            className="w-full px-4 py-3 border-3 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 focus:outline-none text-lg font-semibold transition-all"
          />
        </div>
        
        {/* Filter theo đài */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <MapPin size={18} className="text-red-600" />
            Đài quay số:
          </label>
          <select
            value={filters.province}
            onChange={(e) => onFilterChange('province', e.target.value)}
            className="w-full px-4 py-3 border-3 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 focus:outline-none text-lg font-semibold transition-all"
          >
            <option value="">Tất cả đài</option>
            {PROVINCES[selectedRegion].map(province => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        
        {/* Filter theo số yêu thích */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <Hash size={18} className="text-red-600" />
            Số yêu thích:
          </label>
          <input
            type="text"
            value={filters.number}
            onChange={(e) => onFilterChange('number', e.target.value)}
            placeholder="VD: 68, 888"
            maxLength={6}
            className="w-full px-4 py-3 border-3 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 focus:outline-none text-lg font-semibold transition-all"
          />
        </div>
        
        {/* Nút lọc */}
        <button
          onClick={onApplyFilter}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          🔍 Tìm Kiếm
        </button>
      </div>
    </div>
  );
};