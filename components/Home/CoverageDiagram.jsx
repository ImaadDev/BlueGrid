"use client";
import Image from "next/image";
import SmoothReveal from "../ScrollReveal"; // Assuming SmoothReveal is correctly implemented

const callouts = [
  {
    label: "Self-Healing Topcoat",
    text: "Repairs minor scratches with heat exposure.",
    pos: "top-[15%] left-[12%]",
  },
  {
    label: "Hydrophobic Barrier",
    text: "Repels dirt, water, & contaminants.",
    pos: "top-[18%] right-[10%]",
  },
  {
    label: "Impact Absorption Layer",
    text: "Built to withstand road debris and abrasion.",
    pos: "bottom-[25%] left-[10%]",
  },
  {
    label: "Ultra Gloss Finish",
    text: "Achieves a flawless paint-like shine.",
    pos: "bottom-[20%] right-[14%]",
  },
];

export default function CoverageDiagram() {
  return (
    <section className="relative w-full bg-black py-20 md:py-32 text-white">
      
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-20">
        <SmoothReveal direction="right" delay={0}>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
          Precision Engineered Protection
        </h2>
        </SmoothReveal>
        <SmoothReveal direction="left" delay={0.2}>
          <p className="text-gray-400 mt-3 md:text-lg">
            Every curve — protected with advanced PPF technology
          </p>
        </SmoothReveal>
      </div>

      {/* Full-width Image Zone */}
      <div className="relative w-full h-[500px] md:h-[850px]">

        {/* Car Image (Desktop) */}
        <Image
          src="https://images.pexels.com/photos/27985143/pexels-photo-27985143.jpeg"
          alt="Protection Coverage Diagram"
          fill
          priority
          quality={100}
          className="hidden md:block object-cover object-center opacity-95"
        />

        {/* Car Image (Mobile) */}
        <Image
          src="https://images.pexels.com/photos/5975528/pexels-photo-5975528.jpeg"
          alt="Protection Coverage Diagram"
          fill
          priority
          quality={100}
          className="block md:hidden object-cover object-center opacity-95"
        />

        {/* Vignette overlay for dramatic look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-[1]" />

        {/* Floating Brand Behind Car */}
        <p className="absolute inset-0 flex justify-center items-center text-[12vw] md:text-[9vw] font-extrabold tracking-widest opacity-[0.04] select-none pointer-events-none z-[1]">
          BLUGRID
        </p>

        {/* 🔥 Callouts with Pointer Line Animation (Desktop Only) */}
        {callouts.map((c, i) => (
          <div
            key={i}
            // Use 'hidden md:flex' to show only on desktop
            className={`absolute ${c.pos} z-[3] 
              hidden md:flex flex-col gap-2
              group transition-all duration-500`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="h-px w-24 bg-white opacity-60 group-hover:opacity-100 transition" />
            
            <h3 className="text-3xl font-bold uppercase tracking-wide group-hover:text-white">
              {c.label}
            </h3>
            
            <p className="text-base text-gray-300 max-w-[280px] leading-relaxed">
              {c.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Layout — stacked below (with SmoothReveal & enhanced styling) */}
      <div className="mt-12 grid grid-cols-1 gap-0 px-6 md:hidden">
        {callouts.map((c, i) => (
          // Use ternary operator to alternate direction for a dynamic reveal
          <SmoothReveal 
            key={i} 
            direction={i % 2 === 0 ? "right" : "left"} // Ping-pong effect
            delay={0.3 + (i * 0.1)} // Tighter, faster stagger
          >
            <div 
              // Added padding, border, and transition for visual polish
              className={`py-6 px-4 border-b border-gray-800 last:border-b-0
                hover:bg-gray-900 transition duration-300`}
            >
              <h3 className="text-lg font-extrabold uppercase mb-1 text-white">
                {c.label}
              </h3>
              <p className="text-gray-400 text-sm">{c.text}</p>
            </div>
          </SmoothReveal>
        ))}
      </div>

    </section>
  );
}