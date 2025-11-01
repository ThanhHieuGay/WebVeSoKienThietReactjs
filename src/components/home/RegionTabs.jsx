export const RegionTabs = ({ selectedRegion, onSelectRegion }) => {
  const regions = [
    { key: 'nam', label: 'MIỀN NAM', icon: '🌴' },
    { key: 'trung', label: 'MIỀN TRUNG', icon: '🏖️' },
    { key: 'bac', label: 'MIỀN BẮC', icon: '🏔️' }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center gap-3">
        {regions.map(region => (
          <button
            key={region.key}
            onClick={() => onSelectRegion(region.key)}
            className={`px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 ${
              selectedRegion === region.key
                ? 'bg-red-700 text-white shadow-lg scale-105'
                : 'bg-white text-red-700 border-2 border-red-700 hover:bg-red-50 hover:scale-105'
            }`}
          >
            <span className="mr-2">{region.icon}</span>
            {region.label}
          </button>
        ))}
      </div>
    </div>
  );
};