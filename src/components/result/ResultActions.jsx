// components/result/ResultActions.jsx
import { useNavigate } from 'react-router-dom';

export const ResultActions = () => {
  const navigate = useNavigate();

  const handlePrint = () => window.print();
  const handleCheckTicket = () => alert('Tính năng dò vé số đang được phát triển!');

  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
      <button
        onClick={() => navigate('/schedule')}
        className="px-8 py-4 bg-white border-4 border-red-700 text-red-700 font-bold text-lg rounded-2xl hover:bg-red-700 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
      >
        Xem Lịch Khác
      </button>

      <button
        onClick={handlePrint}
        className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
      >
        In Kết Quả
      </button>

      <button
        onClick={handleCheckTicket}
        className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-red-700 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-4 border-red-700"
      >
        Dò Vé Số
      </button>
    </div>
  );
};