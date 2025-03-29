import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-[20px] p-6 border border-white/10 hover:border-emerald-500/50 transition-all hover:scale-105">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-300 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
};

export default InfoCard;