import { useState } from 'react';
import { 
  DollarSign, 
  Users, 
  Ticket, 
  TrendingUp, 
  Store,
  Trophy,
  AlertTriangle,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart
} from 'recharts';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('7days');

  // Dữ liệu mẫu
  const stats = [
    {
      title: 'Doanh thu hôm nay',
      value: '₫125.5M',
      icon: DollarSign,
      trend: 'up',
      trendValue: '+12.5%',
      color: 'emerald',
      bgGradient: 'from-emerald-500 to-emerald-600',
      changeAmount: '+15.2M'
    },
    {
      title: 'Tổng vé bán ra',
      value: '8,542',
      icon: Ticket,
      trend: 'up',
      trendValue: '+8.2%',
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600',
      changeAmount: '+647 vé'
    },
    {
      title: 'Người chơi mới',
      value: '1,234',
      icon: Users,
      trend: 'up',
      trendValue: '+15.3%',
      color: 'purple',
      bgGradient: 'from-purple-500 to-purple-600',
      changeAmount: '+164 người'
    },
    {
      title: 'Đại lý hoạt động',
      value: '156',
      icon: Store,
      trend: 'down',
      trendValue: '-2.1%',
      color: 'orange',
      bgGradient: 'from-orange-500 to-orange-600',
      changeAmount: '-3 đại lý'
    }
  ];

  // Dữ liệu biểu đồ doanh thu
  const revenueData = [
    { name: 'T2', value: 85, lastWeek: 78 },
    { name: 'T3', value: 92, lastWeek: 85 },
    { name: 'T4', value: 78, lastWeek: 90 },
    { name: 'T5', value: 105, lastWeek: 88 },
    { name: 'T6', value: 125, lastWeek: 95 },
    { name: 'T7', value: 140, lastWeek: 120 },
    { name: 'CN', value: 118, lastWeek: 110 }
  ];

  // Dữ liệu vé theo loại
  const ticketData = [
    { name: 'Miền Bắc', value: 3500, color: '#EF4444' },
    { name: 'Miền Trung', value: 2800, color: '#F59E0B' },
    { name: 'Miền Nam', value: 4200, color: '#10B981' },
    { name: 'Điện toán', value: 1200, color: '#3B82F6' }
  ];

  // Top provinces
  const topProvinces = [
    { name: 'TP.HCM', sales: 4200, growth: '+15%', color: 'emerald' },
    { name: 'Hà Nội', sales: 3500, growth: '+12%', color: 'blue' },
    { name: 'Đà Nẵng', sales: 2800, growth: '+8%', color: 'orange' },
    { name: 'Cần Thơ', sales: 2100, growth: '+5%', color: 'purple' }
  ];

  // Kết quả mới nhất
  const latestResults = [
    { 
      province: 'TP.HCM', 
      date: '03/11/2025', 
      special: '123456', 
      status: 'completed',
      winners: 12,
      totalPrize: '₫2.5M'
    },
    { 
      province: 'Hà Nội', 
      date: '03/11/2025', 
      special: '789012', 
      status: 'completed',
      winners: 8,
      totalPrize: '₫1.8M'
    },
    { 
      province: 'Đà Nẵng', 
      date: '03/11/2025', 
      special: '345678', 
      status: 'drawing',
      winners: 0,
      totalPrize: '₫0'
    },
    { 
      province: 'Cần Thơ', 
      date: '03/11/2025', 
      special: '901234', 
      status: 'pending',
      winners: 0,
      totalPrize: '₫0'
    }
  ];

  // Cảnh báo
  const alerts = [
    { 
      type: 'warning', 
      message: '5 vé trúng chưa trả thưởng', 
      time: '10 phút trước',
      action: 'Xử lý ngay'
    },
    { 
      type: 'info', 
      message: 'Hệ thống sẽ bảo trì vào 2h sáng', 
      time: '1 giờ trước',
      action: 'Chi tiết'
    },
    { 
      type: 'error', 
      message: 'Đại lý ABC có giao dịch bất thường', 
      time: '2 giờ trước',
      action: 'Kiểm tra'
    }
  ];

  const StatCard = ({ stat }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl 
        transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                stat.trend === 'up' 
                  ? 'bg-emerald-50' 
                  : 'bg-red-50'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight size={16} className="text-emerald-600" />
                ) : (
                  <ArrowDownRight size={16} className="text-red-600" />
                )}
                <span className={`text-sm font-bold ${
                  stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {stat.trendValue}
                </span>
              </div>
              <span className="text-xs text-gray-500">{stat.changeAmount}</span>
            </div>
          </div>

          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.bgGradient} 
            flex items-center justify-center shadow-lg transform hover:scale-110 
            transition-transform duration-300`}>
            <stat.icon size={28} className="text-white" />
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${stat.bgGradient} rounded-full 
              transition-all duration-1000 ease-out`}
            style={{ 
              width: `${parseInt(stat.trendValue)}%`,
              animation: 'slideIn 1s ease-out'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header with improved styling */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 
            bg-clip-text text-transparent mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 flex items-center gap-2">
            <span>Tổng quan hệ thống xổ số</span>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full 
              font-semibold">
              Trực tuyến
            </span>
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl 
              hover:border-red-500 transition-colors font-medium text-sm focus:outline-none 
              focus:border-red-500"
          >
            <option value="today">Hôm nay</option>
            <option value="7days">7 ngày qua</option>
            <option value="30days">30 ngày qua</option>
            <option value="year">Năm nay</option>
          </select>
          
          <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 
            text-white rounded-xl hover:shadow-lg transition-all duration-300 
            font-semibold text-sm hover:scale-105 flex items-center gap-2">
            <Activity size={18} />
            Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart - Enhanced */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp className="text-emerald-500" size={22} />
                Doanh thu 7 ngày qua
              </h3>
              <p className="text-sm text-gray-500 mt-1">So sánh với tuần trước</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs text-gray-600 font-medium">Tuần này</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-xs text-gray-600 font-medium">Tuần trước</span>
              </div>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#EF4444" 
                strokeWidth={3}
                fill="url(#colorValue)"
              />
              <Line 
                type="monotone" 
                dataKey="lastWeek" 
                stroke="#D1D5DB" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Ticket Distribution - Enhanced */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Ticket className="text-blue-500" size={22} />
            Phân bổ vé số
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={ticketData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
              >
                {ticketData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Provinces */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Trophy className="text-yellow-500" size={22} />
          Top tỉnh/thành phố
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topProvinces.map((province, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 
              rounded-xl hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-600 font-medium">#{index + 1}</p>
                  <h4 className="text-lg font-bold text-gray-900">{province.name}</h4>
                </div>
                <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 
                  rounded-full font-bold">
                  {province.growth}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">{province.sales}</p>
              <p className="text-xs text-gray-500 mt-1">vé đã bán</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Results & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Results - Enhanced */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Trophy className="text-yellow-500" size={22} />
              Kết quả mới nhất
            </h3>
            <button className="text-sm text-red-600 hover:text-red-700 font-semibold 
              hover:underline transition-all">
              Xem tất cả →
            </button>
          </div>
          
          <div className="space-y-3">
            {latestResults.map((result, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-white 
                rounded-xl hover:shadow-md transition-all duration-300 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-bold text-gray-900">{result.province}</p>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        result.status === 'completed' 
                          ? 'bg-green-100 text-green-700' 
                          : result.status === 'drawing'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {result.status === 'completed' ? 'Đã xổ' : 
                         result.status === 'drawing' ? 'Đang xổ' : 'Chờ xổ'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{result.date}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-600 mb-1">
                      {result.special}
                    </p>
                    <p className="text-xs text-gray-600">
                      {result.winners} người trúng
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts - Enhanced */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={22} />
              Thông báo & Cảnh báo
            </h3>
          </div>
          
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-xl border-l-4 transition-all 
                duration-300 hover:shadow-md ${
                alert.type === 'warning' 
                  ? 'bg-yellow-50 border-yellow-500' 
                  : alert.type === 'error' 
                  ? 'bg-red-50 border-red-500' 
                  : 'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                  <button className="px-3 py-1 bg-white rounded-lg text-xs font-semibold 
                    text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap">
                    {alert.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 py-2.5 border-2 border-gray-200 rounded-xl 
            hover:border-red-500 hover:bg-red-50 transition-all duration-300 
            font-semibold text-sm text-gray-700">
            Xem tất cả thông báo
          </button>
        </div>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 
          text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Activity size={32} className="mb-3 opacity-90" />
          <p className="text-sm opacity-90 mb-1">Giao dịch hôm nay</p>
          <h3 className="text-4xl font-bold mb-2">2,847</h3>
          <div className="flex items-center gap-1 text-sm">
            <ArrowUpRight size={16} />
            <span className="font-semibold">+15%</span>
            <span className="opacity-75">vs hôm qua</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 
          text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Trophy size={32} className="mb-3 opacity-90" />
          <p className="text-sm opacity-90 mb-1">Vé trúng hôm nay</p>
          <h3 className="text-4xl font-bold mb-2">143</h3>
          <div className="flex items-center gap-1 text-sm">
            <ArrowUpRight size={16} />
            <span className="font-semibold">+8%</span>
            <span className="opacity-75">vs hôm qua</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 
          text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
          <TrendingUp size={32} className="mb-3 opacity-90" />
          <p className="text-sm opacity-90 mb-1">Tăng trưởng</p>
          <h3 className="text-4xl font-bold mb-2">+24.5%</h3>
          <div className="flex items-center gap-1 text-sm">
            <span className="font-semibold">So với tháng trước</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;