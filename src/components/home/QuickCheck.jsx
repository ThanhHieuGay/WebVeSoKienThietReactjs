import { useState } from 'react';
import { checkTicketWinner } from "../../lib/supabaseClient";

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

    if (formData.number.length !== 6) {
      alert('Số vé phải có đúng 6 chữ số!');
      return;
    }

    setIsLoading(true);

    try {
      const provinceName = allProvinces.find(p => p.value === formData.province)?.label || formData.province;
      const regionName = formData.region === 'nam' ? 'Miền Nam' : formData.region === 'trung' ? 'Miền Trung' : 'Miền Bắc';

      // Gọi API kiểm tra vé từ Supabase
      const result = await checkTicketWinner(formData.number, formData.province, formData.date);

      if (result.error) {
        setCheckResult({
          isWin: false,
          number: formData.number,
          province: provinceName,
          region: regionName,
          date: new Date(formData.date).toLocaleDateString('vi-VN'),
          message: result.error
        });
      } else if (!result.result) {
        setCheckResult({
          isWin: false,
          number: formData.number,
          province: provinceName,
          region: regionName,
          date: new Date(formData.date).toLocaleDateString('vi-VN'),
          message: 'Chưa có kết quả xổ số cho ngày này'
        });
      } else if (result.isWinner) {
        // ✅ Sử dụng kết quả trực tiếp từ API đã được fix
        setCheckResult({
          isWin: true,
          number: formData.number,
          province: provinceName,
          region: regionName,
          date: new Date(formData.date).toLocaleDateString('vi-VN'),
          prizeName: result.prizeName,
          prizeAmount: result.prizeAmount,
          matchInfo: result.matchInfo
        });
      } else {
        setCheckResult({
          isWin: false,
          number: formData.number,
          province: provinceName,
          region: regionName,
          date: new Date(formData.date).toLocaleDateString('vi-VN'),
          message: result.message || 'Vé không trúng thưởng'
        });
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra vé:', error);
      alert('Có lỗi xảy ra khi kiểm tra vé. Vui lòng thử lại!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setFormData({ ...formData, number: value });
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-100">
        <div className="bg-gradient-to-r from-red-700 via-red-800 to-orange-600 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10" />
          <div className="relative z-10">
            <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-2">
              🔍 Tra Cứu Vé Số Nhanh
            </h2>
            <p className="text-3xl md:text-4xl text-yellow-100 font-semibold">
              Kiểm tra trúng thưởng chỉ với 1 cú click!
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-4xl">🌍</span>
                  Chọn Miền
                </label>
                <select
                  value={formData.region}
                  onChange={handleRegionChange}
                  className="w-full p-4 border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-white text-2xl font-semibold"
                >
                  <option value="">Tất cả miền</option>
                  <option value="nam">Miền Nam</option>
                  <option value="trung">Miền Trung</option>
                  <option value="bac">Miền Bắc</option>
                </select>
              </div>

              <div>
                <label className="block text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-4xl">🎯</span>
                  Chọn Tỉnh/Thành
                </label>
                <select
                  value={formData.province}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  required
                  className="w-full p-4 border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-white text-2xl font-semibold"
                >
                  <option value="">Chọn tỉnh...</option>
                  {getProvincesByRegion().map((province) => (
                    <option key={province.value} value={province.value} className="text-2xl">
                      {province.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-4xl">📅</span>
                  Ngày Quay
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  max={today}
                  required
                  className="w-full p-4 border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-white text-2xl font-semibold"
                />
              </div>

              <div>
                <label className="block text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-4xl">🎫</span>
                  Số Vé (6 chữ số)
                </label>
                <input
                  type="text"
                  placeholder="VD: 123456"
                  maxLength="6"
                  pattern="[0-9]{6}"
                  value={formData.number}
                  onChange={handleNumberChange}
                  required
                  className="w-full p-4 border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-white text-center text-4xl font-black tracking-widest text-red-700"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-2xl font-black text-4xl transition-all duration-300 flex items-center justify-center gap-3 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-xl hover:scale-105 active:scale-95'
              } text-white`}
            >
              {isLoading ? (
                <>
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Đang kiểm tra...</span>
                </>
              ) : (
                <>
                  <span className="text-4xl">🔍</span>
                  <span>KIỂM TRA NGAY</span>
                </>
              )}
            </button>
          </form>

          {checkResult && (
            <div className={`mt-6 p-6 rounded-3xl border-4 transition-all duration-500 ${
              checkResult.isWin 
                ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl' 
                : 'border-red-500 bg-gradient-to-br from-red-50 to-orange-50 shadow-2xl'
            }`}>
              <div className="text-center mb-4">
                <div className={`text-9xl mb-3 ${checkResult.isWin ? 'animate-bounce' : ''}`}>
                  {checkResult.isWin ? '🎉' : '😢'}
                </div>
                <h3 className={`text-5xl md:text-6xl font-black mb-1 ${
                  checkResult.isWin ? 'text-green-700' : 'text-red-700'
                }`}>
                  {checkResult.isWin 
                    ? 'CHÚC MỪNG! BẠN ĐÃ TRÚNG THƯỞNG!' 
                    : 'RẤT TIẾC, VÉ KHÔNG TRÚNG'
                  }
                </h3>
                {checkResult.isWin && checkResult.prizeName && (
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    🏆 {checkResult.prizeName}
                  </p>
                )}
              </div>

              <div className="space-y-2 text-2xl md:text-3xl mb-4">
                <div className="flex justify-between p-3 bg-white/70 rounded-xl">
                  <span className="font-bold text-gray-800">Số vé:</span>
                  <span className={`font-black text-4xl tracking-wider ${
                    checkResult.isWin ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {checkResult.number}
                  </span>
                </div>
                <div className="flex justify-between p-3 bg-white/70 rounded-xl">
                  <span className="font-bold text-gray-800">Đài:</span>
                  <span className="font-semibold">{checkResult.province}</span>
                </div>
                <div className="flex justify-between p-3 bg-white/70 rounded-xl">
                  <span className="font-bold text-gray-800">Miền:</span>
                  <span className="font-semibold">{checkResult.region}</span>
                </div>
                <div className="flex justify-between p-3 bg-white/70 rounded-xl">
                  <span className="font-bold text-gray-800">Ngày quay:</span>
                  <span className="font-semibold">{checkResult.date}</span>
                </div>
                {checkResult.isWin && checkResult.matchInfo && (
                  <div className="flex justify-between p-3 bg-yellow-100 rounded-xl border-2 border-yellow-400">
                    <span className="font-bold text-gray-800">Số trúng:</span>
                    <span className="font-bold text-orange-700">
                      {checkResult.matchInfo}
                    </span>
                  </div>
                )}
                {checkResult.isWin && checkResult.prizeAmount && (
                  <div className="flex justify-between p-3 bg-white/70 rounded-xl">
                    <span className="font-bold text-gray-800">Giá trị giải:</span>
                    <span className="font-black text-green-600 text-3xl">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(checkResult.prizeAmount)}
                    </span>
                  </div>
                )}
              </div>

              <div className={`p-4 rounded-2xl text-center font-bold text-2xl ${
                checkResult.isWin 
                  ? 'bg-green-200 text-green-900 border-2 border-green-400' 
                  : 'bg-red-200 text-red-900 border-2 border-red-400'
              }`}>
                {checkResult.isWin 
                  ? '🏆 Bạn đã trúng giải! Vui lòng liên hệ đại lý để nhận thưởng.' 
                  : checkResult.message || '💡 Chúc bạn may mắn lần sau! Hãy thử lại với vé mới.'
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};