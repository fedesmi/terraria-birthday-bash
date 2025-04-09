
import React from 'react';

const MapLocation: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 overflow-hidden rounded-lg pixel-border bg-terraria-stone p-4">
      <h2 className="text-xl font-pixel text-center text-white mb-4">Mapa del Tesoro</h2>
      
      <div className="aspect-video w-full rounded overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.2881237145766!2d-67.7178988!3d-53.78435929999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b166ed52c94c7%3A0x9a1362cde9312018!2sJos%C3%A9%20A.%20Finocchio%201165%2C%20V9420%20R%C3%ADo%20Grande%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1744209680465!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default MapLocation;
