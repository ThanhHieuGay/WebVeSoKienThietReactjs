export const DateSelector = ({ currentDate, onDateChange }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const today = new Date();
  const isToday = currentDate.toDateString() === today.toDateString();

  const handleNextDay = () => {
    if (isToday) {
      alert('🔄 Đang cập nhật kết quả ngày mai!');
      return;
    }
    onDateChange(1);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onDateChange(-1)}
            className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors text-gray-700"
          >
            ← Hôm qua
          </button>

          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 mb-2">
              {formatDate(currentDate)}
            </div>
            <div className="text-lg md:text-xl text-gray-600">
              {isToday ? '📍 Kết quả hôm nay' : '📅 Kết quả đã quay'}
            </div>
          </div>

          <button
            onClick={handleNextDay}
            disabled={isToday}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              isToday
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-red-700 text-white hover:bg-red-800 hover:shadow-lg'
            }`}
          >
            Ngày mai →
          </button>
        </div>
      </div>
    </div>
  );
};