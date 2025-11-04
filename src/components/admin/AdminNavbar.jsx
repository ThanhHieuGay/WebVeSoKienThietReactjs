// src/components/admin/AdminNavbar.jsx
import { useState } from 'react';
import { Menu, Bell, User, Search, Moon, Sun } from 'lucide-react';

const AdminNavbar = ({ onMenuClick }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState(5);

  return (
    <nav className="h-20 bg-white shadow-md flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left - Menu & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        <div className="relative hidden md:block flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full pl-11 pr-4 py-2 border-2 border-gray-200 rounded-xl 
              focus:border-red-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={20} />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs 
              w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {notifications}
            </span>
          )}
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-300">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-800">Admin</p>
            <p className="text-xs text-gray-500">Quản trị viên</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 
            rounded-full flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;