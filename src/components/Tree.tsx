
import React from 'react';

interface TreeProps {
  className?: string;
}

const Tree: React.FC<TreeProps> = ({ className }) => {
  return (
    <div className={`relative ${className || ''}`}>
      <div className="w-8 h-20 bg-terraria-wood mx-auto"></div>
      <div className="w-24 h-24 bg-green-700 rounded-full -mt-10 -ml-8"></div>
      <div className="w-20 h-20 bg-green-600 rounded-full -mt-24 -ml-6"></div>
      <div className="w-16 h-16 bg-green-500 rounded-full -mt-20 -ml-4"></div>
    </div>
  );
};

export default Tree;
