
import React from 'react';
import Slime from './Slime';
import { MapPin, Clock, Calendar } from 'lucide-react';

const InvitationCard: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 bg-terraria-wood rounded-lg p-4 md:p-6 pixel-border relative overflow-hidden">
      <div className="absolute -top-4 -right-4 animate-bounce">
        <Slime color="bg-blue-400" />
      </div>
      <div className="absolute -bottom-4 -left-4 animate-float">
        <Slime color="bg-green-400" />
      </div>
      
      <div className="text-center mb-6 md:mb-8 relative">
        <h1 className="text-2xl md:text-5xl font-pixel text-white mb-2 animate-pulse">
          ¡Julián
        </h1>
        <div className="flex flex-wrap justify-center items-center space-x-2">
          <span className="text-xl md:text-4xl font-pixel text-terraria-gold">Cumple</span>
          <div className="bg-terraria-gold text-black font-pixel text-xl md:text-4xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg animate-pulse">
            10
          </div>
          <span className="text-xl md:text-4xl font-pixel text-terraria-gold">Años!</span>
        </div>
      </div>
      
      <div className="bg-terraria-stone bg-opacity-70 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-pixel text-center text-white mb-3 md:mb-4">Detalles de la Aventura</h2>
        
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center">
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-terraria-gold mr-2 md:mr-4 flex-shrink-0" />
            <p className="text-white font-pixel text-xs md:text-sm">Domingo 20 de Abril</p>
          </div>
          
          <div className="flex items-center">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-terraria-gold mr-2 md:mr-4 flex-shrink-0" />
            <p className="text-white font-pixel text-xs md:text-sm">De 15:00 a 18:00 hs</p>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-6 h-6 md:w-8 md:h-8 text-terraria-gold mr-2 md:mr-4 flex-shrink-0" />
            <div>
              <p className="text-white font-pixel text-xs md:text-sm">Salón "Los 3 reyes"</p>
              <p className="text-white font-pixel text-xs md:text-sm">José A. Finocchio 1165</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-white font-pixel text-xs md:text-sm animate-swing">¡Te esperamos para vivir una gran aventura!</p>
      </div>
    </div>
  );
};

export default InvitationCard;
