// src/components/contact/SocialMediaLinks.jsx

import { Facebook, MessageCircle, Instagram, Twitter } from 'lucide-react';

const SocialMediaLinks = () => {
  const socialMedia = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      link: 'https://www.facebook.com/', 
      color: 'bg-blue-600', 
      followers: '1.5M' 
    },
    { 
      name: 'Zalo', 
      icon: MessageCircle, 
      link: 'https://zalo.me/', 
      color: 'bg-blue-500', 
      followers: '800K' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      link: 'https://www.instagram.com/', 
      color: 'bg-pink-600', 
      followers: '500K' 
    },
    { 
      name: 'Twitter (X)', 
      icon: Twitter, 
      link: 'https://twitter.com/', 
      color: 'bg-sky-500', 
      followers: '300K' 
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-soft">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Kết Nối Với Chúng Tôi
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {socialMedia.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} hover:opacity-90 text-white p-5 rounded-2xl text-center transition-all hover:scale-105`}
            >
              <Icon className="mx-auto mb-2" size={32} />
              <h4 className="font-bold mb-1">{social.name}</h4>
              <p className="text-sm opacity-90">{social.followers} theo dõi</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
