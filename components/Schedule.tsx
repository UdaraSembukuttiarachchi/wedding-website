import React from "react";

interface ScheduleItem {
  time: string;
  event: string;
  imageUrl?: string;
  defaultImageUrl: string;
}

interface ScheduleProps {
  topImageUrl?: string;
  scheduleItems?: ScheduleItem[];
  className?: string;
}

const Schedule: React.FC<ScheduleProps> = ({
  topImageUrl = "/schedule-top.jpg",
  scheduleItems,
  className = "",
}) => {
  const defaultScheduleItems: ScheduleItem[] = [
    { 
      time: "5:00 PM", 
      event: "Poruwa Ceremony", 
      defaultImageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop&crop=center"
    },
    { 
      time: "5:30 PM", 
      event: "Registration", 
      defaultImageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop&crop=center"
    },
    { 
      time: "7:00 PM", 
      event: "Reception Begins", 
      defaultImageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop&crop=center"
    },
    { 
      time: "9:00 PM", 
      event: "Dinner Buffet Starts", 
      defaultImageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop&crop=center"
    },
    { 
      time: "12:00 AM", 
      event: "End of Reception", 
      defaultImageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=center"
    },
  ];

  const items = scheduleItems || defaultScheduleItems;

  return (
    <section className={`relative ${className}`}>
      {/* Top Full Width Image */}
      <div className="relative h-64 md:h-80 lg:h-120 overflow-hidden">
        {topImageUrl ? (
          <img
            src={topImageUrl}
            alt="Wedding ceremony"
            className="w-full h-full object-cover object-[0%_30%]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl md:text-8xl mb-4" style={{ color: "#87A96B" }}>
                💐
              </div>
              <p className="text-gray-600 text-lg md:text-xl">
                Beautiful ceremony moments
              </p>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-50 opacity-80"></div>
      </div>

      {/* Schedule Content with Floral Background */}
      <div className="py-16 px-4 bg-gradient-to-br from-amber-50 to-stone-50 relative overflow-hidden" id="schedule">
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

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Schedule
            </h2>
            <div
              className="w-24 h-1 bg-sage-500 mx-auto rounded-full mb-4"
              style={{ backgroundColor: "#87A96B" }}
            ></div>
            <p className="text-lg text-gray-600 font-light italic">
              Join us for a day of celebration and love
            </p>
          </div>

          {/* Schedule Timeline */}
          <div className="relative">
            {/* Timeline Line - Mobile (left side) and Desktop (center) */}
            <div 
              className="absolute w-1 h-full rounded-full md:left-1/2 md:transform md:-translate-x-1/2 left-8"
              style={{ backgroundColor: "#D2B48C" }}
            ></div>

            {/* Schedule Items */}
            <div className="space-y-6 md:space-y-8">
              {items.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot - Mobile (left side) and Desktop (center) */}
                  <div className="absolute w-4 h-4 rounded-full border-4 border-white shadow-lg md:left-1/2 md:transform md:-translate-x-1/2 left-6" style={{ backgroundColor: "#87A96B" }}></div>
                  
                  {/* Mobile Layout - Single side with timeline */}
                  <div className="block md:hidden">
                    <div className="ml-16 pr-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                        <div className="flex items-center gap-4">
                          {/* Image Thumbnail */}
                          <div className="flex-shrink-0">
                            <img
                              src={item.imageUrl || item.defaultImageUrl}
                              alt={item.event}
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shadow-md border-2 border-white"
                            />
                          </div>
                          
                          {/* Time and Event */}
                          <div className="flex-1 min-w-0">
                            <div className="text-lg sm:text-xl font-serif font-bold mb-1 text-left" style={{ color: "#87A96B" }}>
                              {item.time}
                            </div>
                            <div className="text-sm sm:text-base text-gray-700 font-medium">
                              {item.event}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating sides */}
                  <div className="hidden md:block">
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                          <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                            {/* Image Thumbnail */}
                            <div className="flex-shrink-0">
                              <img
                                src={item.imageUrl || item.defaultImageUrl}
                                alt={item.event}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg object-cover shadow-md border-2 border-white"
                              />
                            </div>
                            
                            {/* Time and Event */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                              <div className="text-xl lg:text-2xl font-serif font-bold mb-1" style={{ color: "#87A96B" }}>
                                {item.time}
                              </div>
                              <div className="text-base lg:text-lg text-gray-700 font-medium">
                                {item.event}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/12"></div>
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                </div>
              ))}
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
                🌸
              </span>
              <div
                className="w-16 h-px"
                style={{ backgroundColor: "#D2B48C" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;