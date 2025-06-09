import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-wood-texture">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl transform rotate-12">🎵</div>
        <div className="absolute top-40 right-20 text-6xl transform -rotate-12">🥨</div>
        <div className="absolute bottom-20 left-20 text-7xl transform rotate-45">🍖</div>
        <div className="absolute bottom-40 right-10 text-5xl transform -rotate-30">🎸</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-league text-4xl md:text-5xl font-bold text-texture mb-6 uppercase tracking-wide">
                  Sobre a Priesterhaus
                </h2>
                <div className="w-24 h-1 bg-vibrant-gold mb-8"></div>
              </div>

              <div className="space-y-6 text-warm-gray font-inter leading-relaxed">
                <p className="text-lg md:text-xl">
                  Mais do que um bar, a <span className="text-vibrant-gold font-semibold">Priesterhaus</span> é 
                  um refúgio onde tradição e modernidade se encontram. Nossa casa foi pensada para 
                  criar momentos únicos, onde cada detalhe conta uma história.
                </p>
                
                <p className="text-lg">
                  Do chope artesanal gelado aos petiscos preparados com carinho especial, 
                  cada experiência aqui é cuidadosamente elaborada. Nossa caipirinha de vinho 
                  exclusiva e a música ao vivo completam a atmosfera que faz da Priesterhaus 
                  o seu novo lugar favorito.
                </p>

                <p className="text-lg">
                  Venha descobrir por que somos mais do que um bar – somos uma experiência 
                  que desperta todos os seus sentidos.
                </p>
              </div>

              <div className="pt-4">
                <div className="inline-block wood-card p-6">
                  <p className="font-playfair text-xl text-vibrant-gold italic">
                    "Uma experiência que vai muito além do copo."
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="wood-card p-4 transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[3/5] bg-gradient-to-br from-leather-amber/40 to-dark-wood/60 rounded-lg overflow-hidden relative">
                  <img 
                    src="WhatsApp Image 2025-06-08 at 19.30.26_57d390ec.jpg" 
                    alt="Interior da Priesterhaus com ambiente aconchegante"
                    className="w-full h-full object-cover opacity-90 object-top" 
                  />
                  
                  {/* Smoke effect overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-4 h-4 bg-warm-gray/30 rounded-full animate-smoke"></div>
                  </div>
                  <div className="absolute top-8 right-6">
                    <div className="w-3 h-3 bg-warm-gray/40 rounded-full animate-smoke" style={{ animationDelay: '2s' }}></div>
                  </div>
                  
                  {/* Golden frame effect */}
                  <div className="absolute inset-0 border-4 border-vibrant-gold/30 rounded-lg"></div>
                </div>
              </div>

              {/* Floating ambient elements */}
              <div className="absolute -top-6 -right-6 text-4xl opacity-30 animate-float">🕯️</div>
              <div className="absolute -bottom-4 -left-4 text-3xl opacity-25 animate-float" style={{ animationDelay: '3s' }}>🍷</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;