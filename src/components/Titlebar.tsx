"use client";

import React from "react";
import Image from "next/image";

const AnimatedLogoTitleBar = () => {
  const logos = ["/l1.png", "/l2.png", "/l3.png", "/l4.png", "/l5.png", "/l6.png"];

  return (
    <div className="w-full py-6 md:py-10 flex flex-col items-center relative bg-[#020615] overflow-hidden">
      {/* Left blur gradient - matching image style */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 lg:w-64 z-10 fade-overlay-left" />
      
      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-8 text-center z-20 px-4">
        Trusted by teams at over <span className="hidden sm:inline">40+ of the </span>{`world's leading organizations`}
      </h2>
      
      {/* Logo container */}
      <div className="overflow-hidden w-full relative">
        <div className="flex space-x-6 md:space-x-12 items-center animate-marquee">
          {/* Double the logos to create a seamless loop */}
          {[...Array(2)].map((_, i) =>
            logos.map((logo, j) => (
              <div key={`logo-${i}-${j}`} className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image 
                  src={logo} 
                  alt={`Logo ${j + 1}`} 
                  width={100}
                  height={40}
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto mx-1 sm:mx-2"
                />
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Right blur gradient - matching image style */}
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 lg:w-64 z-10 fade-overlay-right" />
      
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
        
        .fade-overlay-left {
          background: linear-gradient(to right, #020615 10%, rgba(2, 6, 21, 0.85) 40%, rgba(2, 6, 21, 0.5) 70%, rgba(2, 6, 21, 0));
        }
        
        .fade-overlay-right {
          background: linear-gradient(to left, #020615 10%, rgba(2, 6, 21, 0.85) 40%, rgba(2, 6, 21, 0.5) 70%, rgba(2, 6, 21, 0));
        }
      `}</style>
    </div>
  );
};


export default AnimatedLogoTitleBar;