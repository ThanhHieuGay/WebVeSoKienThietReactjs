// src/components/about/ValuesSection.jsx

import { Shield, Clock, Target, Heart } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Uy Tín & Minh Bạch',
      description: 'Cam kết cung cấp kết quả xổ số chính xác 100%, cập nhật trực tiếp từ các đài xổ số miền Nam, Trung, Bắc.'
    },
    {
      icon: Clock,
      title: 'Nhanh Chóng & Kịp Thời',
      description: 'Kết quả được cập nhật ngay sau khi quay số, đảm bảo bạn nhận thông tin nhanh nhất có thể.'
    },
    {
      icon: Target,
      title: 'Dự Đoán Chính Xác',
      description: 'Hệ thống phân tích thống kê dựa trên dữ liệu lịch sử giúp tăng khả năng dự đoán số may mắn.'
    },
    {
      icon: Heart,
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ chăm sóc khách hàng chuyên nghiệp, sẵn sàng hỗ trợ mọi lúc mọi nơi.'
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-center text-3xl font-bold mb-12 text-red-600">Giá Trị Cốt Lõi</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="bg-white rounded-3xl p-6 text-center shadow-soft hover-lift h-full">
              <div className="bg-red-100 rounded-full inline-flex items-center justify-center mb-4"
                   style={{ width: '80px', height: '80px' }}>
                <Icon className="text-red-600" size={40} strokeWidth={1.5} />
              </div>
              <h5 className="text-xl font-bold mb-3">{value.title}</h5>
              <p className="text-gray-600 mb-0 text-sm">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ValuesSection;