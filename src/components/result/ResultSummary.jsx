// components/result/ResultSummary.jsx
export const ResultSummary = ({ data }) => {
  const hasEighth = data.prizes.eighth !== undefined;
  return (
    <div className="bg-red-700 text-white p-4 text-center">
      <p className="text-sm font-medium">
        Cập nhật: <strong>{data.drawTime}</strong> - {data.date}
        {hasEighth && ' • Có Giải Tám'}
      </p>
      <p className="text-xs mt-1 opacity-90">
        Nguồn: Xổ số <strong className="text-yellow-300">{data.province}</strong>
      </p>
    </div>
  );
};