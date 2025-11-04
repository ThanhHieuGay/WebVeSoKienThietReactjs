// src/pages/NewsDetail.jsx

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { newsDetailData } from '../data/newsData';

export const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsDetail = newsDetailData[id];
  const [imageError, setImageError] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (newsId) => {
    setImageErrors(prev => ({ ...prev, [newsId]: true }));
  };

  if (!newsDetail) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="text-8xl mb-6">Face with spiral eyes</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Không tìm thấy bài viết</h2>
            <p className="text-gray-600 mb-8">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <button 
              onClick={() => navigate('/news')}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Quay lại danh sách tin tức
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
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
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href);
        alert('Đã copy link bài viết!');
        break;
    }
  };

  const relatedNews = Object.values(newsDetailData)
    .filter(news => news.type === newsDetail.type && news.id !== newsDetail.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-red-700 flex items-center gap-1">
              <span>Home</span>
              <span>Trang chủ</span>
            </Link>
            <span className="text-gray-400">›</span>
            <Link to="/news" className="text-gray-600 hover:text-red-700">
              Tin tức
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-800 font-medium line-clamp-1">{newsDetail.category}</span>
          </nav>
        </div>
      </div> */}

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-3xl shadow-lg overflow-hidden">
              
              {/* Header Image */}
              <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
                <div className="absolute top-6 left-6">
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full font-semibold transition-all duration-300 shadow-sm border border-gray-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="stroke-linejoin" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Quay lại</span>
                  </Link>
                </div>

                {newsDetail.imageUrl && !imageError ? (
                  <img
                    src={newsDetail.imageUrl}
                    alt={newsDetail.title}
                    className="w-full h-96 object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center bg-gray-100">
                    {/* Icon: Newspaper (fallback ảnh chính) */}
                    <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-3-8h-3V9h3v2zm0 4h-3v-2h3v2zm-5-4H8V9h3v2zm0 4H8v-2h3v2z"/>
                    </svg>
                  </div>
                )}

                <div className="absolute bottom-6 left-6">
                  <span className={`inline-block px-4 py-2 rounded-xl text-xs font-bold ${badge.bg} ${badge.text_color} border-2 ${badge.border}`}>
                    {badge.text}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 leading-tight">
                  {newsDetail.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 py-4 mb-8 border-y border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{formatDate(newsDetail.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">{newsDetail.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m-8 0h8" />
                    </svg>
                    <span className="font-medium">{newsDetail.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="font-medium">{newsDetail.views.toLocaleString('vi-VN')} lượt xem</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="relative p-6 mb-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                    {/* Icon: Lightbulb (Tóm tắt nổi bật) */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21h6v-2H9v2zM12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm3 12.5h-2v-1h-2v1H9v-1.26C7.75 12.64 7 11.35 7 10c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.35-.75 2.64-2 3.24V14.5z"/>
                    </svg>
                  </div>
                  <p className="italic text-gray-700 leading-relaxed text-lg pl-8">
                    {newsDetail.summary}
                  </p>
                </div>

                {/* Main Content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8"
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m.684 2.684c-.404.404-.86.684-1.342.886-.482.202-.938.316-1.342.316-.482 0-.938-.114-1.342-.316M12 21l-2.5-2.5" />
                    </svg>
                    <span>Chia sẻ bài viết</span>
                  </h4>
                  <div className="flex justify-center gap-3 flex-wrap">
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                    </button>

                    <button 
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <span>Twitter</span>
                    </button>

                    <button 
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span>Copy Link</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar - Tin liên quan */}
          <div className="lg:col-span-1">
            {relatedNews.length > 0 && (
              <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-32">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.27 4.73a2 2 0 0 0-2.83 0l-1.41 1.41 3.54 3.54 1.41-1.41a2 2 0 0 0 0-2.83l-1.41-1.41zM15.5 9.5l-9.04 9.04-3.54 1.41 1.41-3.54L13.38 7.38l2.12 2.12z"/>
                  </svg>
                  <span>Tin Liên Quan</span>
                </h3>

                <div className="space-y-4">
                  {relatedNews.map(news => {
                    const relatedBadge = getBadgeInfo(news.type);
                    const hasImage = news.imageUrl && !imageErrors[news.id];

                    return (
                      <Link
                        key={news.id}
                        to={`/news-detail/${news.id}`}
                        className="group block p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-red-200 hover:shadow-md"
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
                            {hasImage ? (
                              <img
                                src={news.imageUrl}
                                alt={news.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(news.id)}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                {/* Icon: Newspaper (tin liên quan nhỏ) */}
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-3-8h-3V9h3v2zm0 4h-3v-2h3v2zm-5-4H8V9h3v2zm0 4H8v-2h3v2z"/>
                                </svg>
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className={`inline-block px-2 py-1 rounded-lg text-xs font-bold mb-2 ${relatedBadge.bg} ${relatedBadge.text_color}`}>
                              {relatedBadge.text}
                            </span>
                            <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-red-700 transition-colors mb-1 leading-snug">
                              {news.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span>{formatDate(news.date)}</span>
                              <span>{news.views.toLocaleString('vi-VN')} views</span>
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
                    Xem tất cả tin tức
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