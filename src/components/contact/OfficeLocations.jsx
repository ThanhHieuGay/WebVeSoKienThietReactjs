// src/components/contact/OfficeLocations.jsx

import { useState } from 'react';
import { MapPin, X } from 'lucide-react';

const OfficeLocations = () => {
  const [selectedOffice, setSelectedOffice] = useState(null);

  const offices = [
    {
      city: 'TP. Hồ Chí Minh',
      address: '123 Đường ABC, Quận 1',
      phone: '(+84) 28 1234 5678',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.480937772146!2d106.70098207587922!3d10.775843059284734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ab6a48e27%3A0x4f76f7de3a26c8e8!2zMTIzIMSQxrDhu51uZyBBQkMsIFF14buRbmcgMSwgVFAuIEjhu5MgQ2jDrW5oIE1pbmgg!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s',
      isMain: true,
    },
    {
      city: 'Hà Nội',
      address: '456 Đường XYZ, Quận Hoàn Kiếm',
      phone: '(+84) 24 9876 5432',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.112021365693!2d105.84936697472884!3d21.0285113859978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbecf8e9b2d%3A0x83ad81fa8e356d7d!2zNDU2IMSQxrDhu51uZyBYWVosIFF14buRbmcgSG9hbiBLaeG7g20!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s',
      isMain: false,
    },
    {
      city: 'Đà Nẵng',
      address: '789 Đường DEF, Quận Hải Châu',
      phone: '(+84) 236 1111 2222',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0901959726163!2d108.22190387484167!3d16.05968124055285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c92ac6b2b3%3A0x5164ff8b8b2767f5!2zNzg5IMSQxrDhu51uZyBERUYsIFF14buRbmcgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s',
      isMain: false,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-soft relative">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Văn Phòng</h3>
      <div className="space-y-4">
        {offices.map((office, index) => (
          <div
            key={index}
            onClick={() => setSelectedOffice(office)}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all hover:scale-[1.02] ${
              office.isMain
                ? 'border-red-300 bg-red-50 hover:bg-red-100'
                : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <MapPin
                className={office.isMain ? 'text-red-600' : 'text-gray-600'}
                size={24}
              />
              <div>
                <h4 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
                  {office.city}
                  {office.isMain && (
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                      Trụ sở chính
                    </span>
                  )}
                </h4>
                <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                <p className="text-gray-500 text-sm">{office.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal hiển thị bản đồ */}
      {selectedOffice && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-[90%] md:w-[70%] lg:w-[50%] overflow-hidden relative">
            <button
              onClick={() => setSelectedOffice(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition"
            >
              <X size={20} />
            </button>
            <iframe
              title={selectedOffice.city}
              src={selectedOffice.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="p-4 text-center text-gray-700 font-medium">
              {selectedOffice.city} — {selectedOffice.address}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeLocations;
