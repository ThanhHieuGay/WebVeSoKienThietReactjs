import { useState, useEffect } from 'react';

export const LotteryResults = ({ region, currentDate }) => {
  const [selectedProvince, setSelectedProvince] = useState(null);

  // Reset selected province when region changes
  useEffect(() => {
    setSelectedProvince(null);
  }, [region]);

  // Mock data cho nhiều ngày
  const mockDataByDate = {
    // Hôm nay
    '0': {
      nam: [
        {
          name: 'TP. HỒ CHÍ MINH',
          code: 'hcm',
          results: {
            special: '363636',
            first: '654321',
            second: ['112233', '445566'],
            third: ['778899', '990011'],
            fourth: ['12345', '67890', '11122', '33344'],
            fifth: ['22334', '55667', '88990'],
            sixth: ['1122', '3344', '5566'],
            seventh: ['778', '990', '223'],
            eighth: '45'
          }
        },
        {
          name: 'ĐỒNG NAI',
          code: 'dongnai',
          results: {
            special: '888888',
            first: '777777',
            second: ['556677', '889900'],
            third: ['334455', '667788'],
            fourth: ['54321', '09876', '22113', '44335'],
            fifth: ['33224', '66557', '99880'],
            sixth: ['2211', '4433', '6655'],
            seventh: ['887', '009', '332'],
            eighth: '09'
          }
        },
        {
          name: 'CẦN THƠ',
          code: 'cantho',
          results: {
            special: '686868',
            first: '686868',
            second: ['223344', '556677'],
            third: ['889900', '112233'],
            fourth: ['98765', '43210', '55667', '88990'],
            fifth: ['11223', '44556', '77889'],
            sixth: ['9988', '7766', '5544'],
            seventh: ['332', '110', '998'],
            eighth: '85'
          }
        }
      ],
      trung: [
        {
          name: 'ĐÀ NẴNG',
          code: 'danang',
          results: {
            special: '123456',
            first: '654321',
            second: ['112233', '445566'],
            third: ['778899', '990011'],
            fourth: ['12345', '67890', '11122', '33344'],
            fifth: ['22334', '55667', '88990'],
            sixth: ['1122', '3344', '5566'],
            seventh: ['778', '990', '223'],
            eighth: '45'
          }
        },
        {
          name: 'KHÁNH HÒA',
          code: 'khanhhoa',
          results: {
            special: '456789',
            first: '987654',
            second: ['334455', '667788'],
            third: ['112233', '556677'],
            fourth: ['23456', '78901', '33445', '66778'],
            fifth: ['44556', '77889', '00112'],
            sixth: ['3344', '6677', '9900'],
            seventh: ['112', '445', '778'],
            eighth: '56'
          }
        }
      ],
      bac: [
        {
          name: 'HÀ NỘI',
          code: 'hanoi',
          results: {
            special: '246810',
            first: '135791',
            second: ['223344', '556677'],
            third: ['889900', '112233'],
            fourth: ['98765', '43210', '55667', '88990'],
            fifth: ['11223', '44556', '77889'],
            sixth: ['9988', '7766', '5544'],
            seventh: ['332', '110', '998'],
            eighth: '86'
          }
        }
      ]
    },
    // Hôm qua (-1)
    '-1': {
      nam: [
        {
          name: 'VŨNG TÀU',
          code: 'vungtau',
          results: {
            special: '123789',
            first: '456123',
            second: ['789456', '321654'],
            third: ['147258', '369852'],
            fourth: ['11111', '22222', '33333', '44444'],
            fifth: ['55555', '66666', '77777'],
            sixth: ['8888', '9999', '1010'],
            seventh: ['111', '222', '333'],
            eighth: '99'
          }
        },
        {
          name: 'BẾN TRE',
          code: 'bentre',
          results: {
            special: '987654',
            first: '123987',
            second: ['456789', '654321'],
            third: ['111222', '333444'],
            fourth: ['55566', '77788', '99900', '11223'],
            fifth: ['44556', '66778', '88990'],
            sixth: ['1234', '5678', '9012'],
            seventh: ['345', '678', '901'],
            eighth: '12'
          }
        },
        {
          name: 'TIỀN GIANG',
          code: 'tiengiang',
          results: {
            special: '555555',
            first: '444444',
            second: ['333333', '222222'],
            third: ['111111', '999999'],
            fourth: ['12341', '23452', '34563', '45674'],
            fifth: ['56785', '67896', '78907'],
            sixth: ['8901', '9012', '0123'],
            seventh: ['234', '345', '456'],
            eighth: '78'
          }
        }
      ],
      trung: [
        {
          name: 'QUẢNG NAM',
          code: 'quangnam',
          results: {
            special: '741852',
            first: '963852',
            second: ['159753', '357951'],
            third: ['246810', '135790'],
            fourth: ['11223', '33445', '55667', '77889'],
            fifth: ['99001', '12334', '56778'],
            sixth: ['9012', '3456', '7890'],
            seventh: ['123', '456', '789'],
            eighth: '01'
          }
        },
        {
          name: 'THỪA THIÊN HUẾ',
          code: 'hue',
          results: {
            special: '852963',
            first: '741963',
            second: ['258369', '147258'],
            third: ['369741', '852147'],
            fourth: ['10203', '30405', '50607', '70809'],
            fifth: ['90102', '03040', '50607'],
            sixth: ['0809', '1011', '1213'],
            seventh: ['141', '516', '171'],
            eighth: '89'
          }
        }
      ],
      bac: [
        {
          name: 'BẮC NINH',
          code: 'bacninh',
          results: {
            special: '159357',
            first: '753159',
            second: ['951753', '357159'],
            third: ['159357', '753951'],
            fourth: ['12345', '23456', '34567', '45678'],
            fifth: ['56789', '67890', '78901'],
            sixth: ['8901', '9012', '0123'],
            seventh: ['123', '234', '345'],
            eighth: '67'
          }
        }
      ]
    }
  };

  // Calculate days difference
  const today = new Date();
  const diffTime = currentDate - today;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  const dayKey = diffDays.toString();

  // Get data for current date and region
  const dateData = mockDataByDate[dayKey] || mockDataByDate['0'];
  const provinces = dateData[region] || dateData.nam;
  const totalProvinces = provinces.length;

  // Determine grid layout based on number of provinces
  const getGridClass = () => {
    if (totalProvinces === 1) return 'grid-cols-1 max-w-4xl mx-auto';
    if (totalProvinces === 2) return 'grid-cols-1 lg:grid-cols-2 gap-6';
    return 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6';
  };

  // Component for single province card
  const ProvinceCard = ({ provinceData, isLarge, onClick }) => {
    const textSizeSpecial = isLarge ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl';
    const textSizeFirst = isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl';
    const textSizeSecond = isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
    const textSizeNormal = isLarge ? 'text-lg md:text-xl' : 'text-base md:text-lg';

    return (
      <div 
        className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        onClick={onClick}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 p-5 text-center">
          <h3 className={`${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold text-white`}>
            {provinceData.name}
          </h3>
          <p className="text-red-100 text-sm mt-1">
            {currentDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </p>
        </div>

        {/* Results Table */}
        <table className="w-full border-collapse">
          <tbody>
            {/* Giải Đặc Biệt */}
            <tr className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-b-2 border-yellow-300">
              <td className={`px-4 py-4 font-bold text-gray-900 w-2/5 border-r border-gray-300 ${textSizeNormal}`}>
                Giải ĐB
              </td>
              <td className="px-4 py-4 text-center">
                <span className={`${textSizeSpecial} font-black text-red-700 tracking-wider`}>
                  {provinceData.results.special}
                </span>
              </td>
            </tr>

            {/* Giải Nhất */}
            <tr className="bg-white border-b border-gray-300">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Nhất
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeFirst} font-bold text-gray-900 tracking-wide`}>
                  {provinceData.results.first}
                </span>
              </td>
            </tr>

            {/* Giải Nhì */}
            <tr className="bg-gray-50 border-b border-gray-300">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Nhì
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeSecond} font-semibold text-gray-900 tracking-wide`}>
                  {provinceData.results.second.join(' - ')}
                </span>
              </td>
            </tr>

            {/* Giải Ba */}
            <tr className="bg-white border-b border-gray-300">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Ba
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeSecond} font-semibold text-gray-900 tracking-wide`}>
                  {provinceData.results.third.join(' - ')}
                </span>
              </td>
            </tr>

            {/* Giải Tư */}
            <tr className="bg-gray-50 border-b border-gray-300">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Tư
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeNormal} font-semibold text-gray-900 tracking-wide leading-relaxed`}>
                  {provinceData.results.fourth.join(' - ')}
                </span>
              </td>
            </tr>

            {/* Giải Năm */}
            <tr className="bg-white border-b border-gray-300">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Năm
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeNormal} font-semibold text-gray-900 tracking-wide`}>
                  {provinceData.results.fifth.join(' - ')}
                </span>
              </td>
            </tr>

            {/* Giải Sáu */}
            <tr className="bg-gray-50 border-b border-gray-300">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Sáu
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeNormal} font-semibold text-gray-900 tracking-wide`}>
                  {provinceData.results.sixth.join(' - ')}
                </span>
              </td>
            </tr>

            {/* Giải Bảy */}
            <tr className="bg-white border-b border-gray-300">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Bảy
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeNormal} font-semibold text-gray-900 tracking-wide`}>
                  {provinceData.results.seventh.join(' - ')}
                </span>
              </td>
            </tr>

            {/* Giải Tám */}
            <tr className="bg-gray-50">
              <td className={`px-4 py-3 font-bold text-gray-900 border-r border-gray-300 ${textSizeNormal}`}>
                Giải Tám
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`${textSizeNormal} font-semibold text-gray-900 tracking-wide`}>
                  {provinceData.results.eighth}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Click hint for multiple provinces */}
        {totalProvinces > 1 && (
          <div className="bg-red-50 border-t border-red-200 px-4 py-2 text-center">
            <span className="text-sm text-red-700 font-medium">👆 Click để xem phóng to</span>
          </div>
        )}
      </div>
    );
  };

  // If a province is selected, show it in full view
  if (selectedProvince !== null) {
    const provinceData = provinces[selectedProvince];
    return (
      <div className="container mx-auto px-4 py-6">
        {/* Back button */}
        <button
          onClick={() => setSelectedProvince(null)}
          className="mb-6 flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition-all shadow-lg hover:shadow-xl"
        >
          <span className="text-xl">←</span>
          Quay lại tất cả các đài
        </button>

        {/* Full size province card */}
        <div className="max-w-4xl mx-auto">
          <ProvinceCard 
            provinceData={provinceData} 
            isLarge={true}
            onClick={() => {}}
          />
        </div>
      </div>
    );
  }

  // Default view - show all provinces
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-2">
          KẾT QUẢ XỔ SỐ {region === 'nam' ? 'MIỀN NAM' : region === 'trung' ? 'MIỀN TRUNG' : 'MIỀN BẮC'}
        </h2>
        <p className="text-gray-600">
          Hiển thị {totalProvinces} đài • {currentDate.toLocaleDateString('vi-VN', { 
            weekday: 'long',
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
          })}
        </p>
      </div>

      {/* Grid of Province Cards */}
      <div className={`grid ${getGridClass()}`}>
        {provinces.map((province, index) => (
          <ProvinceCard 
            key={province.code} 
            provinceData={province} 
            isLarge={totalProvinces <= 2}
            onClick={() => totalProvinces > 1 && setSelectedProvince(index)}
          />
        ))}
      </div>
    </div>
  );
};