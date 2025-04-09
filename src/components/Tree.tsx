
import React from 'react';

interface TreeProps {
  className?: string;
}

const Tree: React.FC<TreeProps> = ({ className }) => {
  return (
    <div className={`relative ${className || ''}`}>
      {/* Tree trunk */}
      <div className="w-8 h-32 bg-terraria-wood mx-auto relative">
        {/* Trunk details */}
        <div className="absolute top-1/4 left-1 w-2 h-2 bg-terraria-dirt rounded-full opacity-70"></div>
        <div className="absolute top-2/3 right-1 w-3 h-2 bg-terraria-dirt rounded-full opacity-70"></div>
      </div>
      
      {/* Tree leaves - layered for a Terraria-like bushy look */}
      <div className="w-40 h-40 bg-green-800 rounded-full -mt-24 -ml-16"></div>
      <div className="w-36 h-36 bg-green-700 rounded-full -mt-38 -ml-14"></div>
      <div className="w-32 h-32 bg-green-600 rounded-full -mt-34 -ml-12"></div>
      <div className="w-24 h-24 bg-green-500 rounded-full -mt-28 -ml-8"></div>
      
      {/* Leaf details - light spots */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-300 rounded-full opacity-50"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-300 rounded-full opacity-50"></div>
    </div>
  );
};

export default Tree;
