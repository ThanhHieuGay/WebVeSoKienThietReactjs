// src/pages/Guide.jsx

import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import GuideHero from '../components/guide/GuideHero';
import GuideCategoryTabs from '../components/guide/GuideCategoryTabs';
import GuideList from '../components/guide/GuideList';
import FAQSection from '../components/guide/FAQSection';
import GuideHelpCTA from '../components/guide/GuideHelpCTA';
import { guides } from '../data/guideData';

const Guide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Lọc guides theo category và search
  const filteredGuides = guides.filter(guide => {
    const matchCategory = activeCategory === 'all' || guide.category === activeCategory;
    const matchSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <GuideHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <GuideCategoryTabs 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeCategory !== 'faq' ? (
          <GuideList guides={filteredGuides} />
        ) : (
          <FAQSection />
        )}
      </div>

      <GuideHelpCTA />
      
      <Footer />
    </div>
  );
};

export default Guide;