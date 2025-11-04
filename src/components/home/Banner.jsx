// src/components/home/Banner.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link từ react-router-dom

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Danh sách hình banner (bạn có thể thêm nhiều hình vào đây)
  const banners = [
    // '/images/banner1.jpg',
    '/images/banner2.jpg',
    //'/images/banner3.jpg',
    // Thêm các banner khác nếu có
  ];

  // Auto slide mỗi 5 giây
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <Link to="/prediction">  {/* Bọc toàn bộ banner bằng Link dẫn đến trang dự đoán */}
      <div className="relative w-full overflow-hidden bg-gray-900 cursor-pointer">  {/* Thêm cursor-pointer để cho biết có thể click */}
        {/* Banner Images Container */}
        <div className="relative w-full" style={{ paddingTop: '28%' }}>
          {/* Tỷ lệ 1536/428 ≈ 28% để giữ đúng tỷ lệ ảnh */}
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Nếu ảnh lỗi, hiển thị gradient thay thế
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 
                    'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)';
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Chỉ hiện khi có nhiều hơn 1 banner */}
        {banners.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.preventDefault();  // Ngăn Link trigger khi click arrow
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.preventDefault();  // Ngăn Link trigger khi click arrow
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();  // Ngăn Link trigger khi click dot
                    goToSlide(index);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'bg-white w-8 h-3'
                      : 'bg-white/50 hover:bg-white/75 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Fallback khi không có ảnh */}
        {banners.length === 0 && (
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-2">Xổ Số Kiến Thiết Phát Tài</h2>
              <p className="text-xl">Kết Quả Xổ Số 3 Miền</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};