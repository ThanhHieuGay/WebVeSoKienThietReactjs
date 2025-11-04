// src/components/about/TeamSection.jsx

const TeamSection = () => {
  const team = [
    { name: 'Trịnh Trần Phương Tuấn', role: 'CEO & Founder', image: '👨‍💼', desc: '15+ năm kinh nghiệm' },
    { name: 'Trần Thái Hòa', role: 'CTO', image: '👩‍💻', desc: 'Chuyên gia công nghệ' },
    { name: 'Lê Thành Hiếu', role: 'Giám Đốc Vận Hành', image: '👨‍🏫', desc: 'Quản lý dự án hàng đầu' },
    { name: 'Trần Minh Cường', role: 'Trưởng Phòng Marketing', image: '👩‍🎨', desc: 'Chiến lược sáng tạo' }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-center text-3xl font-bold mb-12 text-red-600">Đội Ngũ Lãnh Đạo</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 text-center shadow-soft hover-lift h-full">
            <div className="rounded-full bg-red-100 inline-flex items-center justify-content-center mb-4 text-5xl"
                 style={{ width: '100px', height: '100px' }}>
              {member.image}
            </div>
            <h5 className="text-lg font-bold mb-1">{member.name}</h5>
            <p className="text-red-600 text-sm font-semibold mb-2">{member.role}</p>
            <p className="text-gray-500 text-sm mb-0">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;