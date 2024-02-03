import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">Planting Hope, One Tree at a Time</h1>
      <p className="text-lg md:text-xl text-white text-center mb-12 max-w-lg">Join PlantALife and be a part of the revolution. Every tree planted makes a world of difference.</p>
      <button onClick={()=>{navigate("/signup")}} className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-200 hover:text-green-800 transition duration-300 ease-in-out">Get Started</button>
    </div>
  );
};

export default HeroSection;
