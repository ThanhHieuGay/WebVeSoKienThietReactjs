import { useState } from 'react';

export const PredictionForm = ({ selectedRegion, onSubmit }) => {
  const provinces = {
    nam: ['TP. Hồ Chí Minh', 'Đồng Nai', 'Cần Thơ', 'An Giang', 'Bình Dương', 'Vũng Tàu', 'Tiền Giang', 'Bến Tre'],
    trung: ['Đà Nẵng', 'Huế', 'Khánh Hòa', 'Phú Yên', 'Quảng Nam', 'Quảng Ngãi', 'Bình Định'],
    bac: ['Hà Nội', 'Hải Phòng', 'Quảng Ninh', 'Bắc Ninh', 'Thái Bình', 'Nam Định']
  };

  const [formData, setFormData] = useState({
    province: '',
    date: new Date().toISOString().split('T')[0],
    method: 'ai',
    birthDate: ''
  });

  const [showLoading, setShowLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.province || !formData.date) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setShowLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowLoading(false);
    onSubmit(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <>
      <div className="bg-white shadow-lg p-8 mb-10 border-t-4 border-yellow-500" style={{ borderRadius: '16px' }}>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                🎯 Chọn Tỉnh/Thành <span className="text-red-700">*</span>
              </label>
              <select
                value={formData.province}
                onChange={(e) => handleChange('province', e.target.value)}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:ring-4 focus:ring-red-100 transition-all"
                required
              >
                <option value="">-- Chọn tỉnh/thành --</option>
                {provinces[selectedRegion].map(prov => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                📅 Ngày Quay <span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                min={today}
                max={maxDateStr}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:ring-4 focus:ring-red-100 transition-all"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                🎲 Phương Pháp Dự Đoán
              </label>
              <select
                value={formData.method}
                onChange={(e) => handleChange('method', e.target.value)}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:ring-4 focus:ring-red-100 transition-all"
              >
                <option value="ai">AI Phân Tích</option>
                <option value="frequency">Thống Kê Tần Suất</option>
                <option value="pattern">Nhận Dạng Mẫu</option>
                <option value="lucky">Số May Mắn Cá Nhân</option>
              </select>
            </div>

            {formData.method === 'lucky' && (
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  🍀 Ngày Sinh (cho số may mắn)
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleChange('birthDate', e.target.value)}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-red-700 focus:ring-4 focus:ring-red-100 transition-all"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={showLoading}
            className="w-full py-5 bg-gradient-to-r from-yellow-300 to-yellow-500 text-red-700 font-bold text-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
            style={{ 
              letterSpacing: '1px',
              borderRadius: '16px'
            }}
          >
            {showLoading ? '⏳ Đang phân tích...' : '✨ DỰ ĐOÁN NGAY'}
          </button>
        </form>
      </div>

      {showLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin mb-5"></div>
          <div className="text-white text-xl font-semibold">
            🔮 Đang phân tích và dự đoán...
          </div>
        </div>
      )}
    </>
  );
};