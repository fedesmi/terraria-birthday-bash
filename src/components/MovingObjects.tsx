
import React, { useEffect, useState } from 'react';
import Slime from './Slime';
import Zombie from './Zombie';
import EyeOfCthulhu from './EyeOfCthulhu';

interface MovingObject {
  id: number;
  type: 'slime' | 'star' | 'zombie' | 'eye';
  position: {
    x: number;
    y: number;
  };
  speed: {
    x: number;
    y: number;
  };
  color: string;
  size: number;
}

const MovingObjects: React.FC = () => {
  const [objects, setObjects] = useState<MovingObject[]>([]);

  useEffect(() => {
    // Create initial objects
    const initialObjects: MovingObject[] = Array.from({ length: 15 }, (_, i) => {
      // Generate a valid type value using an array and random selection
      const validTypes: ('slime' | 'star' | 'zombie' | 'eye')[] = ['slime', 'star', 'zombie', 'eye'];
      const randomType = validTypes[Math.floor(Math.random() * validTypes.length)];
      
      return {
        id: i,
        type: randomType,
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        speed: {
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 3,
        },
        color: [
          'bg-green-400', 
          'bg-blue-400', 
          'bg-red-400', 
          'bg-yellow-400', 
          'bg-purple-400'
        ][Math.floor(Math.random() * 5)],
        size: 20 + Math.random() * 20,
      };
    });

    setObjects(initialObjects);

    // Animation loop
    const interval = setInterval(() => {
      setObjects(prevObjects => 
        prevObjects.map(obj => {
          // Update position
          let newX = obj.position.x + obj.speed.x;
          let newY = obj.position.y + obj.speed.y;

          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth - obj.size) {
            obj.speed.x *= -1;
            newX = obj.position.x + obj.speed.x;
          }

          if (newY <= 0 || newY >= window.innerHeight - obj.size) {
            obj.speed.y *= -1;
            newY = obj.position.y + obj.speed.y;
          }

          return {
            ...obj,
            position: {
              x: newX,
              y: newY,
            }
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {objects.map(obj => (
        <div
          key={obj.id}
          style={{
            position: 'absolute',
            left: `${obj.position.x}px`,
            top: `${obj.position.y}px`,
            width: `${obj.size}px`,
            height: `${obj.size / 2}px`,
          }}
        >
          {obj.type === 'slime' ? (
            <Slime color={obj.color} />
          ) : obj.type === 'zombie' ? (
            <Zombie />
          ) : obj.type === 'eye' ? (
            <EyeOfCthulhu />
          ) : (
            <div className={`w-full h-full ${obj.color} rounded-full animate-pulse flex items-center justify-center text-yellow-100`}>
              ★
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovingObjects;
