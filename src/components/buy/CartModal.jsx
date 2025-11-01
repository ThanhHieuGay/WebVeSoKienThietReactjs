// src/components/buy/CartModal.jsx

import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { formatDate } from './utils';

/**
 * Component modal giỏ hàng
 * NỀN MỜ 30% - VỪA ĐỦ
 * 
 * Props:
 * - isOpen: boolean - modal có đang mở không
 * - cart: mảng vé trong giỏ
 * - onClose: function() - đóng modal
 * - onUpdateQuantity: function(index, change) - tăng/giảm số lượng
 * - onRemove: function(index) - xóa vé khỏi giỏ
 * - onCheckout: function() - thanh toán
 */
export const CartModal = ({ 
  isOpen, 
  cart, 
  onClose, 
  onUpdateQuantity, 
  onRemove, 
  onCheckout 
}) => {
  // Nếu modal không mở thì không render
  if (!isOpen) return null;

  // Tính tổng tiền và số lượng vé
  const total = cart.reduce((sum, item) => sum + (item.gia * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
        
        {/* Header - GRADIENT ĐỎ */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <ShoppingCart size={32} />
            Giỏ Hàng
          </h2>
          <button 
            onClick={onClose} 
            className="text-white hover:bg-red-800 p-2 rounded-full transition-all"
            aria-label="Đóng"
          >
            <X size={32} />
          </button>
        </div>

        {/* Nội dung giỏ hàng */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-200px)]">
          {cart.length === 0 ? (
            // Giỏ hàng trống
            <div className="text-center py-16 text-gray-500">
              <ShoppingCart size={80} className="mx-auto mb-6 opacity-30" />
              <p className="text-2xl font-bold mb-2">Giỏ hàng trống</p>
              <p className="text-lg">Hãy thêm vé số may mắn vào giỏ nhé! 🎰</p>
            </div>
          ) : (
            <>
              {/* Danh sách vé trong giỏ */}
              <div className="space-y-4 mb-6">
                {cart.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all"
                  >
                    {/* Thông tin vé */}
                    <div className="flex-1">
                      <div className="font-extrabold text-2xl text-red-700 mb-1">
                        {item.so}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        📍 {item.dai} • 📅 {formatDate(item.ngay)}
                      </div>
                      <div className="text-lg font-bold text-gray-800">
                        💰 {(item.gia * item.quantity).toLocaleString()} ₫
                      </div>
                    </div>
                    
                    {/* Nút tăng/giảm/xóa */}
                    <div className="flex items-center gap-3">
                      {/* Nút giảm */}
                      <button
                        onClick={() => onUpdateQuantity(index, -1)}
                        className="w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-all font-bold text-xl"
                        aria-label="Giảm số lượng"
                      >
                        <Minus size={20} />
                      </button>
                      
                      {/* Hiển thị số lượng */}
                      <span className="w-12 text-center font-bold text-xl">
                        {item.quantity}
                      </span>
                      
                      {/* Nút tăng */}
                      <button
                        onClick={() => onUpdateQuantity(index, 1)}
                        className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all font-bold text-xl"
                        aria-label="Tăng số lượng"
                      >
                        <Plus size={20} />
                      </button>
                      
                      {/* Nút xóa */}
                      <button
                        onClick={() => onRemove(index)}
                        className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-100 p-2 rounded-full transition-all"
                        aria-label="Xóa vé"
                      >
                        <Trash2 size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tổng tiền */}
              <div className="border-t-4 border-gray-200 pt-6 mb-6">
                <div className="flex justify-between text-2xl font-extrabold text-red-700 mb-3">
                  <span>TỔNG TIỀN:</span>
                  <span>{total.toLocaleString()} ₫</span>
                </div>
                <div className="text-base text-gray-600 text-right font-semibold">
                  📊 Tổng số vé: {totalItems} vé
                </div>
              </div>

              {/* Nút thanh toán */}
              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-5 rounded-2xl font-bold text-xl hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                💳 THANH TOÁN NGAY
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};