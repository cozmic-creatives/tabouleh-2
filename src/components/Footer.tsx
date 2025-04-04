
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clay-100 pt-12 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-serif font-bold text-spice-600">Damascene</span>
              <span className="text-lg font-serif ml-2 text-olive-600">Takeaway</span>
            </div>
            <p className="text-gray-600 mb-4">
              Authentic Syrian cuisine made with fresh ingredients and traditional recipes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-spice-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-spice-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-gray-800">Opening Hours</h3>
            <div className="flex items-start space-x-2 mb-2">
              <Clock size={18} className="mt-1 text-spice-500" />
              <div>
                <p className="text-gray-800 font-medium">Monday - Friday</p>
                <p className="text-gray-600">11:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock size={18} className="mt-1 text-spice-500" />
              <div>
                <p className="text-gray-800 font-medium">Saturday - Sunday</p>
                <p className="text-gray-600">12:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-gray-800">Contact Us</h3>
            <div className="flex items-start space-x-2 mb-2">
              <MapPin size={18} className="mt-1 text-spice-500" />
              <p className="text-gray-600">123 Syrian Street, Foodtown, FT 12345</p>
            </div>
            <div className="flex items-start space-x-2 mb-2">
              <Phone size={18} className="mt-1 text-spice-500" />
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
            <div className="flex items-start space-x-2">
              <Mail size={18} className="mt-1 text-spice-500" />
              <p className="text-gray-600">info@damascenetakeaway.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-clay-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Damascene Takeaway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
