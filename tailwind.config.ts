import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F1012',
        'dark-card': '#1A1B1D',
        'dark-border': 'rgba(255, 255, 255, 0.1)',
        'gold': '#B9975F',
        'gold-dark': '#715932',
        'gold-accent': '#A8673E',
        'gold-deep': '#9D5E37',
        'success': '#5CD691',
        'error': '#DD3B3B',
      },
      fontFamily: {
        'vollkorn': ['"Vollkorn SC"', 'serif'],
        'signika': ['Signika', 'sans-serif'],
        'figtree': ['Figtree', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-fade-up': 'linear-gradient(0deg, #0F1012 0%, rgba(15, 16, 18, 0) 100%)',
        'gradient-fade-down': 'linear-gradient(180deg, #0F1012 0%, rgba(15, 16, 18, 0) 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F1012 0%, #1B1B1D 100%)',
      },
      boxShadow: {
        'text': '0px 8px 11px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config
