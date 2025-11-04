// src/components/guide/FAQSection.jsx

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: 'Kết quả xổ số có chính xác 100% không?',
      a: 'Có. Chúng tôi đồng bộ kết quả trực tiếp từ các đài xổ số chính thức. Tất cả kết quả đều được kiểm tra kỹ lưỡng trước khi công bố.'
    },
    {
      q: 'Tôi có thể xem kết quả xổ số của những ngày trước không?',
      a: 'Có. Hệ thống lưu trữ đầy đủ kết quả từ năm 2010 đến nay. Bạn chỉ cần chọn ngày cụ thể trong lịch tra cứu.'
    },
    {
      q: 'Làm sao để nhận thông báo khi có kết quả mới?',
      a: 'Sau khi đăng ký tài khoản, vào "Cài Đặt" và bật thông báo Push/Email. Bạn sẽ nhận thông báo ngay khi kết quả được cập nhật.'
    },
    {
      q: 'Công cụ dự đoán có chính xác không?',
      a: 'Công cụ dự đoán dựa trên phân tích dữ liệu lịch sử bằng AI, giúp tăng khả năng đưa ra con số có xác suất cao. Tuy nhiên, xổ số là trò chơi may rủi, không có phương pháp nào đảm bảo 100%.'
    },
    {
      q: 'Tôi cần đăng ký tài khoản mới sử dụng được không?',
      a: 'Không bắt buộc. Bạn có thể xem kết quả miễn phí. Tuy nhiên, đăng ký tài khoản sẽ mở khóa nhiều tính năng như: lưu vé, nhận thông báo, sử dụng công cụ dự đoán nâng cao.'
    },
    {
      q: 'Mua vé số online có an toàn không?',
      a: 'Hoàn toàn an toàn. Chúng tôi sử dụng công nghệ mã hóa SSL 256-bit và tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật quốc tế. Thông tin thanh toán được bảo vệ tuyệt đối.'
    },
    {
      q: 'Nếu trúng thưởng, tôi nhận tiền thế nào?',
      a: 'Giải thưởng dưới 10 triệu VNĐ sẽ được chuyển trực tiếp vào tài khoản trong 24h. Giải lớn hơn cần xác minh danh tính và được chi trả theo quy định của pháp luật.'
    },
    {
      q: 'Có tính phí khi sử dụng không?',
      a: 'Xem kết quả và tra cứu hoàn toàn MIỄN PHÍ. Chỉ có phí khi bạn mua vé số (bằng giá vé gốc) và các dịch vụ cao cấp tùy chọn.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Câu Hỏi Thường Gặp</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <button
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4 flex-grow">
                <HelpCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.q}</h3>
              </div>
              {expandedFaq === index ? (
                <ChevronUp className="text-gray-400 flex-shrink-0" size={24} />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
              )}
            </button>
            
            {expandedFaq === index && (
              <div className="px-6 pb-6 animate-fade-in">
                <div className="pl-10 pr-4 pt-2 border-l-2 border-red-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;