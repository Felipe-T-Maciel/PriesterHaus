import React from 'react';
import { Beer, UtensilsCrossed, Wine, Music } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Beer,
      title: 'Chope Artesanal',
      description: 'Cervejas artesanais selecionadas, sempre geladas e com o sabor único que você procura.',
      effect: 'bubble-effect',
      emoji: '🍺'
    },
    {
      icon: UtensilsCrossed,
      title: 'Petiscos Gourmets',
      description: 'Pratos especiais preparados com ingredientes frescos e muito amor pela gastronomia.',
      effect: 'smoke-effect',
      emoji: '🍖'
    },
    {
      icon: Wine,
      title: 'Caipirinha de Vinho',
      description: 'Nossa exclusiva caipirinha de vinho, uma criação especial que você só encontra aqui.',
      effect: '',
      emoji: '🍷'
    },
    {
      icon: Music,
      title: 'Música ao Vivo',
      description: 'Apresentações ao vivo que criam a trilha sonora perfeita para suas noites especiais.',
      effect: '',
      emoji: '🎵'
    }
  ];

  return (
    <section className="relative py-20 bg-deep-black ambient-lights">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl animate-float">🏰</div>
        <div className="absolute top-20 right-10 text-7xl animate-float" style={{ animationDelay: '2s' }}>⚡</div>
        <div className="absolute bottom-20 left-20 text-8xl animate-float" style={{ animationDelay: '4s' }}>🎭</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-league text-4xl md:text-5xl font-bold text-texture mb-6 uppercase tracking-wide">
              O que temos por aqui
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vibrant-gold to-transparent mx-auto mb-6"></div>
            <p className="font-playfair text-xl text-warm-gray max-w-2xl mx-auto italic">
              "Cada detalhe pensado para criar momentos únicos e memoráveis"
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className={`wood-card p-8 text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-vibrant-gold/20 ${service.effect}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-vibrant-gold to-golden-glow rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                      <Icon className="w-10 h-10 text-deep-black" />
                    </div>
                    {/* Floating emoji */}
                    <div className="absolute -top-2 -right-2 text-2xl animate-float">
                      {service.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-league text-2xl font-semibold text-vibrant-gold mb-4 group-hover:text-golden-glow transition-colors uppercase tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-warm-gray font-inter leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-vibrant-gold/0 rounded-xl group-hover:border-vibrant-gold/50 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;