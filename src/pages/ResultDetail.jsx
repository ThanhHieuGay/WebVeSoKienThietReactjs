// pages/ResultDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  ResultBreadcrumb, ResultHeader, ResultDetailCard,
  ResultActions, ResultNotes, ResultLoading
} from '../components/result';

const ResultDetail = () => {
  const { province, date } = useParams();
  const [loading, setLoading] = useState(true);
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setResultData({
        province: decodeURIComponent(province),
        date: date,
        drawTime: '16:15',
        region: 'Miền Nam',
        prizes: {
          special: '888888',
          first: '77777',
          second: ['55677', '88900'],
          third: ['33455', '66778'],
          fourth: ['54321', '09876', '22113', '44335'],
          fifth: ['33224', '66557', '99880'],
          sixth: ['2211', '4433', '6655'],
          seventh: ['887', '009', '332'],
          eighth: '09'
        }
      });
      setLoading(false);
    }, 1200);
  }, [province, date]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header currentPage="Kết Quả" />
        <ResultLoading />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header currentPage="Kết Quả Chi Tiết" />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ResultBreadcrumb />
        <ResultHeader data={resultData} />
        <ResultDetailCard data={resultData} />
        <ResultActions />
        <ResultNotes />
      </div>
      
      <Footer />
    </div>
  );
};

export default ResultDetail;