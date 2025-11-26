// src/pages/Home.jsx - PHIÊN BẢN CẢI TIẾN BẢNG HIỂN THỊ
import { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Banner } from '../components/home/Banner';
import { RegionTabs } from '../components/home/RegionTabs';
import { DateSelector } from '../components/home/DateSelector';
import { QuickCheck } from '../components/home/QuickCheck';
import { HotNews } from '../components/home/HotNews';
import { getLotteryResults } from '../lib/supabaseClient';

// Component Province Card - THIẾT KẾ GIỐNG LOTTERYRESULTS.JSX
const ProvinceCard = ({ provinceData, isLarge, onClick }) => {
  const textSizeSpecial = isLarge ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl';
  const textSizeFirst = isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl';
  const textSizeSecond = isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
  const textSizeNormal = isLarge ? 'text-lg md:text-xl' : 'text-base md:text-lg';

  const {
    province_name,
    draw_date,
    prize_special,
    prize_first,
    prize_second = [],
    prize_third = [],
    prize_fourth = [],
    prize_fifth = [],
    prize_sixth = [],
    prize_seventh = [],
    prize_eighth
  } = provinceData;

  return (
    <div 
      className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 p-5 text-center">
        <h3 className={`${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold text-white`}>
          {province_name}
        </h3>
        <p className="text-red-100 text-sm mt-1">
          {new Date(draw_date).toLocaleDateString('vi-VN', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
          })}
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
                {prize_special || '------'}
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
                {prize_first || '-----'}
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
                {Array.isArray(prize_second) 
                  ? prize_second.join(' - ') 
                  : '-----'}
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
                {Array.isArray(prize_third) 
                  ? prize_third.join(' - ') 
                  : '-----'}
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
                {Array.isArray(prize_fourth) 
                  ? prize_fourth.join(' - ') 
                  : '-----'}
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
                {Array.isArray(prize_fifth) 
                  ? prize_fifth.join(' - ') 
                  : '-----'}
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
                {Array.isArray(prize_sixth) 
                  ? prize_sixth.join(' - ') 
                  : '-----'}
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
                {Array.isArray(prize_seventh) 
                  ? prize_seventh.join(' - ') 
                  : '-----'}
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
                {prize_eighth || '--'}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Click hint for multiple provinces */}
      {!isLarge && (
        <div className="bg-red-50 border-t border-red-200 px-4 py-2 text-center">
          <span className="text-sm text-red-700 font-medium">👆 Click để xem phóng to</span>
        </div>
      )}
    </div>
  );
};

export const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState('nam');
  const [currentDate, setCurrentDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProvinceIndex, setSelectedProvinceIndex] = useState(null);

  // Fetch dữ liệu từ Supabase
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const regionMap = { 'nam': 'south', 'trung': 'central', 'bac': 'north' };
        const data = await getLotteryResults(regionMap[selectedRegion], currentDate);
        setResults(data || []);
      } catch (err) {
        console.error('Lỗi tải kết quả:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [selectedRegion, currentDate]);

  const handleDateChange = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate.toISOString().split('T')[0]);
  };

  const getRegionName = () => {
    return selectedRegion === 'nam' ? 'MIỀN NAM' :
           selectedRegion === 'trung' ? 'MIỀN TRUNG' : 'MIỀN BẮC';
  };

  const totalProvinces = results.length;

  // Determine grid layout based on number of provinces
  const getGridClass = () => {
    if (totalProvinces === 1) return 'grid-cols-1 max-w-4xl mx-auto';
    if (totalProvinces === 2) return 'grid-cols-1 lg:grid-cols-2 gap-6';
    return 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6';
  };

  // If a province is selected, show it in full view
  if (selectedProvinceIndex !== null) {
    const provinceData = results[selectedProvinceIndex];
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
        <Header currentPage="Kết Quả Chi Tiết" />
        <div className="container mx-auto px-4 py-6">
          {/* Back button */}
          <button
            onClick={() => setSelectedProvinceIndex(null)}
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
        <Footer />
      </div>
    );
  }

  // Default view - show all provinces
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <Header currentPage="Trang Chủ" />
      <Banner />
      <RegionTabs selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
      <DateSelector currentDate={new Date(currentDate)} onDateChange={handleDateChange} />

      {loading ? (
        <div className="text-center py-32">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-t-8 border-red-600"></div>
          <p className="mt-8 text-2xl text-gray-600">Đang tải kết quả {getRegionName()}...</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-32 text-3xl text-gray-500 font-bold">
          Không có kết quả {getRegionName()} ngày {new Date(currentDate).toLocaleDateString('vi-VN')}
        </div>
      ) : (
        <div className="container mx-auto px-4 py-6">
          {/* Title Section */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-2">
              KẾT QUẢ XỔ SỐ {getRegionName()}
            </h2>
            <p className="text-gray-600">
              Hiển thị {totalProvinces} đài • {new Date(currentDate).toLocaleDateString('vi-VN', { 
                weekday: 'long',
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric' 
              })}
            </p>
          </div>

          {/* Grid of Province Cards */}
          <div className={`grid ${getGridClass()}`}>
            {results.map((province, index) => (
              <ProvinceCard 
                key={province.id} 
                provinceData={province} 
                isLarge={totalProvinces <= 2}
                onClick={() => totalProvinces > 1 && setSelectedProvinceIndex(index)}
              />
            ))}
          </div>
        </div>
      )}

      <QuickCheck />
      <HotNews />
      <Footer />
    </div>
  );
};

export default Home;