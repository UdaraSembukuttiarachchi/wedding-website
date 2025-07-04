'use client';

import { useState, useEffect } from 'react';
import WeddingLanding from '../components/WeddingLanding';
import OurStory from '@/components/OurStory';
import Gallery from '@/components/Gallery';
import WeddingDetails from '@/components/WeddingDetails';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const landingSection = document.querySelector('.hero') as HTMLElement | null;
      if (landingSection) {
        // Change threshold to be more sensitive - show up arrow when scrolled past 50% of landing section
        const threshold = landingSection.offsetTop + (landingSection.offsetHeight * 0.5);
        setShowScrollTop(window.scrollY > threshold);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const landingSection = document.querySelector('.hero');
    if (landingSection) {
      landingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToOurStory = () => {
    const ourStorySection = document.querySelector('#our-story');
    if (ourStorySection) {
      ourStorySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      {/* Your landing page content */}
      <section className="hero">
        <WeddingLanding />
      </section>
      
      {/* Our Story section */}
      <section id="our-story">
        <OurStory tiktokVideoId="7447758598588992784"/>
      </section>
      
      {/* Gallery sections */}
      <Gallery />

      {/* Schedule sections */}
      <Schedule />

      {/* Wedding Details sections */}
      <WeddingDetails />

      {/* Footer */}
      <Footer />

      {/* Navigation Arrow Button */}
      <button
        onClick={showScrollTop ? scrollToTop : scrollToOurStory}
        className="fixed bottom-8 right-8 bg-white/70 hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl z-50"
        aria-label={showScrollTop ? "Scroll to top" : "Scroll to Our Story"}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={showScrollTop ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"}
          />
        </svg>
      </button>
    </div>
  );
}