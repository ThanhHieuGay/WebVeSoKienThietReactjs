// src/pages/admin/AdminUsers.jsx
import { useState } from 'react';
import { Search, Plus, Edit2, Trash2, Lock, Unlock, Eye, Filter } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Dữ liệu mẫu người dùng
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'Nguyễn Văn A', 
      email: 'nguyenvana@gmail.com', 
      phone: '0987654321',
      role: 'user', 
      status: 'active',
      balance: '1,250,000',
      joinDate: '15/10/2025'
    },
    { 
      id: 2, 
      name: 'Trần Thị B', 
      email: 'tranthib@gmail.com', 
      phone: '0976543210',
      role: 'agent', 
      status: 'active',
      balance: '5,680,000',
      joinDate: '20/09/2025'
    },
    { 
      id: 3, 
      name: 'Lê Văn C', 
      email: 'levanc@gmail.com', 
      phone: '0965432109',
      role: 'user', 
      status: 'locked',
      balance: '0',
      joinDate: '05/11/2025'
    },
    { 
      id: 4, 
      name: 'Phạm Thị D', 
      email: 'phamthid@gmail.com', 
      phone: '0954321098',
      role: 'admin', 
      status: 'active',
      balance: '0',
      joinDate: '01/01/2025'
    }
  ]);

  const handleDeleteUser = (userId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
      setUsers(users.filter(u => u.id !== userId));
      toast.success('Đã xóa người dùng');
    }
  };

  const handleToggleStatus = (userId) => {
    setUsers(users.map(u => 
      u.id === userId 
        ? { ...u, status: u.status === 'active' ? 'locked' : 'active' }
        : u
    ));
    toast.success('Đã cập nhật trạng thái');
  };

  const getRoleBadge = (role) => {
    const badges = {
      admin: 'bg-red-100 text-red-700',
      agent: 'bg-blue-100 text-blue-700',
      user: 'bg-green-100 text-green-700'
    };
    const labels = {
      admin: 'Quản trị',
      agent: 'Đại lý',
      user: 'Người chơi'
    };
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badges[role]}`}>
      {labels[role]}
    </span>;
  };

  const filteredUsers = users.filter(user => {
    const matchSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRole = filterRole === 'all' || user.role === filterRole;
    return matchSearch && matchRole;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Quản lý người dùng</h1>
          <p className="text-gray-600 mt-1">Quản lý tất cả người dùng trong hệ thống</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 
            to-red-800 text-white rounded-xl hover:shadow-lg transition-shadow font-semibold"
        >
          <Plus size={20} />
          Thêm người dùng
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Tổng người dùng</p>
          <h3 className="text-2xl font-bold text-gray-800">{users.length}</h3>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Người chơi</p>
          <h3 className="text-2xl font-bold text-green-600">
            {users.filter(u => u.role === 'user').length}
          </h3>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Đại lý</p>
          <h3 className="text-2xl font-bold text-blue-600">
            {users.filter(u => u.role === 'agent').length}
          </h3>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-600 text-sm">Đang hoạt động</p>
          <h3 className="text-2xl font-bold text-purple-600">
            {users.filter(u => u.status === 'active').length}
          </h3>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                focus:border-red-500 focus:outline-none"
            />
          </div>

          {/* Role Filter */}
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 
              focus:outline-none"
          >
            <option value="all">Tất cả vai trò</option>
            <option value="admin">Quản trị viên</option>
            <option value="agent">Đại lý</option>
            <option value="user">Người chơi</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Họ tên</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Email</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Số điện thoại</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Vai trò</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Số dư</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Trạng thái</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">#{user.id}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500">Tham gia: {user.joinDate}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
                  <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    ₫{user.balance}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status === 'active' ? 'Hoạt động' : 'Đã khóa'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Xem chi tiết"
                      >
                        <Eye size={18} className="text-blue-600" />
                      </button>
                      <button 
                        className="p-2 hover:bg-green-50 rounded-lg transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit2 size={18} className="text-green-600" />
                      </button>
                      <button 
                        onClick={() => handleToggleStatus(user.id)}
                        className="p-2 hover:bg-yellow-50 rounded-lg transition-colors"
                        title={user.status === 'active' ? 'Khóa' : 'Mở khóa'}
                      >
                        {user.status === 'active' ? (
                          <Lock size={18} className="text-yellow-600" />
                        ) : (
                          <Unlock size={18} className="text-yellow-600" />
                        )}
                      </button>
                      <button 
                        onClick={() => handleDeleteUser(user.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Xóa"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Không tìm thấy người dùng nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;