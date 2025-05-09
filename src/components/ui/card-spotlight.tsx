/* eslint-disable prefer-const */
"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/utils/cn";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-4xl relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none rounded-4xl absolute z-0 -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};

export function CardSpotlightDemo() {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <CardSpotlight className="flex flex-col items-center border-2 justify-center h-40 w-96  text-2xl text-center  justify-center ">
        <p className="text-xl font-bold relative z-20  text-white">100+</p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Projects Completed
        </div>
      </CardSpotlight>
      <CardSpotlight className="flex flex-col items-center border-2 justify-center h-40 w-96  text-2xl text-center  justify-center ">
        <p className="text-xl font-bold relative z-20  text-white">1 Day</p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Your dedicated team can begin immediately
        </div>
      </CardSpotlight>
      <CardSpotlight className="flex flex-col items-center border-2 justify-center h-40 w-96  text-2xl text-center justify-center ">
        <p className="text-xl font-bold relative z-20  text-white">9+</p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Years in SAAS UI/UX and development
        </div>
      </CardSpotlight>
    </div>
  );
}
