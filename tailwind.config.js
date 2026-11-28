/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#020712',
          900: '#030e22',
          850: '#051838',
          800: '#08234e',
          700: '#0d3674',
          600: '#1552a8',
          500: '#1d72dd',
          400: '#3b8cf6',
          300: '#60a5fa',
        },
        aqua: {
          DEFAULT: '#00f2fe',
          glow: '#4facfe',
          cyan: '#06b6d4',
          emerald: '#10b981',
          gold: '#f59e0b',
          amber: '#fbbf24',
          neon: '#0df'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel Decorative"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'ripple': 'ripple 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(0,242,254,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(0,242,254,0.8))' },
        }
      }
    },
  },
  plugins: [],
}
