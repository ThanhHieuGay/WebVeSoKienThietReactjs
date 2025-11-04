// src/components/guide/GuideCategoryTabs.jsx

import { Book, PlayCircle, FileText, HelpCircle } from 'lucide-react';

const GuideCategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'Tất Cả', icon: Book },
    { id: 'beginner', name: 'Người Mới', icon: PlayCircle },
    { id: 'advanced', name: 'Nâng Cao', icon: FileText },
    { id: 'faq', name: 'FAQ', icon: HelpCircle }
  ];

  return (
    <div className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon size={20} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuideCategoryTabs;