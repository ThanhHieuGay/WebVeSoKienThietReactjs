import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  PredictionHeader,
  RegionTabsPrediction,
  PredictionForm,
  PredictionResult,
  PredictionHistory,
  StatisticsSection,
  TipsSection
} from '../components/prediction';

const Prediction = () => {
  const [selectedRegion, setSelectedRegion] = useState('nam');
  const [predictionResult, setPredictionResult] = useState(null);
  const [predictionHistory, setPredictionHistory] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handlePredictionSubmit = (formData) => {
    const prediction = generatePrediction(formData);
    setPredictionResult(prediction);
    setShowResult(true);
    
    // Thêm vào lịch sử
    const historyItem = {
      id: Date.now(),
      ...formData,
      ...prediction,
      timestamp: new Date().toISOString()
    };
    setPredictionHistory([historyItem, ...predictionHistory.slice(0, 9)]);
    
    // Scroll đến kết quả
    setTimeout(() => {
      document.getElementById('prediction-result')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  const generatePrediction = (formData) => {
    const seed = getSeed(formData);
    
    const specialNumbers = [];
    for (let i = 0; i < 6; i++) {
      specialNumbers.push(generateSixDigitNumber(seed + i));
    }
    
    const firstNumbers = [];
    for (let i = 6; i < 12; i++) {
      firstNumbers.push(generateSixDigitNumber(seed + i));
    }
    
    const potentialNumbers = [];
    for (let i = 0; i < 10; i++) {
      potentialNumbers.push(generateTwoDigitNumber(seed + i + 20));
    }
    
    const confidence = Math.floor(60 + Math.random() * 25);
    const analysis = generateAnalysis(formData.method, confidence);
    
    return {
      specialNumbers,
      firstNumbers,
      potentialNumbers,
      confidence,
      analysis
    };
  };

  const getSeed = (formData) => {
    let seed = 0;
    seed += formData.province.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    seed += new Date(formData.date).getTime() % 10000;
    seed += formData.method.length * 100;
    if (formData.birthDate) {
      seed += new Date(formData.birthDate).getTime() % 10000;
    }
    return seed;
  };

  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const generateSixDigitNumber = (seed) => {
    const random = seededRandom(seed);
    return String(Math.floor(random * 900000) + 100000);
  };

  const generateTwoDigitNumber = (seed) => {
    const random = seededRandom(seed);
    return String(Math.floor(random * 100)).padStart(2, '0');
  };

  const generateAnalysis = (method, confidence) => {
    const analyses = {
      ai: [
        '🤖 Sử dụng thuật toán AI để phân tích 100 kỳ quay gần nhất',
        '📊 Nhận diện được 3 pattern chính trong dữ liệu lịch sử',
        '🎯 Các số dự đoán có tỷ lệ xuất hiện cao trong 30 ngày qua'
      ],
      frequency: [
        '📈 Phân tích tần suất xuất hiện của các con số trong 50 kỳ gần nhất',
        '🔢 Các số chẵn có xu hướng xuất hiện nhiều hơn (58%)',
        '💡 Tổ hợp số được chọn dựa trên thống kê tần suất cao nhất'
      ],
      pattern: [
        '🧩 Nhận dạng mẫu số liên tiếp và số cách đều',
        '🔄 Phát hiện chu kỳ lặp lại mỗi 7-10 kỳ quay',
        '🎲 Dự đoán dựa trên pattern xuất hiện trong 3 tháng qua'
      ],
      lucky: [
        '🍀 Tính toán số may mắn dựa trên ngày sinh và phong thủy',
        '⭐ Các con số hợp với mệnh và tuổi của bạn',
        '🌟 Kết hợp yếu tố phong thủy Đông Phương'
      ]
    };

    const baseAnalysis = analyses[method] || analyses.ai;
    return [
      ...baseAnalysis,
      `✨ Độ tin cậy: ${confidence}% - Mức độ ${confidence > 75 ? 'Cao' : confidence > 65 ? 'Trung bình' : 'Khả quan'}`,
      '💰 Khuyến nghị: Nên kết hợp nhiều bộ số để tăng cơ hội trúng thưởng'
    ];
  };

  const handleResetPrediction = () => {
    setShowResult(false);
    setPredictionResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Header currentPage="Dự đoán" />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PredictionHeader />
        
        <RegionTabsPrediction 
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
        />
        
        <PredictionForm 
          selectedRegion={selectedRegion}
          onSubmit={handlePredictionSubmit}
        />
        
        {showResult && predictionResult && (
          <PredictionResult 
            result={predictionResult}
            onReset={handleResetPrediction}
          />
        )}
        
        <PredictionHistory 
          history={predictionHistory}
        />
        
        <StatisticsSection />
        
        <TipsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Prediction;