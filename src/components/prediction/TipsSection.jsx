export const TipsSection = () => {
  const tips = [
    {
      icon: '📊',
      title: 'Phân Tích Thống Kê',
      description: 'Xem xét tần suất xuất hiện của các con số trong 30 kỳ gần nhất'
    },
    {
      icon: '🎲',
      title: 'Kết Hợp Nhiều Phương Pháp',
      description: 'Sử dụng cả AI và thống kê để tăng độ chính xác'
    },
    {
      icon: '🍀',
      title: 'Tin Vào Trực Giác',
      description: 'Đôi khi cảm giác cá nhân cũng mang lại may mắn'
    },
    {
      icon: '💰',
      title: 'Chơi Có Trách Nhiệm',
      description: 'Đặt ngân sách hợp lý và không nên quá phụ thuộc vào dự đoán'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-3xl font-bold text-red-700 text-center mb-8">
        💡 Mẹo Dự Đoán Hiệu Quả
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl text-center border-t-4 border-yellow-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <span className="text-5xl block mb-4">
              {tip.icon}
            </span>
            <h4 className="text-lg font-bold text-red-700 mb-3">
              {tip.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};