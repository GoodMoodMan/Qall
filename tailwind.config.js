/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This enables dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: {
          DEFAULT: '#F3F4F6', // Light mode color
        },
        dark: {
          DEFAULT: '#1F2937', // Dark mode color
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
}


