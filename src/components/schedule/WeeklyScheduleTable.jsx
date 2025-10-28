import { weeklySchedule } from './data'; // Giả sử bạn có file data, nếu không thì copy từ gốc

export const WeeklyScheduleTable = () => {
  const daysOfWeek = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];

  return (
    <div className="mb-8 max-w-7xl mx-auto p-10 md:p-5">
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3 text-gray-800">
        <span className="text-[1.3em]">📋</span>
        Lịch Mở Thưởng Trong Tuần
      </h2>
      
      <div className="bg-white rounded-2xl! overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gradient-to-r from-red-700 to-red-800">
                <th className="py-5 px-4 text-white font-bold uppercase tracking-wider text-sm">Thứ</th>
                <th className="py-5 px-4 text-white font-bold uppercase tracking-wider text-sm">Miền Nam</th>
                <th className="py-5 px-4 text-white font-bold uppercase tracking-wider text-sm">Miền Trung</th>
                <th className="py-5 px-4 text-white font-bold uppercase tracking-wider text-sm">Miền Bắc</th>
              </tr>
            </thead>

            <tbody>
              {daysOfWeek.map((day, index) => {
                const dayIndex = index === 6 ? 0 : index + 1;
                const schedule = weeklySchedule[dayIndex];
                
                return (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 transition-all duration-300 hover:bg-orange-50 hover:scale-[1.01]"
                  >
                    <td className="py-5 px-4 font-bold text-center text-red-700 bg-orange-50">
                      {day}
                    </td>

                    {['nam', 'trung', 'bac'].map((region) => (
                      <td key={region} className="py-5 px-4 align-top">
                        <div className="space-y-2">
                          {schedule[region].map((province, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 bg-gray-50 border-l-4 border-red-700 hover:bg-yellow-100 hover:translate-x-1"
                            >
                              <span className="w-2 h-2 rounded-full bg-red-700 flex-shrink-0" />
                              <span className="text-sm">{province}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};