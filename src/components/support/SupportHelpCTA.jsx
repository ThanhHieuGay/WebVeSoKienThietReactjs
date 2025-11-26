// src/components/support/SupportHelpCTA.jsx

import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';   // THÊM DÒNG NÀY

const SupportHelpCTA = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <MessageCircle className="mx-auto mb-4" size={64} />
          <h3 className="text-3xl font-bold mb-3">Cần Hỗ Trợ Thêm?</h3>
          <p className="text-xl mb-6 opacity-90">
            Liên hệ ngay với đội ngũ hỗ trợ chuyên nghiệp của chúng tôi
          </p>

          {/* CHỈNH NÚT THÀNH LINK ĐẾN TRANG LIÊN HỆ */}
          <Link
            to="/contact"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
          >
            Liên Hệ Hỗ Trợ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportHelpCTA;