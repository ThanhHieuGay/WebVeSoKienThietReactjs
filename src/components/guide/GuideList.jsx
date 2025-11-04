// src/components/guide/GuideList.jsx

import GuideCard from './GuideCard';

const GuideList = ({ guides }) => {
  if (guides.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-8xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy kết quả</h3>
        <p className="text-gray-600">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {guides.map((guide, index) => (
        <GuideCard 
          key={guide.id} 
          guide={guide} 
          animationDelay={index * 0.1} 
        />
      ))}
    </div>
  );
};

export default GuideList;