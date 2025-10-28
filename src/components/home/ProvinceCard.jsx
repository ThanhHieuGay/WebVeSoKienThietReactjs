import { Card, Table } from 'react-bootstrap';

export const ProvinceCard = ({ province, results }) => {
  return (
    <Card className="province-card border-0">
      <Card.Header 
        className="text-white text-center py-3"
        style={{ backgroundColor: '#C8102E' }}
      >
        <h3 className="mb-0 fw-bold">{province}</h3>
      </Card.Header>

      <Card.Body className="p-0">
        <Table striped bordered hover responsive className="mb-0">
          <tbody>
            <tr>
              <td className="fw-bold bg-light">🏆 Đặc Biệt</td>
              <td className="text-center prize-special">{results.special}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">🥇 Giải Nhất</td>
              <td className="text-center prize-first">{results.first}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">🥈 Giải Nhì</td>
              <td className="text-center">{results.second.join(' - ')}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">🥉 Giải Ba</td>
              <td className="text-center">{results.third.join(' - ')}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">Giải Tư</td>
              <td className="text-center">{results.fourth.join(' - ')}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">Giải Năm</td>
              <td className="text-center">{results.fifth.join(' - ')}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">Giải Sáu</td>
              <td className="text-center">{results.sixth.join(' - ')}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">Giải Bảy</td>
              <td className="text-center">{results.seventh.join(' - ')}</td>
            </tr>
            <tr>
              <td className="fw-bold bg-light">Giải Tám</td>
              <td className="text-center">{results.eighth}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
