// src/components/guide/GuideHelpCTA.jsx

import { MessageCircle } from 'lucide-react';

const GuideHelpCTA = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <MessageCircle className="mx-auto mb-4" size={64} />
          <h3 className="text-3xl font-bold mb-3">Vẫn Cần Hỗ Trợ?</h3>
          <p className="text-xl mb-6 opacity-90">Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7</p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105">
            Liên Hệ Hỗ Trợ
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideHelpCTA;