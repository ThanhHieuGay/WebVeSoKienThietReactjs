import { Container } from 'react-bootstrap';

export const TopBar = () => {
  return (
    <div className="bg-[var(--primary)] text-white py-2"> {/* Thay bg-danger bằng bg-[var(--primary)] */}
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <a href="#" className="text-white text-decoration-none me-3">Hướng dẫn</a>
            <span className="me-2">/</span>
            <a href="#" className="text-white text-decoration-none me-3">Hỗ trợ</a>
            <span className="me-2">/</span>
            <a href="#" className="text-white text-decoration-none">Liên hệ</a>
          </div>
          <div>
            <span>Gọi chúng tôi: (+84) 1234 567890</span>
          </div>
          <div>
            <button className="btn btn-warning btn-sm me-2 text-dark fw-bold"> {/* Giữ nguyên vàng */}
              Đăng nhập
            </button>
            <button className="btn btn-light btn-sm fw-bold">
              Đăng ký
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};