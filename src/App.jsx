// App.jsx - CẬP NHẬT VỚI AUTH
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/layout/ScrollToTop';
import { AuthProvider } from './contexts/AuthContext';

// Public Pages
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import Schedule from './pages/Schedule';
import ResultDetail from './pages/ResultDetail';
import Buy from './pages/Buy';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import About from './pages/About';
import Guide from './pages/Guide';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminTickets from './pages/admin/AdminTickets';

// Placeholder pages
const AdminResults = () => <div className="p-6"><h1 className="text-2xl font-bold">Quản lý Kết quả xổ số</h1></div>;
const AdminTransactions = () => <div className="p-6"><h1 className="text-2xl font-bold">Quản lý Giao dịch</h1></div>;
const AdminAgents = () => <div className="p-6"><h1 className="text-2xl font-bold">Quản lý Đại lý</h1></div>;
const AdminSchedule = () => <div className="p-6"><h1 className="text-2xl font-bold">Lịch quay thưởng</h1></div>;
const AdminSupport = () => <div className="p-6"><h1 className="text-2xl font-bold">Hỗ trợ khách hàng</h1></div>;
const AdminReports = () => <div className="p-6"><h1 className="text-2xl font-bold">Báo cáo thống kê</h1></div>;
const AdminNotifications = () => <div className="p-6"><h1 className="text-2xl font-bold">Quản lý Thông báo</h1></div>;
const AdminSettings = () => <div className="p-6"><h1 className="text-2xl font-bold">Cấu hình hệ thống</h1></div>;
const AdminSecurity = () => <div className="p-6"><h1 className="text-2xl font-bold">Bảo mật</h1></div>;

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster 
          position="top-right" 
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
        
        <ScrollToTop />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/result/:province/:date" element={<ResultDetail />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/news" element={<News />} />
          <Route path="/news-detail/:id" element={<NewsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes - Protected */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="tickets" element={<AdminTickets />} />
            <Route path="results" element={<AdminResults />} />
            <Route path="transactions" element={<AdminTransactions />} />
            <Route path="agents" element={<AdminAgents />} />
            <Route path="schedule" element={<AdminSchedule />} />
            <Route path="support" element={<AdminSupport />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="security" element={<AdminSecurity />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;