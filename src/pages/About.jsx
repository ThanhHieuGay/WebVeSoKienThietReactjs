// src/pages/About.jsx

import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import AboutTabs from '../components/about/AboutTabs';
import MissionSection from '../components/about/MissionSection';
import ValuesSection from '../components/about/ValuesSection';
import TimelineSection from '../components/about/TimelineSection';
import TeamSection from '../components/about/TeamSection';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <AboutHero />
      
      <AboutStats />

      <div className="max-w-7xl mx-auto px-4 py-4">
        <AboutTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'mission' && <MissionSection />}
        {activeTab === 'values' && <ValuesSection />}
        {activeTab === 'timeline' && <TimelineSection />}
        {activeTab === 'team' && <TeamSection />}
      </div>

      <AboutCTA />
      
      <Footer />
    </div>
  );
};

export default About;