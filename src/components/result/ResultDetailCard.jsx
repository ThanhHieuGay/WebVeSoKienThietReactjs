// components/result/ResultDetailCard.jsx
import { ResultSummary } from './ResultSummary';

export const ResultDetailCard = ({ data }) => {
  const region = data.region.toLowerCase().includes('nam') ? 'nam' :
                 data.region.toLowerCase().includes('trung') ? 'trung' : 'bac';

  const prizes = [
    { label: 'Giải DB', key: 'special', highlight: true },
    { label: 'Giải Nhất', key: 'first' },
    { label: 'Giải Nhì', key: 'second' },
    { label: 'Giải Ba', key: 'third' },
    { label: 'Giải Tư', key: 'fourth' },
    { label: 'Giải Năm', key: 'fifth' },
    { label: 'Giải Sáu', key: 'sixth' },
    { label: 'Giải Bảy', key: 'seventh' },
    { label: 'Giải Tám', key: 'eighth', showIn: ['nam', 'trung'] },
  ];

  const formatNumbers = (numbers) => {
    if (!numbers) return '';
    if (typeof numbers === 'string') return numbers;
    return Array.isArray(numbers) ? numbers.join(' - ') : '';
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-red-200 mt-6">
      {/* Header đỏ - chỉ hiển thị tên tỉnh */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 text-white text-center py-5">
        <h3 className="text-2xl md:text-3xl font-black tracking-wider">
          {data.province.toUpperCase()}
        </h3>
      </div>

      {/* Bảng kết quả - có Giải DB */}
      <div className="p-4 md:p-6">
        <table className="w-full text-left">
          <tbody>
            {prizes.map((prize, index) => {
              if (prize.key === 'eighth' && region === 'bac') return null;
              if (prize.showIn && !prize.showIn.includes(region)) return null;

              const numbers = data.prizes[prize.key];
              const formatted = formatNumbers(numbers);
              if (!formatted) return null;

              const isSpecial = prize.key === 'special';

              return (
                <tr
                  key={prize.key}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200 last:border-b-0 hover:bg-red-50 transition-colors`}
                >
                  <td className="px-4 py-3 font-bold text-gray-800 text-sm md:text-base w-28 md:w-32">
                    {prize.label}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`font-mono font-bold tracking-wide ${
                        isSpecial
                          ? 'text-red-600 text-2xl md:text-3xl'
                          : 'text-red-700 text-lg md:text-xl'
                      }`}
                    >
                      {formatted}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ResultSummary data={data} />
    </div>
  );
};