// components/result/PrizeRow.jsx
export const PrizeRow = ({ prize, numbers, index }) => {
  const renderNumbers = () => {
    if (!Array.isArray(numbers)) {
      return (
        <div className="text-5xl md:text-6xl font-black text-red-700 tracking-widest">
          {numbers}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {numbers.map((num, i) => (
          <div
            key={i}
            className="bg-white border-4 border-red-600 rounded-xl p-3 text-center shadow-md hover:border-yellow-500 hover:shadow-lg transition-all duration-200 font-bold text-xl md:text-2xl text-red-700"
          >
            {num}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border-b-4 border-gray-200 last:border-b-0">
      <div className="p-5 md:p-7">
        <div className="grid md:grid-cols-5 gap-4 items-center">
          {/* Tên giải - MÀU VÀNG */}
          <div className="md:col-span-1">
            <div className="bg-yellow-500 text-white px-5 py-3 rounded-xl font-bold text-lg text-center shadow">
              {prize.name.replace('Giải ', '')}
            </div>
          </div>

          {/* Số trúng thưởng */}
          <div className="md:col-span-4">
            {renderNumbers()}
          </div>
        </div>
      </div>
    </div>
  );
};