// ============ StatisticsSection.jsx ============
export const StatisticsSection = () => {
  const stats = [
    {
      icon: '📈',
      title: 'Tỷ Lệ Chính Xác',
      value: '67.8%',
      subtitle: 'Dựa trên 1000+ dự đoán'
    },
    {
      icon: '🎯',
      title: 'Số Hot Tuần Này',
      value: '18, 27, 45',
      subtitle: 'Xuất hiện nhiều nhất'
    },
    {
      icon: '🔥',
      title: 'Xu Hướng',
      value: 'Số Chẵn',
      subtitle: 'Chiếm 58% kỳ gần đây'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="text-6xl flex-shrink-0">
              {stat.icon}
            </div>
            <div>
              <h4 className="text-gray-700 font-semibold mb-2">
                {stat.title}
              </h4>
              <p className="text-3xl font-black text-red-700 mb-1">
                {stat.value}
              </p>
              <small className="text-gray-500">
                {stat.subtitle}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};