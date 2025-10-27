import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export const HotNews = () => {
  const news = [
    { 
      id: 1, 
      title: 'Giải Jackpot 50 tỷ đồng đã có chủ', 
      type: 'hot',
      date: '23/10/2025',
      // 👉 GỢI Ý: thêm ảnh tại đây, ví dụ: '/images/news1.jpg'
      img: ''
    },
    { 
      id: 2, 
      title: 'Lịch nghỉ Tết Nguyên Đán 2026', 
      type: 'new',
      date: '22/10/2025',
      // 👉 GỢI Ý: thêm ảnh tại đây, ví dụ: '/images/news2.jpg'
      img: ''
    },
    { 
      id: 3, 
      title: 'Khuyến mãi mua vé tháng 11', 
      type: 'popular',
      date: '21/10/2025',
      // 👉 GỢI Ý: thêm ảnh tại đây, ví dụ: '/images/news3.jpg'
      img: ''
    }
  ];

  const getBadgeVariant = (type) => {
    switch (type) {
      case 'hot': return 'danger';
      case 'new': return 'success';
      case 'popular': return 'warning';
      default: return 'secondary';
    }
  };

  return (
    <Container className="my-5">
      <h3 className="text-center fw-bold text-danger mb-4 fs-2">
        📰 Tin Tức Nổi Bật
      </h3>

      <Row className="justify-content-center">
        {news.map((item) => (
          <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              {/* Ảnh tin tức */}
              {item.img ? (
                <Card.Img 
                  variant="top" 
                  src={item.img} 
                  alt={item.title} 
                  className="rounded-top" 
                  style={{ height: '180px', objectFit: 'cover' }}
                />
              ) : (
                <div 
                  className="bg-light d-flex align-items-center justify-content-center rounded-top"
                  style={{ height: '180px', color: '#888' }}
                >
                  <span>Hình ảnh tin tức</span>
                </div>
              )}

              {/* Nội dung card */}
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Badge bg={getBadgeVariant(item.type)} className="text-uppercase">
                      {item.type}
                    </Badge>
                    <span className="text-muted small">{item.date}</span>
                  </div>

                  <Card.Title className="fw-bold fs-6 text-dark mb-3">
                    {item.title}
                  </Card.Title>
                </div>

                <div>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    href="#"
                    className="mt-auto"
                  >
                    Xem thêm →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
