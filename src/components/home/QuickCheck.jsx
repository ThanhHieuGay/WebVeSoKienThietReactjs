import { useState } from 'react';

const provincesData = {
  nam: [
    { value: 'hcm', label: 'TP. Hồ Chí Minh' },
    { value: 'dthap', label: 'Đồng Tháp' },
    { value: 'camau', label: 'Cà Mau' },
    { value: 'benttre', label: 'Bến Tre' },
    { value: 'vt', label: 'Vũng Tàu' },
    { value: 'baclieu', label: 'Bạc Liêu' },
    { value: 'dnai', label: 'Đồng Nai' },
    { value: 'ctho', label: 'Cần Thơ' },
    { value: 'socs', label: 'Sóc Trăng' },
    { value: 'tayngoc', label: 'Tây Ninh' },
    { value: 'agiang', label: 'An Giang' },
    { value: 'binhthuan', label: 'Bình Thuận' },
    { value: 'vlong', label: 'Vĩnh Long' },
    { value: 'bdong', label: 'Bình Dương' },
    { value: 'travinh', label: 'Trà Vinh' },
    { value: 'longan', label: 'Long An' },
    { value: 'binhphuoc', label: 'Bình Phước' },
    { value: 'haugiang', label: 'Hậu Giang' },
    { value: 'tiengiang', label: 'Tiền Giang' },
    { value: 'kiengiang', label: 'Kiên Giang' },
    { value: 'dlat', label: 'Đà Lạt (Lâm Đồng)' }
  ],
  trung: [
    { value: 'danang', label: 'Đà Nẵng' },
    { value: 'hue', label: 'Thừa Thiên Huế' },
    { value: 'khanhhoa', label: 'Khánh Hòa' },
    { value: 'phuyen', label: 'Phú Yên' },
    { value: 'quangnam', label: 'Quảng Nam' },
    { value: 'quangngai', label: 'Quảng Ngãi' },
    { value: 'binhdinh', label: 'Bình Định' },
    { value: 'daklak', label: 'Đắk Lắk' },
    { value: 'gialai', label: 'Gia Lai' },
    { value: 'quangtri', label: 'Quảng Trị' },
    { value: 'quangbinh', label: 'Quảng Bình' },
    { value: 'daknong', label: 'Đắk Nông' }
  ],
  bac: [
    { value: 'hanoi', label: 'Hà Nội' },
    { value: 'quangninh', label: 'Quảng Ninh' },
    { value: 'bacninh', label: 'Bắc Ninh' },
    { value: 'haiphong', label: 'Hải Phòng' },
    { value: 'thaibinh', label: 'Thái Bình' },
    { value: 'namdinh', label: 'Nam Định' }
  ]
};

const allProvinces = [];
Object.keys(provincesData).forEach(region => {
  provincesData[region].forEach(province => {
    allProvinces.push({ ...province, region });
  });
});

export const QuickCheck = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    region: '',
    province: '',
    date: today,
    number: ''
  });

  const [checkResult, setCheckResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProvincesByRegion = () => {
    if (formData.region) return provincesData[formData.region] || [];
    return allProvinces;
  };

  const handleRegionChange = (e) => {
    const newRegion = e.target.value;
    setFormData({ 
      ...formData, 
      region: newRegion,
      province: ''
    });
  };

  const handleProvinceChange = (provinceValue) => {
    const selectedProvince = allProvinces.find(p => p.value === provinceValue);
    if (selectedProvince && !formData.region) {
      setFormData({ 
        ...formData, 
        province: provinceValue, 
        region: selectedProvince.region 
      });
    } else {
      setFormData({ ...formData, province: provinceValue });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.province || !formData.number) {
      alert('Vui lòng chọn đầy đủ thông tin!');
      return;
    }

    setIsLoading(true);
    // Mock loading
    await new Promise(resolve => setTimeout(resolve, 1500));

    const provinceName = allProvinces.find(p => p.value === formData.province)?.label || formData.province;
    const regionName = formData.region === 'nam' ? 'Miền Nam' : formData.region === 'trung' ? 'Miền Trung' : 'Miền Bắc';
    const isWin = formData.number === '123456';

    setCheckResult({
      isWin,
      number: formData.number,
      province: provinceName,
      region: regionName,
      date: new Date(formData.date).toLocaleDateString('vi-VN'),
    });

    setIsLoading(false);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setFormData({ ...formData, number: value });
  };

  return (
    <div className="max-w-4xl mx-auto my-16 px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-800 to-orange-600 p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">🔍 Tra Cứu Vé Số Nhanh</h2>
            <p className="text-yellow-100 text-lg">Kiểm tra trúng thưởng chỉ với 1 cú click!</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Region */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">🌍 Chọn Miền</label>
                <select
                  value={formData.region}
                  onChange={handleRegionChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Tất cả miền</option>
                  <option value="nam">Miền Nam</option>
                  <option value="trung">Miền Trung</option>
                  <option value="bac">Miền Bắc</option>
                </select>
              </div>

              {/* Province */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">🎯 Chọn Tỉnh/Thành</label>
                <select
                  value={formData.province}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Chọn tỉnh...</option>
                  {getProvincesByRegion().map((province) => (
                    <option key={province.value} value={province.value}>
                      {province.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">📅 Ngày Quay</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  max={today}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">🎫 Số Vé (6 chữ số)</label>
                <input
                  type="text"
                  placeholder="VD: 123456"
                  maxLength="6"
                  pattern="[0-9]{6}"
                  value={formData.number}
                  onChange={handleNumberChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-center text-2xl font-bold tracking-wider"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95'
              } text-white border-0`}
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Đang kiểm tra...
                </>
              ) : (
                <>
                  <span>🔍</span>
                  KIỂM TRA NGAY
                </>
              )}
            </button>
          </form>

          {/* Result */}
          {checkResult && (
            <div className={`mt-8 p-6 rounded-3xl border-4 transition-all duration-500 ${
              checkResult.isWin 
                ? 'border-green-400 bg-gradient-to-r from-green-50 to-emerald-50' 
                : 'border-red-400 bg-gradient-to-r from-red-50 to-orange-50'
            }`}>
              <div className="text-center mb-4">
                <div className={`text-6xl mb-2 ${
                  checkResult.isWin ? 'text-green-500 animate-bounce' : 'text-red-500'
                }`}>
                  {checkResult.isWin ? '🎉' : '😔'}
                </div>
                <h3 className={`text-2xl font-bold ${
                  checkResult.isWin ? 'text-green-700' : 'text-red-700'
                }`}>
                  {checkResult.isWin 
                    ? 'Chúc mừng! Vé của bạn đã trúng thưởng!' 
                    : 'Rất tiếc, vé không trúng thưởng'
                  }
                </h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Số vé:</span>
                  <span className={`font-bold ${
                    checkResult.isWin ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {checkResult.number}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Đài:</span>
                  <span>{checkResult.province}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Miền:</span>
                  <span className="font-semibold">{checkResult.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Ngày quay:</span>
                  <span>{checkResult.date}</span>
                </div>
              </div>

              <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                checkResult.isWin 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {checkResult.isWin 
                  ? '🏆 Bạn đã trúng giải đặc biệt! Vui lòng liên hệ đại lý để nhận thưởng.' 
                  : '💡 Chúc bạn may mắn lần sau! Hãy thử lại với vé mới.'
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};