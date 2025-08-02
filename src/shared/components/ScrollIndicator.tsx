import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('servicos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <button
        onClick={scrollToNextSection}
        className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group"
      >
        <span className="text-sm font-medium mb-2 animate-pulse">Rolar</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
        <ChevronDown className="w-5 h-5 mt-2 animate-bounce group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default ScrollIndicator; 