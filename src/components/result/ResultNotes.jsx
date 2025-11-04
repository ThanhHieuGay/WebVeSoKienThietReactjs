// components/result/ResultNotes.jsx
export const ResultNotes = () => {
  const notes = [
    { icon: '📌', text: 'Kết quả chỉ mang tính chất tham khảo' },
    { icon: '✅', text: 'Vui lòng đối chiếu với kết quả chính thức từ Công ty Xổ số' },
    { icon: '⏰', text: 'Thời hạn nhận thưởng: 60 ngày kể từ ngày quay thưởng' },
    { icon: '🎊', text: 'Vé phải còn nguyên vẹn, không rách, không tẩy xóa' },
  ];

  return (
    <div className="mt-10 bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-400 rounded-3xl p-6 shadow-xl animate-fadeIn">
      <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-red-700">
        <span className="text-3xl">📢</span> Lưu ý quan trọng
      </h3>
      <ul className="space-y-4">
        {notes.map((note, i) => (
          <li key={i} className="flex items-start gap-4 text-gray-800 hover:bg-white p-3 rounded-xl transition-all duration-300">
            <span className="text-2xl flex-shrink-0">{note.icon}</span>
            <span className="text-base md:text-lg leading-relaxed font-medium">{note.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};