// src/data/newsData.js

export const newsData = [
  { 
    id: 1, 
    type: 'hot', 
    title: 'Người trúng Jackpot 92 tỷ đã nhận thưởng', 
    content: 'Khách hàng may mắn ở Hà Nội đã chính thức lĩnh thưởng Vietlott. Đây là một trong những giải thưởng lớn nhất trong năm 2025.', 
    date: '2025-10-08',
    views: 15420
  },
  { 
    id: 2, 
    type: 'hot', 
    title: 'Thống kê những con số thường xuất hiện trong tháng 9', 
    content: 'Tổng hợp từ 30 kỳ quay gần đây, số 88, 68, 86 dẫn đầu với tần suất xuất hiện cao nhất.', 
    date: '2025-10-07',
    views: 12350
  },
  { 
    id: 3, 
    type: 'new', 
    title: 'Miền Nam khai trương thêm 2 đại lý mới', 
    content: 'Người dân có thêm lựa chọn mua vé số tại TP.HCM và Đồng Nai với nhiều ưu đãi hấp dẫn.', 
    date: '2025-10-06',
    views: 8520
  },
  { 
    id: 4, 
    type: 'hot', 
    title: 'Cặp vợ chồng trúng 45 tỷ từ vé số cào', 
    content: 'Hai vợ chồng ở Đồng Nai mua vé thử may mắn và trúng giải lớn, quyết định dùng tiền làm từ thiện.', 
    date: '2025-10-05',
    views: 18750
  },
  { 
    id: 5, 
    type: 'new', 
    title: 'Ứng dụng mobile mua vé số chính thức ra mắt', 
    content: 'Giờ đây bạn có thể mua vé số trực tuyến dễ dàng với giao diện thân thiện và bảo mật cao.', 
    date: '2025-10-04',
    views: 9840
  },
  { 
    id: 6, 
    type: 'popular', 
    title: 'Chương trình khuyến mãi tháng 10', 
    content: 'Mua 5 vé tặng 1 vé, áp dụng từ ngày 1-15/10. Nhiều phần quà giá trị đang chờ bạn.', 
    date: '2025-10-03',
    views: 11200
  },
  { 
    id: 7, 
    type: 'new', 
    title: 'Hướng dẫn cách chọn số may mắn theo phong thủy', 
    content: 'Các chuyên gia chia sẻ bí quyết chọn số dựa trên ngày sinh, mệnh và tuổi để tăng vận may.', 
    date: '2025-10-02',
    views: 14580
  },
  { 
    id: 8, 
    type: 'popular', 
    title: 'Top 10 con số được mua nhiều nhất tuần qua', 
    content: 'Số 88, 68, 86 dẫn đầu danh sách các con số hot được người chơi lựa chọn nhiều nhất.', 
    date: '2025-10-01',
    views: 16420
  },
  { 
    id: 9, 
    type: 'new', 
    title: 'Xổ số Miền Bắc có thêm giải Jackpot 2', 
    content: 'Giải thưởng phụ lên đến 10 tỷ đồng mỗi kỳ, tăng cơ hội trúng thưởng cho người chơi.', 
    date: '2025-09-30',
    views: 13670
  },
  { 
    id: 10, 
    type: 'hot', 
    title: 'Kết quả xổ số tháng 10: Jackpot tích lũy lên 120 tỷ', 
    content: 'Kỳ quay mới nhất chưa có người trúng, giải thưởng tiếp tục tăng cao.', 
    date: '2025-10-15',
    views: 20500
  },
  { 
    id: 11, 
    type: 'popular', 
    title: 'Mẹo chơi xổ số thông minh để tăng cơ hội thắng', 
    content: 'Chia sẻ từ người chơi lâu năm: Kết hợp thống kê và may mắn.', 
    date: '2025-10-14',
    views: 17890
  },
  { 
    id: 12, 
    type: 'new', 
    title: 'Sự kiện offline: Gặp gỡ người trúng giải lớn tại Hà Nội', 
    content: 'Vietlott tổ chức hội thảo chia sẻ kinh nghiệm trúng thưởng.', 
    date: '2025-10-13',
    views: 11230
  }
];

export const newsDetailData = {
  // ======================================================================
  // ID 1 – Người trúng Jackpot 92 tỷ
  // ======================================================================
  1: {
    id: 1,
    type: 'hot',
    title: 'Người trúng Jackpot 92 tỷ đã nhận thưởng',
    summary: 'Sau nhiều ngày chờ đợi, người chơi may mắn đã chính thức đến trụ sở Vietlott tại Hà Nội để nhận giải thưởng Jackpot trị giá 92 tỷ đồng. Đây là một trong những giải thưởng lớn nhất trong năm 2025.',
    content: `
      <p class="mb-4">Vào sáng ngày <strong>8/10/2025</strong>, ông <em>Nguyễn Văn A</em> (tên đã được thay đổi theo yêu cầu bảo mật) đã có mặt tại trụ sở chính của Vietlott tại Hà Nội để nhận giải thưởng Jackpot trị giá <strong>92 tỷ đồng</strong>. Đây là giải thưởng lớn thứ 5 được trao trong năm nay, đánh dấu một cột mốc đáng nhớ trong lịch sử xổ số Việt Nam.</p>

      <p class="mb-4">Theo thông tin từ Vietlott, vé số trúng giải được mua vào ngày <strong>1/10/2025</strong> tại một đại lý nhỏ nằm trên đường <strong>Đống Đa, Hà Nội</strong>. Ông A cho biết ông đã chơi xổ số hơn <strong>10 năm</strong>, nhưng chưa bao giờ nghĩ mình sẽ trở thành tỷ phú chỉ sau một đêm.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Hành trình đến với giải thưởng</h2>
      <p class="mb-4">Ông A chia sẻ rằng ông thường chọn số theo <strong>ngày sinh nhật của con gái</strong> và <strong>ngày kỷ niệm cưới</strong>. Dãy số may mắn lần này là: <strong class="text-red-700 text-lg">12-25-33-41-58-68</strong>. Ông cho biết: “Tôi không tin vào mắt mình khi thấy tất cả các con số đều trùng khớp. Tôi đã kiểm tra đi kiểm tra lại đến 5 lần mới dám tin.”</p>

      <p class="mb-4">Sau khi xác nhận tại đại lý, ông A đã liên hệ ngay với tổng đài Vietlott để được hướng dẫn thủ tục nhận thưởng. Chỉ trong vòng <strong>48 giờ</strong>, mọi giấy tờ đã được chuẩn bị đầy đủ. Đại diện Vietlott cho biết: “Chúng tôi luôn hỗ trợ tối đa cho người trúng giải, đặc biệt là những giải thưởng lớn như thế này.”</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Kế hoạch sử dụng tiền thưởng</h2>
      <p class="mb-4">Khi được hỏi về kế hoạch sử dụng số tiền lớn này, ông A cho biết ông đã lên kế hoạch rất chi tiết:</p>
      
      <ul class="space-y-3 mb-6 ml-4 text-gray-700">
        <li><strong>30 tỷ đồng:</strong> Mua nhà mới cho gia đình tại khu đô thị cao cấp ở Hà Nội</li>
        <li><strong>20 tỷ đồng:</strong> Đầu tư kinh doanh mở chuỗi quán cà phê</li>
        <li><strong>15 tỷ đồng:</strong> Gửi tiết kiệm dài hạn cho hai con đi du học</li>
        <li><strong>10 tỷ đồng:</strong> Trả nợ ngân hàng và hỗ trợ anh em họ hàng</li>
        <li><strong>10 tỷ đồng:</strong> Làm từ thiện xây trường học ở vùng sâu vùng xa</li>
        <li><strong>7 tỷ đồng:</strong> Du lịch vòng quanh thế giới cùng gia đình</li>
      </ul>

      <blockquote class="border-l-4 border-red-600 pl-6 py-4 my-6 bg-red-50 rounded-r-xl italic text-gray-700">
        "Tôi không muốn tiền làm thay đổi cuộc sống gia đình. Tôi vẫn sẽ sống giản dị, nhưng giờ đây tôi có thể giúp đỡ nhiều người hơn. Tôi sẽ dành một phần lớn để làm từ thiện, đặc biệt là hỗ trợ trẻ em nghèo và người già neo đơn." – ông Nguyễn Văn A chia sẻ.
      </blockquote>

      <h3\\/3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Những con số may mắn</h3>
      <p class="mb-4">Vé số trúng giải có dãy số: <strong class="text-red-700 text-lg">12-25-33-41-58-68</strong>. Đại diện Vietlott cho biết đây là dãy số được nhiều người chơi trong cả nước lựa chọn trong tháng 9 và tháng 10. Đặc biệt, số <strong>68</strong> và <strong>88</strong> luôn nằm trong top những con số được ưa chuộng nhất.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Quy trình nhận thưởng chi tiết</h2>
      <p class="mb-4">Theo quy định của Vietlott, người trúng giải có thời hạn <strong>60 ngày</strong> kể từ ngày quay số để đến nhận thưởng. Các bước cụ thể bao gồm:</p>

      <ol class="space-y-3 mb-6 ml-4">
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
          <span class="text-gray-700">Mang theo vé số gốc và CMND/CCCD bản gốc</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
          <span class="text-gray-700">Điền đầy đủ thông tin vào phiếu yêu cầu nhận thưởng (mẫu có sẵn)</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
          <span class="text-gray-700">Xác thực vé số qua hệ thống máy tính trung tâm</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
          <span class="text-gray-700">Nhận tiền sau khi trừ thuế thu nhập cá nhân 10% (áp dụng cho giải trên 10 triệu)</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
          <span class="text-gray-700">Ký xác nhận biên bản nhận thưởng và chụp ảnh lưu niệm (tùy chọn)</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
          <span class="text-gray-700">Tiền được chuyển khoản trực tiếp vào tài khoản ngân hàng do người trúng cung cấp</span>
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Lời khuyên từ Vietlott</h2>
      <p class="mb-4">Đại diện Vietlott khuyên những người trúng giải lớn nên:</p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div class="flex items-start gap-3">
            <span class="text-2xl">Bảo mật</span>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Bảo mật thông tin</h4>
              <p class="text-sm text-gray-600">Giữ bình tĩnh và không công khai thông tin cá nhân, tránh rủi ro bị lừa đảo</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div class="flex items-start gap-3">
            <span class="text-2xl">Tư vấn</span>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Tư vấn chuyên nghiệp</h4>
              <p class="text-sm text-gray-600">Tham khảo ý kiến chuyên gia tài chính, luật sư để quản lý tài sản hiệu quả</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div class="flex items-start gap-3">
            <span class="text-2xl">Kế hoạch</span>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Kế hoạch dài hạn</h4>
              <p class="text-sm text-gray-600">Lập kế hoạch chi tiêu hợp lý, tránh tiêu xài phung phí</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div class="flex items-start gap-3">
            <span class="text-2xl">Từ thiện</span>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Đóng góp xã hội</h4>
              <p class="text-sm text-gray-600">Cân nhắc các khoản từ thiện để lan tỏa giá trị tốt đẹp</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Phản hồi từ cộng đồng</h2>
      <p class="mb-4">Câu chuyện của ông A đã lan truyền mạnh mẽ trên mạng xã hội. Nhiều người chơi khác chia sẻ: “Hy vọng một ngày nào đó tôi cũng được như anh A”, “Chúc anh và gia đình luôn mạnh khỏe, hạnh phúc”.</p>

      <p class="mb-4">Vietlott cho biết, sau khi công bố người trúng giải, lượng vé bán ra trong tuần tiếp theo đã tăng <strong>35%</strong> so với tuần trước đó. Điều này cho thấy sức hút của những câu chuyện thành công thực tế.</p>

      <p class="mt-6 mb-4 text-gray-700">Giải thưởng này không chỉ thay đổi cuộc sống của ông A mà còn là động lực cho hàng triệu người chơi khác. Vietlott tiếp tục cam kết mang đến những cơ hội may mắn công bằng, minh bạch và an toàn cho mọi người chơi trên toàn quốc.</p>

      <p class="mt-6 text-gray-700">Bạn có muốn trở thành người tiếp theo? Hãy thử vận may của mình ngay hôm nay!</p>
    `,
    date: '2025-10-08',
    author: 'Vietlott Team',
    category: 'Giải thưởng',
    views: 15420,
    tags: ['Jackpot', 'Vietlott', 'Nhận thưởng', 'Hà Nội', '92 tỷ', 'Từ thiện']
  },

  // ======================================================================
  // ID 2 – Thống kê con số tháng 9
  // ======================================================================
  2: {
    id: 2,
    type: 'hot',
    title: 'Thống kê những con số thường xuất hiện trong tháng 9',
    summary: 'Từ dữ liệu 30 kỳ quay gần nhất, chúng tôi phân tích tần suất xuất hiện của các con số để giúp người chơi có cái nhìn tổng quan.',
    content: `
      <p class="mb-4">Thống kê dựa trên kết quả xổ số <strong>tháng 9/2025</strong> cho thấy một số con số xuất hiện với tần suất cao, mang lại hy vọng cho người chơi. Dữ liệu được tổng hợp từ hơn <strong>30 kỳ quay</strong> trên toàn quốc, bao gồm cả 3 miền Bắc – Trung – Nam.</p>

      <p class="mb-4">Theo báo cáo, tổng cộng có <strong>1.800 con số</strong> được quay ra trong tháng 9. Trong đó, các con số có đuôi <strong>8</strong> chiếm ưu thế vượt trội, đặc biệt là <strong>88</strong> – con số được xem là “phát tài” trong văn hóa Việt Nam.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Top 20 con số xuất hiện nhiều nhất</h2>
      <div class="space-y-4 mb-8">
        <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl border-2 border-yellow-300 shadow-md">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <span class="text-4xl">1st</span>
              <div>
                <div class="text-3xl font-black text-yellow-700">88</div>
                <div class="text-sm text-gray-600">Xuất hiện: <strong>12 lần</strong> (chiếm 0.67%)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold text-gray-700">Ý nghĩa</div>
              <div class="text-xs text-gray-600">Phát tài, phát lộc, thịnh vượng</div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-xl border-2 border-gray-300">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <span class="text-4xl">2nd</span>
              <div>
                <div class="text-2xl font-bold text-gray-700">68</div>
                <div class="text-sm text-gray-600">Xuất hiện: <strong>10 lần</strong> (chiếm 0.56%)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold text-gray-700">Ý nghĩa</div>
              <div class="text-xs text-gray-600">Lộc đến, phát tài nhanh chóng</div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-xl border-2 border-orange-300">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <span class="text-4xl">3rd</span>
              <div>
                <div class="text-2xl font-bold text-orange-700">86</div>
                <div class="text-sm text-gray-600">Xuất hiện: <strong>9 lần</strong> (chiếm 0.50%)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold text-gray-700">Ý nghĩa</div>
              <div class="text-xs text-gray-600">Phát tài suôn sẻ, hanh thông</div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-3 text-sm">
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">4. Số 28</span> – <span class="text-gray-500">8 lần</span> (Dễ phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">5. Số 38</span> – <span class="text-gray-500">7 lần</span> (Sinh phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">6. Số 18</span> – <span class="text-gray-500">6 lần</span> (Nhất định phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">7. Số 98</span> – <span class="text-gray-500">6 lần</span> (Cửu phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">8. Số 08</span> – <span class="text-gray-500">5 lần</span> (Linh phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">9. Số 66</span> – <span class="text-gray-500">5 lần</span> (Lộc lộc)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">10. Số 99</span> – <span class="text-gray-500">4 lần</span> (Vĩnh cửu phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">11. Số 78</span> – <span class="text-gray-500">4 lần</span> (Phát lộc)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">12. Số 48</span> – <span class="text-gray-500">4 lần</span> (Tứ phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">13. Số 58</span> – <span class="text-gray-500">3 lần</span> (Ngũ phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">14. Số 79</span> – <span class="text-gray-500">3 lần</span> (Thất cửu phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">15. Số 89</span> – <span class="text-gray-500">3 lần</span> (Bát cửu phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">16. Số 06</span> – <span class="text-gray-500">3 lần</span> (Lộc phát)
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">17. Số 16</span> – <span class="text-gray-500">2 lần</span>
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">18. Số 26</span> – <span class="text-gray-500">2 lần</span>
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">19. Số 36</span> – <span class="text-gray-500">2 lần</span>
          </div>
          <div class="bg-white p-3 rounded-xl border border-gray-200">
            <span class="font-semibold text-gray-700">20. Số 46</span> – <span class="text-gray-500">2 lần</span>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Phân tích chi tiết theo khu vực</h2>
      <ul class="space-y-4 mb-6 ml-4 text-gray-700">
        <li><strong>Miền Bắc (15 kỳ quay):</strong> Ưu chuộng số 88 (8 lần), 68 (7 lần), 86 (6 lần), 28 (5 lần)</li>
        <li><strong>Miền Trung (8 kỳ quay):</strong> Thích số 38 (5 lần), 18 (4 lần), 98 (3 lần), 08 (3 lần)</li>
        <li><strong>Miền Nam (7 kỳ quay):</strong> Hay chọn 66 (4 lần), 99 (3 lần), 78 (3 lần), 48 (2 lần)</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Xu hướng theo ngày trong tuần</h3>
      <p class="mb-4">Thống kê cho thấy:</p>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li>Thứ 2: Số 88 xuất hiện 4 lần</li>
        <li>Thứ 4: Số 68 xuất hiện 3 lần</li>
        <li>Thứ 6: Số 86 xuất hiện 3 lần</li>
        <li>Chủ Nhật: Số 28 và 38 đồng xuất hiện 2 lần</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Lời khuyên từ chuyên gia</h2>
      <blockquote class="border-l-4 border-red-600 pl-6 py-4 my-6 bg-red-50 rounded-r-xl italic text-gray-700">
        "Thống kê chỉ mang tính tham khảo. Xổ số là trò chơi may rủi, không có công thức nào đảm bảo 100%. Điều quan trọng nhất là chơi có trách nhiệm, không đặt cược quá khả năng tài chính. Hãy xem đây là hình thức giải trí lành mạnh." – <strong>TS. Nguyễn Thị Lan, chuyên gia thống kê xổ số, Đại học Kinh tế Quốc dân</strong>
      </blockquote>

      <p class="mt-6 text-gray-700">Bạn có thể tải báo cáo thống kê chi tiết tháng 9/2025 <a href="#" class="text-red-600 hover:underline font-medium">tại đây</a> (PDF, 2.1MB). Báo cáo bao gồm biểu đồ, bảng số liệu và phân tích sâu theo từng miền.</p>

      <p class="mt-6 text-gray-700">Theo dõi fanpage Vietlott để cập nhật thống kê mới nhất mỗi tháng!</p>
    `,
    date: '2025-10-07',
    author: 'Thống kê Team',
    category: 'Thống kê',
    views: 12350,
    tags: ['Thống kê', 'Con số hot', 'Xổ số', 'Tháng 9', 'Phân tích', 'Miền Bắc', 'Miền Nam']
  },

  // ======================================================================
  // ID 3 – Khai trương đại lý mới Miền Nam
  // ======================================================================
  3: {
    id: 3,
    type: 'new',
    title: 'Miền Nam khai trương thêm 2 đại lý mới',
    summary: 'Vietlott mở rộng mạng lưới tại TP.HCM và Đồng Nai, mang đến tiện lợi hơn cho người chơi.',
    content: `
      <p class="mb-4">Ngày <strong>6/10/2025</strong>, Vietlott chính thức khai trương <strong>2 đại lý mới</strong> tại <strong>TP.HCM</strong> và <strong>Đồng Nai</strong>, nâng tổng số điểm bán vé lên hơn <strong>1.200 điểm</strong> trên toàn quốc. Đây là một phần trong kế hoạch mở rộng mạng lưới bán hàng của Vietlott trong quý IV/2025.</p>

      <p class="mb-4">Buổi lễ khai trương diễn ra long trọng với sự tham gia của lãnh đạo Vietlott, chính quyền địa phương và hàng trăm người dân. Hai đại lý mới được thiết kế hiện đại, rộng rãi, đáp ứng đầy đủ nhu cầu của người chơi.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Thông tin chi tiết 2 đại lý mới</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
          <h3 class="text-xl font-bold text-green-800 mb-3">Đại lý Quận 1 – TP.HCM</h3>
          <p class="text-gray-700 mb-2"><strong>Địa chỉ:</strong> 123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM</p>
          <p class="text-gray-700 mb-2"><strong>Giờ mở cửa:</strong> 07:00 – 22:00 (tất cả các ngày trong tuần)</p>
          <p class="text-gray-700 mb-2"><strong>Diện tích:</strong> 150m², sức chứa 50 khách</p>
          <p class="text-sm text-gray-600">Ưu đãi khai trương: Tặng 1 vé miễn phí cho 100 khách đầu tiên mỗi ngày trong tuần đầu</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Đại lý Biên Hòa – Đồng Nai</h3>
          <p class="text-gray-700 mb-2"><strong>Địa chỉ:</strong> 456 Phạm Văn Thuận, Phường Tân Mai, TP. Biên Hòa, Đồng Nai</p>
          <p class="text-gray-700 mb-2"><strong>Giờ mở cửa:</strong> 07:30 – 21:30 (tất cả các ngày trong tuần)</p>
          <p class="text-gray-700 mb-2"><strong>Diện tích:</strong> 120m², có khu vực ngồi chờ</p>
          <p class="text-sm text-gray-600">Ưu đãi khai trương: Giảm 20% khi mua từ 15 vé trở lên</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Tiện ích tại đại lý mới</h2>
      <ul class="space-y-3 mb-6 ml-4 text-gray-700">
        <li>Máy in vé tự động, giảm thời gian chờ</li>
        <li>Màn hình LED hiển thị kết quả trực tiếp</li>
        <li>Nhân viên tư vấn chọn số theo phong thủy</li>
        <li>Khu vực kiểm tra vé trúng thưởng nhanh</li>
        <li>Wi-Fi miễn phí, nước uống miễn phí</li>
        <li>Chỗ đậu xe máy miễn phí</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Kế hoạch mở rộng tiếp theo</h2>
      <p class="mb-4">Theo đại diện Vietlott, trong quý IV/2025, công ty sẽ tiếp tục mở thêm:</p>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li>20 đại lý tại các tỉnh miền Tây Nam Bộ</li>
        <li>15 đại lý tại các tỉnh miền Trung</li>
        <li>10 đại lý tại các tỉnh miền Bắc</li>
        <li>5 đại lý tại các khu du lịch lớn</li>
      </ul>

      <p class="mt-6 text-gray-700">Vietlott cam kết mang đến trải nghiệm mua vé số <strong>nhanh chóng – an toàn – tiện lợi</strong> cho mọi người chơi trên toàn quốc.</p>
    `,
    date: '2025-10-06',
    author: 'Vietlott Miền Nam',
    category: 'Sự kiện',
    views: 8520,
    tags: ['Đại lý', 'Miền Nam', 'Khai trương', 'TP.HCM', 'Đồng Nai', 'Mở rộng']
  },

  // ======================================================================
  // ID 4 – Cặp vợ chồng trúng 45 tỷ
  // ======================================================================
  4: {
    id: 4,
    type: 'hot',
    title: 'Cặp vợ chồng trúng 45 tỷ từ vé số cào',
    summary: 'Câu chuyện may mắn của cặp vợ chồng ở Đồng Nai, quyết định dùng tiền cho từ thiện.',
    content: `
      <p class="mb-4">Chỉ với <strong>10.000 đồng</strong> mua vé số cào tại một tiệm tạp hóa ở <strong>Đồng Nai</strong>, cặp vợ chồng anh <em>Trần Văn B</em> (42 tuổi) và chị <em>Nguyễn Thị C</em> (39 tuổi) đã trúng giải thưởng <strong>45 tỷ đồng</strong> – con số khiến cả cộng đồng xôn xao và truyền cảm hứng mạnh mẽ.</p>

      <p class="mb-4">Vé số cào được mua vào lúc <strong>19h30 ngày 4/10/2025</strong> tại tiệm tạp hóa <strong>Minh Phát</strong> trên đường <strong>Phan Đình Phùng, TP. Biên Hòa</strong>. Đây là loại vé cào “Mega Jackpot” với cơ cấu giải thưởng lên đến 50 tỷ đồng.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Khoảnh khắc định mệnh</h2>
      <p class="mb-4">Chị C kể lại: “Tôi thường mua vé cào để giải trí, mỗi lần chỉ 1-2 vé. Hôm đó tôi cào thử và thấy dòng chữ <strong>‘45.000.000.000 VNĐ’</strong>. Tôi tưởng mình hoa mắt nên gọi chồng ra kiểm tra. Anh ấy đọc đi đọc lại 3 lần mới tin là thật!”</p>

      <p class="mb-4">Ngay lập tức, cặp vợ chồng đã đến trụ sở Vietlott tại TP.HCM để xác nhận. Kết quả kiểm tra cho thấy vé số hoàn toàn hợp lệ, không có dấu hiệu gian lận.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Kế hoạch sử dụng tiền thưởng</h2>
      <p class="mb-4">Sau khi nhận thưởng (sau khi trừ thuế 10%), cặp vợ chồng nhận về <strong>40,5 tỷ đồng</strong>. Họ đã lên kế hoạch chi tiêu như sau:</p>
      
      <ul class="space-y-3 mb-6 ml-4 text-gray-700">
        <li><strong>20 tỷ đồng:</strong> Xây dựng 100 căn nhà tình thương cho người nghèo tại Đồng Nai và Bình Dương</li>
        <li><strong>10 tỷ đồng:</strong> Hỗ trợ học bổng cho 500 trẻ em mồ côi, hoàn cảnh khó khăn</li>
        <li><strong>5 tỷ đồng:</strong> Mở xưởng sản xuất nhỏ tạo việc làm cho người khuyết tật</li>
        <li><strong>3 tỷ đồng:</strong> Đầu tư mua đất xây nhà mới cho gia đình</li>
        <li><strong>2 tỷ đồng:</strong> Du lịch châu Âu cùng con cái</li>
        <li><strong>0,5 tỷ đồng:</strong> Gửi tiết kiệm cho con đi du học</li>
      </ul>

      <blockquote class="border-l-4 border-red-600 pl-6 py-4 my-6 bg-red-50 rounded-r-xl italic text-gray-700">
        “Chúng tôi không giàu lên nhờ tiền, mà giàu lên nhờ lòng tốt. Chúng tôi muốn dùng số tiền này để giúp đỡ những người cần hơn mình.” – anh Trần Văn B chia sẻ.
      </blockquote>

      <p class="mt-6 text-gray-700">Câu chuyện của họ đã được báo chí đưa tin rộng rãi, trở thành nguồn cảm hứng cho hàng nghìn người chơi khác. Nhiều người đã đến tiệm tạp hóa Minh Phát để “thử vận may” và mua vé ủng hộ.</p>
    `,
    date: '2025-10-05',
    author: 'Câu chuyện thành công',
    category: 'Giải thưởng',
    views: 18750,
    tags: ['Vé cào', 'Từ thiện', 'Đồng Nai', '45 tỷ', 'Cặp vợ chồng', 'May mắn']
  },

  // ======================================================================
  // ID 5 – Ứng dụng mobile ra mắt
  // ======================================================================
  5: {
    id: 5,
    type: 'new',
    title: 'Ứng dụng mobile mua vé số chính thức ra mắt',
    summary: 'Ứng dụng mới cho phép mua vé online an toàn và tiện lợi.',
    content: `
      <p class="mb-4">Ngày <strong>4/10/2025</strong>, Vietlott chính thức ra mắt <strong>ứng dụng “Vietlott Mobile”</strong> trên cả <strong>App Store</strong> và <strong>Google Play</strong>, đánh dấu bước tiến lớn trong việc số hóa dịch vụ xổ số tại Việt Nam. Ứng dụng được phát triển trong vòng 18 tháng với sự hợp tác của các kỹ sư công nghệ hàng đầu.</p>

      <p class="mb-4">Chỉ trong <strong>24 giờ đầu</strong>, ứng dụng đã đạt <strong>hơn 150.000 lượt tải</strong> và <strong>50.000 người dùng đăng ký</strong>. Đây là con số kỷ lục đối với một ứng dụng xổ số tại Việt Nam.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Tính năng nổi bật</h2>
      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200 text-center">
          <span class="text-4xl mb-2 block">Mua vé nhanh</span>
          <p class="text-sm text-gray-600">Chỉ 3 bước: Chọn số → Thanh toán → Xác nhận. Hỗ trợ VietQR, Momo, ZaloPay, thẻ ngân hàng</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200 text-center">
          <span class="text-4xl mb-2 block">Kiểm tra kết quả</span>
          <p class="text-sm text-gray-600">Cập nhật realtime sau mỗi kỳ quay. Thông báo trúng thưởng tự động</p>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200 text-center">
          <span class="text-4xl mb-2 block">Bảo mật cao</span>
          <p class="text-sm text-gray-600">Mã hóa SSL 256-bit, xác thực 2 lớp (SMS + Face ID/Touch ID), không lưu thông tin thẻ</p>
        </div>
        <div class="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-xl border border-yellow-200 text-center">
          <span class="text-4xl mb-2 block">Thống kê số hot</span>
          <p class="text-sm text-gray-600">Gợi ý số may mắn theo phong thủy, ngày sinh, lịch sử trúng thưởng</p>
        </div>
        <div class="bg-gradient-to-br from-red-50 to-rose-50 p-5 rounded-xl border border-red-200 text-center">
          <span class="text-4xl mb-2 block">Quản lý vé</span>
          <p class="text-sm text-gray-600">Lưu trữ vé điện tử, tra cứu lịch sử mua vé, nhắc nhở kỳ quay</p>
        </div>
        <div class="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl border border-indigo-200 text-center">
          <span class="text-4xl mb-2 block">Hỗ trợ 24/7</span>
          <p class="text-sm text-gray-600">Chat trực tuyến, hotline miễn phí, FAQ chi tiết</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Hướng dẫn tải và sử dụng</h2>
      <ol class="space-y-3 mb-6 ml-4 text-gray-700">
        <li>Mở <strong>App Store</strong> (iPhone) hoặc <strong>Google Play</strong> (Android)</li>
        <li>Tìm kiếm từ khóa <strong>“Vietlott Mobile”</strong> hoặc quét mã QR trên website</li>
        <li>Nhấn <strong“Cài đặt”</strong> → Mở ứng dụng</li>
        <li>Đăng ký bằng <strong>số điện thoại</strong> → Xác nhận mã OTP</li>
        <li>Nạp tiền qua ví điện tử hoặc chuyển khoản</li>
        <li>Chọn loại vé → Chọn số → Thanh toán → Nhận vé điện tử</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Ưu đãi dành riêng cho người dùng app</h2>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li>Tặng <strong>1 vé miễn phí</strong> cho 10.000 người dùng đầu tiên</li>
        <li>Hoàn tiền <strong>5%</strong> cho mỗi giao dịch từ 100.000đ</li>
        <li>Tích điểm đổi quà: 1 điểm = 1.000đ mua vé</li>
        <li>Nhận thông báo Jackpot tích lũy trước 1 giờ</li>
      </ul>

      <p class="mt-6 text-gray-700">Tải ngay <strong>Vietlott Mobile</strong> để trải nghiệm mua vé số thời đại 4.0!</p>
    `,
    date: '2025-10-04',
    author: 'Tech Team',
    category: 'Công nghệ',
    views: 9840,
    tags: ['App mobile', 'Mua vé online', 'Vietlott Mobile', 'Số hóa', 'Thanh toán']
  },

  // ======================================================================
  // ID 6 – Khuyến mãi tháng 10
  // ======================================================================
  6: {
    id: 6,
    type: 'popular',
    title: 'Chương trình khuyến mãi tháng 10',
    summary: 'Mua 5 tặng 1, kèm quà tặng hấp dẫn từ 1-15/10.',
    content: `
      <p class="mb-4">Từ <strong>1/10 đến 15/10/2025</strong>, Vietlott triển khai chương trình khuyến mãi lớn nhất trong năm với tên gọi <strong>“Mua 5 Tặng 1 – Nhân đôi may mắn”</strong>. Chương trình áp dụng cho <strong>tất cả các loại vé số</strong> trên toàn quốc.</p>

      <p class="mb-4">Tổng giá trị quà tặng lên đến <strong>2 tỷ đồng</strong>, bao gồm tiền mặt, hiện vật và vé số miễn phí. Đây là cơ hội vàng để người chơi tăng cơ hội trúng thưởng mà không tốn thêm chi phí.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Chi tiết chương trình khuyến mãi</h2>
      <ul class="space-y-4 mb-6 ml-4 text-gray-700">
        <li><strong>Mua 5 vé bất kỳ</strong> → Nhận ngay <strong>1 vé miễn phí</strong> (cùng loại)</li>
        <li><strong>Mua 10 vé</strong> → Tặng thêm <strong>phiếu mua hàng 50.000đ</strong> tại siêu thị</li>
        <li><strong>Mua 20 vé</strong> → Nhận <strong>áo thun Vietlott phiên bản giới hạn</strong> (chỉ 5.000 chiếc)</li>
        <li><strong>Mua 50 vé</strong> → Nhận <strong>valy du lịch cao cấp</strong> (chỉ 1.000 chiếc)</li>
        <li><strong>Mua 100 vé</strong> → Nhận <strong>voucher nghỉ dưỡng 3N2Đ</strong> tại resort 5 sao</li>
      </ul>

      <div class="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300 mb-8">
        <p class="text-yellow-800 font-bold text-center text-lg">Tổng giá trị quà tặng: <span class="text-2xl">2.000.000.000 VNĐ</span></p>
        <p class="text-center text-sm mt-2">Đã có hơn 50.000 người tham gia chỉ trong 3 ngày đầu!</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Cách thức tham gia</h2>
      <ol class="space-y-3 mb-6 ml-4 text-gray-700">
        <li>Mua vé tại <strong>bất kỳ đại lý Vietlott</strong> nào trên toàn quốc</li>
        <li>Mua vé qua <strong>ứng dụng Vietlott Mobile</strong></li>
        <li>Nhận quà tặng ngay tại chỗ hoặc qua bưu điện (đối với quà lớn)</li>
        <li>Áp dụng cho cả vé in và vé điện tử</li>
      </ol>

      <p class="mt-6 text-gray-700">Đừng bỏ lỡ cơ hội <strong>nhân đôi may mắn</strong> trong tháng 10 này!</p>
    `,
    date: '2025-10-03',
    author: 'Marketing Team',
    category: 'Khuyến mãi',
    views: 11200,
    tags: ['Khuyến mãi', 'Mua 5 tặng 1', 'Quà tặng', 'Tháng 10']
  },

  // ======================================================================
  // ID 7 – Phong thủy chọn số
  // ======================================================================
  7: {
    id: 7,
    type: 'new',
    title: 'Hướng dẫn cách chọn số may mắn theo phong thủy',
    summary: 'Bí quyết từ chuyên gia dựa trên ngũ hành và ngày sinh.',
    content: `
      <p class="mb-4">Phong thủy không chỉ áp dụng trong nhà cửa, công việc mà còn trong việc <strong>chọn số may mắn</strong> khi chơi xổ số. Dưới đây là hướng dẫn chi tiết từ các chuyên gia phong thủy hàng đầu Việt Nam.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">1. Chọn số theo ngũ hành</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border border-red-200">
          <h4 class="font-bold text-gray-800 mb-2">Mệnh Hỏa (1976, 1985, 1994...)</h4>
          <p class="text-sm text-gray-600 mb-2">Số may mắn: <strong>2, 3, 7, 12, 23, 32, 37, 72, 73</strong></p>
          <p class="text-xs text-gray-500">Nên chọn số có tổng chữ số là 3, 7 hoặc đuôi 2, 3, 7</p>
        </div>
        
        <div class="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-200">
          <h4 class="font-bold text-gray-800 mb-2">Mệnh Thổ (1977, 1986, 1995...)</h4>
          <p class="text-sm text-gray-600 mb-2">Số may mắn: <strong>0, 5, 8, 10, 50, 58, 80, 85</strong></p>
          <p class="text-xs text-gray-500">Ưu tiên số có tổng là 5, 8 hoặc đuôi 0, 5, 8</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-50 to-slate-50 p-4 rounded-xl border border-gray-200">
          <h4 class="font-bold text-gray-800 mb-2">Mệnh Kim (1984, 1993, 2002...)</h4>
          <p class="text-sm text-gray-600 mb-2">Số may mắn: <strong>4, 6, 9, 14, 46, 69, 94, 96</strong></p>
          <p class="text-xs text-gray-500">Chọn số có tổng 4, 6, 9 hoặc đuôi 4, 6, 9</p>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
          <h4 class="font-bold text-gray-800 mb-2">Mệnh Thủy (1975, 1983, 1992...)</h4>
          <p class="text-sm text-gray-600 mb-2">Số may mắn: <strong>1, 6, 11, 16, 61, 66</strong></p>
          <p class="text-xs text-gray-500">Ưu tiên số có tổng 1, 6 hoặc đuôi 1, 6</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
          <h4 class="font-bold text-gray-800 mb-2">Mệnh Mộc (1974, 1982, 1991...)</h4>
          <p class="text-sm text-gray-600 mb-2">Số may mắn: <strong>3, 4, 8, 13, 34, 48, 83, 84</strong></p>
          <p class="text-xs text-gray-500">Chọn số có tổng 3, 4, 8 hoặc đuôi 3, 4, 8</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">2. Chọn số theo ngày sinh</h2>
      <p class="mb-4">Cách tính số may mắn cá nhân:</p>
      <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-6">
        <h4 class="font-bold text-gray-800 mb-3">Ví dụ minh họa</h4>
        <p class="text-gray-700 mb-2">Ngày sinh: <strong>15/08/1990</strong></p>
        <p class="text-gray-700 mb-2">Bước 1: 1+5+0+8+1+9+9+0 = <strong>33</strong></p>
        <p class="text-gray-700 mb-2">Bước 2: 3+3 = <strong>6</strong></p>
        <p class="text-gray-700 font-bold mb-2">→ Số may mắn cá nhân: <strong>6</strong></p>
        <p class="text-sm text-gray-600 mt-3">Nên chọn: 06, 16, 26, 36, 46, 56, 66, 76, 86, 96</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">3. Chọn số theo giờ sinh</h2>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li>Giờ Tý (23h-1h): Số 1, 23, 01</li>
        <li>Giờ Sửu (1h-3h): Số 2, 14, 25</li>
        <li>Giờ Dần (3h-5h): Số 3, 15, 27</li>
        <li>Giờ Mão (5h-7h): Số 4, 16, 28</li>
        <li>Giờ Thìn (7h-9h): Số 5, 17, 29</li>
        <li>Giờ Tỵ (9h-11h): Số 6, 18, 30</li>
        <li>Giờ Ngọ (11h-13h): Số 7, 19, 31</li>
        <li>Giờ Mùi (13h-15h): Số 8, 20, 32</li>
        <li>Giờ Thân (15h-17h): Số 9, 21, 33</li>
        <li>Giờ Dậu (17h-19h): Số 10, 22, 34</li>
        <li>Giờ Tuất (19h-21h): Số 11, 23, 35</li>
        <li>Giờ Hợi (21h-23h): Số 12, 24, 36</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Lưu ý quan trọng</h2>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li>Phong thủy chỉ là yếu tố <strong>tham khảo</strong>, không đảm bảo trúng thưởng</li>
        <li>Nên kết hợp với <strong>thống kê</strong> và <strong>trực giác cá nhân</strong></li>
        <li>Chỉ chơi trong khả năng tài chính, không vay mượn</li>
        <li>Giữ tinh thần thoải mái, vui vẻ khi chơi</li>
      </ul>

      <blockquote class="border-l-4 border-red-600 pl-6 py-4 my-6 bg-red-50 rounded-r-xl italic text-gray-700">
        "Số may mắn không nằm ở con số, mà nằm ở tâm thái. Hãy chơi với lòng tin và sự biết ơn, may mắn sẽ đến." – <strong>Thầy Phong Thủy Nguyễn Văn K</strong>
      </blockquote>
    `,
    date: '2025-10-02',
    author: 'Nguyễn Văn K',
    category: 'Hướng dẫn',
    views: 14580,
    tags: ['Phong thủy', 'Chọn số', 'Ngũ hành', 'Ngày sinh', 'Bí quyết', 'May mắn']
  },

  // ======================================================================
  // ID 8 – Top 10 con số được mua nhiều nhất
  // ======================================================================
  8: {
    id: 8,
    type: 'popular',
    title: 'Top 10 con số được mua nhiều nhất tuần qua',
    summary: 'Thống kê cho thấy người chơi có xu hướng lựa chọn các con số có ý nghĩa đặc biệt và mang tính phong thủy.',
    content: `
      <p class="mb-4">Dựa trên dữ liệu từ hệ thống bán vé trên toàn quốc trong tuần từ <strong>25/9 đến 1/10/2025</strong>, chúng tôi thống kê được top 10 con số được người chơi lựa chọn nhiều nhất. Tổng cộng có <strong>2.500.000 vé</strong> được bán ra trong tuần này.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Bảng xếp hạng chi tiết</h2>
      
      <div class="space-y-3 mb-6">
        <!-- Top 1 -->
        <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl border-2 border-yellow-300 shadow-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span class="text-4xl">1st</span>
              <div>
                <div class="text-3xl font-black text-yellow-700">88</div>
                <div class="text-sm text-gray-600">Tỷ lệ lựa chọn: <strong>18.5%</strong> (462.500 lượt)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold text-gray-700">Ý nghĩa</div>
              <div class="text-xs text-gray-600">Phát tài, phát lộc, thịnh vượng mãi mãi</div>
            </div>
          </div>
        </div>

        <!-- Top 2 -->
        <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-xl border-2 border-gray-300">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span class="text-4xl">2nd</span>
              <div>
                <div class="text-2xl font-bold text-gray-700">68</div>
                <div class="text-sm text-gray-600">Tỷ lệ lựa chọn: <strong>16.2%</strong> (405.000 lượt)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold text-gray-700">Ý nghĩa</div>
              <div class="text-xs text-gray-600">Lộc đến, phát tài nhanh chóng</div>
            </div>
          </div>
        </div>

        <!-- Top 3 -->
        <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-xl border-2 border-orange-300">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span class="text-4xl">3rd</span>
              <div>
                <div class="text-2xl font-bold text-orange-700">86</div>
                <div class="text-sm text-gray-600">Tỷ lệ lựa chọn: <strong>14.8%</strong> (370.000 lượt)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold text-gray-700">Ý nghĩa</div>
              <div class="text-xs text-gray-600">Phát tài suôn sẻ, hanh thông</div>
            </div>
          </div>
        </div>

        <!-- Top 4-10 -->
        <div class="bg-white p-3 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-gray-700">4. Số 28</span> 
            <span class="text-gray-500">12.5% (312.500 lượt) - Dễ phát</span>
          </div>
        </div>
        <div class="bg-white p-3 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-gray-700">5. Số 38</span> 
            <span class="text-gray-500">11.3% (282.500 lượt) - Sinh phát</span>
          </div>
        </div>
        <div class="bg-white p-3 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-gray-700">6. Số 18</span> 
            <span class="text-gray-500">10.7% (267.500 lượt) - Nhất định phát</span>
          </div>
        </div>
        <div class="bg-white p-3 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-gray-700">7. Số 98</span> 
            <span class="text-gray-500">9.8% (245.000 lượt) - Cửu phát</span>
          </div>
        </div>
        <div class="bg-white p-3 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-gray-700">8. Số 08</span> 
            <span class="text-gray-500">8.9% (222.500 lượt) - Linh phát</span>
          </div>
        </div>
        <div class="bg-white p-3 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-gray-700">9. Số 99</span> 
            <span class="text-gray-500">8.2% (205.000 lượt) - Vĩnh cửu phát</span>
          </div>
        </div>
        <div class="bg-white p-3 rounded-xl border border-gray-200">
          <div class="flex items-center justify-between text-sm">
            <span class="font-semibold text-gray-700">10. Số 66</span> 
            <span class="text-gray-500">7.6% (190.000 lượt) - Lộc lộc</span>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Phân tích xu hướng</h2>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li><strong>85%</strong> người chơi chọn số có đuôi <strong>8</strong></li>
        <li><strong>62%</strong> chọn số theo <strong>phong thủy</strong></li>
        <li><strong>48%</strong> chọn số theo <strong>ngày sinh</strong></li>
        <li><strong>35%</strong> chọn số <strong>ngẫu nhiên</strong></li>
      </ul>

      <p class="mt-6 text-gray-700">Bạn có đang chọn đúng con số hot? Hãy thử ngay hôm nay để tăng cơ hội trúng thưởng!</p>
    `,
    date: '2025-10-01',
    author: 'Thống kê Team',
    category: 'Thống kê',
    views: 16420,
    tags: ['Top 10', 'Con số', 'Phong thủy', 'Tuần qua', 'Thống kê']
  },

  // ======================================================================
  // ID 9 – Jackpot 2 Miền Bắc
  // ======================================================================
  9: {
    id: 9,
    type: 'new',
    title: 'Xổ số Miền Bắc có thêm giải Jackpot 2',
    summary: 'Giải phụ mới với giá trị 10 tỷ đồng, tăng cơ hội cho người chơi Miền Bắc.',
    content: `
      <p class="mb-4">Từ kỳ quay <strong>30/9/2025</strong>, xổ số Miền Bắc chính thức bổ sung <strong>giải Jackpot 2</strong> với giá trị cố định <strong>10 tỷ đồng</strong> mỗi kỳ. Đây là tin vui lớn dành cho hàng triệu người chơi tại 28 tỉnh thành miền Bắc.</p>

      <p class="mb-4">Trước đây, người chơi miền Bắc chỉ có cơ hội trúng Jackpot 1 (giải đặc biệt). Giờ đây, với Jackpot 2, cơ hội trúng thưởng lớn tăng gấp đôi.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Điều kiện trúng giải Jackpot 2</h2>
      <ul class="space-y-3 mb-6 ml-4 text-gray-700">
        <li>Trúng <strong>5 số bất kỳ</strong> trong dãy 6 số trúng Jackpot 1</li>
        <li>Giải thưởng: <strong>10 tỷ đồng</strong> (cố định)</li>
        <li>Không giới hạn số người trúng</li>
        <li>Áp dụng cho tất cả các kỳ quay từ 30/9/2025</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Ví dụ minh họa</h2>
      <div class="bg-green-50 p-6 rounded-xl border border-green-200 mb-6">
        <p class="font-bold text-gray-800 mb-2">Kỳ quay ngày 1/10/2025:</p>
        <p class="text-gray-700 mb-2">Jackpot 1: <strong>03-15-27-39-48-66</strong></p>
        <p class="text-gray-700 mb-2">Người chơi có vé: <strong>03-15-27-39-48-99</strong> → Trúng Jackpot 2 (10 tỷ)</p>
      </div>

      <p class="mt-6 text-gray-700">Đây là bước đi chiến lược của Vietlott nhằm <strong>cân bằng cơ hội</strong> giữa các miền và <strong>tăng sức hút</strong> cho xổ số truyền thống.</p>
    `,
    date: '2025-09-30',
    author: 'Vietlott Miền Bắc',
    category: 'Cập nhật',
    views: 13670,
    tags: ['Jackpot 2', 'Miền Bắc', 'Giải thưởng', 'Mới']
  },

  // ======================================================================
  // ID 10 – Jackpot tích lũy 120 tỷ
  // ======================================================================
  10: {
    id: 10,
    type: 'hot',
    title: 'Kết quả xổ số tháng 10: Jackpot tích lũy lên 120 tỷ',
    summary: 'Kỳ quay 15/10 chưa có người trúng, giải thưởng tiếp tục tăng.',
    content: `
      <p class="mb-4">Kỳ quay ngày <strong>15/10/2025</strong> kết thúc mà <strong>không có người trúng Jackpot</strong>. Giải thưởng hiện tại đã tích lũy lên <strong>120 tỷ đồng</strong> – con số cao nhất trong 6 tháng qua.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Dãy số trúng giải kỳ 15/10</h2>
      <p class="mb-4 text-center text-2xl font-bold text-red-700">05 - 17 - 29 - 34 - 48 - 67</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Lịch sử tích lũy Jackpot</h2>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li>1/10: 80 tỷ</li>
        <li>5/10: 92 tỷ</li>
        <li>10/10: 105 tỷ</li>
        <li>15/10: <strong>120 tỷ</strong></li>
        <li><strong>18/10 (dự kiến):</strong> 130 tỷ</li>
      </ul>

      <p class="mt-6 text-gray-700">Cơ hội vàng đang đến gần – bạn đã sẵn sàng chưa?</p>
    `,
    date: '2025-10-15',
    author: 'Kết quả Team',
    category: 'Kết quả',
    views: 20500,
    tags: ['Kết quả', 'Jackpot', 'Tích lũy', '120 tỷ']
  },

  // ======================================================================
// ID 11 – Mẹo chơi xổ số thông minh để tăng cơ hội thắng
// ======================================================================
11: {
  id: 11,
  type: 'popular',
  title: 'Mẹo chơi xổ số thông minh để tăng cơ hội thắng',
  summary: 'Kết hợp thống kê, phong thủy và quản lý ngân sách. Chia sẻ từ người chơi lâu năm và chuyên gia.',
  content: `
    <p class="mb-4">Xổ số là trò chơi may rủi, nhưng với chiến lược đúng đắn, bạn có thể <strong>tăng đáng kể cơ hội trúng thưởng</strong> mà vẫn giữ được sự an toàn tài chính. Dưới đây là <strong>15 mẹo vàng</strong> được tổng hợp từ hơn <strong>2.000 người chơi lâu năm</strong> và các chuyên gia thống kê.</p>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">1. Xây dựng ngân sách chơi rõ ràng</h2>
    <ul class="space-y-3 mb-6 ml-4 text-gray-700">
      <li><strong>Chỉ dùng 5–10% thu nhập hàng tháng</strong> để mua vé</li>
      <li>Không vay mượn, không dùng tiền tiết kiệm sinh hoạt</li>
      <li>Đặt giới hạn: ví dụ <strong>500.000đ/tháng</strong></li>
      <li>Theo dõi chi tiêu qua ứng dụng hoặc sổ tay</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">2. Chơi nhóm – Hùn vốn thông minh</h2>
    <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
      <p class="font-bold text-gray-800 mb-3">Ví dụ thực tế:</p>
      <p class="text-gray-700 mb-2">10 người hùn 100.000đ/người → 1 triệu đồng</p>
      <p class="text-gray-700 mb-2">Mua được <strong>100 vé</strong> → Tăng gấp 100 lần cơ hội</p>
      <p class="text-sm text-gray-600 mt-3">Chia thưởng theo tỷ lệ đóng góp, ký biên bản rõ ràng</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">3. Theo dõi thống kê – Chọn số “nóng”</h2>
    <ul class="space-y-2 mb-6 ml-4 text-gray-700">
      <li>Xem <strong>30 kỳ quay gần nhất</strong> trên website Vietlott</li>
      <li>Ưu tiên số xuất hiện <strong>≥ 8 lần</strong>: 88, 68, 86, 28...</li>
      <li>Kết hợp số “nóng” với số “lạnh” (lâu không ra) để cân bằng</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">4. Chọn số theo phong thủy cá nhân</h2>
    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <h4 class="font-bold text-gray-800 mb-2">Mệnh Hỏa</h4>
        <p class="text-sm text-gray-600">Số tốt: 2, 3, 7, 12, 23, 32</p>
      </div>
      <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
        <h4 class="font-bold text-gray-800 mb-2">Mệnh Thổ</h4>
        <p class="text-sm text-gray-600">Số tốt: 0, 5, 8, 10, 50, 85</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
        <h4 class="font-bold text-gray-800 mb-2">Mệnh Kim</h4>
        <p class="text-sm text-gray-600">Số tốt: 4, 6, 9, 14, 46, 69</p>
      </div>
      <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h4 class="font-bold text-gray-800 mb-2">Mệnh Thủy</h4>
        <p class="text-sm text-gray-600">Số tốt: 1, 6, 11, 16, 61</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">5. Chơi đa dạng loại vé</h2>
    <ul class="space-y-3 mb-6 ml-4 text-gray-700">
      <li><strong>Mega 6/45:</strong> Jackpot lớn, giá 10.000đ/vé</li>
      <li><strong>Power 6/55:</strong> 2 Jackpot, cơ hội cao hơn</li>
      <li><strong>Max 3D:</strong> Giải nhỏ nhưng dễ trúng (1.000đ/vé)</li>
      <li><strong>Vé cào:</strong> Giải tức thì, phù hợp giải trí</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">6. Tận dụng khuyến mãi & ưu đãi</h2>
    <ul class="space-y-2 mb-6 ml-4 text-gray-700">
      <li>Mua 5 tặng 1 (tháng 10)</li>
      <li>Hoàn tiền 5% khi mua qua app</li>
      <li>Tích điểm đổi quà</li>
      <li>Nhận vé miễn phí khi đăng ký mới</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">7. Kiểm tra kỹ vé – Đừng bỏ sót giải nhỏ</h2>
    <p class="mb-4">Hàng tuần có hàng nghìn người bỏ lỡ giải 7, 8 (300.000đ – 1 triệu đồng) vì:</p>
    <ul class="space-y-2 mb-6 ml-4 text-gray-700">
      <li>Không kiểm tra đầy đủ các giải</li>
      <li>Vứt vé ngay sau khi không trúng Jackpot</li>
      <li>Nhầm lẫn số cuối</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">8. Chơi vào ngày “đẹp” theo quan niệm</h2>
    <ul class="space-y-2 mb-6 ml-4 text-gray-700">
      <li>Mùng 1, 15 âm lịch</li>
      <li>Ngày vía Thần Tài (mùng 10 tháng Giêng)</li>
      <li>Ngày sinh nhật, kỷ niệm</li>
      <li>Thứ 6 – ngày được cho là “may mắn”</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">9. Giữ vé an toàn & lưu trữ thông minh</h2>
    <ul class="space-y-3 mb-6 ml-4 text-gray-700">
      <li>Chụp ảnh 2 mặt vé ngay khi mua</li>
      <li>Lưu vào thư mục “Vé số” trên điện thoại</li>
      <li>Ghi chú kỳ quay, loại vé</li>
      <li>Không gấp, không làm ướt vé</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">10. Tâm lý chơi – Giữ tinh thần thoải mái</h2>
    <blockquote class="border-l-4 border-red-600 pl-6 py-4 my-6 bg-red-50 rounded-r-xl italic text-gray-700">
      “Xổ số là giải trí, không phải đầu tư. Hãy chơi với tâm thế vui vẻ, không áp lực. May mắn sẽ đến khi bạn không mong đợi.” – <strong>Ông Trần Văn P., 15 năm chơi xổ số</strong>
    </blockquote>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Kết quả khảo sát thực tế</h2>
    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 mb-6">
      <p class="font-bold text-center text-lg mb-4">Khảo sát 2.000 người chơi (2025)</p>
      <ul class="space-y-3 text-sm">
        <li><strong>82%</strong> tăng cơ hội nhờ chơi nhóm</li>
        <li><strong>71%</strong> trúng giải nhỏ nhờ kiểm tra kỹ</li>
        <li><strong>65%</strong> tiết kiệm 25–40% nhờ khuyến mãi</li>
        <li><strong>58%</strong> trúng nhờ chọn số theo phong thủy</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Lời khuyên cuối cùng</h2>
    <p class="mb-4 text-gray-700">Hãy nhớ: <strong>Không có công thức nào đảm bảo 100% trúng thưởng</strong>. Nhưng với chiến lược thông minh, bạn sẽ:</p>
    <ul class="space-y-2 mb-6 ml-4 text-gray-700">
      <li>Tăng cơ hội trúng thưởng</li>
      <li>Tiết kiệm chi phí</li>
      <li>Giảm rủi ro tài chính</li>
      <li>Biến xổ số thành trò chơi lành mạnh, thú vị</li>
    </ul>

    <p class="mt-6 text-center text-lg font-bold text-red-600">Chơi thông minh – Trúng lớn – Sống vui!</p>
  `,
  date: '2025-10-14',
  author: 'Chuyên gia Xổ số & Cộng đồng',
  category: 'Mẹo chơi',
  views: 17890,
  tags: ['Mẹo chơi', 'Chiến lược', 'Thống kê', 'Phong thủy', 'Hùn vốn', 'Khuyến mãi', 'An toàn']
},
// ======================================================================
  // ID 12 – Sự kiện offline Hà Nội
  // ======================================================================
  12: {
    id: 12,
    type: 'new',
    title: 'Sự kiện offline: Gặp gỡ người trúng giải lớn tại Hà Nội',
    summary: 'Hội thảo chia sẻ kinh nghiệm từ người trúng thưởng.',
    content: `
      <p class="mb-4">Ngày <strong>20/10/2025</strong>, Vietlott tổ chức <strong>hội thảo “Hành trình trúng thưởng”</strong> tại <strong>Trung tâm Hội nghị Quốc gia, Hà Nội</strong> với sự tham gia của <strong>3 người trúng giải lớn</strong> trong năm 2025.</p>

      <p class="mb-4">Sự kiện thu hút hơn <strong>2.000 người đăng ký</strong> chỉ trong 48 giờ mở cổng. Đây là cơ hội hiếm có để người chơi gặp gỡ, học hỏi kinh nghiệm trực tiếp từ những người đã “đổi đời” nhờ xổ số.</p>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Thông tin chi tiết sự kiện</h2>
      <ul class="space-y-3 mb-6 ml-4 text-gray-700">
        <li><strong>Thời gian:</strong> 14:00 – 17:00, Chủ nhật, ngày 20/10/2025</li>
        <li><strong>Địa điểm:</strong> Hội trường lớn, Trung tâm Hội nghị Quốc gia, Phạm Hùng, Hà Nội</li>
        <li><strong>Người tham gia:</strong> Miễn phí (đăng ký trước tại website)</li>
        <li><strong>Sức chứa:</strong> 1.500 người (ưu tiên đăng ký sớm)</li>
        <li><strong>Phát quà:</strong> 500 phần quà (áo, mũ, vé số miễn phí)</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Diễn giả nổi bật</h2>
      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200 text-center">
          <div class="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
          <h4 class="font-bold text-gray-800">Ông Nguyễn Văn A</h4>
          <p class="text-sm text-gray-600">Trúng 92 tỷ – Hà Nội</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200 text-center">
          <div class="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
          <h4 class="font-bold text-gray-800">Anh Trần Văn B</h4>
          <p class="text-sm text-gray-600">Trúng 45 tỷ – Đồng Nai</p>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200 text-center">
          <div class="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
          <h4 class="font-bold text-gray-800">Chị Lê Thị D</h4>
          <p class="text-sm text-gray-600">Trúng 30 tỷ – Đà Nẵng</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Nội dung chương trình</h2>
      <ol class="space-y-3 mb-6 ml-4 text-gray-700">
        <li>14:00 – 14:30: Đón khách, phát quà</li>
        <li>14:30 – 15:30: Chia sẻ câu chuyện trúng thưởng</li>
        <li>15:30 – 16:00: Phiên hỏi đáp trực tiếp</li>
        <li>16:00 – 16:30: Hướng dẫn chọn số theo phong thủy</li>
        <li>16:30 – 17:00: Bốc thăm trúng thưởng (10 giải 1 triệu đồng)</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 pb-3 border-b-2 border-red-600">Cách đăng ký</h2>
      <ul class="space-y-2 mb-6 ml-4 text-gray-700">
        <li>Truy cập: <a href="#" class="text-red-600 hover:underline font-medium">vietlott.vn/sukien</a></li>
        <li>Điền thông tin: Họ tên, SĐT, CMND</li>
        <li>Nhận mã QR qua email</li>
        <li>Mang theo mã QR và CMND để check-in</li>
      </ul>

      <p class="mt-6 text-gray-700">Đừng bỏ lỡ cơ hội <strong>gặp gỡ tỷ phú xổ số</strong> và học bí quyết trúng thưởng!</p>
    `,
    date: '2025-10-13',
    author: 'Event Team',
    category: 'Sự kiện',
    views: 11230,
    tags: ['Offline', 'Hà Nội', 'Gặp gỡ', 'Hội thảo', 'Trúng thưởng']
  }
};
