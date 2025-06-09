import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ambient-lights string-lights">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Beer Mugs */}
        <div 
          className="absolute text-6xl opacity-20 floating-element"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        >
          🍺
        </div>
        <div 
          className="absolute text-4xl opacity-15 floating-element"
          style={{
            top: '60%',
            right: '15%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        >
          🍻
        </div>
        
        {/* Floating Vinyl Records */}
        <div 
          className="absolute text-5xl opacity-10 floating-element"
          style={{
            top: '30%',
            right: '20%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px) rotate(${mousePosition.x * 0.1}deg)`,
          }}
        >
          📀
        </div>
        
        {/* Barrel */}
        <div 
          className="absolute text-3xl opacity-20 floating-element"
          style={{
            bottom: '20%',
            left: '20%',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * -0.005}px)`,
          }}
        >
          🛢️
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Animated Logo */}
        <div className="mb-12 animate-fade-in">
          <div className="relative inline-block">
            {/* Logo Image with Animations */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 group">
              <img 
                src="/public/Image_20250606_092954_150-removebg-preview.png"
                alt="Priesterhaus Logo"
                className="w-full h-full object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500 animate-logo-glow"
              />
              
              {/* Golden Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-vibrant-gold/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border border-vibrant-gold/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              
              {/* Floating Sparkles */}
              <div className="absolute -top-2 -right-2 text-xl animate-float">✨</div>
              <div className="absolute -bottom-2 -left-2 text-lg animate-float" style={{ animationDelay: '1s' }}>⭐</div>
              <div className="absolute top-1/2 -left-4 text-sm animate-float" style={{ animationDelay: '2s' }}>🍺</div>
              <div className="absolute top-1/2 -right-4 text-sm animate-float" style={{ animationDelay: '3s' }}>⚽</div>
              
              {/* Rotating Golden Ring */}
              <div className="absolute inset-0 border-2 border-transparent border-t-vibrant-gold rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-league text-6xl md:text-8xl font-bold mb-4 text-white uppercase tracking-wider">
            Priesterhaus
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vibrant-gold to-transparent mx-auto mb-6"></div>
        </div>

        {/* Slogan */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="font-inter text-2xl md:text-3xl text-warm-gray mb-6 leading-relaxed font-light">
            Cerveja gelada, comida boa e música ao vivo.
          </p>
          <p className="font-playfair text-lg md:text-xl text-vibrant-gold font-medium italic">
            "Sabores, sons e sorrisos que ficam na memória."
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <button 
            onClick={scrollToAbout}
            className="golden-button text-lg md:text-xl font-inter group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Descobrir Nossa História</span>
              <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-golden-glow to-vibrant-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-vibrant-gold hover:text-golden-glow transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Ambient Glow Effect */}
      <div 
        className="absolute w-96 h-96 bg-vibrant-gold rounded-full opacity-5 blur-3xl"
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      ></div>
    </section>
  );
};

export default Hero;