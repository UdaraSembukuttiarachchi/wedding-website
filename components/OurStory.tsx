import React from 'react';

interface OurStoryProps {
  tiktokVideoId?: string;
  className?: string;
}

const OurStory: React.FC<OurStoryProps> = ({ 
  tiktokVideoId, 
  className = '' 
}) => {
  return (
    <section className={`py-16 px-4 bg-gradient-to-br from-amber-50 to-stone-50 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-sage-500 mx-auto rounded-full" style={{backgroundColor: '#87A96B'}}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                <span className="text-2xl font-serif italic" style={{color: '#87A96B'}}>
                  It all started with a dance…
                </span>
              </p>
              <br />
              
              <p className="text-gray-600 leading-relaxed">
                Back in December 2022, we met for the first time at a Toastmasters Christmas party. 
                The music was good, the vibe was fun, and somehow we ended up dancing together. 
                We didn't know it then, but that little moment was the beginning of something special.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                From friendly chats after meetings to sharing laughs and dreams, we slowly became 
                close friends — and then, something more.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Fast forward to December 12th, 2024 — Pansilu's 24th birthday. Udara had a plan 
                (and a ring!). At the very top of the Lotus Tower, surrounded by the city lights, 
                he asked her the big question… and she said{' '}
                <span className="font-semibold" style={{color: '#87A96B'}}>"Yes."</span>
              </p>
              
              <p className="text-lg text-gray-700 font-medium italic">
                And now, here we are — ready to dance through life together.
              </p>
            </div>

            {/* Decorative Hearts */}
            <div className="flex justify-center space-x-2 mt-8">
              <span className="text-2xl" style={{color: '#87A96B'}}>♥</span>
              <span className="text-xl" style={{color: '#D2B48C'}}>♥</span>
              <span className="text-2xl" style={{color: '#87A96B'}}>♥</span>
            </div>
          </div>

          {/* TikTok Video Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              {tiktokVideoId ? (
                <div className="aspect-[9/16] w-full max-w-sm bg-black rounded-2xl overflow-hidden shadow-2xl relative">
                  {/* Mask overlay to hide scroll area */}
                  <div 
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(to left, rgba(0,0,0,0.8) 0px, transparent 60px, transparent calc(100% - 60px), rgba(0,0,0,0.8) 100%)'
                    }}
                  />
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${tiktokVideoId}`}
                    width="120%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                    title="Our Story TikTok Video"
                    style={{
                      border: 'none',
                      outline: 'none',
                      marginLeft: '-10%',
                      transform: 'scale(0.9)',
                      transformOrigin: 'center'
                    }}
                  />
                </div>
              ) : (
                <div className="aspect-[9/16] w-full max-w-sm bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center p-8 shadow-xl">
                  <div className="text-6xl mb-4" style={{color: '#87A96B'}}>
                    📱
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                    TikTok Video
                  </h3>
                  <p className="text-gray-500 text-center text-sm leading-relaxed">
                    Our special moment captured on TikTok will appear here
                  </p>
                  <div className="mt-4 px-4 py-2 rounded-full" style={{backgroundColor: '#D2B48C'}}>
                    <span className="text-amber-900 text-sm font-medium">Coming Soon</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-px" style={{backgroundColor: '#D2B48C'}}></div>
            <span className="text-2xl" style={{color: '#87A96B'}}>✨</span>
            <div className="w-16 h-px" style={{backgroundColor: '#D2B48C'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;