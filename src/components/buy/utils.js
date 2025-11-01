// src/components/buy/utils.js

// ============ HELPER FUNCTIONS ============

/**
 * Lấy ngày hôm nay dạng YYYY-MM-DD
 */
export const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Lấy ngày mai
 */
export const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

/**
 * Lấy ngày mốt
 */
export const getDayAfterTomorrowDate = () => {
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);
  return dayAfter.toISOString().split('T')[0];
};

/**
 * Format ngày sang dạng dd/mm/yyyy
 */
export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('vi-VN');
};

/**
 * Kiểm tra vé có sắp hết hạn không (còn dưới 24h)
 */
export const isTicketUrgent = (ngayQuay) => {
  const now = new Date();
  const quayDate = new Date(ngayQuay);
  const hoursDiff = (quayDate - now) / (1000 * 60 * 60);
  return hoursDiff <= 24 && hoursDiff > 0;
};

// ============ MOCK DATA - NHIỀU SỐ HƠN VÀ CÓ STATUS ============

/**
 * Dữ liệu vé số mẫu - chia theo 3 miền
 * Status: 'hot' | 'new' | 'low' | 'sold'
 */
export const TICKET_DATA = {
  nam: [
    { 
      id: 1, 
      so: '123456', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'TP. Hồ Chí Minh', 
      soLuong: 50,
      status: 'hot'
    },
    { 
      id: 2, 
      so: '654321', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'TP. Hồ Chí Minh', 
      soLuong: 30,
      status: 'new'
    },
    { 
      id: 3, 
      so: '888888', 
      gia: 10000, 
      ngay: getDayAfterTomorrowDate(), 
      dai: 'Đồng Nai', 
      soLuong: 0,
      status: 'sold'
    },
    { 
      id: 4, 
      so: '168168', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'TP. Hồ Chí Minh', 
      soLuong: 10,
      status: 'low'
    },
    { 
      id: 5, 
      so: '777777', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'An Giang', 
      soLuong: 100,
      status: 'hot'
    },
    { 
      id: 6, 
      so: '999999', 
      gia: 10000, 
      ngay: getDayAfterTomorrowDate(), 
      dai: 'Đồng Nai', 
      soLuong: 5,
      status: 'low'
    },
    { 
      id: 13, 
      so: '696969', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Bình Dương', 
      soLuong: 45,
      status: 'new'
    },
    { 
      id: 14, 
      so: '111111', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'TP. Hồ Chí Minh', 
      soLuong: 88,
      status: 'hot'
    },
    { 
      id: 15, 
      so: '789789', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'An Giang', 
      soLuong: 15,
      status: 'low'
    },
    { 
      id: 16, 
      so: '369369', 
      gia: 10000, 
      ngay: getDayAfterTomorrowDate(), 
      dai: 'Bình Dương', 
      soLuong: 60,
      status: 'new'
    },
    { 
      id: 17, 
      so: '555555', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Đồng Nai', 
      soLuong: 3,
      status: 'low'
    },
    { 
      id: 18, 
      so: '246246', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'TP. Hồ Chí Minh', 
      soLuong: 70,
      status: 'hot'
    },
  ],
  trung: [
    { 
      id: 7, 
      so: '234567', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Khánh Hòa', 
      soLuong: 40,
      status: 'new'
    },
    { 
      id: 8, 
      so: '876543', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'Phú Yên', 
      soLuong: 60,
      status: 'hot'
    },
    { 
      id: 9, 
      so: '888666', 
      gia: 10000, 
      ngay: getDayAfterTomorrowDate(), 
      dai: 'Huế', 
      soLuong: 8,
      status: 'low'
    },
    { 
      id: 19, 
      so: '135135', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Đà Nẵng', 
      soLuong: 55,
      status: 'new'
    },
    { 
      id: 20, 
      so: '987987', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'Khánh Hòa', 
      soLuong: 12,
      status: 'low'
    },
    { 
      id: 21, 
      so: '456456', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Huế', 
      soLuong: 80,
      status: 'hot'
    },
    { 
      id: 22, 
      so: '321321', 
      gia: 10000, 
      ngay: getDayAfterTomorrowDate(), 
      dai: 'Phú Yên', 
      soLuong: 25,
      status: 'new'
    },
    { 
      id: 23, 
      so: '666666', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Đà Nẵng', 
      soLuong: 90,
      status: 'hot'
    },
  ],
  bac: [
    { 
      id: 10, 
      so: '345678', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Hà Nội', 
      soLuong: 70,
      status: 'hot'
    },
    { 
      id: 11, 
      so: '987654', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'Hải Phòng', 
      soLuong: 0,
      status: 'sold'
    },
    { 
      id: 12, 
      so: '686868', 
      gia: 10000, 
      ngay: getDayAfterTomorrowDate(), 
      dai: 'Hà Nội', 
      soLuong: 12,
      status: 'low'
    },
    { 
      id: 24, 
      so: '147147', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Quảng Ninh', 
      soLuong: 35,
      status: 'new'
    },
    { 
      id: 25, 
      so: '258258', 
      gia: 10000, 
      ngay: getTomorrowDate(), 
      dai: 'Hà Nội', 
      soLuong: 65,
      status: 'hot'
    },
    { 
      id: 26, 
      so: '963963', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Hải Phòng', 
      soLuong: 18,
      status: 'low'
    },
    { 
      id: 27, 
      so: '852852', 
      gia: 10000, 
      ngay: getDayAfterTomorrowDate(), 
      dai: 'Quảng Ninh', 
      soLuong: 42,
      status: 'new'
    },
    { 
      id: 28, 
      so: '741741', 
      gia: 10000, 
      ngay: getTodayDate(), 
      dai: 'Hà Nội', 
      soLuong: 95,
      status: 'hot'
    },
  ]
};

/**
 * Danh sách tỉnh/thành theo từng miền
 */
export const PROVINCES = {
  nam: ['TP. Hồ Chí Minh', 'Đồng Nai', 'An Giang', 'Bình Dương'],
  trung: ['Khánh Hòa', 'Phú Yên', 'Huế', 'Đà Nẵng'],
  bac: ['Hà Nội', 'Hải Phòng', 'Quảng Ninh']
};