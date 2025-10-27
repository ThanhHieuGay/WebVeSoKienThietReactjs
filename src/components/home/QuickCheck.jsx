// QuickCheck.jsx - Có kiểm tra trúng thưởng số 123456 và chỉ chọn được ngày hôm nay
import { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// Danh sách tỉnh thành đầy đủ theo miền
const provincesData = {
  nam: [
    { value: 'hcm', label: 'TP. Hồ Chí Minh' },
    { value: 'dongnai', label: 'Đồng Nai' },
    { value: 'cantho', label: 'Cần Thơ' },
    { value: 'vungtau', label: 'Bà Rịa - Vũng Tàu' },
    { value: 'bentre', label: 'Bến Tre' },
    { value: 'baclieu', label: 'Bạc Liêu' },
    { value: 'dongthap', label: 'Đồng Tháp' },
    { value: 'camau', label: 'Cà Mau' },
    { value: 'longan', label: 'Long An' },
    { value: 'angiang', label: 'An Giang' },
    { value: 'tayninh', label: 'Tây Ninh' },
    { value: 'binhduong', label: 'Bình Dương' },
    { value: 'travinh', label: 'Trà Vinh' },
    { value: 'vinhlong', label: 'Vĩnh Long' },
    { value: 'binhphuoc', label: 'Bình Phước' },
    { value: 'haugiang', label: 'Hậu Giang' },
    { value: 'kiengiang', label: 'Kiên Giang' },
    { value: 'soctrang', label: 'Sóc Trăng' },
    { value: 'tiengiang', label: 'Tiền Giang' },
    { value: 'daklak', label: 'Đắk Lắk' },
    { value: 'lamdong', label: 'Lâm Đồng' }
  ],
  trung: [
    { value: 'danang', label: 'Đà Nẵng' },
    { value: 'khanhhoa', label: 'Khánh Hòa' },
    { value: 'phuyen', label: 'Phú Yên' },
    { value: 'daklak', label: 'Đắk Lắk' },
    { value: 'quangnam', label: 'Quảng Nam' },
    { value: 'quangbinh', label: 'Quảng Bình' },
    { value: 'quangtri', label: 'Quảng Trị' },
    { value: 'quangngai', label: 'Quảng Ngãi' },
    { value: 'binhdinh', label: 'Bình Định' },
    { value: 'gialai', label: 'Gia Lai' },
    { value: 'ninhthuan', label: 'Ninh Thuận' },
    { value: 'hue', label: 'Thừa Thiên Huế' },
    { value: 'kontum', label: 'Kon Tum' },
    { value: 'daknong', label: 'Đắk Nông' }
  ],
  bac: [
    { value: 'hanoi', label: 'Hà Nội' },
    { value: 'quangninh', label: 'Quảng Ninh' },
    { value: 'bacninh', label: 'Bắc Ninh' },
    { value: 'haiphong', label: 'Hải Phòng' },
    { value: 'namdinh', label: 'Nam Định' },
    { value: 'thaibinh', label: 'Thái Bình' },
    { value: 'haiduong', label: 'Hải Dương' },
    { value: 'hungyen', label: 'Hưng Yên' }
  ]
};

// Gộp tất cả tỉnh có thêm thông tin miền
const allProvinces = [];
Object.keys(provincesData).forEach(region => {
  provincesData[region].forEach(province => {
    allProvinces.push({ ...province, region });
  });
});

export const QuickCheck = () => {
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

  const [formData, setFormData] = useState({
    region: '',
    province: '',
    date: today,
    number: ''
  });

  const [checkResult, setCheckResult] = useState(null);

  const getProvincesByRegion = () => {
    if (formData.region) {
      return provincesData[formData.region] || [];
    }
    return allProvinces;
  };

  const handleProvinceChange = (provinceValue) => {
    const selectedProvince = allProvinces.find(p => p.value === provinceValue);
    if (selectedProvince && !formData.region) {
      setFormData({
        ...formData,
        province: provinceValue,
        region: selectedProvince.region
      });
    } else {
      setFormData({ ...formData, province: provinceValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const provinceName = allProvinces.find(p => p.value === formData.province)?.label || formData.province;
    const regionName =
      formData.region === 'nam' ? 'Miền Nam' :
      formData.region === 'trung' ? 'Miền Trung' :
      formData.region === 'bac' ? 'Miền Bắc' : 'Không xác định';

    // 🔍 Xử lý kiểm tra trúng thưởng
    const isWin = formData.number === '123456';

    setCheckResult({
      isWin,
      number: formData.number,
      province: provinceName,
      region: regionName,
      date: new Date(formData.date).toLocaleDateString('vi-VN'),
      checkTime: new Date().toLocaleString('vi-VN')
    });
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0">
        <Card.Header className="bg-warning text-center py-3">
          <h3 className="mb-0 fw-bold">🎯 Tra Cứu Vé Số Nhanh</h3>
        </Card.Header>
        <Card.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Chọn Miền</Form.Label>
                  <Form.Select
                    value={formData.region}
                    onChange={(e) =>
                      setFormData({ ...formData, region: e.target.value, province: '' })
                    }
                  >
                    <option value="">-- Tất cả miền --</option>
                    <option value="nam">Miền Nam</option>
                    <option value="trung">Miền Trung</option>
                    <option value="bac">Miền Bắc</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Chọn Tỉnh/Thành</Form.Label>
                  <Form.Select
                    value={formData.province}
                    onChange={(e) => handleProvinceChange(e.target.value)}
                    required
                  >
                    <option value="">-- Chọn tỉnh/thành --</option>
                    {getProvincesByRegion().map((province) => (
                      <option key={province.value} value={province.value}>
                        {province.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Ngày Mở Thưởng</Form.Label>
                  <Form.Control
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    max={today} // ❌ Chỉ chọn được ngày hôm nay hoặc trước đó
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Mã Số Vé (6 chữ số)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123456"
                    maxLength="6"
                    pattern="[0-9]{6}"
                    value={formData.number}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        number: e.target.value.replace(/\D/g, '')
                      })
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              type="submit"
              variant="danger"
              size="lg"
              className="w-100 fw-bold"
            >
              🔍 KIỂM TRA NGAY
            </Button>
          </Form>

          {/* Kết quả */}
          {checkResult && (
            <Alert
              variant={checkResult.isWin ? 'success' : 'danger'}
              className="mt-4 check-result"
            >
              <Alert.Heading>
                {checkResult.isWin
                  ? '🎉 Chúc mừng! Vé của bạn đã trúng thưởng!'
                  : '😔 Rất tiếc, vé của bạn không trúng thưởng'}
              </Alert.Heading>
              <hr />
              <div className="mb-2">
                <strong>Số vé đã dò:</strong>{' '}
                <span className="text-danger fs-5 fw-bold">
                  {checkResult.number}
                </span>
              </div>
              <div className="mb-2">
                <strong>Đài:</strong> {checkResult.province} ({checkResult.region})
              </div>
              <div className="mb-2">
                <strong>Ngày quay:</strong> {checkResult.date}
              </div>
              <div className="text-muted small">
                <strong>Thời gian dò:</strong> {checkResult.checkTime}
              </div>

              {checkResult.isWin && (
                <div className="mt-3 p-3 bg-light rounded text-center">
                  🏆 <strong>Bạn đã trúng giải đặc biệt!</strong> Xin chúc mừng!
                </div>
              )}

              {!checkResult.isWin && (
                <div className="mt-3 p-3 bg-light rounded text-center">
                  💡 <strong>Đừng nản lòng!</strong> Hãy thử vận may lần sau nhé!
                </div>
              )}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};
