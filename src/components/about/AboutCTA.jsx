// src/components/about/AboutCTA.jsx

const AboutCTA = () => {
  return (
    <div className="bg-red-600 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold mb-3">Sẵn Sàng Trải Nghiệm?</h3>
          <p className="text-lg mb-6 opacity-75">Tham gia cùng hàng triệu người chơi tin tưởng chúng tôi</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105">
            Bắt Đầu Ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;