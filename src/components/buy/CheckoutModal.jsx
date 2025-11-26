// src/components/buy/CheckoutModal.jsx - ĐÃ SỬA ENCODING

import React, { useState, useEffect } from 'react';
import { X, CreditCard, Smartphone, Building2, Wallet, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { formatDate } from './utils';

/**
 * Component modal thanh toán với bill chi tiết
 * ✅ TỰ ĐỘNG ĐIỀN THÔNG TIN TỪ TÀI KHOẢN ĐÃ ĐĂNG NHẬP
 * ✅ FIX: z-index = 9999 để không bị header che
 */
export const CheckoutModal = ({ 
  isOpen, 
  cart, 
  onClose, 
  onConfirmPayment,
  currentUser
}) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: ''
  });

  // ✅ TỰ ĐỘNG ĐIỀN THÔNG TIN KHI MỞ MODAL
  useEffect(() => {
    if (isOpen && currentUser) {
      setCustomerInfo({
        fullName: currentUser.displayName || '',
        phone: customerInfo.phone || '',
        email: currentUser.email || '',
        address: customerInfo.address || ''
      });
    }
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  // Tính toán
  const subtotal = cart.reduce((sum, item) => sum + (item.gia * item.quantity), 0);
  const discount = 0;
  const total = subtotal - discount;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Phương thức thanh toán
  const paymentMethods = [
    { 
      id: 'momo', 
      name: 'Ví MoMo', 
      icon: <Smartphone className="text-pink-600" size={24} />,
      desc: 'Quét mã QR hoặc liên kết ví'
    },
    { 
      id: 'zalopay', 
      name: 'ZaloPay', 
      icon: <Wallet className="text-blue-600" size={24} />,
      desc: 'Thanh toán qua ví ZaloPay'
    },
    { 
      id: 'banking', 
      name: 'Chuyển khoản ngân hàng', 
      icon: <Building2 className="text-green-600" size={24} />,
      desc: 'Chuyển khoản qua Internet Banking'
    },
    { 
      id: 'card', 
      name: 'Thẻ ATM/Visa/Master', 
      icon: <CreditCard className="text-orange-600" size={24} />,
      desc: 'Thanh toán bằng thẻ ngân hàng'
    }
  ];

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleContinue = () => {
    if (step === 1) {
      // Validate thông tin khách hàng
      if (!customerInfo.fullName || !customerInfo.phone) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!paymentMethod) {
        alert('Vui lòng chọn phương thức thanh toán!');
        return;
      }
      // Xử lý thanh toán
      onConfirmPayment({ customerInfo, paymentMethod, cart, total });
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNewOrder = () => {
    setStep(1);
    setPaymentMethod('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}
    >
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex justify-between items-center flex-shrink-0">
          <div>
            <h2 className="text-3xl font-bold mb-1">
              {step === 3 ? '✅ Đặt Hàng Thành Công' : '💳 Thanh Toán Đơn Hàng'}
            </h2>
            <p className="text-red-100">
              {step === 1 && 'Bước 1: Thông tin khách hàng'}
              {step === 2 && 'Bước 2: Chọn phương thức thanh toán'}
              {step === 3 && 'Đơn hàng của bạn đã được xác nhận'}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:bg-red-800 p-2 rounded-full transition-all"
            aria-label="Đóng"
          >
            <X size={32} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Cột trái - Bill đơn hàng */}
            <div className="lg:col-span-2">
              
              {/* BƯỚC 1: Thông tin khách hàng */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Thông Tin Khách Hàng
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Họ và tên <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={customerInfo.fullName}
                        onChange={handleInputChange}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Số điện thoại <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        placeholder="0901234567"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Địa chỉ
                      </label>
                      <textarea
                        name="address"
                        value={customerInfo.address}
                        onChange={handleInputChange}
                        placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* BƯỚC 2: Chọn phương thức thanh toán */}
              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Chọn Phương Thức Thanh Toán
                  </h3>
                  
                  <div className="space-y-3">
                    {paymentMethods.map(method => (
                      <div
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-5 border-3 rounded-2xl cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? 'border-red-600 bg-red-50 ring-4 ring-red-200'
                            : 'border-gray-300 hover:border-red-400 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            paymentMethod === method.id ? 'bg-white' : 'bg-gray-100'
                          }`}>
                            {method.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-lg text-gray-800">{method.name}</div>
                            <div className="text-sm text-gray-600">{method.desc}</div>
                          </div>
                          <ChevronRight className={`${
                            paymentMethod === method.id ? 'text-red-600' : 'text-gray-400'
                          }`} size={24} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Thông tin thanh toán */}
                  {paymentMethod === 'banking' && (
                    <div className="mt-6 p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                      <h4 className="font-bold text-lg mb-3 text-blue-800">📋 Thông Tin Chuyển Khoản</h4>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Ngân hàng:</strong> Vietcombank</p>
                        <p><strong>Số tài khoản:</strong> 0123456789</p>
                        <p><strong>Chủ tài khoản:</strong> CÔNG TY VÉ SỐ TRỰC TUYẾN</p>
                        <p><strong>Nội dung:</strong> <span className="font-mono bg-white px-2 py-1 rounded">DH{Date.now()}</span></p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* BƯỚC 3: Hoàn thành */}
              {step === 3 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={60} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">
                    Đặt Hàng Thành Công! 🎉
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Cảm ơn <strong>{customerInfo.fullName}</strong> đã mua vé số tại hệ thống của chúng tôi.<br />
                    Thông tin đơn hàng đã được gửi về email <strong>{customerInfo.email}</strong>
                  </p>
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-5 mb-6 inline-block">
                    <p className="text-gray-700 mb-2">
                      <strong>Mã đơn hàng:</strong> <span className="font-mono text-lg text-red-600">DH{Date.now()}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Vui lòng lưu lại mã đơn hàng để tra cứu
                    </p>
                  </div>
                  <button
                    onClick={handleNewOrder}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:scale-105"
                  >
                    Đặt Đơn Hàng Mới
                  </button>
                </div>
              )}
            </div>

            {/* Cột phải - Tóm tắt đơn hàng */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 lg:sticky lg:top-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-3">
                  📋 Đơn Hàng Của Bạn
                </h3>
                
                {/* Danh sách vé */}
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-lg text-red-700">
                          {item.so}
                        </div>
                        <div className="text-sm text-gray-600">
                          x{item.quantity}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        📍 {item.dai}<br />
                        📅 {formatDate(item.ngay)}
                      </div>
                      <div className="text-right font-bold text-gray-800">
                        {(item.gia * item.quantity).toLocaleString()} ₫
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tổng tiền */}
                <div className="border-t-2 border-gray-300 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Tạm tính ({totalItems} vé):</span>
                    <span className="font-semibold">{subtotal.toLocaleString()} ₫</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Giảm giá:</span>
                      <span className="font-semibold">-{discount.toLocaleString()} ₫</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold text-red-600 pt-3 border-t border-gray-300">
                    <span>TỔNG CỘNG:</span>
                    <span>{total.toLocaleString()} ₫</span>
                  </div>
                </div>

                {/* Lưu ý */}
                {step !== 3 && (
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex gap-2 text-sm text-gray-700">
                      <AlertCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <p>
                        Vé số sẽ được gửi về email sau khi thanh toán thành công
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Action buttons */}
        {step !== 3 && (
          <div className="border-t-2 border-gray-200 p-6 bg-gray-50 flex justify-between items-center flex-shrink-0">
            <div>
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all"
                >
                  ← Quay Lại
                </button>
              )}
            </div>
            <button
              onClick={handleContinue}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:scale-105 flex items-center gap-2"
            >
              {step === 1 ? 'Tiếp Tục →' : 'Xác Nhận Thanh Toán 💳'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};