/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        lato: ['Lato', 'sans-serif'],
        nanum: ['"Nanum Gothic Coding"', 'monospace'],
        playwrite: ['Playwrite IT Moderna', 'cursive'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        pear: '#C1E317',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
