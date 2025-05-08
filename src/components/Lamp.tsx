"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

export function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-40 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl">
        Transform Your SAAS Platform with Cutting-Edge  <br /> UI/UX and Full-Scale Development
      </motion.h1>
    </LampContainer>
  );
}
