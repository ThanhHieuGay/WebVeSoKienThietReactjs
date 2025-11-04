// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Cấu hình Firebase của bạn (lấy từ Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyD3jtys5u8dpisptz9hdd-VLDzYDafW7Ds",
  authDomain: "xo-so-kien-thiet-1234.firebaseapp.com",
  projectId: "xo-so-kien-thiet-1234",
  storageBucket: "xo-so-kien-thiet-1234.firebasestorage.app",
  messagingSenderId: "1071454904022",
  appId: "1:1071454904022:web:95f40fa3a806733582f377"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Authentication
export const auth = getAuth(app);

// Khởi tạo Google Provider
export const googleProvider = new GoogleAuthProvider();

// Cấu hình Google Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;