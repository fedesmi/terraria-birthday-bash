
import React from 'react';
import Slime from './Slime';
import { MapPin, Clock, Calendar } from 'lucide-react';

const InvitationCard: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 bg-terraria-wood rounded-lg p-6 pixel-border relative overflow-hidden">
      <div className="absolute -top-4 -right-4 animate-bounce">
        <Slime color="bg-blue-400" />
      </div>
      <div className="absolute -bottom-4 -left-4 animate-float">
        <Slime color="bg-green-400" />
      </div>
      
      <div className="text-center mb-8 relative">
        <h1 className="text-3xl md:text-5xl font-pixel text-white mb-2 animate-pulse">
          ¡Julián
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <span className="text-2xl md:text-4xl font-pixel text-terraria-gold">Cumple</span>
          <div className="bg-terraria-gold text-black font-pixel text-2xl md:text-4xl w-12 h-12 flex items-center justify-center rounded-lg animate-pulse">
            10
          </div>
          <span className="text-2xl md:text-4xl font-pixel text-terraria-gold">Años!</span>
        </div>
      </div>
      
      <div className="bg-terraria-stone bg-opacity-70 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-pixel text-center text-white mb-4">Detalles de la Aventura</h2>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-terraria-gold mr-4" />
            <p className="text-white font-pixel text-sm">Domingo 20 de Abril</p>
          </div>
          
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-terraria-gold mr-4" />
            <p className="text-white font-pixel text-sm">De 15:00 a 18:00 hs</p>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-8 h-8 text-terraria-gold mr-4" />
            <div>
              <p className="text-white font-pixel text-sm">Salón "Los 3 reyes"</p>
              <p className="text-white font-pixel text-sm">José A. Finocchio 1165</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-white font-pixel text-sm animate-swing">¡Te esperamos para vivir una gran aventura!</p>
      </div>
    </div>
  );
};

export default InvitationCard;
