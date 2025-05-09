"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { HoverBorderGradientDemo } from "./HoverButton";
import { CoverDemo } from "./cover";

export function Lamp() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-12 py-1 bg-clip-text text-center text-sm font-medium tracking-tight text-transparent md:text-sm"

        >
          <HoverBorderGradientDemo />
          {/* Transform Your SAAS Platform with Cutting-Edge <br /> UI/UX and
          Full-Scale Development */}
          <CoverDemo/>
        </motion.h1>
      </LampContainer>
          
    </div>
  );
}
