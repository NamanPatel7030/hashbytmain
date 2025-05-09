"use client";

import React from "react";
import Image from "next/image";

const AnimatedLogoTitleBar = () => {
  const logos = ["/l1.png", "/l2.png", "/l3.png", "/l4.png", "/l5.png", "/l6.png"];

  return (
    <div className="w-full py-10 flex flex-col items-center relative bg-[#020615] overflow-hidden">
      {/* Left blur gradient - enhanced */}
      <div className="absolute left-0 top-0 bottom-0 w-80 z-10 blur-overlay-left" />
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-8 text-center z-20 px-4">
        Trusted by teams at over 40+ of the world's leading organizations
      </h2>
      
      {/* Logo container */}
      <div className="overflow-hidden w-full max-w-6xl relative">
        <div className="flex space-x-12 items-center animate-marquee">
          {/* Double the logos to create a seamless loop */}
          {[...Array(2)].map((_, i) =>
            logos.map((logo, j) => (
              <div key={`logo-${i}-${j}`} className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image 
                  src={logo} 
                  alt={`Logo ${j + 1}`} 
                  width={150} 
                  height={60} 
                  className="mx-2"
                />
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Right blur gradient - enhanced */}
      <div className="absolute right-0 top-0 bottom-0 w-80 z-10 blur-overlay-right" />
      
      {/* CSS for smooth animation */}
      <style jsx>{`
        .animate-marquee {
          animation: smoothMarquee 40s linear infinite;
        }

        @keyframes smoothMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .blur-overlay-left {
          background: linear-gradient(to right, #020615 30%, rgba(2, 6, 21, 0.8) 70%, rgba(2, 6, 21, 0));
          backdrop-filter: blur(8px);
        }
        
        .blur-overlay-right {
          background: linear-gradient(to left, #020615 30%, rgba(2, 6, 21, 0.8) 70%, rgba(2, 6, 21, 0));
          backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogoTitleBar;