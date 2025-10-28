import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  ScheduleHeader,
  DateFilterSection,
  RegionTabsSchedule,
  ScheduleCards,
  WeeklyScheduleTable,
  ScheduleNotes
} from '../components/schedule';

// Import CSS cho animations (nếu có file riêng)
import '../components/schedule/schedule-animations.css';


const Schedule = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedRegion, setSelectedRegion] = useState('nam');

  const handleNavigateDate = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + direction);
    
    // Không cho xem ngày tương lai
    if (newDate > today) {
      alert('⚠️ Không thể xem lịch mở thưởng của ngày trong tương lai!');
      return;
    }
    
    setSelectedDate(newDate);
  };

  const handleSelectDate = (date) => {
    const pickedDate = new Date(date);
    pickedDate.setHours(0, 0, 0, 0);
    
    if (pickedDate > today) {
      alert('⚠️ Không thể chọn ngày trong tương lai!');
      return;
    }
    
    setSelectedDate(pickedDate);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <Header currentPage="Lịch Mở Thưởng" />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ScheduleHeader />
        
        <DateFilterSection 
          selectedDate={selectedDate}
          today={today}
          onNavigateDate={handleNavigateDate}
          onSelectDate={handleSelectDate}
        />
        
        <RegionTabsSchedule 
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
        />
        
        <ScheduleCards 
          selectedDate={selectedDate}
          selectedRegion={selectedRegion}
          today={today}
        />
        
        <WeeklyScheduleTable />
        
        <ScheduleNotes />
      </div>
      
      <Footer />
    </div>
  );
};

export default Schedule;