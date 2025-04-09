
import React, { useEffect } from 'react';
import InvitationCard from '../components/InvitationCard';
import AnimatedBackground from '../components/AnimatedBackground';
import MovingObjects from '../components/MovingObjects';
import MapLocation from '../components/MapLocation';
import { useToast } from "../hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Show welcome toast
    toast({
      title: "¡Invitación recibida!",
      description: "Has descubierto la invitación para la fiesta de Julián",
      duration: 5000,
    });
    
    // Add audio - Terraria music
    const audio = new Audio('https://vgmsite.com/soundtracks/terraria-soundtrack/zgjljsxt/05%20Overworld%20Day.mp3');
    audio.volume = 0.3;
    audio.loop = true;
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Auto-play was prevented. Click interaction needed.");
      });
    }
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-terraria-sky relative py-10 px-4">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Moving Objects */}
      <MovingObjects />
      
      {/* Main content */}
      <div className="container mx-auto max-w-4xl relative z-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-pixel text-white animate-pulse">
            ¡Terraria Party!
          </h1>
        </div>
        
        {/* Invitation Card */}
        <InvitationCard />
        
        {/* Map Location */}
        <MapLocation />
        
        {/* Footer */}
        <div className="text-center mt-10 mb-5">
          <p className="text-white font-pixel text-xs">
            ¡No olvides traer tu equipo de aventurero!
          </p>
        </div>
      </div>
      
      {/* Terrain */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-terraria-dirt"></div>
      <div className="absolute bottom-20 left-0 right-0 h-4 bg-terraria-grass"></div>
    </div>
  );
};

export default Index;
