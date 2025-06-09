/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'vibrant-gold': '#FFD700',
        'dark-wood': '#5A4634',
        'soft-white': '#FFFFFF',
        'warm-gray': '#D1CFC5',
        'leather-amber': '#A67C52',
        'golden-glow': '#FFE55C',
      },
      fontFamily: {
        'league': ['League Gothic', 'Arial Black', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'smoke': 'smoke 8s ease-in-out infinite',
        'bubble': 'bubble 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'logo-glow': 'logo-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700' },
          'to': { textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)', opacity: '0.3' },
          '100%': { transform: 'translateY(-60px) rotate(360deg)', opacity: '0' },
        },
        bubble: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) scale(1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-40px) scale(0.6)', opacity: '0' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'logo-glow': {
          '0%, 100%': { 
            filter: 'brightness(0) invert drop-shadow(0 0 10px #FFD700) drop-shadow(0 0 20px #FFD700)',
            transform: 'scale(1)'
          },
          '50%': { 
            filter: 'brightness(0) invert drop-shadow(0 0 20px #FFD700) drop-shadow(0 0 40px #FFD700) drop-shadow(0 0 60px #FFD700)',
            transform: 'scale(1.05)'
          },
        },
      },
      backgroundImage: {
        'wood-texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%235A4634\" fill-opacity=\"0.3\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'leather-texture': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23A67C52\" fill-opacity=\"0.2\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-40 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};