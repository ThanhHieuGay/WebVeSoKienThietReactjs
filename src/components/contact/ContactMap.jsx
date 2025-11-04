// src/components/contact/ContactMap.jsx

const ContactMap = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Tìm Chúng Tôi Trên Bản Đồ
        </h2>

        {/* Bản đồ Google thật */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl border border-gray-200"
          style={{ height: '450px' }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.480937772146!2d106.70098207587922!3d10.775843059284734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ab6a48e27%3A0x4f76f7de3a26c8e8!2zMTIzIMSQxrDhu51uZyBBQkMsIFF14buRbmcgMSwgVFAuIEjhu5MgQ2jDrW5oIE1pbmgg!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
