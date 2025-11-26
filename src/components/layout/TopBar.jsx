// src/components/layout/TopBar.jsx
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

export const TopBar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="bg-[var(--primary)] text-white py-2">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/guide" className="text-white text-decoration-none me-3 hover:text-yellow-300 transition-colors">
              Hướng dẫn
            </Link>
            <span className="me-2">/</span>
            <Link to="/support" className="text-white text-decoration-none me-3 hover:text-yellow-300 transition-colors">
              Hỗ trợ
            </Link>
            <span className="me-2">/</span>
            <Link to="/contact" className="text-white text-decoration-none hover:text-yellow-300 transition-colors">
              Liên hệ
            </Link>
          </div>

          <div className="hidden md:block">
            <span className="text-sm">Gọi chúng tôi: (+84) 344849577</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            {currentUser ? (
              <>
                {/* User Info */}
                <div className="d-flex align-items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                  {currentUser.photoURL ? (
                    <img 
                      src={currentUser.photoURL} 
                      alt={currentUser.displayName || 'User'} 
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                  ) : (
                    <User size={18} className="text-white" />
                  )}
                  <span className="text-sm font-semibold hidden sm:inline">
                    {currentUser.displayName || currentUser.email?.split('@')[0] || 'User'}
                  </span>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-white/20 hover:bg-white/30 text-white border-0 d-flex align-items-center gap-2 px-3 py-1.5 transition-all"
                  title="Đăng xuất"
                >
                  <LogOut size={16} />
                  <span className="hidden sm:inline">Đăng xuất</span>
                </button>
              </>
            ) : (
              <>
                {/* Login Button */}
                <Link
                  to="/login"
                  className="btn btn-warning btn-sm me-2 text-dark fw-bold hover:scale-105 transition-transform"
                >
                  Đăng nhập
                </Link>
                
                {/* Register Button */}
                <Link
                  to="/register"
                  className="btn btn-light btn-sm fw-bold hover:scale-105 transition-transform"
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};