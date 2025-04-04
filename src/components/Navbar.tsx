
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-clay-200">
      <div className="container-custom mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-spice-600">Damascene</span>
          <span className="text-lg font-serif ml-2 text-olive-600">Takeaway</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-spice-600 font-medium transition-colors">
            Home
          </Link>
          <Link to="/menu" className="text-gray-700 hover:text-spice-600 font-medium transition-colors">
            Menu
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-spice-600 font-medium transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-spice-600 hover:bg-spice-700">
            <Link to="/contact">Order Now</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-clay-200 py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" 
              className="text-gray-700 hover:text-spice-600 font-medium transition-colors py-2"
              onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/menu" 
              className="text-gray-700 hover:text-spice-600 font-medium transition-colors py-2"
              onClick={toggleMenu}>
              Menu
            </Link>
            <Link to="/contact" 
              className="text-gray-700 hover:text-spice-600 font-medium transition-colors py-2"
              onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild className="bg-spice-600 hover:bg-spice-700 w-full mt-4">
              <Link to="/contact" onClick={toggleMenu}>Order Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
