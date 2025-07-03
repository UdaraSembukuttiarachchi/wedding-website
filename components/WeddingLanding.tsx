"use client"; // Only needed if using App Router
import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WeddingLanding: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const weddingDate = new Date("2026-01-10T19:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-50">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Brand */}
          <div className="text-xl font-light text-white tracking-widest">
            Pansilu & Udara
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-white tracking-wide font-light">
            <a href="#story" className="hover:text-amber-200 transition-colors">
              Our Story
            </a>
            <a
              href="#gallery"
              className="hover:text-amber-200 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#details"
              className="hover:text-amber-200 transition-colors"
            >
              Wedding Details
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-white text-center font-light bg-stone-900/80 rounded-lg py-4">
            <a
              href="#story"
              className="block hover:text-amber-200 transition-colors"
            >
              Our Story
            </a>
            <a
              href="#gallery"
              className="block hover:text-amber-200 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#details"
              className="block hover:text-amber-200 transition-colors"
            >
              Wedding Details
            </a>
          </div>
        )}
      </nav>

      {/* Combined Hero and Welcome Section */}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Enhanced Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[55%_45%] bg-no-repeat"
          style={{
            backgroundImage: `url('/bg-img.JPG')`,
            backgroundAttachment: 'fixed',
            imageRendering: 'crisp-edges',
            filter: 'contrast(0.6) brightness(1.2) saturate(1.2)',
            transform: 'scale(1.02)',
          }}
        >
          {/* Additional image enhancement layer */}
          <div 
            className="absolute inset-0 bg-cover bg-[55%_45%] bg-no-repeat mix-blend-overlay opacity-20"
            style={{
              backgroundImage: `url('/bg-img.JPG')`,
              filter: 'contrast(1.3) brightness(0.9) saturate(1.2)',
            }}
          />
        </div>

        {/* Enhanced Background Image Overlay with better gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-amber-700/15 to-stone-900/70"></div>
        
        {/* Additional sharpening overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-amber-200/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sage-300/15 rounded-full blur-md animate-pulse delay-1000"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-8 opacity-30">
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            className="text-sage-400"
          >
            <path
              d="M30 10 Q20 0, 10 10 Q10 20, 20 25 Q30 30, 40 25 Q50 20, 50 10 Q40 0, 30 10"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M15 35 Q10 30, 5 35 Q5 40, 10 42 Q15 45, 20 42 Q25 40, 25 35 Q20 30, 15 35"
              fill="currentColor"
              opacity="0.4"
            />
            <path
              d="M40 50 Q35 45, 30 50 Q30 55, 35 57 Q40 60, 45 57 Q50 55, 50 50 Q45 45, 40 50"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 right-8 opacity-30 transform rotate-180">
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            className="text-amber-400"
          >
            <path
              d="M30 10 Q20 0, 10 10 Q10 20, 20 25 Q30 30, 40 25 Q50 20, 50 10 Q40 0, 30 10"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M15 35 Q10 30, 5 35 Q5 40, 10 42 Q15 45, 20 42 Q25 40, 25 35 Q20 30, 15 35"
              fill="currentColor"
              opacity="0.4"
            />
            <path
              d="M40 50 Q35 45, 30 50 Q30 55, 35 57 Q40 60, 45 57 Q50 55, 50 50 Q45 45, 40 50"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-18 md:py-10 lg:py-25">
          <div className="text-center max-w-4xl mx-auto">
            {/* Couple Names */}
            <div className="mb-6 animate-fade-in">
              <h1
                className="text-8xl md:text-6xl lg:text-8xl text-white/80 mb-4 tracking-wide drop-shadow-2xl"
                style={{
                  fontFamily: "Dancing Script, Brush Script MT, cursive",
                  textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Pansilu
              </h1>
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 md:w-16 h-px bg-amber-300 shadow-lg"></div>
                <Heart className="mx-4 text-amber-400 w-5 h-5 md:w-6 md:h-6 animate-pulse drop-shadow-2xl" />
                <div className="w-12 md:w-16 h-px bg-amber-300 shadow-lg"></div>
              </div>

              <h1
                className="text-8xl md:text-6xl lg:text-8xl text-white/80 tracking-wide drop-shadow-2xl"
                style={{
                  fontFamily: "Dancing Script, Brush Script MT, cursive",
                  textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Udara
              </h1>
            </div>
            <br />
            <br />
            <br />

            {/* Wedding Date */}
            <div className="mb-8 animate-slide-up">
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold text-amber-300 italic mb-2 drop-shadow-2xl tracking-wide">
                10 . 01. 2026
              </p>
              <p className="text-xl md:text-2xl lg:text-2xl leading-none font-semibold text-white/80 italic drop-shadow-2xl">
                Save the date
              </p>
              <br />
            </div>

            {/* Countdown Timer - Mobile Responsive Single Line */}
            <div className="mb-8 animate-slide-up">
              <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
                <div className="text-center bg-white/15 backdrop-blur-md rounded-lg p-2 md:p-4 border border-white/20 shadow-xl">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs md:text-sm text-amber-200 uppercase tracking-wide">
                    Days
                  </div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-lg p-2 md:p-4 border border-white/20 shadow-xl">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs md:text-sm text-amber-200 uppercase tracking-wide">
                    Hours
                  </div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-lg p-2 md:p-4 border border-white/20 shadow-xl">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs md:text-sm text-amber-200 uppercase tracking-wide">
                    Mins
                  </div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-lg p-2 md:p-4 border border-white/20 shadow-xl">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs md:text-sm text-amber-200 uppercase tracking-wide">
                    Secs
                  </div>
                </div>
              </div>
            </div>

            {/* RSVP Button */}
            <div className="animate-bounce-in">
              <button className="bg-lime-700 hover:bg-lime-900 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-light tracking-wider rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform border border-white/50 backdrop-blur-sm">
                RSVP
              </button>
            </div>
          </div>
        </div>

        {/* Welcome Message Section - Now Integrated */}
        <div className="relative z-10 bg-white/95 backdrop-blur-sm mx-6 mb-8 rounded-lg shadow-2xl border border-white/50">
          <div className="py-12 md:py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <div className="w-16 md:w-24 h-px bg-amber-400 mx-auto mb-4"></div>
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-amber-500 mx-auto mb-4" />
                <div className="w-16 md:w-24 h-px bg-amber-400 mx-auto"></div>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-gray-600 font-light italic">
                Welcome to our wedding website! We&#39;ve created this site as a
                convenient and interactive way to share all of the important
                details with you leading up to our wedding. We can&#39;t wait to
                celebrate this exciting new chapter of our lives together with
                you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.6s both;
        }

        /* Enhanced image rendering */
        @supports (image-rendering: -webkit-optimize-contrast) {
          .bg-cover {
            image-rendering: -webkit-optimize-contrast;
          }
        }
        
        @supports (image-rendering: optimizeQuality) {
          .bg-cover {
            image-rendering: optimizeQuality;
          }
        }
      `}</style>
    </div>
  );
};

export default WeddingLanding;