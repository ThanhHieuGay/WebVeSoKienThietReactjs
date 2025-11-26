// src/pages/Support.jsx

import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import SupportHero from '../components/support/SupportHero';
import SupportCategoryTabs from '../components/support/SupportCategoryTabs';
import SupportArticleList from '../components/support/SupportArticleList';
import FAQSection from '../components/guide/FAQSection'; // Reusing from Guide for consistency
import SupportHelpCTA from '../components/support/SupportHelpCTA';
import { supportArticles } from '../data/supportData'; // Assume you create this data file similar to guideData

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter support articles based on category and search
  const filteredArticles = supportArticles.filter(article => {
    const matchCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <SupportHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <SupportCategoryTabs 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeCategory !== 'faq' ? (
          <SupportArticleList articles={filteredArticles} />
        ) : (
          <FAQSection /> // Reusing the FAQ from Guide for consistency
        )}
      </div>

      <SupportHelpCTA />
      
      <Footer />
    </div>
  );
};

export default Support;