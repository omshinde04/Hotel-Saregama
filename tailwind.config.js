/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/sections/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          muted: '#A88825',
          light: '#F0D060',
          dark: '#8B6914',
        },
        brown: {
          DEFAULT: '#2B1B12',
          light: '#3D2517',
          dark: '#1A0E09',
        },
        surface: {
          DEFAULT: '#141313',
          low: '#1C1B1B',
          high: '#2B2A2A',
          highest: '#353434',
        },
        ink: {
          DEFAULT: '#0D0D0D',
        },
        cream: '#F5F0E8',
        muted: '#9E9E9E',
      },

      fontFamily: {
        display: ['Playfair Display', 'serif'],
        serif: ['DM Serif Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        hero: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h2: ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1.15' }],
        h3: ['clamp(1.25rem, 2vw, 2rem)', { lineHeight: '1.3' }],
        h4: ['clamp(1rem, 1.5vw, 1.5rem)', { lineHeight: '1.4' }],
        label: ['0.75rem', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '600' }],
      },

      spacing: {
        section: '7.5rem',
        'section-sm': '5rem',
      },

      maxWidth: {
        container: '1280px',
      },

      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #A88825 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.7) 60%, #0D0D0D 100%)',
        'brown-gradient': 'linear-gradient(135deg, #2B1B12 0%, #1A0E09 100%)',
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
      },

      backdropBlur: {
        xs: '2px',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
};