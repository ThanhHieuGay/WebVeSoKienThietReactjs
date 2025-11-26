-- ============================================
-- DỮ LIỆU MẪU CHO WEB XỔ SỐ
-- Chạy sau khi đã tạo schema
-- ============================================

-- 1. THÊM TỈNH/ĐÀI
INSERT INTO provinces (code, name, region, draw_days) VALUES
-- MIỀN NAM
('hcm', 'TP. Hồ Chí Minh', 'south', ARRAY['2', '7']),
('dongnai', 'Đồng Nai', 'south', ARRAY['4']),
('cantho', 'Cần Thơ', 'south', ARRAY['4']),
('vungtau', 'Vũng Tàu', 'south', ARRAY['3']),
('bentre', 'Bến Tre', 'south', ARRAY['3']),
('tiengiang', 'Tiền Giang', 'south', ARRAY['1']),
('dongthap', 'Đồng Tháp', 'south', ARRAY['2']),
('camau', 'Cà Mau', 'south', ARRAY['2']),
('baclieu', 'Bạc Liêu', 'south', ARRAY['3']),
('soctrang', 'Sóc Trăng', 'south', ARRAY['4']),
('tayninh', 'Tây Ninh', 'south', ARRAY['5']),
('angiang', 'An Giang', 'south', ARRAY['5']),
('binhthuan', 'Bình Thuận', 'south', ARRAY['5']),
('vinhlong', 'Vĩnh Long', 'south', ARRAY['6']),
('binhduong', 'Bình Dương', 'south', ARRAY['6']),
('travinh', 'Trà Vinh', 'south', ARRAY['6']),
('longan', 'Long An', 'south', ARRAY['7']),
('binhphuoc', 'Bình Phước', 'south', ARRAY['7']),
('haugiang', 'Hậu Giang', 'south', ARRAY['7']),
('kiengiang', 'Kiên Giang', 'south', ARRAY['1']),
('dalat', 'Đà Lạt', 'south', ARRAY['1']),

-- MIỀN TRUNG
('danang', 'Đà Nẵng', 'central', ARRAY['4', '7']),
('khanhhoa', 'Khánh Hòa', 'central', ARRAY['4']),
('phuyen', 'Phú Yên', 'central', ARRAY['2']),
('hue', 'Thừa Thiên Huế', 'central', ARRAY['2']),
('quangnam', 'Quảng Nam', 'central', ARRAY['3']),
('quangngai', 'Quảng Ngãi', 'central', ARRAY['7']),
('binhdinh', 'Bình Định', 'central', ARRAY['5']),
('daklak', 'Đắk Lắk', 'central', ARRAY['3']),
('gialai', 'Gia Lai', 'central', ARRAY['6']),
('quangtri', 'Quảng Trị', 'central', ARRAY['5']),
('quangbinh', 'Quảng Bình', 'central', ARRAY['5']),
('daknong', 'Đắk Nông', 'central', ARRAY['7']),

-- MIỀN BẮC
('hanoi', 'Hà Nội', 'north', ARRAY['2', '3', '4', '5', '6', '7', '8']),
('quangninh', 'Quảng Ninh', 'north', ARRAY['3', '7']),
('bacninh', 'Bắc Ninh', 'north', ARRAY['6']),
('haiphong', 'Hải Phòng', 'north', ARRAY['2', '6']),
('thaibinh', 'Thái Bình', 'north', ARRAY['5', '8']),
('namdinh', 'Nam Định', 'north', ARRAY['3', '7']);

-- ============================================

-- 2. THÊM KẾT QUẢ XỔ SỐ (7 ngày gần nhất)
DO $$
DECLARE
  v_province_id UUID;
  v_date DATE;
  i INTEGER;
BEGIN
  -- Lặp qua 7 ngày
  FOR i IN 0..6 LOOP
    v_date := CURRENT_DATE - i;
    
    -- HCM (Thứ 2 và 7)
    IF EXTRACT(DOW FROM v_date) IN (1, 0) THEN
      SELECT id INTO v_province_id FROM provinces WHERE code = 'hcm';
      INSERT INTO lottery_results (
        province_id, draw_date, status,
        prize_special, prize_first, 
        prize_second, prize_third, prize_fourth,
        prize_fifth, prize_sixth, prize_seventh, prize_eighth,
        total_winners, total_prize_amount
      ) VALUES (
        v_province_id, v_date, 'completed',
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        ARRAY[
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0')
        ],
        ARRAY[
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0')
        ],
        ARRAY[
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
        ],
        ARRAY[
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
        ],
        ARRAY[
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0')
        ],
        ARRAY[
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0')
        ],
        LPAD((10 + FLOOR(RANDOM() * 90))::TEXT, 2, '0'),
        FLOOR(RANDOM() * 50)::INTEGER,
        (RANDOM() * 5000000 + 1000000)::DECIMAL(15,2)
      );
    END IF;

    -- Đồng Nai (Thứ 4)
    IF EXTRACT(DOW FROM v_date) = 3 THEN
      SELECT id INTO v_province_id FROM provinces WHERE code = 'dongnai';
      INSERT INTO lottery_results (
        province_id, draw_date, status,
        prize_special, prize_first, 
        prize_second, prize_third, prize_fourth,
        prize_fifth, prize_sixth, prize_seventh, prize_eighth,
        total_winners, total_prize_amount
      ) VALUES (
        v_province_id, v_date, 'completed',
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        ARRAY[
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0')
        ],
        ARRAY[
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0')
        ],
        ARRAY[
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
        ],
        ARRAY[
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
        ],
        ARRAY[
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0')
        ],
        ARRAY[
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0')
        ],
        LPAD((10 + FLOOR(RANDOM() * 90))::TEXT, 2, '0'),
        FLOOR(RANDOM() * 50)::INTEGER,
        (RANDOM() * 5000000 + 1000000)::DECIMAL(15,2)
      );
    END IF;

    -- Hà Nội (Mỗi ngày)
    SELECT id INTO v_province_id FROM provinces WHERE code = 'hanoi';
    INSERT INTO lottery_results (
      province_id, draw_date, status,
      prize_special, prize_first, 
      prize_second, prize_third, prize_fourth,
      prize_fifth, prize_sixth, prize_seventh,
      total_winners, total_prize_amount
    ) VALUES (
      v_province_id, v_date, 'completed',
      LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
      LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
      ARRAY[
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
      ],
      ARRAY[
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
        LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
      ],
      ARRAY[
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0')
      ],
      ARRAY[
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
        LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0')
      ],
      ARRAY[
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0')
      ],
      ARRAY[
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
        LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0')
      ],
      FLOOR(RANDOM() * 50)::INTEGER,
      (RANDOM() * 5000000 + 1000000)::DECIMAL(15,2)
    );

    -- Đà Nẵng (Thứ 4 và 7)
    IF EXTRACT(DOW FROM v_date) IN (3, 0) THEN
      SELECT id INTO v_province_id FROM provinces WHERE code = 'danang';
      INSERT INTO lottery_results (
        province_id, draw_date, status,
        prize_special, prize_first, 
        prize_second, prize_third, prize_fourth,
        prize_fifth, prize_sixth, prize_seventh, prize_eighth,
        total_winners, total_prize_amount
      ) VALUES (
        v_province_id, v_date, 'completed',
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        ARRAY[
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0')
        ],
        ARRAY[
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
          LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0')
        ],
        ARRAY[
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
        ],
        ARRAY[
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0'),
          LPAD((10000 + FLOOR(RANDOM() * 90000))::TEXT, 5, '0')
        ],
        ARRAY[
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0'),
          LPAD((1000 + FLOOR(RANDOM() * 9000))::TEXT, 4, '0')
        ],
        ARRAY[
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0'),
          LPAD((100 + FLOOR(RANDOM() * 900))::TEXT, 3, '0')
        ],
        LPAD((10 + FLOOR(RANDOM() * 90))::TEXT, 2, '0'),
        FLOOR(RANDOM() * 50)::INTEGER,
        (RANDOM() * 5000000 + 1000000)::DECIMAL(15,2)
      );
    END IF;

  END LOOP;
END $$;

-- ============================================

-- 3. THÊM VÉ SỐ (Cho 3 ngày tới)
DO $$
DECLARE
  v_province_id UUID;
  v_date DATE;
  i INTEGER;
  j INTEGER;
BEGIN
  FOR i IN 1..3 LOOP
    v_date := CURRENT_DATE + i;
    
    -- Tạo vé cho HCM
    SELECT id INTO v_province_id FROM provinces WHERE code = 'hcm';
    FOR j IN 1..50 LOOP
      INSERT INTO tickets (
        ticket_number, province_id, draw_date, 
        price, quantity_total, quantity_available,
        status, badge
      ) VALUES (
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        v_province_id, v_date,
        10000, 
        FLOOR(RANDOM() * 100 + 1)::INTEGER,
        FLOOR(RANDOM() * 100 + 1)::INTEGER,
        'available',
        CASE 
          WHEN RANDOM() < 0.2 THEN 'hot'
          WHEN RANDOM() < 0.5 THEN 'new'
          ELSE NULL
        END
      ) ON CONFLICT DO NOTHING;
    END LOOP;

    -- Tạo vé cho Hà Nội
    SELECT id INTO v_province_id FROM provinces WHERE code = 'hanoi';
    FOR j IN 1..50 LOOP
      INSERT INTO tickets (
        ticket_number, province_id, draw_date, 
        price, quantity_total, quantity_available,
        status, badge
      ) VALUES (
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        v_province_id, v_date,
        10000, 
        FLOOR(RANDOM() * 100 + 1)::INTEGER,
        FLOOR(RANDOM() * 100 + 1)::INTEGER,
        'available',
        CASE 
          WHEN RANDOM() < 0.2 THEN 'hot'
          WHEN RANDOM() < 0.5 THEN 'new'
          ELSE NULL
        END
      ) ON CONFLICT DO NOTHING;
    END LOOP;

    -- Tạo vé cho Đà Nẵng
    SELECT id INTO v_province_id FROM provinces WHERE code = 'danang';
    FOR j IN 1..50 LOOP
      INSERT INTO tickets (
        ticket_number, province_id, draw_date, 
        price, quantity_total, quantity_available,
        status, badge
      ) VALUES (
        LPAD((100000 + FLOOR(RANDOM() * 900000))::TEXT, 6, '0'),
        v_province_id, v_date,
        10000, 
        FLOOR(RANDOM() * 100 + 1)::INTEGER,
        FLOOR(RANDOM() * 100 + 1)::INTEGER,
        'available',
        CASE 
          WHEN RANDOM() < 0.2 THEN 'hot'
          WHEN RANDOM() < 0.5 THEN 'new'
          ELSE NULL
        END
      ) ON CONFLICT DO NOTHING;
    END LOOP;
  END LOOP;
END $$;

-- ============================================

-- 4. THÊM TIN TÚC
INSERT INTO news (title, content, summary, type, category, views, published_at) VALUES
(
  'Giải Jackpot 50 tỷ đồng: Chủ nhân may mắn đến từ TP.HCM',
  'Một người chơi may mắn tại TP. Hồ Chí Minh đã trúng giải Jackpot trị giá 50 tỷ đồng trong kỳ quay số ngày 01/11/2025. Đây là giải thưởng lớn nhất trong năm 2025. Theo thông tin từ công ty xổ số, người trúng giải đã sử dụng dãy số may mắn từ ngày sinh của các thành viên trong gia đình. Người trúng giải chia sẻ: "Tôi chơi xổ số được 10 năm nay, lần này thật sự không ngờ được may mắn đến vậy. Tôi sẽ sử dụng số tiền này để đầu tư kinh doanh và giúp đỡ cộng đồng."',
  'Một người chơi tại TP.HCM trúng giải Jackpot 50 tỷ đồng, giải thưởng lớn nhất năm 2025.',
  'hot',
  'winner',
  15234,
  NOW() - INTERVAL '2 days'
),
(
  'Hướng dẫn cách chọn số may mắn hiệu quả',
  'Chọn số xổ số không chỉ dựa vào may mắn mà còn có những phương pháp khoa học. Các chuyên gia thống kê đã phân tích hàng triệu kết quả xổ số trong 10 năm qua và đưa ra một số tips hữu ích: 1) Chọn số dựa trên tần suất xuất hiện, 2) Kết hợp số chẵn và lẻ, 3) Tránh chọn các dãy số liên tiếp, 4) Theo dõi các con số "nóng" gần đây. Tuy nhiên, cần nhớ rằng xổ số vẫn là trò chơi may rủi và không có công thức chắc chắn 100%.',
  'Các mẹo chọn số xổ số dựa trên phân tích thống kê và kinh nghiệm của chuyên gia.',
  'new',
  'guide',
  8921,
  NOW() - INTERVAL '1 day'
),
(
  'Kết quả xổ số miền Nam ngày 03/11/2025',
  'Kết quả chi tiết xổ số các tỉnh miền Nam trong ngày hôm nay. TP. Hồ Chí Minh: Giải ĐB 123456, Giải Nhất 654321... Đồng Nai: Giải ĐB 789012... Cần Thơ: Giải ĐB 345678... Tổng cộng có 247 giải thưởng được trao với tổng giá trị hơn 15 tỷ đồng. Trong đó có 3 giải đặc biệt và 12 giải nhất. Xin chúc mừng các chủ nhân may mắn!',
  'Cập nhật đầy đủ kết quả xổ số các tỉnh miền Nam ngày 03/11/2025.',
  'hot',
  'result',
  12456,
  NOW()
),
(
  'Lịch quay xổ số tuần tới (04/11 - 10/11/2025)',
  'Lịch chi tiết các đài xổ số sẽ quay trong tuần tới. Thứ Hai: Tiền Giang, Kiên Giang, Đà Lạt. Thứ Ba: Vũng Tàu, TP.HCM, Đồng Tháp... Thứ Tư: Bến Tre, Đồng Nai, Cần Thơ... Thứ Năm: Miền Bắc XS Thứ 5... Thứ Sáu: Miền Bắc XS Thứ 6... Thứ Bảy: Miền Bắc XS Thứ 7... Chủ Nhật: TP.HCM, Long An, Tiền Giang.',
  'Thông tin lịch quay số các đài trong tuần từ 04/11 đến 10/11/2025.',
  'new',
  'general',
  5678,
  NOW() - INTERVAL '3 hours'
),
(
  'Top 5 đài xổ số có tỷ lệ trúng cao nhất tháng 10',
  'Theo thống kê từ hệ thống, trong tháng 10/2025, 5 đài có tỷ lệ trúng thưởng cao nhất là: 1) TP. Hồ Chí Minh với 1.847 vé trúng, 2) Hà Nội với 1.623 vé trúng, 3) Đà Nẵng với 1.245 vé trúng, 4) Đồng Nai với 987 vé trúng, 5) Cần Thơ với 876 vé trúng. Đây là thống kê dựa trên tổng số vé đã bán và số vé trúng thưởng thực tế.',
  'Bảng xếp hạng 5 đài có tỷ lệ trúng cao nhất trong tháng 10/2025.',
  'popular',
  'general',
  9234,
  NOW() - INTERVAL '5 days'
);

-- ============================================

-- 5. TẠO 1 USER MẪU (để test)
-- Lưu ý: firebase_uid phải match với UID từ Firebase sau khi đăng nhập
INSERT INTO users (
  firebase_uid, email, display_name, phone_number, 
  role, status, balance
) VALUES (
  'SAMPLE_FIREBASE_UID_123', 
  'test@example.com', 
  'Nguyễn Văn Test',
  '0901234567',
  'user',
  'active',
  500000
);

-- ============================================

-- 6. VIEWS HỮU ÍCH

-- View: Kết quả xổ số kèm tên tỉnh
CREATE OR REPLACE VIEW v_lottery_results AS
SELECT 
  lr.*,
  p.code as province_code,
  p.name as province_name,
  p.region
FROM lottery_results lr
JOIN provinces p ON lr.province_id = p.id
ORDER BY lr.draw_date DESC, p.name;

-- View: Vé số kèm thông tin tỉnh
CREATE OR REPLACE VIEW v_tickets AS
SELECT 
  t.*,
  p.code as province_code,
  p.name as province_name,
  p.region
FROM tickets t
JOIN provinces p ON t.province_id = p.id
ORDER BY t.draw_date DESC, t.created_at DESC;

-- View: Đơn hàng kèm thông tin user
CREATE OR REPLACE VIEW v_orders AS
SELECT 
  o.*,
  u.display_name,
  u.email,
  u.role as user_role,
  COUNT(oi.id) as total_items
FROM orders o
JOIN users u ON o.user_id = u.id
LEFT JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, u.display_name, u.email, u.role
ORDER BY o.created_at DESC;

-- ============================================

COMMENT ON VIEW v_lottery_results IS 'View kết quả xổ số với đầy đủ thông tin tỉnh';
COMMENT ON VIEW v_tickets IS 'View vé số với thông tin tỉnh';
COMMENT ON VIEW v_orders IS 'View đơn hàng với thông tin user';

-- ============================================
-- HOÀN TẤT! DATABASE ĐÃ SẴN SÀNG
-- ============================================