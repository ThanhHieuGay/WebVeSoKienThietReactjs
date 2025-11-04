// components/result/ResultLoading.jsx
export const ResultLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center p-10 bg-white rounded-3xl shadow-2xl border border-gray-100">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-8 border-t-red-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-4 bg-red-600 rounded-full animate-ping"></div>
        </div>
        <p className="text-2xl font-bold text-gray-800 animate-pulse">Đang tải kết quả...</p>
        <p className="text-sm text-gray-500 mt-2">Vui lòng đợi trong giây lát</p>
      </div>
    </div>
  );
};