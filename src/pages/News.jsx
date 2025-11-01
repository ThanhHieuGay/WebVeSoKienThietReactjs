// src/pages/News.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { newsData } from '../data/newsData';

export const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState('all');
  const itemsPerPage = 6;

  const filteredNews = currentFilter === 'all' 
    ? newsData 
    : newsData.filter(news => news.type === currentFilter);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (typeof page === 'number') {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  const getBadgeInfo = (type) => {
    switch(type) {
      case 'hot': 
        return { 
          text: 'Nổi bật', 
          bg: 'bg-red-100', 
          text_color: 'text-red-700',
          border: 'border-red-200'
        };
      case 'new': 
        return { 
          text: 'Mới nhất', 
          bg: 'bg-green-100', 
          text_color: 'text-green-700',
          border: 'border-green-200'
        };
      case 'popular': 
        return { 
          text: 'Phổ biến', 
          bg: 'bg-blue-100', 
          text_color: 'text-blue-700',
          border: 'border-blue-200'
        };
      default: 
        return { 
          text: '', 
          bg: 'bg-gray-100', 
          text_color: 'text-gray-700',
          border: 'border-gray-200'
        };
    }
  };

  const getTabStyle = (filter) => {
    const isActive = currentFilter === filter;
    switch(filter) {
      case 'all':
        return isActive 
          ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg transform scale-105' 
          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400';
      case 'hot':
        return isActive 
          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg transform scale-105' 
          : 'bg-white text-red-600 border-2 border-red-200 hover:border-red-400';
      case 'new':
        return isActive 
          ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg transform scale-105' 
          : 'bg-white text-green-600 border-2 border-green-200 hover:border-green-400';
      case 'popular':
        return isActive 
          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transform scale-105' 
          : 'bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-400';
      default:
        return 'bg-white text-gray-700 border-2 border-gray-200';
    }
  };

  const featuredNews = newsData.find(n => n.type === 'hot');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-orange-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl">
              <span className="text-5xl">📰</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Tin Tức & Thông Báo
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Cập nhật tin tức mới nhất về xổ số, giải thưởng, và các chương trình khuyến mãi
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">{newsData.length}</div>
                <div className="text-sm text-white/80">Bài viết</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">{newsData.filter(n => n.type === 'hot').length}</div>
                <div className="text-sm text-white/80">Tin nổi bật</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">{newsData.filter(n => n.type === 'new').length}</div>
                <div className="text-sm text-white/80">Tin mới nhất</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-[120px] z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-semibold text-sm hidden md:block">Lọc theo:</span>
              <div className="flex gap-2 flex-wrap">
                {[
                  { key: 'all', label: 'Tất cả' },
                  { key: 'hot', label: 'Nổi bật' },
                  { key: 'new', label: 'Mới nhất' },
                  { key: 'popular', label: 'Phổ biến' }
                ].map(filter => (
                  <button
                    key={filter.key}
                    onClick={() => handleFilterChange(filter.key)}
                    className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${getTabStyle(filter.key)}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold">{filteredNews.length}</span>
              <span>bài viết</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {currentNews.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
              <div className="text-7xl mb-4">📭</div>
              <p className="text-gray-500 text-xl font-medium">Không tìm thấy tin tức nào</p>
            </div>
          ) : (
            <>
              {/* Featured News */}
              {currentPage === 1 && currentFilter === 'all' && featuredNews && (
                <Link 
                  to={`/news-detail/${featuredNews.id}`}
                  className="block mb-8 group"
                >
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative bg-gradient-to-br from-red-50 to-orange-50 p-12 flex items-center justify-center">
                        <div className="absolute top-6 left-6">
                          <span className={`px-4 py-2 rounded-xl text-xs font-bold ${getBadgeInfo(featuredNews.type).bg} ${getBadgeInfo(featuredNews.type).text_color} border ${getBadgeInfo(featuredNews.type).border}`}>
                            {getBadgeInfo(featuredNews.type).text}
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="text-9xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                            📰
                          </div>
                          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Tin nổi bật
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors line-clamp-2">
                          {featuredNews.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 line-clamp-3 leading-relaxed">
                          {featuredNews.content}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <span>📅 {formatDate(featuredNews.date)}</span>
                            <span>👁️ {featuredNews.views.toLocaleString('vi-VN')}</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-700 font-semibold">
                            <span>Đọc tiếp</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Regular News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentNews.map((news, index) => {
                  if (currentPage === 1 && currentFilter === 'all' && news.id === featuredNews?.id) {
                    return null;
                  }
                  
                  const badge = getBadgeInfo(news.type);
                  
                  return (
                    <Link
                      key={news.id}
                      to={`/news-detail/${news.id}`}
                      className="group"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center border-b border-gray-200">
                          <div className="absolute top-3 right-3">
                            <span className={`px-3 py-1 rounded-lg text-xs font-bold ${badge.bg} ${badge.text_color} border ${badge.border}`}>
                              {badge.text}
                            </span>
                          </div>
                          <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                            📰
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug">
                            {news.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                            {news.content}
                          </p>
                          
                          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-3">
                              <span>📅 {formatDate(news.date)}</span>
                              <span>👁️ {news.views.toLocaleString('vi-VN')}</span>
                            </div>
                            <div className="flex items-center gap-1 text-red-700 font-semibold">
                              <span>Xem</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            </>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-12">
              <div className="flex items-center justify-center gap-2">
                <button 
                  onClick={() => handlePageChange('prev')}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    currentPage === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-700 shadow-sm border border-gray-200'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline">Trước</span>
                </button>
                
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button 
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`w-10 h-10 rounded-xl font-bold text-sm transition-all duration-300 ${
                        currentPage === i + 1 
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg scale-110' 
                          : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-700 border border-gray-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => handlePageChange('next')}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    currentPage === totalPages 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-700 shadow-sm border border-gray-200'
                  }`}
                >
                  <span className="hidden sm:inline">Sau</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center mt-4 text-sm text-gray-500">
                Trang <span className="font-semibold text-gray-700">{currentPage}</span> / <span className="font-semibold text-gray-700">{totalPages}</span>
              </div>
            </nav>
          )}
        </div>
      </section>

      <Footer />

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

export default News;