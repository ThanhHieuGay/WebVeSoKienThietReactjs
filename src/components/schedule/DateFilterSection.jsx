import { useState } from 'react';

export const DateFilterSection = ({ selectedDate, today, onNavigateDate, onSelectDate }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('vi-VN', options);
  };

  const formatInputDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleDateInputChange = (e) => {
    if (e.target.value) {
      onSelectDate(e.target.value);
      setShowDatePicker(false);
    }
  };

  const isNextDisabled = () => {
    const tomorrow = new Date(selectedDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow > today;
  };

  return (
    <div 
      className="rounded-3xl! p-6 md:p-8 mb-8 slide-up border-2 border-yellow-400 bg-gradient-to-135 from-white to-gray-50 shadow-xl overflow-hidden"
    >
      
      <div className="flex flex-wrap justify-center items-center gap-4 mb-5">
        <button
          onClick={() => onNavigateDate(-1)}
          className="px-6 py-3 bg-white rounded-full! font-semibold transition-all duration-300 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:translate-y-[-2px] hover:shadow-xl"
        >
          <span className="mr-2">◀</span> Hôm qua
        </button>
        
        <div 
          className="px-8 py-4 rounded-full! text-white font-bold text-lg text-center min-w-[300px] bg-red-700 shadow-md"
        >
          {formatDate(selectedDate)}
        </div>
        
        <button
          onClick={() => onNavigateDate(1)}
          disabled={isNextDisabled()}
          className="px-6 py-3 bg-white rounded-full! font-semibold transition-all duration-300 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:translate-y-[-2px] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Ngày mai <span className="ml-2">▶</span>
        </button>
      </div>
      
      <div className="text-center">
        {!showDatePicker ? (
          <button
            onClick={() => setShowDatePicker(true)}
            className="px-8 py-3 rounded-full! font-semibold transition-all duration-300 bg-yellow-400 border-2 border-red-700 text-red-700 hover:scale-105 hover:shadow-xl"
          >
            📆 Chọn ngày khác
          </button>
        ) : (
          <div className="inline-block">
            <input
              type="date"
              max={formatInputDate(today)}
              value={formatInputDate(selectedDate)}
              onChange={handleDateInputChange}
              className="px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border-red-700"
              autoFocus
              onBlur={() => setTimeout(() => setShowDatePicker(false), 200)}
            />
          </div>
        )}
      </div>
    </div>
  );
};