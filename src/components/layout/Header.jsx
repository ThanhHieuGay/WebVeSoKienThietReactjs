import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import "../../custom.css";

export const Header = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Dự Đoán', path: '/prediction' },
    { name: 'Lịch Mở Thưởng', path: '/schedule' },
    { name: 'Mua Số', path: '/buy' },
    { name: 'Tin Tức', path: '/news' },
    { name: 'Giới Thiệu', path: '/about' },
    { name: 'Hướng Dẫn', path: '/guide' },
    { name: 'Liên Hệ', path: '/contact' }
  ];

  return (
    <header className="sticky-top shadow-lg">
      <TopBar />
      <Navbar 
        variant="dark" 
        expand="lg" 
        className="py-3"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-white">
            Xổ Số Kiến Thiết Phát Tài
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-1">
              {menuItems.map(item => (
                <Nav.Link 
                  key={item.name}
                  as={Link}
                  to={item.path}
                  className={`nav-menu-item ${location.pathname === item.path ? 'active' : ''}`}
                  style={{ 
                    color: 'white',
                    padding: '0.625rem 1rem'
                  }}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};