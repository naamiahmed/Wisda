import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          WISDA Welfare Association
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto animate-slide-up">
          Empowering communities through compassion, support, and sustainable development
        </p>
        <button
          onClick={scrollToAbout}
          className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full 
                   transition-all duration-300 transform hover:scale-105 flex items-center 
                   mx-auto space-x-2"
        >
          <span>Learn More</span>
          <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;