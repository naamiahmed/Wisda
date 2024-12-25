import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#mission', label: 'Mission' },
    { href: '#activities', label: 'Activities' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-2 ' : 'bg-white py-2 opacity-75'
    }`}>
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
        {/* <Heart className="h-8 w-8 text-blue-600" /> */}
        <img src="../../public/assets/Wisda_Logo.png" alt="WISDA Logo" className="h-15 w-12" />
        <span className="text-xl font-bold text-gray-800">WISDA</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-blue-600 relative group transition-colors duration-300"
          >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
        </div>

        <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg py-4">
        {navLinks.map((link) => (
          <a
          key={link.href}
          href={link.href}
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          >
          {link.label}
          </a>
        ))}
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;