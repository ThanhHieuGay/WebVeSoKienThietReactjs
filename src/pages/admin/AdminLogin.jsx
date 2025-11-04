// src/pages/admin/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ⭐ THÔNG TIN ĐĂNG NHẬP ADMIN MỚI
  const ADMIN_CREDENTIALS = {
    email: 'admin@lottery.vn',
    password: 'Admin@2025'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      toast.error('Vui lòng điền đầy đủ thông tin');
      setLoading(false);
      return;
    }

    // Kiểm tra email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Email không hợp lệ');
      setLoading(false);
      return;
    }

    // Kiểm tra thông tin đăng nhập
    setTimeout(() => {
      if (
        formData.email === ADMIN_CREDENTIALS.email &&
        formData.password === ADMIN_CREDENTIALS.password
      ) {
        // Lưu trạng thái đăng nhập
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminEmail', formData.email);
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        
        toast.success('Đăng nhập thành công!');
        setLoading(false);
        navigate('/admin/dashboard');
      } else {
        toast.error('Email hoặc mật khẩu không đúng!');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-900 
      flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-10 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-10 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Login Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10 animate-slide-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br 
            from-red-600 to-red-800 rounded-2xl mb-4 shadow-lg">
            <Shield size={40} className="text-yellow-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Admin Panel
          </h2>
          <p className="text-gray-600">
            Hệ thống quản trị xổ số
          </p>
        </div>

        {/* Thông tin đăng nhập mẫu */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg">
          <p className="text-sm text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <span className="text-lg">🔐</span>
            Thông tin đăng nhập Admin:
          </p>
          <div className="space-y-1">
            <p className="text-xs text-gray-600 flex items-center gap-2">
              <strong className="min-w-[80px]">Email:</strong> 
              <code className="bg-white px-2 py-1 rounded text-red-600 font-mono">
                admin@lottery.vn
              </code>
            </p>
            <p className="text-xs text-gray-600 flex items-center gap-2">
              <strong className="min-w-[80px]">Mật khẩu:</strong> 
              <code className="bg-white px-2 py-1 rounded text-red-600 font-mono">
                Admin@2025
              </code>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email đăng nhập
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@lottery.vn"
                className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                  focus:border-red-500 focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl 
                  focus:border-red-500 focus:outline-none transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="mr-2 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500" 
              />
              <span className="text-sm text-gray-600">Ghi nhớ đăng nhập</span>
            </label>
            <button
              type="button"
              className="text-sm text-red-600 hover:text-red-700 font-semibold"
            >
              Quên mật khẩu?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold 
              py-3 rounded-xl hover:from-red-700 hover:to-red-900 transform hover:scale-[1.02] 
              transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Đang xử lý...
              </span>
            ) : (
              'Đăng nhập'
            )}
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-700 text-center">
            🔒 Kết nối được mã hóa và bảo mật
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-gray-600 hover:text-red-600 font-semibold transition-colors"
          >
            ← Quay về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;