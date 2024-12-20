import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ icon, title, description, stats }) => {
  return (
    <div
      className="group relative bg-white/60 backdrop-blur-lg rounded-xl p-8 
                 shadow-lg hover:shadow-2xl transition-all duration-500
                 border border-white/20 hover:border-white/40
                 transform hover:-translate-y-1"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 
                      transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <div className="inline-block bg-blue-500/10 px-4 py-2 rounded-full
                        text-sm font-medium text-blue-800">
            {stats}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;