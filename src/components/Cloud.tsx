
import React from 'react';

interface CloudProps {
  className?: string;
}

const Cloud: React.FC<CloudProps> = ({ className }) => {
  return (
    <div 
      className={`cloud ${className || ''}`}
      style={{
        width: `${70 + Math.random() * 50}px`,
        height: `${40 + Math.random() * 20}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 20}%`,
      }}
    ></div>
  );
};

export default Cloud;
