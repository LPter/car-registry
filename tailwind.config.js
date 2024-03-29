/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      transform: ['hover'],
    },
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        autoFitCol: 'repeat( auto-fit, minmax(150px, 1fr) )',
        // autoFitRow: 'repeat( auto-fit, minmax(150px, 1fr) )',
      },
    },
  },
  plugins: [],
};
