// src/pages/admin/AdminDashboard.jsx
import { useState } from 'react';
import StatCard from '../../components/admin/StatCard';
import { 
  DollarSign, 
  Users, 
  Ticket, 
  TrendingUp, 
  Store,
  Trophy,
  AlertTriangle,
  Activity
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
  Legend
} from 'recharts';

const AdminDashboard = () => {
  // Dữ liệu mẫu - sau này sẽ lấy từ API
  const stats = [
    {
      title: 'Doanh thu hôm nay',
      value: '₫125.5M',
      icon: DollarSign,
      trend: 'up',
      trendValue: '+12.5%',
      color: 'green'
    },
    {
      title: 'Tổng vé bán ra',
      value: '8,542',
      icon: Ticket,
      trend: 'up',
      trendValue: '+8.2%',
      color: 'blue'
    },
    {
      title: 'Người chơi mới',
      value: '1,234',
      icon: Users,
      trend: 'up',
      trendValue: '+15.3%',
      color: 'purple'
    },
    {
      title: 'Đại lý hoạt động',
      value: '156',
      icon: Store,
      trend: 'down',
      trendValue: '-2.1%',
      color: 'orange'
    }
  ];

  // Dữ liệu biểu đồ doanh thu
  const revenueData = [
    { name: 'T2', value: 85 },
    { name: 'T3', value: 92 },
    { name: 'T4', value: 78 },
    { name: 'T5', value: 105 },
    { name: 'T6', value: 125 },
    { name: 'T7', value: 140 },
    { name: 'CN', value: 118 }
  ];

  // Dữ liệu vé theo loại
  const ticketData = [
    { name: 'Miền Bắc', value: 3500, color: '#EF4444' },
    { name: 'Miền Trung', value: 2800, color: '#F59E0B' },
    { name: 'Miền Nam', value: 4200, color: '#10B981' },
    { name: 'Điện toán', value: 1200, color: '#3B82F6' }
  ];

  // Kết quả mới nhất
  const latestResults = [
    { province: 'TP.HCM', date: '03/11/2025', special: '123456', status: 'Đã xổ' },
    { province: 'Hà Nội', date: '03/11/2025', special: '789012', status: 'Đã xổ' },
    { province: 'Đà Nẵng', date: '03/11/2025', special: '345678', status: 'Đang xổ' },
    { province: 'Cần Thơ', date: '03/11/2025', special: '901234', status: 'Chờ xổ' }
  ];

  // Cảnh báo
  const alerts = [
    { type: 'warning', message: '5 vé trúng chưa trả thưởng', time: '10 phút trước' },
    { type: 'info', message: 'Hệ thống sẽ bảo trì vào 2h sáng', time: '1 giờ trước' },
    { type: 'error', message: 'Đại lý ABC có giao dịch bất thường', time: '2 giờ trước' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Tổng quan hệ thống xổ số</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border-2 border-gray-300 rounded-xl 
            hover:border-red-500 transition-colors">
            Hôm nay
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 
            text-white rounded-xl hover:shadow-lg transition-shadow">
            Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Doanh thu 7 ngày qua
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#EF4444" 
                strokeWidth={3}
                dot={{ fill: '#EF4444', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Ticket Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Phân bố vé số
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ticketData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
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

      {/* Latest Results & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Results */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Trophy className="text-yellow-500" size={24} />
              Kết quả mới nhất
            </h3>
            <button className="text-sm text-red-600 hover:underline font-semibold">
              Xem tất cả →
            </button>
          </div>
          <div className="space-y-3">
            {latestResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 
                bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-bold text-gray-800">{result.province}</p>
                  <p className="text-sm text-gray-600">{result.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-red-600">{result.special}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    result.status === 'Đã xổ' ? 'bg-green-100 text-green-700' :
                    result.status === 'Đang xổ' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {result.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={24} />
              Thông báo & Cảnh báo
            </h3>
          </div>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-xl border-l-4 ${
                alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                alert.type === 'error' ? 'bg-red-50 border-red-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <p className="font-semibold text-gray-800 text-sm">{alert.message}</p>
                <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 border-2 border-gray-300 rounded-xl 
            hover:border-red-500 transition-colors font-semibold text-sm">
            Xem tất cả thông báo
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <Activity size={32} className="mb-3" />
          <p className="text-sm opacity-90">Giao dịch hôm nay</p>
          <h3 className="text-3xl font-bold mt-1">2,847</h3>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <Trophy size={32} className="mb-3" />
          <p className="text-sm opacity-90">Vé trúng hôm nay</p>
          <h3 className="text-3xl font-bold mt-1">143</h3>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <TrendingUp size={32} className="mb-3" />
          <p className="text-sm opacity-90">Tăng trưởng</p>
          <h3 className="text-3xl font-bold mt-1">+24.5%</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;