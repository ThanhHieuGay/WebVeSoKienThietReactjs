// src/components/contact/ContactForm.jsx

import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // ⚙️ Gửi email thật bằng EmailJS
    emailjs
      .send(
        'service_6p7cs3h',       // ✅ service ID của bạn
        'template_dsg4mr8',      // ✅ template ID bạn tạo
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        'ztHiAs-kMsI-fq9mP'      // ✅ public key của bạn
      )
      .then(
        () => {
          setStatus('success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          console.error('Email error:', error);
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-soft">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Gửi Tin Nhắn</h2>
      <p className="text-gray-600 mb-6">
        Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 24h
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Họ và Tên *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-colors"
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-colors"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Số Điện Thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-colors"
              placeholder="0123456789"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Chủ Đề *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-colors"
          >
            <option value="">Chọn chủ đề</option>
            <option value="support">Hỗ Trợ Kỹ Thuật</option>
            <option value="question">Câu Hỏi</option>
            <option value="feedback">Góp Ý</option>
            <option value="business">Hợp Tác Kinh Doanh</option>
            <option value="other">Khác</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nội Dung *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-colors resize-none"
            placeholder="Nhập nội dung tin nhắn của bạn..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
        >
          {status === 'loading' && 'Đang gửi...'}
          {status === 'success' && '✓ Đã gửi thành công!'}
          {status === 'error' && '✗ Gửi thất bại, thử lại!'}
          {!status && (
            <>
              <Send size={20} />
              Gửi Tin Nhắn
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
