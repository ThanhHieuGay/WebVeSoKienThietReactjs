// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Đăng nhập bằng Google
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Chào mừng ${result.user.displayName}!`);
      return result.user;
    } catch (error) {
      console.error('Google login error:', error);
      toast.error('Đăng nhập Google thất bại!');
      throw error;
    }
  };

  // Đăng nhập bằng Email/Password
  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Đăng nhập thành công!');
      return result.user;
    } catch (error) {
      console.error('Email login error:', error);
      if (error.code === 'auth/user-not-found') {
        toast.error('Email không tồn tại!');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Mật khẩu không đúng!');
      } else {
        toast.error('Đăng nhập thất bại!');
      }
      throw error;
    }
  };

  // Đăng ký bằng Email/Password
  const registerWithEmail = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Đăng ký thành công!');
      return result.user;
    } catch (error) {
      console.error('Register error:', error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email đã được sử dụng!');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Mật khẩu quá yếu (tối thiểu 6 ký tự)!');
      } else {
        toast.error('Đăng ký thất bại!');
      }
      throw error;
    }
  };

  // Đăng xuất
  const logout = async () => {
    try {
      await signOut(auth);
      toast.success('Đã đăng xuất!');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Đăng xuất thất bại!');
    }
  };

  // Lắng nghe thay đổi trạng thái đăng nhập
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};