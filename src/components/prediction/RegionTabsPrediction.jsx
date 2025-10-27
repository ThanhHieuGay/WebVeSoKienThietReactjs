export const RegionTabsPrediction = ({ selectedRegion, onSelectRegion }) => {
  const regions = [
    { id: 'nam', label: 'MIỀN NAM', icon: '🌴' },
    { id: 'trung', label: 'MIỀN TRUNG', icon: '🏖️' },
    { id: 'bac', label: 'MIỀN BẮC', icon: '🏔️' }
  ];

  return (
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      {regions.map(region => (
        <button
          key={region.id}
          onClick={() => onSelectRegion(region.id)}
          className={`
            px-10 py-4 font-bold text-lg transition-all duration-300
            ${selectedRegion === region.id 
              ? 'text-white shadow-xl scale-105' 
              : 'bg-white border-2 hover:shadow-lg hover:-translate-y-1'
            }
          `}
          style={{ 
            letterSpacing: '1px',
            borderRadius: '16px',
            backgroundColor: selectedRegion === region.id ? '#C8102E' : 'white',
            borderColor: '#C8102E',
            borderWidth: '2px',
            borderStyle: 'solid',
            color: selectedRegion === region.id ? 'white' : '#C8102E'
          }}
        >
          <span className="mr-2">{region.icon}</span>
          {region.label}
        </button>
      ))}
    </div>
  );
};