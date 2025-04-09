
import React from 'react';

interface ZombieProps {
  className?: string;
}

const Zombie: React.FC<ZombieProps> = ({ className }) => {
  return (
    <div className={`zombie ${className || ''}`}>
      <div className="w-10 h-16 bg-green-900 relative">
        {/* Zombie head */}
        <div className="absolute top-0 w-8 h-8 bg-green-800 rounded-t-lg left-1">
          {/* Eyes */}
          <div className="absolute w-2 h-1 bg-red-600 top-3 left-1"></div>
          <div className="absolute w-2 h-1 bg-red-600 top-3 right-1"></div>
          {/* Mouth */}
          <div className="absolute w-4 h-1 bg-gray-900 bottom-1 left-2"></div>
        </div>
        {/* Zombie arms */}
        <div className="absolute w-3 h-5 bg-green-800 left-[-3px] top-8"></div>
        <div className="absolute w-3 h-5 bg-green-800 right-[-3px] top-8"></div>
        {/* Zombie legs */}
        <div className="absolute w-3 h-4 bg-green-800 left-1 bottom-0"></div>
        <div className="absolute w-3 h-4 bg-green-800 right-1 bottom-0"></div>
      </div>
    </div>
  );
};

export default Zombie;
