import React from "react";

interface OurStoryProps {
  tiktokVideoId?: string;
  className?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  tiktokVideoId,
  className = "",
}) => {
  return (
    <section
      className={`py-16 px-4 bg-gradient-to-br from-amber-50 to-stone-50 relative overflow-hidden ${className}`}
      id="story"
    >
      {/* Subtle Floral Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="florals" width="160" height="160" patternUnits="userSpaceOnUse">
                  <!-- Large flower -->
                  <g transform="translate(80, 40)">
                    <circle cx="0" cy="0" r="4" fill="#87A96B" opacity="0.8"/>
                    <circle cx="-10" cy="-4" r="6" fill="#87A96B" opacity="0.6"/>
                    <circle cx="10" cy="-4" r="6" fill="#87A96B" opacity="0.6"/>
                    <circle cx="-6" cy="9" r="6" fill="#87A96B" opacity="0.6"/>
                    <circle cx="6" cy="9" r="6" fill="#87A96B" opacity="0.6"/>
                    <circle cx="0" cy="-10" r="6" fill="#87A96B" opacity="0.6"/>
                    <path d="M0,-18 Q-4,-25 -8,-18 Q-4,-12 0,-18" fill="#87A96B" opacity="0.4"/>
                    <path d="M0,-18 Q4,-25 8,-18 Q4,-12 0,-18" fill="#87A96B" opacity="0.4"/>
                  </g>
                  
                  <!-- Medium flower -->
                  <g transform="translate(30, 120)">
                    <circle cx="0" cy="0" r="3" fill="#D2B48C" opacity="0.7"/>
                    <circle cx="-6" cy="-3" r="4" fill="#D2B48C" opacity="0.5"/>
                    <circle cx="6" cy="-3" r="4" fill="#D2B48C" opacity="0.5"/>
                    <circle cx="0" cy="6" r="4" fill="#D2B48C" opacity="0.5"/>
                    <circle cx="-4" cy="4" r="3" fill="#D2B48C" opacity="0.5"/>
                    <circle cx="4" cy="4" r="3" fill="#D2B48C" opacity="0.5"/>
                  </g>
                  
                  <g transform="translate(130, 110)">
                    <circle cx="0" cy="0" r="2.5" fill="#87A96B" opacity="0.6"/>
                    <circle cx="-5" cy="-2" r="3" fill="#87A96B" opacity="0.4"/>
                    <circle cx="5" cy="-2" r="3" fill="#87A96B" opacity="0.4"/>
                    <circle cx="0" cy="5" r="3" fill="#87A96B" opacity="0.4"/>
                  </g>
                  
                  <!-- Small scattered flowers -->
                  <g transform="translate(20, 20)">
                    <circle cx="0" cy="0" r="1.5" fill="#D2B48C" opacity="0.5"/>
                    <circle cx="-3" cy="-1" r="2" fill="#D2B48C" opacity="0.3"/>
                    <circle cx="3" cy="-1" r="2" fill="#D2B48C" opacity="0.3"/>
                    <circle cx="0" cy="3" r="2" fill="#D2B48C" opacity="0.3"/>
                  </g>
                  
                  <g transform="translate(140, 30)">
                    <circle cx="0" cy="0" r="1" fill="#87A96B" opacity="0.4"/>
                    <circle cx="-2" cy="-1" r="1.5" fill="#87A96B" opacity="0.3"/>
                    <circle cx="2" cy="-1" r="1.5" fill="#87A96B" opacity="0.3"/>
                    <circle cx="0" cy="2" r="1.5" fill="#87A96B" opacity="0.3"/>
                  </g>
                  
                  <!-- Delicate leaves -->
                  <g transform="translate(110, 60)">
                    <ellipse cx="0" cy="0" rx="3" ry="8" fill="#87A96B" opacity="0.3" transform="rotate(30)"/>
                    <ellipse cx="0" cy="0" rx="3" ry="8" fill="#87A96B" opacity="0.3" transform="rotate(-30)"/>
                  </g>
                  
                  <g transform="translate(50, 80)">
                    <ellipse cx="0" cy="0" rx="2" ry="6" fill="#D2B48C" opacity="0.3" transform="rotate(45)"/>
                    <ellipse cx="0" cy="0" rx="2" ry="6" fill="#D2B48C" opacity="0.3" transform="rotate(-45)"/>
                  </g>
                  
                  <!-- Branch with small flowers -->
                  <g transform="translate(70, 140)">
                    <path d="M-20,0 Q-10,-5 0,0 Q10,5 20,0" stroke="#87A96B" stroke-width="1" fill="none" opacity="0.3"/>
                    <circle cx="-15" cy="-2" r="2" fill="#D2B48C" opacity="0.4"/>
                    <circle cx="-5" cy="-3" r="1.5" fill="#87A96B" opacity="0.4"/>
                    <circle cx="5" cy="2" r="1.5" fill="#D2B48C" opacity="0.4"/>
                    <circle cx="15" cy="-1" r="2" fill="#87A96B" opacity="0.4"/>
                  </g>
                  
                  <!-- Tiny texture dots -->
                  <circle cx="25" cy="50" r="0.8" fill="#87A96B" opacity="0.2"/>
                  <circle cx="135" cy="85" r="0.8" fill="#D2B48C" opacity="0.2"/>
                  <circle cx="90" cy="100" r="0.8" fill="#87A96B" opacity="0.2"/>
                  <circle cx="60" cy="140" r="0.8" fill="#D2B48C" opacity="0.2"/>
                  <circle cx="15" cy="100" r="0.8" fill="#87A96B" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="160" height="160" fill="url(#florals)"/>
            </svg>
          `)}")`,
          backgroundSize: '160px 160px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Floating floral elements */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#87A96B' }}></div>
        <div className="w-8 h-8 rounded-full -mt-6 ml-8" style={{ backgroundColor: '#D2B48C' }}></div>
      </div>
      
      <div className="absolute bottom-20 right-16 opacity-20 pointer-events-none">
        <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#D2B48C' }}></div>
        <div className="w-6 h-6 rounded-full -mt-4 ml-6" style={{ backgroundColor: '#87A96B' }}></div>
      </div>
      
      <div className="absolute top-1/3 right-10 opacity-15 pointer-events-none">
        <div className="w-4 h-12 rounded-full transform rotate-12" style={{ backgroundColor: '#87A96B' }}></div>
        <div className="w-4 h-8 rounded-full -mt-8 ml-3 transform -rotate-12" style={{ backgroundColor: '#87A96B' }}></div>
      </div>
      
      <div className="absolute top-1/2 left-8 opacity-15 pointer-events-none">
        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#D2B48C' }}></div>
        <div className="w-4 h-4 rounded-full -mt-3 ml-4" style={{ backgroundColor: '#87A96B' }}></div>
        <div className="w-3 h-3 rounded-full -mt-2 ml-2" style={{ backgroundColor: '#D2B48C' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Story
          </h2>
          <div
            className="w-24 h-1 bg-sage-500 mx-auto rounded-full"
            style={{ backgroundColor: "#87A96B" }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                <span
                  className="text-2xl font-serif italic"
                  style={{ color: "#87A96B" }}
                >
                  It all started with a dance&hellip;
                </span>
              </p>
              <br />

              <p className="text-gray-600 leading-relaxed">
                Back in December 2022, we met for the first time at a
                Toastmasters Christmas party. The music was good, the vibe was
                fun, and somehow we ended up dancing together. We didn&apos;t
                know it then, but that little moment was the beginning of
                something special.
              </p><br />

              <p className="text-gray-600 leading-relaxed">
                From friendly chats after meetings to sharing laughs and dreams,
                we slowly became close friends &mdash; and then, something more.
              </p><br />

              <p className="text-gray-600 leading-relaxed">
                Fast forward to December 12th, 2024 &mdash; Pansilu&apos;s 24th
                birthday. Udara had a plan (and a ring!). At the very top of the
                Lotus Tower, surrounded by the city lights, he asked her the big
                question&hellip; and she said{" "}
                <span className="font-semibold" style={{ color: "#87A96B" }}>
                  &quot;Yes.&quot;
                </span>
              </p><br />

              <p className="text-lg text-gray-700 font-medium italic">
                And now, here we are &mdash; ready to dance through life
                together.
              </p>
            </div>

            {/* Decorative Hearts */}
            <div className="flex justify-center space-x-2 mt-8">
              <span className="text-2xl" style={{ color: "#87A96B" }}>
                ♥
              </span>
              <span className="text-xl" style={{ color: "#D2B48C" }}>
                ♥
              </span>
              <span className="text-2xl" style={{ color: "#87A96B" }}>
                ♥
              </span>
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
                      background:
                        "linear-gradient(to left, rgba(0,0,0,0.8) 0px, transparent 60px, transparent calc(100% - 60px), rgba(0,0,0,0.8) 100%)",
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
                      border: "none",
                      outline: "none",
                      marginLeft: "-10%",
                      transform: "scale(0.9)",
                      transformOrigin: "center",
                    }}
                  />
                </div>
              ) : (
                <div className="aspect-[9/16] w-full max-w-sm bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center p-8 shadow-xl">
                  <div className="text-6xl mb-4" style={{ color: "#87A96B" }}>
                    📱
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                    TikTok Video
                  </h3>
                  <p className="text-gray-500 text-center text-sm leading-relaxed">
                    Our special moment captured on TikTok will appear here
                  </p>
                  <div
                    className="mt-4 px-4 py-2 rounded-full"
                    style={{ backgroundColor: "#D2B48C" }}
                  >
                    <span className="text-amber-900 text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div
              className="w-16 h-px"
              style={{ backgroundColor: "#D2B48C" }}
            ></div>
            <span className="text-2xl" style={{ color: "#87A96B" }}>
              ✨
            </span>
            <div
              className="w-16 h-px"
              style={{ backgroundColor: "#D2B48C" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;