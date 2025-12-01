"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroResponsive() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-screen overflow-hidden flex items-center justify-center bg-black">

      {/* DESKTOP BACKGROUND - widescreen */}
      <div className="absolute inset-0 z-[0] hidden md:block">
        <Image
          src="/Hero.jpg"
          alt="Showroom Desktop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={100}
        />
      </div>

      {/* MOBILE BACKGROUND - portrait */}
      <div className="absolute inset-0 z-[0] md:hidden">
        <Image
          src="https://images.pexels.com/photos/27985142/pexels-photo-27985142.jpeg"
          alt="Showroom Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={100}
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Headline */}
      <h1 className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 text-center 
        font-extrabold leading-tight z-[2] text-[#b7b9bf] tracking-widest
        text-[10vw] md:text-[4vw] uppercase max-w-[90%]">
        PREMIUM PAINT PROTECTION
        REDEFINED
      </h1>

      {/* Car Image */}
      <div className="relative z-[3] bottom-[2%] md:bottom-[4%] w-[92%] md:w-[80%] max-w-7xl flex justify-center">
     
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-[4%] md:bottom-[8%] z-[4] flex flex-col sm:flex-row gap-4 items-center px-4">
        
        <Link href="#">
          <button className="px-6 py-3 md:px-10 md:py-4 rounded-full 
          bg-white text-black font-medium 
          hover:bg-white/40  transition-all duration-300 shadow-xl border border-white/40
          text-sm lg:text-base uppercase tracking-widest">
            BECOME A DEALER →
          </button>
        </Link>
        
        <Link href="#">
          <button className="px-6 py-3 md:px-10 md:py-4 rounded-full 
          bg-black text-white font-medium 
          hover:bg-[#151515] transition-all duration-300 shadow-xl border border-white/10
          text-sm lg:text-base uppercase tracking-widest">
            FIND AN INSTALLER
          </button>
        </Link>
      </div>
    </section>
  );
}
