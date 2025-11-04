// src/components/contact/ContactInfoCards.jsx

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Điện Thoại',
      content: '(+84) 1234 567890',
      subContent: 'Thứ 2 - Chủ Nhật: 8:00 - 22:00',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'support@xosokienthiet.vn',
      subContent: 'Phản hồi trong 24 giờ',
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: MapPin,
      title: 'Địa Chỉ',
      content: '123 Đường ABC, Quận 1',
      subContent: 'TP. Hồ Chí Minh, Việt Nam',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Giờ Làm Việc',
      content: 'Hỗ trợ 24/7',
      subContent: 'Cả ngày lễ và cuối tuần',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 -mt-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 shadow-strong hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${info.color} rounded-2xl p-4 inline-block mb-4`}>
                <Icon className={info.iconColor} size={32} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{info.title}</h3>
              <p className="text-gray-900 font-semibold mb-1">{info.content}</p>
              <p className="text-gray-500 text-sm">{info.subContent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfoCards;