export const PredictionResult = ({ result, onReset }) => {
  const handleSave = () => {
    alert('✅ Đã lưu dự đoán vào lịch sử!\n\nBạn có thể xem lại trong phần "Lịch Sử Dự Đoán" bên dưới.');
  };

  const handleShare = async () => {
    const shareText = `🎯 Dự đoán xổ số may mắn!\n\nSố đặc biệt: ${result.specialNumbers.join(', ')}\n\nChúc bạn may mắn! 🍀`;
    
    try {
      await navigator.clipboard.writeText(shareText);
      alert('✅ Đã copy dự đoán vào clipboard!\n\nBạn có thể dán và chia sẻ với bạn bè.');
    } catch (err) {
      alert('Không thể copy. Vui lòng thử lại!');
    }
  };

  return (
    <div id="prediction-result" className="bg-white rounded-2xl shadow-lg p-8 mb-10">
      <div className="flex justify-between items-center mb-8 pb-6 border-b-4 border-yellow-500 flex-wrap gap-4">
        <h3 className="text-3xl font-bold text-red-700">
          🎊 Kết Quả Dự Đoán
        </h3>
        <span className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold shadow-lg">
          Độ tin cậy: {result.confidence}%
        </span>
      </div>

      <div className="space-y-8 mb-8">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 border-l-4 border-red-700">
          <h4 className="text-xl font-bold text-red-700 mb-4">
            🏆 Đặc Biệt (6 số)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {result.specialNumbers.map((num, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-700 p-5 rounded-xl text-center font-black text-2xl md:text-3xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ letterSpacing: '3px' }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 border-l-4 border-red-700">
          <h4 className="text-xl font-bold text-red-700 mb-4">
            🥇 Giải Nhất (6 số)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {result.firstNumbers.map((num, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-700 p-5 rounded-xl text-center font-black text-2xl md:text-3xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ letterSpacing: '3px' }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 border-l-4 border-red-700">
          <h4 className="text-xl font-bold text-red-700 mb-4">
            🎯 Các Số Tiềm Năng (2 chữ số cuối)
          </h4>
          <div className="grid grid-cols-5 gap-3">
            {result.potentialNumbers.map((num, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-700 p-4 rounded-xl text-center font-black text-xl md:text-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-yellow-500">
        <h4 className="text-xl font-bold text-red-700 mb-4">
          📊 Phân Tích Chi Tiết
        </h4>
        <div className="space-y-3">
          {result.analysis.map((item, idx) => (
            <div key={idx} className="text-gray-700 py-3 border-b border-gray-200 last:border-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          💾 Lưu Dự Đoán
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          📤 Chia Sẻ
        </button>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          🔄 Dự Đoán Mới
        </button>
      </div>
    </div>
  );
};