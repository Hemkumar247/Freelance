/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6efe5',
        sand: '#dac6b0',
        latte: '#b99773',
        amber: '#e1b06d',
        cocoa: '#7a5840',
        espresso: '#2f211b',
        ink: '#120f0d',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 30px 90px rgba(0, 0, 0, 0.28)',
        glass: '0 18px 60px rgba(11, 9, 8, 0.24)',
      },
      backgroundImage: {
        'radial-warm':
          'radial-gradient(circle at top, rgba(225, 176, 109, 0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(185, 151, 115, 0.16), transparent 32%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.55' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        float: 'float 5.5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 1.8s ease-out infinite',
        shimmer: 'shimmer 5s linear infinite',
      },
    },
  },
  plugins: [],
};
