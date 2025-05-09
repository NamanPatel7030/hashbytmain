"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-6 flex justify-center text-center relative">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-6"
      >
        
        <span>SaaS Redesign & Development Agency</span>
      </HoverBorderGradient>
    </div>
  );
}


