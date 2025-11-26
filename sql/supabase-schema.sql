-- ============================================
-- SCHEMA DATABASE CHO WEB XỔ SỐ
-- Sử dụng Supabase + Firebase Auth
-- ============================================

-- 1. BẢNG USERS - Thông tin người dùng
-- Sync từ Firebase Authentication
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  firebase_uid TEXT UNIQUE NOT NULL, -- UID từ Firebase
  email TEXT UNIQUE NOT NULL,
  display_name TEXT,
  phone_number TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'agent', 'admin')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'locked', 'pending')),
  balance DECIMAL(15, 2) DEFAULT 0, -- Số dư tài khoản
  total_spent DECIMAL(15, 2) DEFAULT 0, -- Tổng đã chi tiêu
  total_won DECIMAL(15, 2) DEFAULT 0, -- Tổng đã trúng
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index cho tìm kiếm nhanh
CREATE INDEX idx_users_firebase_uid ON users(firebase_uid);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);

-- ============================================

-- 2. BẢNG PROVINCES - Danh sách tỉnh/đài
CREATE TABLE provinces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL, -- 'hcm', 'hanoi', 'danang'...
  name TEXT NOT NULL, -- 'TP. Hồ Chí Minh'
  region TEXT NOT NULL CHECK (region IN ('north', 'central', 'south')),
  draw_days TEXT[], -- ['2', '7'] = Thứ 2 & Thứ 7
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX idx_provinces_region ON provinces(region);
CREATE INDEX idx_provinces_code ON provinces(code);

-- ============================================

-- 3. BẢNG LOTTERY_RESULTS - Kết quả xổ số
CREATE TABLE lottery_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  province_id UUID REFERENCES provinces(id) ON DELETE CASCADE,
  draw_date DATE NOT NULL, -- Ngày quay
  
  -- Các giải thưởng (lưu dạng JSON cho linh hoạt)
  prize_special TEXT, -- Giải ĐB: '123456'
  prize_first TEXT, -- Giải Nhất: '654321'
  prize_second TEXT[], -- Giải Nhì: ['112233', '445566']
  prize_third TEXT[], -- Giải Ba
  prize_fourth TEXT[], -- Giải Tư
  prize_fifth TEXT[], -- Giải Năm
  prize_sixth TEXT[], -- Giải Sáu
  prize_seventh TEXT[], -- Giải Bảy
  prize_eighth TEXT, -- Giải Tám (chỉ có ở Nam/Trung)
  
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'drawing', 'completed')),
  total_winners INTEGER DEFAULT 0, -- Tổng số người trúng
  total_prize_amount DECIMAL(15, 2) DEFAULT 0, -- Tổng giá trị giải thưởng
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(province_id, draw_date) -- Mỗi tỉnh chỉ có 1 kết quả/ngày
);

-- Index
CREATE INDEX idx_lottery_results_date ON lottery_results(draw_date DESC);
CREATE INDEX idx_lottery_results_province ON lottery_results(province_id);
CREATE INDEX idx_lottery_results_status ON lottery_results(status);

-- ============================================

-- 4. BẢNG TICKETS - Vé số
CREATE TABLE tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_number TEXT NOT NULL, -- '123456'
  province_id UUID REFERENCES provinces(id) ON DELETE CASCADE,
  draw_date DATE NOT NULL, -- Ngày quay
  
  price DECIMAL(10, 2) NOT NULL DEFAULT 10000, -- Giá vé
  quantity_total INTEGER NOT NULL DEFAULT 1, -- Tổng số vé phát hành
  quantity_available INTEGER NOT NULL DEFAULT 1, -- Số vé còn lại
  
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'sold', 'reserved', 'expired')),
  badge TEXT CHECK (badge IN ('hot', 'new', 'low', null)), -- Badge hiển thị
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(ticket_number, province_id, draw_date)
);

-- Index
CREATE INDEX idx_tickets_number ON tickets(ticket_number);
CREATE INDEX idx_tickets_province ON tickets(province_id);
CREATE INDEX idx_tickets_date ON tickets(draw_date);
CREATE INDEX idx_tickets_status ON tickets(status);

-- ============================================

-- 5. BẢNG ORDERS - Đơn hàng
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_code TEXT UNIQUE NOT NULL, -- 'DH1731234567890'
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Thông tin khách hàng
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  customer_address TEXT,
  
  -- Thông tin thanh toán
  subtotal DECIMAL(15, 2) NOT NULL, -- Tạm tính
  discount DECIMAL(15, 2) DEFAULT 0, -- Giảm giá
  total DECIMAL(15, 2) NOT NULL, -- Tổng cộng
  
  payment_method TEXT NOT NULL CHECK (payment_method IN ('momo', 'zalopay', 'banking', 'card')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'cancelled')),
  
  notes TEXT, -- Ghi chú
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_code ON orders(order_code);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);
CREATE INDEX idx_orders_created ON orders(created_at DESC);

-- ============================================

-- 6. BẢNG ORDER_ITEMS - Chi tiết đơn hàng
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  ticket_id UUID REFERENCES tickets(id) ON DELETE CASCADE,
  
  ticket_number TEXT NOT NULL,
  province_name TEXT NOT NULL,
  draw_date DATE NOT NULL,
  
  quantity INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL, -- Giá tại thời điểm mua
  subtotal DECIMAL(10, 2) NOT NULL, -- quantity * price
  
  is_winner BOOLEAN DEFAULT false, -- Có trúng không
  prize_name TEXT, -- Tên giải: 'Giải ĐB', 'Giải Nhất'...
  prize_amount DECIMAL(15, 2) DEFAULT 0, -- Số tiền trúng
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_ticket ON order_items(ticket_id);
CREATE INDEX idx_order_items_winner ON order_items(is_winner);

-- ============================================

-- 7. BẢNG TRANSACTIONS - Lịch sử giao dịch
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
  
  type TEXT NOT NULL CHECK (type IN ('deposit', 'withdraw', 'purchase', 'refund', 'prize')),
  amount DECIMAL(15, 2) NOT NULL,
  balance_before DECIMAL(15, 2) NOT NULL,
  balance_after DECIMAL(15, 2) NOT NULL,
  
  description TEXT,
  status TEXT DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed')),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX idx_transactions_user ON transactions(user_id);
CREATE INDEX idx_transactions_type ON transactions(type);
CREATE INDEX idx_transactions_created ON transactions(created_at DESC);

-- ============================================

-- 8. BẢNG NEWS - Tin tức
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT, -- Tóm tắt ngắn
  image_url TEXT,
  
  type TEXT DEFAULT 'new' CHECK (type IN ('hot', 'new', 'popular')),
  category TEXT DEFAULT 'general' CHECK (category IN ('general', 'result', 'winner', 'guide')),
  
  author_id UUID REFERENCES users(id) ON DELETE SET NULL,
  views INTEGER DEFAULT 0,
  
  is_published BOOLEAN DEFAULT true,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX idx_news_published ON news(published_at DESC);
CREATE INDEX idx_news_type ON news(type);
CREATE INDEX idx_news_category ON news(category);

-- ============================================

-- 9. BẢNG CHECKING_HISTORY - Lịch sử tra cứu vé
CREATE TABLE checking_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  
  ticket_number TEXT NOT NULL,
  province_code TEXT NOT NULL,
  draw_date DATE NOT NULL,
  
  is_winner BOOLEAN NOT NULL,
  prize_name TEXT, -- Nếu trúng
  
  ip_address TEXT, -- Lưu IP để phân tích
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX idx_checking_history_user ON checking_history(user_id);
CREATE INDEX idx_checking_history_created ON checking_history(created_at DESC);

-- ============================================

-- FUNCTIONS & TRIGGERS

-- 1. Tự động cập nhật updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger cho các bảng cần
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lottery_results_updated_at BEFORE UPDATE ON lottery_results
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tickets_updated_at BEFORE UPDATE ON tickets
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================

-- 2. Tự động giảm số lượng vé khi đặt hàng
CREATE OR REPLACE FUNCTION decrease_ticket_quantity()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE tickets 
  SET quantity_available = quantity_available - NEW.quantity
  WHERE id = NEW.ticket_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_order_item_insert 
AFTER INSERT ON order_items
FOR EACH ROW EXECUTE FUNCTION decrease_ticket_quantity();

-- ============================================

-- 3. Cập nhật tổng chi tiêu của user
CREATE OR REPLACE FUNCTION update_user_spent()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_status = 'paid' THEN
    UPDATE users 
    SET total_spent = total_spent + NEW.total
    WHERE id = NEW.user_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_order_paid 
AFTER UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION update_user_spent();

-- ============================================

-- ROW LEVEL SECURITY (RLS)

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE checking_history ENABLE ROW LEVEL SECURITY;

-- Policy cho users: Chỉ xem được thông tin của mình
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid()::text = firebase_uid);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid()::text = firebase_uid);

-- Policy cho orders: User chỉ xem đơn hàng của mình
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (
    user_id IN (SELECT id FROM users WHERE firebase_uid = auth.uid()::text)
  );

-- Admin có thể xem tất cả
CREATE POLICY "Admins can view all orders" ON orders
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE firebase_uid = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- ============================================

COMMENT ON TABLE users IS 'Bảng người dùng - sync từ Firebase Auth';
COMMENT ON TABLE provinces IS 'Danh sách tỉnh/đài xổ số';
COMMENT ON TABLE lottery_results IS 'Kết quả xổ số theo ngày';
COMMENT ON TABLE tickets IS 'Vé số có thể mua';
COMMENT ON TABLE orders IS 'Đơn hàng mua vé';
COMMENT ON TABLE order_items IS 'Chi tiết vé trong đơn hàng';
COMMENT ON TABLE transactions IS 'Lịch sử giao dịch tài chính';
COMMENT ON TABLE news IS 'Tin tức website';
COMMENT ON TABLE checking_history IS 'Lịch sử tra cứu vé';