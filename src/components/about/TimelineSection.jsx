// src/components/about/TimelineSection.jsx

const TimelineSection = () => {
  const timeline = [
    { year: '2010', title: 'Thành Lập', desc: 'Ra đời với sứ mệnh cung cấp thông tin xổ số chính xác' },
    { year: '2015', title: 'Mở Rộng', desc: 'Phủ sóng toàn quốc với 63 tỉnh thành' },
    { year: '2020', title: 'Số Hóa', desc: 'Chuyển đổi số toàn diện, ứng dụng AI dự đoán' },
    { year: '2025', title: 'Dẫn Đầu', desc: 'Trở thành nền tảng xổ số số 1 Việt Nam' }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-center text-3xl font-bold mb-12 text-red-600">Hành Trình Phát Triển</h2>
      <div className="relative max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-6 mb-12 relative">
            <div className="flex-shrink-0 text-center w-24">
              <div className="bg-red-600 text-white font-bold rounded-3xl p-4 shadow-soft">
                {item.year}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-soft flex-grow hover-lift">
              <h5 className="text-xl font-bold text-red-600 mb-2">{item.title}</h5>
              <p className="text-gray-600 mb-0">{item.desc}</p>
            </div>
            {index < timeline.length - 1 && (
              <div className="absolute bg-red-600 opacity-30" 
                   style={{ left: '47px', top: '80px', width: '2px', height: '80px' }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;