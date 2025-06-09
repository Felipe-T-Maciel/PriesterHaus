import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'WhatsApp Image 2025-06-08 at 20.30.18_341f1832.jpg',
      title: 'Noite de música ao vivo'
    },
    {
      url: 'WhatsApp Image 2025-06-08 at 19.30.26_49292586.jpg',
      title: 'Vem brindar o hoje com a gente.'
    },
    {
      url: 'WhatsApp Image 2025-06-08 at 19.32.36_f5cfc6a1.jpg',
      title: 'Experiência única'
    },
    {
      url: 'WhatsApp Image 2025-06-08 at 19.35.04_502d7e3b.jpg',
      title: 'Para quem sabe aproveitar o agora.'
    },
    {
      url: 'WhatsApp Image 2025-06-08 at 20.05.17_0c99ae31.jpg',
      title: 'Atmosfera Priesterhaus'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-deep-black to-dark-wood/20">
      {/* Ambient Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-float">📸</div>
        <div className="absolute top-40 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-20 left-20 text-7xl animate-float" style={{ animationDelay: '3s' }}>🎭</div>
        <div className="absolute bottom-40 right-10 text-4xl animate-float" style={{ animationDelay: '2s' }}>🍻</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-league text-4xl md:text-5xl font-bold text-texture mb-6 uppercase tracking-wide">
              Experiência ao Vivo
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vibrant-gold to-transparent mx-auto mb-6"></div>
            <p className="font-playfair text-xl text-warm-gray max-w-2xl mx-auto italic">
              "Capture os momentos únicos que acontecem na Priesterhaus"
            </p>
          </div>

          {/* Gallery Carousel */}
          <div className="relative">
            <div className="wood-card p-4 mb-8">
              <div className="relative h-[70vh] max-h-[600px] rounded-lg overflow-hidden group flex items-center justify-center bg-gradient-to-br from-leather-amber/40 to-dark-wood/60">
                <img 
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-league text-2xl font-bold text-vibrant-gold mb-2 uppercase tracking-wide">
                      {images[currentIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-deep-black/70 hover:bg-vibrant-gold/90 text-vibrant-gold hover:text-deep-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-deep-black/70 hover:bg-vibrant-gold/90 text-vibrant-gold hover:text-deep-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'border-vibrant-gold shadow-lg shadow-vibrant-gold/30' 
                      : 'border-warm-gray/30 hover:border-vibrant-gold/50'
                  }`}
                >
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Visual Effects */}
            <div className="absolute -top-8 -left-8 text-4xl opacity-30 animate-float">👏</div>
            <div className="absolute -top-12 -right-8 text-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }}>🥂</div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-5xl opacity-20 animate-float" style={{ animationDelay: '4s' }}>🎉</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;