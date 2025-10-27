export const PredictionHistory = ({ history }) => {
  const getMethodName = (method) => {
    const names = {
      ai: 'AI Phân Tích',
      frequency: 'Thống Kê Tần Suất',
      pattern: 'Nhận Dạng Mẫu',
      lucky: 'Số May Mắn'
    };
    return names[method] || method;
  };

  const handleViewDetail = (item) => {
    alert(`
Chi tiết dự đoán:
━━━━━━━━━━━━━━━━━━
📍 Tỉnh/Thành: ${item.province}
📅 Ngày quay: ${new Date(item.date).toLocaleDateString('vi-VN')}
🎲 Phương pháp: ${getMethodName(item.method)}
🎯 Số đặc biệt: ${item.specialNumbers.join(', ')}
✨ Độ tin cậy: ${item.confidence}%
⏰ Tạo lúc: ${new Date(item.timestamp).toLocaleString('vi-VN')}
    `);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
      <h3 className="text-3xl font-bold text-red-700 mb-6 pb-4 border-b-4 border-yellow-500">
        📚 Lịch Sử Dự Đoán
      </h3>
      
      {history.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Chưa có lịch sử dự đoán nào
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              onClick={() => handleViewDetail(item)}
              className="bg-gradient-to-r from-gray-100 to-gray-200 p-5 rounded-xl border-l-4 border-red-700 hover:shadow-lg hover:translate-x-2 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                <span className="font-bold text-red-700">
                  📅 {new Date(item.date).toLocaleDateString('vi-VN')} - {item.province}
                </span>
                <span className="px-3 py-1 bg-yellow-500 text-red-700 rounded-full text-sm font-semibold">
                  {getMethodName(item.method)}
                </span>
              </div>
              <div className="text-gray-700 mb-2">
                🎯 Số dự đoán: {item.specialNumbers.join(', ')}
              </div>
              <small className="text-gray-500 block">
                ⏰ Tạo lúc: {new Date(item.timestamp).toLocaleString('vi-VN')} | Độ tin cậy: {item.confidence}%
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};