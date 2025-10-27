import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white py-5 mt-5"> {/* Thay bg-danger bằng bg-[var(--primary)] */}
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h5 className="fw-bold mb-3">Địa chỉ</h5>
            <p>123 Đường ABC, TP. Hồ Chí Minh, Việt Nam</p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Email</h5>
            <p>info@xosokienthiet.vn</p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Điện thoại</h5>
            <p>(+84) 1234 567890</p>
          </Col>
        </Row>
        <hr className="border-white opacity-50" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Xổ Số Kiến Thiết. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};