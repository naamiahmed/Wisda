import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          About Us
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-black">
            <Users className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">Our Community</h3>
            <p className="text-gray-600 text-center">
              Building stronger communities through unity, support, and shared values.
            </p>
            </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-black">
            <Target className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">Our Focus</h3>
            <p className="text-gray-600 text-center">
              Dedicated to sustainable development and community welfare initiatives.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-black">
            <Award className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">Our Impact</h3>
            <p className="text-gray-600 text-center">
              Creating lasting positive change through dedicated programs and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;