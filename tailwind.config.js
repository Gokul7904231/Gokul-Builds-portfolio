/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './services/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'rich-black': '#050505',
        'deep-charcoal': '#0A0A0A',
        surface: '#111111',
        gold: '#D4AF37',
        'soft-gold': '#BFA760',
        'text-primary': '#EDEDED',
        'text-muted': '#A1A1A1',
      },
    },
  },
  plugins: [],
};

