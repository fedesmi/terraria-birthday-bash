
import React from 'react';

const MapLocation: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 overflow-hidden rounded-lg pixel-border bg-terraria-stone p-4">
      <h2 className="text-xl font-pixel text-center text-white mb-4">Mapa del Tesoro</h2>
      
      <div className="aspect-video w-full rounded overflow-hidden">
        <iframe 
          title="Ubicación de la fiesta" 
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167133965546!2d-58.4619872590354!3d-34.60378947545204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0c687ee1e9%3A0x8e27a8c57c2c8699!2sJos%C3%A9%20A.%20Finocchio%201165%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1717726132185!5m2!1sen!2sus" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;
