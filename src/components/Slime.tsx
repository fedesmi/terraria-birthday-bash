
import React from 'react';

interface SlimeProps {
  color?: string;
  className?: string;
}

const Slime: React.FC<SlimeProps> = ({ color = 'bg-green-400', className }) => {
  return (
    <div className={`slime ${color} ${className || ''}`}></div>
  );
};

export default Slime;
