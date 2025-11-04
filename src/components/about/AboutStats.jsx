// src/components/about/AboutStats.jsx

import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const AboutStats = () => {
  const stats = [
    { icon: Users, number: '5M+', label: 'Người chơi', color: 'text-blue-600' },
    { icon: Award, number: '1000+', label: 'Giải thưởng/ngày', color: 'text-yellow-600' },
    { icon: TrendingUp, number: '15+', label: 'Năm kinh nghiệm', color: 'text-green-600' },
    { icon: Shield, number: '99.9%', label: 'Độ tin cậy', color: 'text-red-600' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 text-center shadow-soft hover-lift h-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className={`${stat.color} mb-3 mx-auto`} size={48} strokeWidth={1.5} />
              <h2 className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</h2>
              <p className="text-gray-500 mb-0 font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutStats;