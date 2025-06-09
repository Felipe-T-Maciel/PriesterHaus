import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-deep-black py-12 border-t border-vibrant-gold/20">
      {/* String lights effect */}
      <div className="string-lights">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Logo */}
              <div className="text-center md:text-left">
                <h3 className="font-league text-2xl font-bold text-vibrant-gold mb-2 uppercase tracking-wide">
                  Priesterhaus
                </h3>
                <p className="text-warm-gray font-playfair text-sm italic">
                  "Onde cada momento se torna especial"
                </p>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-warm-gray font-inter text-sm flex items-center justify-center space-x-2">
                  <span>© 2024 Priesterhaus. Feito com</span>
                  <Heart className="w-4 h-4 text-vibrant-gold fill-current animate-pulse" />
                  <span>para grandes momentos.</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-4 left-10 text-2xl opacity-20 animate-float">🍺</div>
      <div className="absolute top-6 right-10 text-xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>🎵</div>
    </footer>
  );
};

export default Footer;