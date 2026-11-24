/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aquatic: {
          darkest: '#020712',
          deep: '#040d1a',
          navy: '#06162d',
          abyss: '#091e3d',
          ocean: '#0b2e59',
          sea: '#0e437c',
          azure: '#0284c7',
          cyan: '#06b6d4',
          glow: '#22d3ee',
          ice: '#67e8f9',
          foam: '#e0f2fe'
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        'underwater-radial': 'radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.15), transparent 70%)',
        'deep-gradient': 'linear-gradient(180deg, #020712 0%, #06162d 50%, #040d1a 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
