import React from 'react';
import ActivityCard from './activities/ActivityCard';
import { activities } from './activities/activityData';

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Activities
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <ActivityCard
                key={index}
                icon={<Icon className="w-8 h-8" />}
                title={activity.title}
                description={activity.description}
                stats={activity.stats}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;