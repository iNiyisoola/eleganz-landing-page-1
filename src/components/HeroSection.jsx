import { useEffect } from "react";

export const HeroSection = () => {

  return(
    <div className="container mx-auto h-screen flex items-center justify-center border-b-1 border-fuchsia-500 rounded-3xl">
      <div className="text-slate-600 mt-2 text-pretty text-balance tracking-tight text-center">
        <h1 className="text-4xl md:text-6xl text-slate-800 font-bold mb-2">EleganZ By In-Outfits</h1>
        <h3 className="italic text-lg md:text-4xl text-slate-800 font-semibold mb-8">....elegance in outfits....</h3>
        <span className="flex gap-6 justify-center">
          <a className="px-4 md:px-4 py-2 md:py-2 hover:font-bold rounded-md bg-indigo-500 hover:bg-fuchsia-500 text-white hover:shadow-lg" href="#">Discover More</a>
          <a className="px-4 md:px-4 py-2 md:py-2 hover:font-bold border rounded-md bg-white hover:bg-fuchsia-500 text-indigo-500 hover:text-white hover:shadow-lg" href="#">Login</a>
        </span>
      </div>

      
    </div>
  );
};