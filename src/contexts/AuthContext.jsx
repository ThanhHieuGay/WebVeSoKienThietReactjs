// src/contexts/AuthContext.jsx - ĐÃ SỬA LỖI TOAST VÀ THÊM PERSISTENCE + XÓA CART
import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserSessionPersistence // ✅ THÊM: Import persistence
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { syncUserToSupabase, getUserByFirebaseUid } from '../lib/supabaseClient';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [supabaseUser, setSupabaseUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = async () => {
    try {
      await auth.setPersistence(browserSessionPersistence); // ✅ THÊM: Set persistence SESSION trước login
      const result = await signInWithPopup(auth, googleProvider);
      
      let supabaseUserData = await getUserByFirebaseUid(result.user.uid);
      if (!supabaseUserData) {
        supabaseUserData = await syncUserToSupabase(result.user);
      }
      
      setSupabaseUser(supabaseUserData);
      toast.success(`Chào mừng ${result.user.displayName || 'bạn'}!`);
      return result.user;
    } catch (error) {
      console.error('Google login error:', error);
      toast.error('Đăng nhập thất bại!');
      throw error;
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      await auth.setPersistence(browserSessionPersistence); // ✅ THÊM: Set persistence SESSION trước login
      const result = await signInWithEmailAndPassword(auth, email, password);

      let supabaseUserData = await getUserByFirebaseUid(result.user.uid);
      
      if (!supabaseUserData) {
        supabaseUserData = await syncUserToSupabase(result.user);
      }
      
      setSupabaseUser(supabaseUserData);
      toast.success('Đăng nhập thành công!');
      return result.user;

    } catch (error) {
      console.error('Login error:', error);

      if (error.code === 'auth/user-not-found' || 
          error.code === 'auth/wrong-password' || 
          error.code === 'auth/invalid-credential') {
        toast.error('Email hoặc mật khẩu không đúng!');
      } else {
        toast.error('Đăng nhập thất bại!');
      }
      throw error;
    }
  };

  const registerWithEmail = async (email, password) => {
    try {
      await auth.setPersistence(browserSessionPersistence); // ✅ THÊM: Set persistence SESSION trước register
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const syncedUser = await syncUserToSupabase(result.user);
      setSupabaseUser(syncedUser);
      toast.success('Đăng ký thành công!');
      return result.user;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') toast.error('Email đã tồn tại!');
      else if (error.code === 'auth/weak-password') toast.error('Mật khẩu quá yếu!');
      else toast.error('Đăng ký thất bại!');
      throw error;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setSupabaseUser(null);
    localStorage.removeItem('lottery_cart'); // ✅ THÊM: Xóa giỏ hàng khi logout
    toast.success('Đã đăng xuất!');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const supabaseUserData = await getUserByFirebaseUid(user.uid) || await syncUserToSupabase(user);
        setSupabaseUser(supabaseUserData);
      } else {
        setSupabaseUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    supabaseUser,
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