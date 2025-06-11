import React from 'react';
import { MapPin, Clock, Instagram, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-dark-wood/20 to-deep-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl animate-float">📍</div>
        <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: '2s' }}>🗺️</div>
        <div className="absolute bottom-20 right-10 text-7xl animate-float" style={{ animationDelay: '4s' }}>📱</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-league text-4xl md:text-5xl font-bold text-texture mb-6 uppercase tracking-wide">
              Venha nos visitar
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vibrant-gold to-transparent mx-auto mb-6"></div>
            <p className="font-playfair text-xl text-warm-gray max-w-2xl mx-auto italic">
              "Histórias começam aqui, ao redor de um copo cheio."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="wood-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vibrant-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-glow">
                    <MapPin className="w-6 h-6 text-deep-black" />
                  </div>
                  <div>
                    <h3 className="font-league text-xl font-bold text-vibrant-gold mb-2 uppercase tracking-wide">Endereço</h3>
                    <p className="text-warm-gray font-inter leading-relaxed">
                      Rua Pe. Gabriel Lux, 900<br />
                      Seminário<br />
                      Corupá - SC />
                      89280-000
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="wood-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vibrant-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-glow">
                    <Clock className="w-6 h-6 text-deep-black" />
                  </div>
                  <div>
                    <h3 className="font-league text-xl font-bold text-vibrant-gold mb-2 uppercase tracking-wide">Horário de Funcionamento</h3>
                    <div className="text-warm-gray font-inter space-y-1">
                      <p>Segunda a Sexta: 18h às 22h</p>
                      <p>Sábado: 10h às 22h</p>
                      <p>Domingo: 10h às 21h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="wood-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-vibrant-gold rounded-full flex items-center justify-center group-hover:animate-glow">
                    <Instagram className="w-6 h-6 text-deep-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-league text-xl font-bold text-vibrant-gold mb-2 uppercase tracking-wide">Instagram</h3>
                    <a 
                      href="https://instagram.com/_priesterhaus" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-warm-gray font-inter hover:text-vibrant-gold transition-colors duration-300"
                    >
                      @_priesterhaus
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://instagram.com/_priesterhaus" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-vibrant-gold/20 hover:bg-vibrant-gold text-vibrant-gold hover:text-deep-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <div className="pt-4"> 
                <a 
                  href="https://maps.google.com/?q=Rua+Pe.+Gabriel+Lux+900+Teresópolis+SC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="golden-button w-full flex items-center justify-center space-x-2 font-inter"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Ver no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="wood-card p-4">
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.123456789!2d-49.2427778!3d-26.425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df4b0cdeadbeef%3A0xabcdef1234567890!2sR.%20Padre%20Gabriel%20Lux%2C%20900%20-%20Semin%C3%A1rio%2C%20Corup%C3%A1%20-%20SC%2C%2089280-000!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                   width="100%"
                   height="100%"
                   style={{ border: 0 }}
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="rounded-lg"
                   title="Localização da Priesterhaus"
                ></iframe>
                {/* Golden overlay border */}
                <div className="absolute inset-0 border-4 border-vibrant-gold/30 rounded-lg pointer-events-none"></div>
                
                {/* Custom marker overlay */}
                <div className="absolute top-4 left-4 bg-deep-black/80 backdrop-blur-sm rounded-lg p-3 border border-vibrant-gold/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-vibrant-gold rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-deep-black" />
                    </div>
                    <div>
                      <p className="font-league text-sm text-vibrant-gold font-bold uppercase tracking-wide">Priesterhaus</p>
                      <p className="text-warm-gray text-xs font-inter">Rua Pe. Gabriel Lux, 900</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 text-2xl opacity-60 animate-float">📍</div>
                <div className="absolute bottom-4 left-4 text-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}>🍺</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
