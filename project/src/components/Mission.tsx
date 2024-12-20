import React from 'react';
import MissionCard from './mission/MissionCard';
import { missionData } from './mission/missionData';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mission & Vision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by our commitment to community welfare and sustainable development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <MissionCard {...missionData.mission} />
          <MissionCard {...missionData.vision} />
        </div>
      </div>
    </section>
  );
};

export default Mission;