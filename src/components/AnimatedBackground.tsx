
import React, { useEffect, useState } from 'react';
import Cloud from './Cloud';

const AnimatedBackground: React.FC = () => {
  const [dirtParticles, setDirtParticles] = useState<{ id: number; style: React.CSSProperties }[]>([]);

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
