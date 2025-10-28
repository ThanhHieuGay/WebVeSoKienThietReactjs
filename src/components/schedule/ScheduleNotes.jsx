export const ScheduleNotes = () => {
  const notes = [
    { icon: '⏰', text: 'Giờ mở thưởng: Miền Nam và Miền Trung từ 16:00 - 16:30, Miền Bắc từ 18:15 - 18:30' },
    { icon: '🔄', text: 'Kết quả được cập nhật ngay sau khi có thông tin chính thức' },
    { icon: '🎊', text: 'Thời gian có thể thay đổi vào các ngày lễ, Tết' },
    { icon: '📅', text: 'Chỉ có thể xem lịch các ngày đã qua và hôm nay' }
  ];

  return (
    <div 
      className="rounded-2xl! p-8 fade-in border-2 border-yellow-400 shadow-xl bg-gradient-to-135 from-orange-50 to-white"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-700">
        📌 Lưu ý quan trọng:
      </h3>
      
      <ul className="space-y-4 list-none">
        {notes.map((note, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md"
          >
            <span className="text-2xl flex-shrink-0">{note.icon}</span>
            <p className="text-gray-700 leading-relaxed">{note.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};