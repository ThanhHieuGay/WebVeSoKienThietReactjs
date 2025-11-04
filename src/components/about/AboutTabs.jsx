// src/components/about/AboutTabs.jsx

const AboutTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: 'mission', label: 'Sứ Mệnh' },
    { key: 'values', label: 'Giá Trị' },
    { key: 'timeline', label: 'Lịch Sử' },
    { key: 'team', label: 'Đội Ngũ' }
  ];

  return (
    <div className="flex justify-center gap-3 flex-wrap mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`px-6 py-3 font-semibold rounded-xl transition-all ${
            activeTab === tab.key 
              ? 'bg-red-600 text-white shadow-lg' 
              : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
          }`}
          style={{ minWidth: '120px' }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default AboutTabs;