// src/pages/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { loginWithGoogle, loginWithEmail } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await loginWithEmail(formData.email, formData.password);

    // THAY ĐỔI TẠI ĐÂY
    const pendingCheckout = localStorage.getItem('pendingCheckout');
    if (pendingCheckout === 'true') {
      localStorage.removeItem('pendingCheckout');
      navigate('/buy', { state: { openCart: true } }); // Quay lại /buy + mở giỏ
    } else {
      navigate('/'); // Bình thường thì về trang chủ
    }
  } catch (error) {
    console.error('Login failed:', error);
  } finally {
    setLoading(false);
  }
};

const handleGoogleLogin = async () => {
  setLoading(true);
  try {
    await loginWithGoogle();

    // THAY ĐỔI TẠI ĐÂY
    const pendingCheckout = localStorage.getItem('pendingCheckout');
    if (pendingCheckout === 'true') {
      localStorage.removeItem('pendingCheckout');
      navigate('/buy', { state: { openCart: true } });
    } else {
      navigate('/');
    }
  } catch (error) {
    console.error('Google login failed:', error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-amber-50 py-12">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-strong p-8 animate-slide-up">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gradient mb-2">
                  Đăng Nhập
                </h2>
                <p className="text-gray-600">
                  Chào mừng bạn quay trở lại!
                </p>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleEmailLogin} className="space-y-5">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="user@example.com"
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
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
                      className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
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

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-2 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm font-semibold text-red-600 hover:text-red-700">
                    Quên mật khẩu?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 rounded-xl hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                    'Đăng Nhập'
                  )}
                </button>
              </form>

              
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-gray-600 text-sm rounded-full">
                    Hoặc đăng nhập với
                  </span>
                </div>
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 hover:border-gray-400 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Đăng nhập với Google</span>
              </button>

              {/* Register Link */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Chưa có tài khoản?{' '}
                  <Link to="/register" className="font-bold text-red-600 hover:text-red-700 hover:underline">
                    Đăng ký ngay
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Login;