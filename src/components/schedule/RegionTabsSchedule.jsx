export const RegionTabsSchedule = ({ selectedRegion, onSelectRegion }) => {
  const regions = [
    { id: 'nam', name: 'Miền Nam' },
    { id: 'trung', name: 'Miền Trung' },
    { id: 'bac', name: 'Miền Bắc' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => onSelectRegion(region.id)}
          className={`px-10 py-4 rounded-full! font-bold text-lg uppercase tracking-wider transition-all duration-300
            ${selectedRegion === region.id 
              ? 'bg-yellow-400 text-red-700 shadow-2xl scale-105' 
              : 'bg-white border-4 border-red-700 text-red-700 hover:translate-y-[-3px] hover:shadow-xl hover:bg-red-50'
            }`}
        >
          {region.name}
        </button>
      ))}
    </div>
  );
};