// src/components/about/AboutHero.jsx

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-slide-up">
            Giới Thiệu Về Chúng Tôi
          </h1>
          <p className="text-xl mb-0 opacity-75 animate-fade-in max-w-3xl mx-auto">
            Nền tảng xổ số trực tuyến uy tín hàng đầu Việt Nam với hơn 15 năm kinh nghiệm
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-5 right-12 opacity-10 text-9xl">🎰</div>
      <div className="absolute bottom-5 left-12 opacity-10 text-8xl">🎯</div>
    </div>
  );
};

export default AboutHero;