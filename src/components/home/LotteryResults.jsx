// LotteryResults.jsx - Đã thêm Đài Khánh Hòa cho Miền Trung
import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ProvinceCard } from './ProvinceCard';

export const LotteryResults = ({ region }) => {
  const [currentProvince, setCurrentProvince] = useState(0);

  // Reset về trang đầu tiên khi đổi miền
  useEffect(() => {
    setCurrentProvince(0);
  }, [region]);
  
  const mockResults = {
    nam: [
      {
        name: 'TP. HỒ CHÍ MINH',
        results: {
          special: '363636',
          first: '654321',
          second: ['112233', '445566'],
          third: ['778899', '990011'],
          fourth: ['12345', '67890', '11122', '33344'],
          fifth: ['22334', '55667', '88990'],
          sixth: ['1122', '3344', '5566'],
          seventh: ['778', '990', '223'],
          eighth: '45'
        }
      },
      {
        name: 'ĐỒNG NAI',
        results: {
          special: '888888',
          first: '777777',
          second: ['556677', '889900'],
          third: ['334455', '667788'],
          fourth: ['54321', '09876', '22113', '44335'],
          fifth: ['33224', '66557', '99880'],
          sixth: ['2211', '4433', '6655'],
          seventh: ['887', '009', '332'],
          eighth: '09'
        }
      },
      {
        name: 'CẦN THƠ',
        results: {
          special: '686868',
          first: '686868',
          second: ['223344', '556677'],
          third: ['889900', '112233'],
          fourth: ['98765', '43210', '55667', '88990'],
          fifth: ['11223', '44556', '77889'],
          sixth: ['9988', '7766', '5544'],
          seventh: ['332', '110', '998'],
          eighth: '85'
        }
      }
    ],
    trung: [
      {
        name: 'ĐÀ NẴNG',
        results: {
          special: '123456',
          first: '654321',
          second: ['112233', '445566'],
          third: ['778899', '990011'],
          fourth: ['12345', '67890', '11122', '33344'],
          fifth: ['22334', '55667', '88990'],
          sixth: ['1122', '3344', '5566'],
          seventh: ['778', '990', '223'],
          eighth: '45'
        }
      },
      {
        name: 'KHÁNH HÒA',
        results: {
          special: '456789',
          first: '987654',
          second: ['334455', '667788'],
          third: ['112233', '556677'],
          fourth: ['23456', '78901', '33445', '66778'],
          fifth: ['44556', '77889', '00112'],
          sixth: ['3344', '6677', '9900'],
          seventh: ['112', '445', '778'],
          eighth: '56'
        }
      }
    ],
    bac: [
      {
        name: 'HÀ NỘI',
        results: {
          special: '246810',
          first: '135791',
          second: ['223344', '556677'],
          third: ['889900', '112233'],
          fourth: ['98765', '43210', '55667', '88990'],
          fifth: ['11223', '44556', '77889'],
          sixth: ['9988', '7766', '5544'],
          seventh: ['332', '110', '998'],
          eighth: '86'
        }
      }
    ]
  };

  const provinces = mockResults[region] || mockResults.nam;
  const totalProvinces = provinces.length;

  const handleNext = () => {
    setCurrentProvince((prev) => (prev + 1) % totalProvinces);
  };

  const handlePrev = () => {
    setCurrentProvince((prev) => (prev - 1 + totalProvinces) % totalProvinces);
  };

  return (
  <Container className="my-4">
    <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
      <Button variant="outline-secondary" onClick={handlePrev}>
        ‹
      </Button>
      <span className="fw-bold">{currentProvince + 1} / {totalProvinces}</span>
      <Button variant="outline-secondary" onClick={handleNext}>
        ›
      </Button>
    </div>

    {}
    {provinces[currentProvince] ? (
      <ProvinceCard
        province={provinces[currentProvince].name}
        results={provinces[currentProvince].results}
      />
    ) : (
      <p className="text-center text-muted">Đang tải dữ liệu...</p>
    )}
  </Container>
);

};