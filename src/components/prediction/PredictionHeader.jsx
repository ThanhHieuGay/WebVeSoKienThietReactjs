export const PredictionHeader = () => (
  <div 
    className="mb-10 shadow-2xl overflow-hidden relative" 
    style={{ 
      height: '200px',
      borderRadius: '16px',
      backgroundColor: '#C8102E'
    }}
  >
    {/* Text căn giữa */}
    <div 
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="text-center">
        <h2 
          className="text-5xl font-bold mb-3"
          style={{ color: '#FFFFFF' }}
        >
          🔮 Dự đoán Số May Mắn
        </h2>
        <p 
          className="text-xl"
          style={{ 
            color: '#FFFFFF',
            opacity: 0.95
          }}
        >
          Sử dụng công nghệ AI và thuật toán phân tích để đưa ra dự đoán thông minh
        </p>
      </div>
    </div>
  </div>
);