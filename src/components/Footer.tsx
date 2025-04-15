
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, CalendarDays, CalendarOff } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clay-100 pt-8 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="mb-3">
              <span className="text-xl font-serif font-bold text-spice-600">TABOULEH 2</span>
              <span className="text-lg font-serif ml-2 text-olive-600">مطعم تبوله</span>
            </div>
            <p className="text-gray-600 mb-3 text-sm">
              Authentieke Syrische keuken gemaakt met verse ingrediënten en traditionele recepten.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-spice-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-spice-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-serif font-bold mb-3 text-gray-800">Openingstijden</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center space-x-1.5">
                <CalendarDays size={16} className="text-spice-500" />
                <p className="text-gray-800">Maandag: <span className="text-gray-600">02:00 - 22:00</span></p>
              </div>
              <div className="flex items-center space-x-1.5">
                <CalendarOff size={16} className="text-spice-500" />
                <p className="text-gray-800">Dinsdag: <span className="text-gray-600">Gesloten</span></p>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock size={16} className="text-spice-500" />
                <p className="text-gray-800">Woensdag: <span className="text-gray-600">14:00 - 22:00</span></p>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock size={16} className="text-spice-500" />
                <p className="text-gray-800">Donderdag: <span className="text-gray-600">14:00 - 22:00</span></p>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock size={16} className="text-spice-500" />
                <p className="text-gray-800">Vrijdag: <span className="text-gray-600">14:00 - 22:00</span></p>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock size={16} className="text-spice-500" />
                <p className="text-gray-800">Zaterdag: <span className="text-gray-600">14:00 - 22:00</span></p>
              </div>
              <div className="flex items-center space-x-1.5">
                <CalendarDays size={16} className="text-spice-500" />
                <p className="text-gray-800">Zondag: <span className="text-gray-600">02:00 - 22:00</span></p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base font-serif font-bold mb-3 text-gray-800">Neem Contact Op</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-spice-500 flex-shrink-0" />
                <p className="text-gray-600">Ledebergplein 17, 9050 Gent</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-spice-500 flex-shrink-0" />
                <p className="text-gray-600">+32496210697</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-spice-500 flex-shrink-0" />
                <p className="text-gray-600">info@tabouleh2.be</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-clay-200 mt-6 pt-4 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} TABOULEH 2 مطعم تبوله. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
