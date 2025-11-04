// src/components/contact/DepartmentList.jsx

import { MessageCircle } from 'lucide-react';

const DepartmentList = () => {
  const departments = [
    { name: 'Hỗ Trợ Kỹ Thuật', email: 'tech@xoso.vn', phone: '(+84) 123 456 001' },
    { name: 'Chăm Sóc Khách Hàng', email: 'care@xoso.vn', phone: '(+84) 123 456 002' },
    { name: 'Hợp Tác Kinh Doanh', email: 'business@xoso.vn', phone: '(+84) 123 456 003' },
    { name: 'Khiếu Nại & Góp Ý', email: 'feedback@xoso.vn', phone: '(+84) 123 456 004' }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-soft">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Bộ Phận Hỗ Trợ</h3>
      <div className="space-y-4">
        {departments.map((dept, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div className="bg-red-100 rounded-xl p-3">
              <MessageCircle className="text-red-600" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">{dept.name}</h4>
              <p className="text-gray-600 text-sm mb-1">{dept.email}</p>
              <p className="text-gray-500 text-sm">{dept.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;