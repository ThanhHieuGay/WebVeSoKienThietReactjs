import { useNavigate } from 'react-router-dom';
import { weeklySchedule } from './data';
const drawTimes = { nam: '16:15', trung: '17:15', bac: '18:15' };

export const ScheduleCards = ({ selectedDate, selectedRegion, today }) => {
  const navigate = useNavigate();
  const dayOfWeek = selectedDate.getDay();
  const schedule = weeklySchedule[dayOfWeek];
  
  const formatDateShort = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const formatDateForUrl = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const getRegionName = (region) => {
    const names = { nam: 'Miền Nam', trung: 'Miền Trung', bac: 'Miền Bắc' };
    return names[region] || region;
  };

  const isPastDrawTime = (timeStr) => {
    const now = new Date();
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(0, 0, 0, 0);
    const todayDate = new Date(today);
    todayDate.setHours(0, 0, 0, 0);
    
    if (selectedDateTime < todayDate) return true;
    
    if (selectedDateTime.getTime() === todayDate.getTime()) {
      const [hours, minutes] = timeStr.split(':').map(Number);
      const drawTime = new Date(now);
      drawTime.setHours(hours, minutes, 0, 0);
      return now > drawTime;
    }
    return false;
  };

  const handleViewResult = (province) => {
    const dateStr = formatDateForUrl(selectedDate);
    navigate(`/result/${encodeURIComponent(province)}/${dateStr}`);
  };

  if (!schedule || !schedule[selectedRegion] || schedule[selectedRegion].length === 0) {
    return (
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 flex flex-wrap items-center justify-center gap-3 text-gray-800">
          <span className="text-[1.3em]">🎯</span>
          <span>Lịch mở thưởng ngày:</span>
          <span className="text-red-700">{formatDateShort(selectedDate)}</span>
        </h2>
        
        <div className="text-center py-16 bg-white rounded-2xl! shadow-xl">
          <div className="text-7xl mb-4">📅</div>
          <p className="text-xl text-gray-500">
            Không có lịch mở thưởng cho {getRegionName(selectedRegion)} vào ngày này
          </p>
        </div>
      </div>
    );
  }

  const provinces = schedule[selectedRegion];
  const time = drawTimes[selectedRegion];

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 flex flex-wrap items-center justify-center gap-3 text-gray-800">
        <span className="text-[1.3em]">🎯</span>
        <span>Lịch mở thưởng ngày:</span>
        <span className="text-red-700">{formatDateShort(selectedDate)}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {provinces.map((province, index) => {
          const isPast = isPastDrawTime(time);
          
          return (
            <div
              key={index}
              className="bg-white rounded-2xl! p-6 transition-all duration-300 relative overflow-hidden shadow-xl hover:translate-y-[-5px] hover:shadow-2xl border-l-4 border-red-700 hover:border-l-yellow-400"
            >
              <div 
                className="absolute top-0 right-0 w-[100px] h-[100px] bg-yellow-400 opacity-10 rounded-bl-full"
              />
              
              <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h3 className="text-xl font-bold text-red-700">
                  {province}
                </h3>
                <span className="px-4 py-1 rounded-full text-sm font-semibold bg-yellow-300 text-red-700">
                  ⏰ {time}
                </span>
              </div>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">🗓️ Ngày:</span>
                  <span>{formatDateShort(selectedDate)}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📍 Miền:</span>
                  <span>{getRegionName(selectedRegion)}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">🎯 Trạng thái:</span>
                  <span className={`font-bold ${isPast ? 'text-green-500' : 'text-orange-500'}`}>
                    {isPast ? '✅ Đã quay' : '⏳ Chưa quay'}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => handleViewResult(province)}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-red-700 shadow-md hover:bg-red-800 hover:scale-105"
              >
                {isPast ? '👁️ Xem kết quả' : '📋 Xem chi tiết'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};