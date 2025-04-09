
import React from 'react';

interface EyeOfCthulhuProps {
  className?: string;
}

const EyeOfCthulhu: React.FC<EyeOfCthulhuProps> = ({ className }) => {
  return (
    <div className={`eye-of-cthulhu ${className || ''}`}>
      {/* Main eye */}
      <div className="w-14 h-14 bg-red-700 rounded-full relative">
        {/* Iris */}
        <div className="absolute w-10 h-10 bg-black rounded-full top-2 left-2">
          {/* Pupil */}
          <div className="absolute w-4 h-4 bg-red-500 rounded-full top-3 left-3 animate-pulse"></div>
        </div>
        {/* Veins */}
        <div className="absolute w-2 h-6 bg-red-900 -top-5 left-6"></div>
        <div className="absolute w-2 h-6 bg-red-900 -bottom-5 left-6"></div>
        <div className="absolute w-6 h-2 bg-red-900 top-6 -left-5"></div>
        <div className="absolute w-6 h-2 bg-red-900 top-6 -right-5"></div>
      </div>
    </div>
  );
};

export default EyeOfCthulhu;
