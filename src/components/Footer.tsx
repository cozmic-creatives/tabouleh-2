import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <footer className="bg-clay-100 pt-12 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-serif font-bold text-spice-600">TABOULEH 2</span>
              <span className="text-lg font-serif ml-2 text-olive-600">مطعم تبوله</span>
            </div>
            <p className="text-gray-600 mb-4">Authentieke Midden-Oost keuken gemaakt met verse ingrediënten en traditionele recepten.</p>
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
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border border-clay-200 rounded-md p-2 shadow-sm bg-white/[0.61]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-gray-800 flex items-center">
                  <Clock size={18} className="mr-2 text-spice-500" />
                  Openingstijden
                </h3>
                <CollapsibleTrigger className="rounded-full p-1 hover:bg-clay-100 transition-colors">
                  {isOpen ? <ChevronUp className="h-4 w-4 text-spice-500" /> : <ChevronDown className="h-4 w-4 text-spice-500" />}
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="mt-2 space-y-2">
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <p className="text-gray-800 font-medium">Maandag</p>
                  <p className="text-gray-600">02:00 - 22:00</p>
                  
                  <p className="text-gray-800 font-medium">Dinsdag</p>
                  <p className="text-gray-600">Gesloten</p>
                  
                  <p className="text-gray-800 font-medium">Woensdag</p>
                  <p className="text-gray-600">14:00 - 22:00</p>
                  
                  <p className="text-gray-800 font-medium">Donderdag</p>
                  <p className="text-gray-600">14:00 - 22:00</p>
                  
                  <p className="text-gray-800 font-medium">Vrijdag</p>
                  <p className="text-gray-600">14:00 - 22:00</p>
                  
                  <p className="text-gray-800 font-medium">Zaterdag</p>
                  <p className="text-gray-600">14:00 - 22:00</p>
                  
                  <p className="text-gray-800 font-medium">Zondag</p>
                  <p className="text-gray-600">02:00 - 22:00</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mt-2 mb-4 text-gray-800">Neem Contact Op</h3>
            <div className="flex items-start space-x-2 mb-2">
              <MapPin size={18} className="mt-1 text-spice-500" />
              <p className="text-gray-600">Ledebergplein 17, 9050 Gent</p>
            </div>
            <div className="flex items-start space-x-2 mb-2">
              <Phone size={18} className="mt-1 text-spice-500" />
              <p className="text-gray-600">+32 49 802 0482</p>
            </div>
            <div className="flex items-start space-x-2">
              <Mail size={18} className="mt-1 text-spice-500" />
              <p className="text-gray-600">hayder@tabouleh2.be</p>
            </div>
          </div>
        </div>
        <div className="border-t border-clay-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TABOULEH 2 مطعم تبوله. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;