// src/components/about/MissionSection.jsx

import { CheckCircle } from 'lucide-react';

const MissionSection = () => {
  const features = [
    { title: 'Minh Bạch 100%', desc: 'Kết quả chính xác từ đài chính thức' },
    { title: 'Bảo Mật Tuyệt Đối', desc: 'Thông tin cá nhân được bảo vệ tối đa' },
    { title: 'Hỗ Trợ Tận Tâm', desc: 'Đội ngũ CSKH chuyên nghiệp 24/7' }
  ];

  return (
    <div className="animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white rounded-3xl p-8 shadow-soft">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Sứ Mệnh Của Chúng Tôi</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Chúng tôi cam kết mang đến cho người chơi trải nghiệm xổ số trực tuyến minh bạch, 
            an toàn và thuận tiện nhất. Với công nghệ hiện đại và đội ngũ chuyên nghiệp, 
            chúng tôi không ngừng nỗ lực để trở thành nền tảng xổ số đáng tin cậy nhất tại Việt Nam.
          </p>
          <div className="flex flex-col gap-4">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <h6 className="font-bold mb-1">{item.title}</h6>
                  <p className="text-gray-500 mb-0 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 text-white shadow-strong">
            <div className="text-9xl">🏆</div>
            <h3 className="text-2xl font-bold mt-4">Giải Thưởng Uy Tín</h3>
            <p className="mb-0 opacity-75">Top 1 Nền Tảng Xổ Số Trực Tuyến 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;