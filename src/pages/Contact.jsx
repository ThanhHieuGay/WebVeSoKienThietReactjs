// src/pages/Contact.jsx

import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactForm from '../components/contact/ContactForm';
import DepartmentList from '../components/contact/DepartmentList';
import OfficeLocations from '../components/contact/OfficeLocations';
import SocialMediaLinks from '../components/contact/SocialMediaLinks';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ContactHero />
      <ContactInfoCards />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form + Social Media */}
          <div className="space-y-8">
            <ContactForm />
            <SocialMediaLinks />
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            <DepartmentList />
            <OfficeLocations />
          </div>
        </div>
      </div>

      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contact;
