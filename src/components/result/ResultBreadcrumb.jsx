// components/result/ResultBreadcrumb.jsx
import { useNavigate } from 'react-router-dom';

export const ResultBreadcrumb = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 animate-fadeIn">
      <button
        onClick={() => navigate('/schedule')}
        className="flex items-center gap-2 text-red-700 hover:text-red-900 font-bold text-lg transition-all hover:scale-105"
      >
        ← Quay lại Lịch Mở Thưởng
      </button>
    </div>
  );
};