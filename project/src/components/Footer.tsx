import React from 'react';
import {  Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-4">
            <img src="../../public/assets/Wisda_Logo.png" alt="WISDA Logo" className="h-15 w-12" />
            <span className="text-xl font-bold">WISDA</span>
            </div>
            <p className="text-gray-400">
              Empowering communities through compassion, support, and sustainable development.
            </p>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
            About Us
          </a>
              </li>
              <li>
          <a href="#mission" className="text-gray-400 hover:text-white transition-colors duration-300">
            Mission & Vision
          </a>
              </li>
              <li>
          <a href="#activities" className="text-gray-400 hover:text-white transition-colors duration-300">
            Activities
          </a>
              </li>
              <li>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
            Contact
          </a>
              </li>
            </ul>
          </div>

            <div className="">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
              </a>
            </div>
            </div>
        </div>

        <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} WISDA Welfare Association. All rights reserved.
          </p>

        <div className="border-t border-gray-800 pt-8 text-center">


          <p className="text-gray-200">
             Design and Devloped by <b>Naami Ahmed</b>
              <div className="flex justify-center space-x-4 mt-0">
              <a href="mailto:naamiahmed27@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"></svg>
                <span>naamiahmed27@gmail.com</span>
              </a>
              <a href="https://wa.me/1234567890" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <span>+94702652676</span>
              </a>
              </div>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;