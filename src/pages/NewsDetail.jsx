// src/pages/NewsDetail.jsx

import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { newsDetailData } from '../data/newsData';

export const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsDetail = newsDetailData[id];

  if (!newsDetail) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="text-8xl mb-6">😞</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Không tìm thấy bài viết</h2>
            <p className="text-gray-600 mb-8">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <button 
              onClick={() => navigate('/news')}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              ← Quay lại danh sách tin tức
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
        return { text: 'Nổi bật', bg: 'bg-red-100', text_color: 'text-red-700', border: 'border-red-200' };
      case 'new': 
        return { text: 'Mới nhất', bg: 'bg-green-100', text_color: 'text-green-700', border: 'border-green-200' };
      case 'popular': 
        return { text: 'Phổ biến', bg: 'bg-blue-100', text_color: 'text-blue-700', border: 'border-blue-200' };
      default: 
        return { text: '', bg: 'bg-gray-100', text_color: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  const badge = getBadgeInfo(newsDetail.type);

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(newsDetail.title);
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href);
        alert('✅ Đã copy link bài viết!');
        break;
    }
  };

  const relatedNews = Object.values(newsDetailData)
    .filter(news => news.type === newsDetail.type && news.id !== newsDetail.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-1">
              <span>🏠</span>
              <span>Trang chủ</span>
            </Link>
            <span className="text-gray-400">›</span>
            <Link to="/news" className="text-gray-600 hover:text-red-700 transition-colors">
              Tin tức
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-800 font-medium line-clamp-1">{newsDetail.category}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Header with Icon */}
              <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-12 border-b border-gray-200">
                <div className="absolute top-6 left-6">
                  <Link 
                    to="/news"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full font-semibold transition-all duration-300 shadow-sm border border-gray-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Quay lại</span>
                  </Link>
                </div>
                
                <div className="text-center pt-8">
                  <div className="inline-block text-8xl mb-4">
                    📰
                  </div>
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-xl text-xs font-bold ${badge.bg} ${badge.text_color} border-2 ${badge.border}`}>
                      {badge.text}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 leading-tight">
                  {newsDetail.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 py-4 mb-8 border-y border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">📅</span>
                    <span className="font-medium">{formatDate(newsDetail.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">✍️</span>
                    <span className="font-medium">{newsDetail.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">📂</span>
                    <span className="font-medium">{newsDetail.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">👁️</span>
                    <span className="font-medium">{newsDetail.views.toLocaleString('vi-VN')} lượt xem</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="relative p-6 mb-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                    💡
                  </div>
                  <p className="italic text-gray-700 leading-relaxed text-lg pl-8">
                    {newsDetail.summary}
                  </p>
                </div>

                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: newsDetail.content }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-600 mr-2">Tags:</span>
                  {newsDetail.tags.map(tag => (
                    <Link
                      key={tag}
                      to="/news"
                      className="px-4 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>

                {/* Share Buttons */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📤</span>
                    <span>Chia sẻ bài viết</span>
                  </h4>
                  <div className="flex justify-center gap-3 flex-wrap">
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <span className="text-xl">📘</span>
                      <span>Facebook</span>
                    </button>
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <span className="text-xl">🐦</span>
                      <span>Twitter</span>
                    </button>
                    <button 
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <span className="text-xl">🔗</span>
                      <span>Copy Link</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {relatedNews.length > 0 && (
              <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-32">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-2xl">📌</span>
                  <span>Tin Liên Quan</span>
                </h3>
                <div className="space-y-4">
                  {relatedNews.map(news => {
                    const relatedBadge = getBadgeInfo(news.type);
                    return (
                      <Link
                        key={news.id}
                        to={`/news-detail/${news.id}`}
                        className="group block p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-red-200 hover:shadow-md"
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                            📰
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`inline-block px-2 py-1 rounded-lg text-xs font-bold mb-2 ${relatedBadge.bg} ${relatedBadge.text_color}`}>
                              {relatedBadge.text}
                            </span>
                            <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-red-700 transition-colors mb-2 leading-snug">
                              {news.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span>📅 {formatDate(news.date)}</span>
                              <span>👁️ {news.views.toLocaleString('vi-VN')}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to="/news"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Xem tất cả tin tức →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetail;