"use client";

import React from "react";
import { MapPin, Clock, Calendar, Phone, Car, Heart } from "lucide-react";

const WeddingDetails: React.FC = () => {
  const detailCards = [
    {
      id: 1,
      icon: Calendar,
      title: "When",
      items: [
        { icon: Calendar, text: "Saturday, 10th January 2026" },
        { icon: Clock, text: "7:00 PM onwards" },
      ],
    },
    {
      id: 2,
      icon: MapPin,
      title: "Where",
      items: [
        { icon: MapPin, text: "Eagles Lagoon View, Katunayake" },
        { icon: Car, text: "Ample parking available" },
      ],
    },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(178, 172, 136, 0.7), rgba(178, 172, 136, 0.6)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="details"
    >
      <div className="max-w-6xl mx-auto">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-4 tracking-wide">
            Wedding Details
          </h2>
          <div className="w-20 h-0.5 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-serif">
            All the important information for our special celebration
          </p>
        </div>

        {/* Clean Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {detailCards.map((card) => (
            <div
              key={card.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50 hover:shadow-xl hover:border-green-200/70 hover:bg-white/95 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <card.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-light text-stone-800">
                  {card.title}
                </h3>
              </div>

              <div className="space-y-4">
                {card.items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center mr-3">
                      <item.icon className="w-4 h-4 text-stone-600" />
                    </div>
                    <span className="text-stone-700 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50 mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-2xl font-light text-stone-800">Location</h3>
          </div>

          <div className="rounded-xl overflow-hidden border border-stone-200">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-5JvhHH7LtfR2GFN9HJfT58DyT2eo5OM&q=Eagles+Lagoon+View,Katunayake,Sri+Lanka"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
              title="Wedding Venue Location"
            ></iframe>
          </div>
          {/* <p className="text-sm text-stone-500 mt-4 text-center">
            * Replace YOUR_API_KEY with your Google Maps API key
          </p> */}
        </div>

        {/* Contact Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-2xl font-light text-stone-800">Get in Touch</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            {[
              { name: "Pansilu", phone: "+94 76 925 6562" },
              { name: "Udara", phone: "+94 76 715 6072" },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-800 font-medium text-xl">
                    {contact.name[0]}
                  </span>
                </div>
                <h4 className="text-xl font-medium text-stone-800 mb-2">
                  {contact.name}
                </h4>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center text-green-700 hover:text-green-800 transition-colors duration-200 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{contact.phone}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center bg-stone-50 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Heart
                className="w-5 h-5 text-green-600 mr-2"
                fill="currentColor"
              />
              <span className="text-stone-700 font-medium">
                We&apos;re here to help
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Have any questions about our special day? Don&apos;t hesitate to
              reach out. We&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
