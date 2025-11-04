// src/components/home/HotNews.jsx

import { Link } from 'react-router-dom';
import { newsData } from '../../data/newsData';
import { useState } from 'react';

export const HotNews = () => {
  // Lấy 3 tin mới nhất
  const latestNews = newsData.slice(0, 3);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getBadgeClasses = (type) => {
    switch (type) {
      case 'hot': 
        return 'bg-red-100 text-red-700 border-red-200';
      case 'new': 
        return 'bg-green-100 text-green-700 border-green-200';
      case 'popular': 
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default: 
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getBadgeText = (type) => {
    switch (type) {
      case 'hot': return 'Nổi bật';
      case 'new': return 'Mới nhất';
      case 'popular': return 'Phổ biến';
      default: return '';
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg p-2">
            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-2h3v2zm0-4H7v-2h3v2zm0-4H7V7h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2z"/>
            </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-700 via-red-600 to-orange-600 bg-clip-text text-transparent">
              Tin Tức Nổi Bật
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Cập nhật tin tức mới nhất về xổ số và giải thưởng
          </p>
        </div>
        <Link 
          to="/news"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
        >
          <span>Xem tất cả</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestNews.map((item, index) => {
          const hasImage = item.imageUrl && !imageErrors[item.id];

          return (
            <Link
              key={item.id}
              to={`/news-detail/${item.id}`}
              className="group block"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                
                {/* ẢNH FULL Ô – Thay icon cũ */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200 overflow-hidden">
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getBadgeClasses(item.type)}`}>
                      {getBadgeText(item.type)}
                    </span>
                  </div>

                  {hasImage ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl text-gray-300">
                      Newspaper
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-700 transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                    {item.content}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span>Date {formatDate(item.date)}</span>
                      <span>Views {item.views.toLocaleString('vi-VN')}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-700 font-semibold">
                      <span>Xem</span>
                      <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HotNews;