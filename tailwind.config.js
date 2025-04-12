// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', ...fontFamily.mono],
      },
      colors: {
        lightBlueBg: '#e5f3ff', // light background
        royalBlueText: '#1e3a8a', // deeper royal blue for text
        darkBlueBg: '#0f172a', // very dark blue background
        softLightBlueText: '#a5d8ff', // pleasant light blue for dark mode text
      },
      boxShadow: {
        card: '0 10px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
