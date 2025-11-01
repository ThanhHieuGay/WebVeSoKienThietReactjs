import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Banner } from '../components/home/Banner';
import { RegionTabs } from '../components/home/RegionTabs';
import { DateSelector } from '../components/home/DateSelector';
import { LotteryResults } from '../components/home/LotteryResults';
import { QuickCheck } from '../components/home/QuickCheck';
import { HotNews } from '../components/home/HotNews';

export const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState('nam');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Header currentPage="Trang Chủ" />
      
      <Banner />
      
      <RegionTabs 
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
      />
      
      <DateSelector 
        currentDate={currentDate}
        onDateChange={handleDateChange}
      />
      
      {/* Truyền currentDate vào LotteryResults */}
      <LotteryResults 
        region={selectedRegion} 
        currentDate={currentDate}
      />
      
      <QuickCheck />
      
      <HotNews />
      
      <Footer />
    </div>
  );
};

export default Home;