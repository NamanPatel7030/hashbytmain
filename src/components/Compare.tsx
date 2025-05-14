import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className=" flex-wrap p-4 border-4 flex justify-between items-center rounded-4xl dark:bg-white bg-neutral-100  border-neutral-200 dark:border-neutral-800">
      {/* Curved Arrow */}
      {/* Arrow connecting BEFORE to AFTER */}
      {/* <svg
        className="absolute pointer-events-none  lg:w-full lg:h-full md:w-32 md:h-64 sm:w-96 sm:h-96"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#ff814e" />
          </marker>
        </defs>
        <path
          d="M20,20 Q50,60 75,30"
          stroke="#ff814e"
          strokeWidth="1"
          fill="none"
          strokeDasharray="0"
          markerEnd="url(#arrowhead)"
        />
      </svg> */}
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      
      {/* <div className="h-[4px] w-[80px] bg-black"></div> */}
    </div>
  );
}
