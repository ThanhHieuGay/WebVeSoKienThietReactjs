// src/components/guide/GuideCard.jsx

import { Book } from 'lucide-react';

const GuideCard = ({ guide, animationDelay }) => {
  return (
    <div 
      className="bg-white rounded-3xl p-6 shadow-soft hover-lift animate-slide-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-red-100 rounded-xl p-3">
          <Book className="text-red-600" size={24} />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h3>
          <p className="text-gray-600 text-sm">{guide.description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-3">Các bước thực hiện:</h4>
        <ol className="space-y-2">
          {guide.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">💡 Mẹo: </span>{guide.tips}
        </p>
      </div>
    </div>
  );
};

export default GuideCard;