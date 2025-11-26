// pages/ResultDetail.jsx - CẬP NHẬT VỚI SUPABASE
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  ResultBreadcrumb, ResultHeader, ResultDetailCard,
  ResultActions, ResultNotes, ResultLoading
} from '../components/result';
import { supabase } from '../lib/supabaseClient';

const ResultDetail = () => {
  const { province, date } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResultData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Decode province code từ URL
        const provinceCode = decodeURIComponent(province);

        // Query kết quả từ Supabase
        const { data, error: queryError } = await supabase
          .from('v_lottery_results')
          .select('*')
          .eq('province_name', provinceCode)
          .eq('draw_date', date)
          .single();

        if (queryError) {
          console.error('Lỗi query Supabase:', queryError);
          setError('Không tìm thấy kết quả xổ số');
          setLoading(false);
          return;
        }

        if (!data) {
          setError('Không có kết quả cho ngày này');
          setLoading(false);
          return;
        }

        // Format dữ liệu để khớp với component hiện tại
        const formattedData = {
          province: data.province_name,
          date: new Date(data.draw_date).toLocaleDateString('vi-VN'),
          drawTime: '16:15', // Mặc định, có thể lấy từ DB nếu cần
          region: data.region === 'south' ? 'Miền Nam' :
                  data.region === 'central' ? 'Miền Trung' : 'Miền Bắc',
          prizes: {
            special: data.prize_special,
            first: data.prize_first,
            second: data.prize_second || [],
            third: data.prize_third || [],
            fourth: data.prize_fourth || [],
            fifth: data.prize_fifth || [],
            sixth: data.prize_sixth || [],
            seventh: data.prize_seventh || [],
            eighth: data.prize_eighth || null
          },
          // Thêm thông tin gốc để sử dụng cho các component khác
          rawData: data
        };

        setResultData(formattedData);
      } catch (err) {
        console.error('Lỗi fetch dữ liệu:', err);
        setError('Có lỗi xảy ra khi tải dữ liệu');
      } finally {
        setLoading(false);
      }
    };

    fetchResultData();
  }, [province, date]);

  // Hiển thị loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header currentPage="Kết Quả" />
        <ResultLoading />
        <Footer />
      </div>
    );
  }

  // Hiển thị lỗi
  if (error || !resultData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header currentPage="Kết Quả Chi Tiết" />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">❌</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {error || 'Không tìm thấy kết quả'}
            </h2>
            <p className="text-gray-600 mb-8">
              Tỉnh: <strong>{decodeURIComponent(province)}</strong>
              <br />
              Ngày: <strong>{date}</strong>
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              ← Quay lại Trang chủ
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Hiển thị kết quả
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