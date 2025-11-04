// src/components/admin/StatCard.jsx
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = 'blue' }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-500 to-yellow-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-3">{value}</h3>
          
          {trend && (
            <div className="flex items-center gap-1">
              {trend === 'up' ? (
                <TrendingUp size={16} className="text-green-500" />
              ) : (
                <TrendingDown size={16} className="text-red-500" />
              )}
              <span className={`text-sm font-semibold ${
                trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {trendValue}
              </span>
              <span className="text-gray-500 text-xs">so với tháng trước</span>
            </div>
          )}
        </div>

        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} 
          flex items-center justify-center shadow-lg`}>
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;