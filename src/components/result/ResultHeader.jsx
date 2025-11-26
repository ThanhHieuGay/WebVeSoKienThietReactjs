// components/result/ResultHeader.jsx
export const ResultHeader = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8 border-4 border-yellow-400">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tight">
          KẾT QUẢ XỔ SỐ
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 mb-4">
          {data.province.toUpperCase()}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-sm md:text-lg">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-300">
            {data.date}
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-300">
            {data.drawTime}
          </span>
          <span className="bg-yellow-400 text-red-800 font-bold px-5 py-2 rounded-full shadow-md">
            {data.region}
          </span>
        </div>
      </div>
    </div>
  );
};