// src/utils/AuthService.js
// Quản lý authentication và authorization

class AuthService {
  // ==================== ADMIN AUTH ====================
  
  // Đăng nhập Admin
  static adminLogin(email, password) {
    const ADMIN_CREDENTIALS = {
      email: 'admin@lottery.vn',
      password: 'Admin@2025'
    };

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('adminAuth', 'true');
      localStorage.setItem('adminEmail', email);
      localStorage.setItem('adminLoginTime', new Date().toISOString());
      return { success: true, message: 'Đăng nhập thành công' };
    }
    
    return { success: false, message: 'Email hoặc mật khẩu không đúng' };
  }

  // Kiểm tra Admin đã đăng nhập
  static isAdminAuthenticated() {
    return localStorage.getItem('adminAuth') === 'true';
  }

  // Đăng xuất Admin
  static adminLogout() {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminLoginTime');
  }

  // Lấy thông tin Admin
  static getAdminInfo() {
    if (!this.isAdminAuthenticated()) return null;
    
    return {
      email: localStorage.getItem('adminEmail'),
      loginTime: localStorage.getItem('adminLoginTime'),
      role: 'admin'
    };
  }

  // ==================== USER AUTH ====================

  // Đăng nhập User
  static userLogin(email, password) {
    // Kiểm tra trong danh sách user đã đăng ký
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = registeredUsers.find(u => u.email === email && u.password === password);

    // Demo users (cho mục đích test)
    const DEMO_USERS = [
      { email: 'user@lottery.vn', password: 'User@2025', fullName: 'Demo User', role: 'user' },
      { email: 'demo@lottery.vn', password: 'Demo@2025', fullName: 'Demo Account', role: 'user' },
    ];

    const demoUser = DEMO_USERS.find(u => u.email === email && u.password === password);

    const foundUser = user || demoUser;

    if (foundUser) {
      localStorage.setItem('userAuth', 'true');
      localStorage.setItem('userEmail', foundUser.email);
      localStorage.setItem('userName', foundUser.fullName || 'User');
      localStorage.setItem('userRole', foundUser.role || 'user');
      localStorage.setItem('loginTime', new Date().toISOString());
      return { success: true, message: 'Đăng nhập thành công', user: foundUser };
    }

    return { success: false, message: 'Email hoặc mật khẩu không đúng' };
  }

  // Kiểm tra User đã đăng nhập
  static isUserAuthenticated() {
    return localStorage.getItem('userAuth') === 'true';
  }

  // Đăng xuất User
  static userLogout() {
    localStorage.removeItem('userAuth');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('loginTime');
  }

  // Lấy thông tin User
  static getUserInfo() {
    if (!this.isUserAuthenticated()) return null;
    
    return {
      email: localStorage.getItem('userEmail'),
      name: localStorage.getItem('userName'),
      role: localStorage.getItem('userRole'),
      loginTime: localStorage.getItem('loginTime')
    };
  }

  // ==================== REGISTER ====================

  // Đăng ký User mới
  static registerUser(userData) {
    const { fullName, email, phone, password } = userData;

    // Lấy danh sách users hiện tại
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    // Kiểm tra email đã tồn tại
    const emailExists = users.some(u => u.email === email);
    if (emailExists) {
      return { success: false, message: 'Email đã được sử dụng' };
    }

    // Thêm user mới
    const newUser = {
      id: Date.now(),
      fullName,
      email,
      phone,
      password, // Trong thực tế nên hash password
      role: 'user',
      balance: 0,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    return { success: true, message: 'Đăng ký thành công', user: newUser };
  }

  // ==================== UTILITIES ====================

  // Kiểm tra session có hết hạn không (1 ngày)
  static isSessionExpired(loginTimeKey) {
    const loginTime = localStorage.getItem(loginTimeKey);
    if (!loginTime) return true;

    const now = new Date();
    const loginDate = new Date(loginTime);
    const hoursDiff = (now - loginDate) / (1000 * 60 * 60);

    return hoursDiff > 24; // Session hết hạn sau 24 giờ
  }

  // Làm mới session
  static refreshSession(isAdmin = false) {
    const timeKey = isAdmin ? 'adminLoginTime' : 'loginTime';
    localStorage.setItem(timeKey, new Date().toISOString());
  }

  // Clear tất cả auth data
  static clearAll() {
    this.adminLogout();
    this.userLogout();
  }
}

export default AuthService;