export const HotNews = () => {
  const news = [
    { 
      id: 1, 
      title: 'Giải Jackpot 50 tỷ đồng đã có chủ', 
      type: 'hot', 
      date: '23/10/2025', 
      excerpt: 'Người chơi may mắn tại TP.HCM đã trúng giải Jackpot kỷ lục...' 
    },
    { 
      id: 2, 
      title: 'Lịch nghỉ Tết Nguyên Đán 2026', 
      type: 'new', 
      date: '22/10/2025', 
      excerpt: 'Công bố lịch nghỉ Tết và thay đổi lịch quay thưởng...' 
    },
    { 
      id: 3, 
      title: 'Khuyến mãi mua vé tháng 11', 
      type: 'popular', 
      date: '21/10/2025', 
      excerpt: 'Ưu đãi đặc biệt cho khách hàng thân thiết...' 
    }
  ];

  const getBadgeClasses = (type) => {
    switch (type) {
      case 'hot': return 'bg-gradient-to-r from-red-500 to-orange-500 text-white';
      case 'new': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'popular': return 'bg-gradient-to-r from-yellow-500 to-amber-500 text-red-700';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 via-red-800 to-orange-600 bg-clip-text text-transparent">
          📰 Tin Tức Nổi Bật
        </h3>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] border border-gray-100"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10" />
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-2">📰</div>
                <span className="text-gray-500 text-sm">Hình ảnh tin tức</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Badge and Date */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeClasses(item.type)}`}>
                  {item.type.toUpperCase()}
                </span>
                <span className="text-gray-500 text-sm ml-auto">{item.date}</span>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-700 transition-colors duration-300">
                {item.title}
              </h4>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {item.excerpt}
              </p>

              {/* Read More Button */}
              <button className="group/readmore flex items-center gap-2 text-red-700 font-semibold text-sm transition-all duration-300 hover:text-red-800 hover:translate-x-1">
                <span>Xem thêm</span>
                <svg className="w-4 h-4 group-hover/readmore:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};