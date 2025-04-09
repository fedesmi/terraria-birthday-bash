
import React from 'react';

interface TerrainBlockProps {
  type: 'dirt' | 'grass' | 'stone' | 'wood';
  className?: string;
}

const TerrainBlock: React.FC<TerrainBlockProps> = ({ type, className }) => {
  const blockColors = {
    dirt: 'bg-terraria-dirt',
    grass: 'bg-terraria-grass',
    stone: 'bg-terraria-stone',
    wood: 'bg-terraria-wood',
  };

  return (
    <div className={`terrain-block ${blockColors[type]} ${className || ''}`}></div>
  );
};

export default TerrainBlock;
