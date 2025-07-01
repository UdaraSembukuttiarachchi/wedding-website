'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  
  // Sample images - in real implementation, these would be your actual photos
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/gallery/gallery1.jpg",
      alt: "First date",
      caption: "Our first date/not-a-date"
    },
    {
      id: 2,
      src: "/gallery/gallery2.JPG",
      alt: "First concert together",
      caption: "Our first concert together - Naadhagama"
    },
    {
      id: 3,
      src: "/gallery/gallery3.jpg",
      alt: "First road trip",
      caption: "Making memories on the road"
    },
    {
      id: 4,
      src: "/gallery/gallery4.JPG",
      alt: "Toastmasters",
      caption: "Two Toastmasters together"
    },
    {
      id: 5,
      src: "/gallery/gallery5.JPG",
      alt: "In Love",
      caption: "In love forever..."
    }
  ];

  const nextImage = (): void => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (): void => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number): void => {
    setCurrentImage(index);
  };

  return (
    <section className="py-20 px-4 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            Capturing the moments that tell our story...
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-8">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-contain object-center transition-all duration-500 bg-white"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg font-medium drop-shadow-lg">
                {images[currentImage].caption}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Heart Icon */}
            <div className="absolute top-6 right-6">
              <Heart className="w-8 h-8 text-white fill-red-500 drop-shadow-lg animate-pulse" />
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImage 
                  ? 'bg-green-600 scale-125' 
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToImage(index)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                index === currentImage 
                  ? 'ring-4 ring-green-500 ring-opacity-60' 
                  : 'hover:ring-2 hover:ring-stone-300'
              } ${
                // Center the last item if it's alone in the row (odd number of items on mobile only)
                images.length % 2 === 1 && index === images.length - 1 
                  ? 'col-span-2 md:col-span-1 justify-self-center md:justify-self-stretch max-w-[calc(50%-0.5rem)] md:max-w-none' 
                  : ''
              }`}
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index !== currentImage && (
                <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-all duration-200"></div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;