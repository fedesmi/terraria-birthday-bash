
import React, { useEffect, useState } from 'react';
import InvitationCard from '../components/InvitationCard';
import AnimatedBackground from '../components/AnimatedBackground';
import MovingObjects from '../components/MovingObjects';
import MapLocation from '../components/MapLocation';
import { useToast } from "../hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [audio] = useState(new Audio('https://vgmsite.com/soundtracks/terraria-soundtrack/zgjljsxt/05%20Overworld%20Day.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);
  
  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("Auto-play was prevented. User interaction needed.");
        toast({
          title: "Haz clic para la música",
          description: "Haz clic en el botón para reproducir la música de fondo",
          duration: 5000,
        });
      });
    }
    setIsPlaying(!isPlaying);
  };
  
  useEffect(() => {
    // Show welcome toast
    toast({
      title: "¡Invitación recibida!",
      description: "Has descubierto la invitación para la fiesta de Julián",
      duration: 5000,
    });
    
    // Configure audio
    audio.volume = 0.3;
    audio.loop = true;
    
    // Instructions for music
    toast({
      title: "Haz clic para la música",
      description: "Haz clic en el botón para reproducir la música de fondo",
      duration: 5000,
    });
    
    // Cleanup on component unmount
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [toast, audio]);

  return (
    <div className="min-h-screen bg-[#1673FF] relative py-10 px-4">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Moving Objects */}
      <MovingObjects />
      
      {/* Audio control button */}
      <Button 
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-opacity-70 backdrop-blur-sm"
        onClick={toggleAudio}
      >
        {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </Button>
      
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
