// src/pages/admin/AdminTickets.jsx
import { useState } from 'react';
import { Search, Plus, Download, Upload, Filter } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminTickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRegion, setFilterRegion] = useState('all');

  // Dữ liệu mẫu vé số
  const [tickets] = useState([
    {
      id: 'VE001',
      ticketNumber: '123456',
      region: 'north',
      province: 'Hà Nội',
      drawDate: '03/11/2025',
      price: '10,000',
      status: 'sold',
      buyer: 'Nguyễn Văn A',
      buyDate: '01/11/2025'
    },
    {
      id: 'VE002',
      ticketNumber: '234567',
      region: 'central',
      province: 'Đà Nẵng',
      drawDate: '03/11/2025',
      price: '10,000',
      status: 'available',
      buyer: '-',
      buyDate: '-'
    },
    {
      id: 'VE003',
      ticketNumber: '345678',
      region: 'south',
      province: 'TP.HCM',
      drawDate: '03/11/2025',
      price: '10,000',
      status: 'won',
      buyer: 'Trần Thị B',
      buyDate: '02/11/2025'
    },
    {
      id: 'VE004',
      ticketNumber: '456789',
      region: 'north',
      province: 'Hà Nội',
      drawDate: '02/11/2025',
      price: '10,000',
      status: 'expired',
      buyer: '-',
      buyDate: '-'
    }
  ]);

  const getStatusBadge = (status) => {
    const config = {
      available: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Còn lại' },
      sold: { bg: 'bg-green-100', text: 'text-green-700', label: 'Đã bán' },
      won: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Trúng thưởng' },
      expired: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Hết hạn' }
    };
    const { bg, text, label } = config[status];
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bg} ${text}`}>
      {label}
    </span>;
  };

  const getRegionBadge = (region) => {
    const config = {
      north: { bg: 'bg-red-100', text: 'text-red-700', label: 'Miền Bắc' },
      central: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Miền Trung' },
      south: { bg: 'bg-green-100', text: 'text-green-700', label: 'Miền Nam' }
    };
    const { bg, text, label } = config[region];
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bg} ${text}`}>
      {label}
    </span>;
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchSearch = ticket.ticketNumber.includes(searchTerm) ||
                       ticket.province.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchRegion = filterRegion === 'all' || ticket.region === filterRegion;
    return matchSearch && matchStatus && matchRegion;
  });

  const stats = {
    total: tickets.length,
    available: tickets.filter(t => t.status === 'available').length,
    sold: tickets.filter(t => t.status === 'sold').length,
    won: tickets.filter(t => t.status === 'won').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Quản lý vé số</h1>
          <p className="text-gray-600 mt-1">Quản lý tất cả vé số trong hệ thống</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => toast.success('Đang nhập vé từ file...')}
            className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 
              rounded-xl hover:border-red-500 transition-colors font-semibold"
          >
            <Upload size={20} />
            Nhập vé
          </button>
          <button 
            onClick={() => toast.success('Đang xuất danh sách vé...')}
            className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 
              rounded-xl hover:border-red-500 transition-colors font-semibold"
          >
            <Download size={20} />
            Xuất Excel
          </button>
          <button 
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 
              to-red-800 text-white rounded-xl hover:shadow-lg transition-shadow font-semibold"
          >
            <Plus size={20} />
            Thêm vé
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Tổng vé</p>
          <h3 className="text-2xl font-bold text-gray-800">{stats.total}</h3>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Còn lại</p>
          <h3 className="text-2xl font-bold text-blue-600">{stats.available}</h3>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Đã bán</p>
          <h3 className="text-2xl font-bold text-green-600">{stats.sold}</h3>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Trúng thưởng</p>
          <h3 className="text-2xl font-bold text-yellow-600">{stats.won}</h3>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm theo số vé, tỉnh..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                focus:border-red-500 focus:outline-none"
            />
          </div>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 
              focus:outline-none"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="available">Còn lại</option>
            <option value="sold">Đã bán</option>
            <option value="won">Trúng thưởng</option>
            <option value="expired">Hết hạn</option>
          </select>

          {/* Region Filter */}
          <select
            value={filterRegion}
            onChange={(e) => setFilterRegion(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 
              focus:outline-none"
          >
            <option value="all">Tất cả miền</option>
            <option value="north">Miền Bắc</option>
            <option value="central">Miền Trung</option>
            <option value="south">Miền Nam</option>
          </select>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Mã vé</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Số vé</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Miền</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Tỉnh/TP</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Ngày xổ</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Giá</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Người mua</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {ticket.id}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-lg font-bold text-red-600">
                      {ticket.ticketNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4">{getRegionBadge(ticket.region)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ticket.province}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ticket.drawDate}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    ₫{ticket.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {ticket.buyer}
                    {ticket.buyDate !== '-' && (
                      <p className="text-xs text-gray-400">{ticket.buyDate}</p>
                    )}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(ticket.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTickets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Không tìm thấy vé nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTickets;