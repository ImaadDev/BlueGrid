'use client';

import Link from 'next/link';
import Image from 'next/image';
import SmoothReveal from '../ScrollReveal';

// Data structure remains the same
const morionLinks = [
  {
    title: 'PPF PRODUCTS',
    description: 'Transform your vehicle’s appearance with our Frost Series Film, designed to freeze your original paint color into a sophisticated matte finish. This innovative film preserves the vibrancy of your paint while adding a soft, satin texture that exudes modern elegance.',
    cta: 'View Lineup',
    href: '/products',
    imageUrl: 'https://images.pexels.com/photos/17377386/pexels-photo-17377386.jpeg',
  },
  {
    title: 'TECHNOLOGY',
    description: 'Protect your vehicles original paint with our Crystal Series Film, engineered for extreme gloss and unmatched clarity. This ultra-transparent protection film enhances your vehicles natural shine while providing a durable shield against scratches, stains, and environmental damage.',
    cta: 'Learn More',
    href: '/technology',
    imageUrl: 'https://images.pexels.com/photos/3221145/pexels-photo-3221145.jpeg',
  },
  {
    title: 'GALLERY',
    description: 'Transform your vehicle with our Ultra-Gloss Solid Color Wraps, offering a smooth pastel-like finish for a soft, refined aesthetic. Crafted with TPU construction, these wraps deliver an exceptionally authentic paint-like appearance with subtle, muted tones.',
    cta: 'View the Gallery',
    href: '/gallery',
    imageUrl: 'https://images.pexels.com/photos/17377384/pexels-photo-17377384.jpeg',
  },
  {
    title: 'FIND INSTALLER',
    description: 'Enhance your vehicles allure with our Ultra-Gloss Metallic Series Wraps, featuring captivating flakes that amplify luminosity and color depth. Made with advanced TPU construction, these wraps deliver a mirror-like gloss, self-healing properties, and stain resistance for lasting brilliance.',
    cta: 'Get a Quote',
    href: '/contact',
    imageUrl: 'https://images.pexels.com/photos/9831581/pexels-photo-9831581.jpeg',
  },
  {
    title: 'FIND INSTALLER',
    description: 'Enhance your vehicles allure with our Ultra-Gloss Metallic Series Wraps, featuring captivating flakes that amplify luminosity and color depth. Made with advanced TPU construction, these wraps deliver a mirror-like gloss, self-healing properties, and stain resistance for lasting brilliance.',
    cta: 'Get a Quote',
    href: '/contact',
    imageUrl: 'https://images.pexels.com/photos/9831581/pexels-photo-9831581.jpeg',
  },
  {
    title: 'FIND INSTALLER',
    description: 'Enhance your vehicles allure with our Ultra-Gloss Metallic Series Wraps, featuring captivating flakes that amplify luminosity and color depth. Made with advanced TPU construction, these wraps deliver a mirror-like gloss, self-healing properties, and stain resistance for lasting brilliance.',
    cta: 'Get a Quote',
    href: '/contact',
    imageUrl: 'https://images.pexels.com/photos/9831581/pexels-photo-9831581.jpeg',
  },
];

const Tile = ({ title, description, featureHeadline, cta, href, imageUrl }) => (
 
  <Link 
    href={href} 
    // Mobile: min-w-[85vw] for single card preview
    // Large Screens (lg): min-w-[32%] to show 3 cards per view (100% / 3 ~ 33.33%)
    className="group relative h-[60vh] md:h-[90vh] overflow-hidden snap-start min-w-[85vw] lg:min-w-[32%] lg:w-auto"
  >
    
    {/* Background Image (Optimized with Next.js Image) */}
    <Image 
      src={imageUrl} 
      alt={title} 
      fill
      sizes="(max-width: 1023px) 85vw, 33vw" // Updated sizes prop for 3-column view
      className="object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/40 z-10" />
     
    
    {/* --- VERTICAL HEADING --- */}
    <span className="absolute top-12 left-0 -translate-y-1/2 rotate-90 origin-top-left text-white text-2xl md:text-2xl font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] z-30 ml-16 md:ml-18">
      {title}
    </span>
    

    {/* Content Wrapper - Justified to the END for bottom-heavy look */}
    <div className="relative h-full flex flex-col justify-between p-6 md:p-10 text-white z-20">
       {/* Call to Action Button */}
       
      <span className="inline-block px-5 py-2 border border-white/60 text-xs md:text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit ml-auto">
        {cta}
      </span>
      {/* Short Description */}
          <SmoothReveal delay={0.2}>

      <p className="text-sm font-light leading-relaxed max-w-xs opacity-80 mb-0">
        {description}
      </p>
          </SmoothReveal>

     
      
    </div>
  </Link>
);

export default function QuickLinksCarousel() {
  return (
    <section className="w-full bg-black p-8 md:p-12 lg:p-16">
      {/* The container is now a horizontal flex container across ALL screen sizes.
          The gap-6 helps space the items. */}
      <div className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar gap-6">
        {morionLinks.map((link, index) => (
          <Tile key={index} {...link} />
        ))}
      </div>
      
      {/* Custom CSS to hide the horizontal scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}