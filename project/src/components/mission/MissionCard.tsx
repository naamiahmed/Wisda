import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  gradient: string;
}

const MissionCard: React.FC<MissionCardProps> = ({
  icon: Icon,
  title,
  description,
  points,
  gradient,
}) => {
  return (
    <div className="group perspective">
      <div className="relative transform-gpu transition-all duration-1000 preserve-3d hover:rotate-y-180 h-[400px]">
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl p-8 ${gradient} backdrop-blur-lg border border-white/20`}>
          <div className="h-full flex flex-col items-center justify-center text-white">
            <Icon className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
            <p className="text-center text-white/90">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl p-8 rotate-y-180 ${gradient} backdrop-blur-lg border border-white/20`}>
          <div className="h-full flex flex-col justify-center">
            <h4 className="text-xl font-semibold mb-6 text-white text-center">Key Points</h4>
            <ul className="space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-start text-white/90">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-white rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;