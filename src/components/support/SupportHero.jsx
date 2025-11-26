// src/components/support/SupportHero.jsx

import { Search } from 'lucide-react';

const SupportHero = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="bg-gradient-to-br from-red-600 to-red-800 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-slide-up">
            Trung Tâm Hỗ Trợ
          </h1>
          <p className="text-xl mb-8 opacity-75 max-w-3xl mx-auto">
            Chúng tôi giúp bạn giải quyết mọi vấn đề nhanh chóng và hiệu quả
          </p>

          {/* Search Box - Consistent with Guide */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600"
                size={26}
              />
              <input
                type="text"
                placeholder="Tìm kiếm hỗ trợ..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg bg-white/95 border-2 border-yellow-400 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-all duration-200 placeholder-gray-500 hover:shadow-yellow-300/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHero;