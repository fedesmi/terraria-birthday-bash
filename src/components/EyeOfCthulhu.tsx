
import React, { useState, useEffect } from 'react';

interface EyeOfCthulhuProps {
  className?: string;
}

const EyeOfCthulhu: React.FC<EyeOfCthulhuProps> = ({ className }) => {
  const [isAngry, setIsAngry] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAngry(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`eye-of-cthulhu ${className || ''} animate-float`}>
      {/* Main eye */}
      <div className={`w-14 h-14 ${isAngry ? 'bg-red-700' : 'bg-purple-700'} rounded-full relative transition-colors duration-500`}>
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
        
        {/* Tentacles that appear in angry state */}
        {isAngry && (
          <>
            <div className="absolute w-3 h-8 bg-red-800 -top-7 left-3 animate-swing"></div>
            <div className="absolute w-3 h-8 bg-red-800 -top-7 right-3 animate-swing" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute w-3 h-8 bg-red-800 -bottom-7 left-3 animate-swing" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute w-3 h-8 bg-red-800 -bottom-7 right-3 animate-swing" style={{ animationDelay: '0.6s' }}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default EyeOfCthulhu;
