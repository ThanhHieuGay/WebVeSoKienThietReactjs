// src/components/buy/RegionTabs.jsx

import React from 'react';

/**
 * Component tab chọn miền (Nam/Trung/Bắc)
 * BO TRÒN ĐẸP - TO RÕ - CÓ ICON
 * 
 * Props:
 * - selectedRegion: miền đang được chọn ('nam', 'trung', 'bac')
 * - onSelectRegion: function callback khi chọn miền
 */
export const RegionTabs = ({ selectedRegion, onSelectRegion }) => {
  const regions = [
    { id: 'nam', label: 'Miền Nam', icon: '🌴' },
    { id: 'trung', label: 'Miền Trung', icon: '⛰️' },
    { id: 'bac', label: 'Miền Bắc', icon: '🏛️' }
  ];

  return (
    <div className="flex gap-4 mb-8 justify-center flex-wrap">
      {regions.map(region => (
        <button
          key={region.id}
          onClick={() => onSelectRegion(region.id)}
          className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
            selectedRegion === region.id
              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl transform scale-110 ring-4 ring-red-300'
              : 'bg-white text-red-700 border-3 border-red-700 hover:bg-red-50 hover:scale-105'
          }`}
        >
          <span className="mr-2 text-2xl">{region.icon}</span>
          {region.label}
        </button>
      ))}
    </div>
  );
};