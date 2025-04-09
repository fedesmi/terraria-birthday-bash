
import React, { useEffect, useState } from 'react';
import Cloud from './Cloud';
import Tree from './Tree';

interface AnimatedTree {
  id: number;
  size: number;
  position: number;
  zIndex: number;
}

const AnimatedBackground: React.FC = () => {
  const [dirtParticles, setDirtParticles] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const [trees, setTrees] = useState<AnimatedTree[]>([]);
  const [grassPatches, setGrassPatches] = useState<{id: number, position: number, width: number}[]>([]);

  useEffect(() => {
    // Generate initial particles
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${5 + Math.random() * 10}s`
      }
    }));
    
    setDirtParticles(initialParticles);

    // Generate trees
    const initialTrees: AnimatedTree[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: 0.5 + Math.random() * 1.5,
      position: Math.random() * 100,
      zIndex: Math.floor(Math.random() * 5)
    }));
    
    setTrees(initialTrees);
    
    // Generate grass patches
    const initialGrassPatches = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      position: Math.random() * 100,
      width: 5 + Math.random() * 15
    }));
    
    setGrassPatches(initialGrassPatches);

    // Continuously add particles
    const interval = setInterval(() => {
      setDirtParticles(prev => [
        ...prev,
        {
          id: Date.now(),
          style: {
            left: `${Math.random() * 100}%`,
            top: '-10px',
            animationDelay: '0s',
            animationDuration: `${5 + Math.random() * 10}s`
          }
        }
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Clouds */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Cloud key={i} className={`animate-slide`} />
      ))}
      
      {/* Trees - positioned at the bottom */}
      {trees.map(tree => (
        <div 
          key={tree.id} 
          className="absolute bottom-24"
          style={{ 
            left: `${tree.position}%`, 
            transform: `scale(${tree.size})`,
            zIndex: tree.zIndex
          }}
        >
          <Tree className="animate-swing" />
        </div>
      ))}
      
      {/* Grass patches */}
      {grassPatches.map(patch => (
        <div 
          key={patch.id} 
          className="absolute bottom-20 flex"
          style={{ 
            left: `${patch.position}%`,
            width: `${patch.width}%`
          }}
        >
          {Array.from({ length: Math.floor(patch.width / 2) }).map((_, i) => (
            <div 
              key={i} 
              className="h-4 w-3 bg-green-500" 
              style={{ 
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                marginRight: '-1px'
              }}
            />
          ))}
        </div>
      ))}
      
      {/* Dirt particles */}
      {dirtParticles.map(particle => (
        <div 
          key={particle.id} 
          className="dirt-particle" 
          style={particle.style}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
