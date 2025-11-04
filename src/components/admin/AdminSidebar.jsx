// src/components/admin/AdminSidebar.jsx
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Ticket, 
  Trophy, 
  DollarSign, 
  Store, 
  Calendar, 
  MessageSquare, 
  Settings, 
  Shield,
  BarChart3,
  FileText,
  Bell,
  LogOut
} from 'lucide-react';

const AdminSidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Quản lý người dùng', path: '/admin/users' },
    { icon: Ticket, label: 'Quản lý vé số', path: '/admin/tickets' },
    { icon: Trophy, label: 'Kết quả xổ số', path: '/admin/results' },
    { icon: DollarSign, label: 'Giao dịch', path: '/admin/transactions' },
    { icon: Store, label: 'Đại lý', path: '/admin/agents' },
    { icon: Calendar, label: 'Lịch quay thưởng', path: '/admin/schedule' },
    { icon: MessageSquare, label: 'Hỗ trợ', path: '/admin/support' },
    { icon: BarChart3, label: 'Báo cáo', path: '/admin/reports' },
    { icon: Bell, label: 'Thông báo', path: '/admin/notifications' },
    { icon: Settings, label: 'Cấu hình', path: '/admin/settings' },
    { icon: Shield, label: 'Bảo mật', path: '/admin/security' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-red-600 to-red-800 
        text-white shadow-2xl z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-red-700 bg-red-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-yellow-400">🎰 ADMIN</h1>
            <p className="text-xs text-red-200">Hệ thống quản trị</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="py-4 overflow-y-auto h-[calc(100vh-5rem)]">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => window.innerWidth < 1024 && onClose()}
              className={({ isActive }) => `
                flex items-center gap-3 px-6 py-3 mx-3 my-1 rounded-xl
                transition-all duration-300 group
                ${isActive 
                  ? 'bg-yellow-400 text-red-900 font-bold shadow-lg' 
                  : 'hover:bg-red-700 hover:translate-x-2'
                }
              `}
            >
              <item.icon size={20} className="flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.removeItem('adminAuth');
              window.location.href = '/admin/login';
            }}
            className="flex items-center gap-3 px-6 py-3 mx-3 my-1 rounded-xl
              hover:bg-red-900 transition-all duration-300 w-[calc(100%-1.5rem)] text-left"
          >
            <LogOut size={20} />
            <span className="text-sm">Đăng xuất</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;