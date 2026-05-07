/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/constants/**/*.ts',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      'sans-extended': ['var(--font-sans-extended)', 'system-ui', 'sans-serif'],
      serif: ['var(--font-serif)', 'Georgia', 'serif'],
    },
    screens: {
      xs: '360px',
      sm: '672px',
      md: '992px',
      lg: '1200px',
      l: '1440px',
      xl: '1700px',
      xxl: '1900px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        100: '#151515',
        40: 'rgba(0, 0, 0, 0.4)',
        12: 'rgba(0, 0, 0, 0.12)',
      },
      grey: {
        100: '#717070',
      },
      darkgrey: {
        100: '#5A5757',
      },
      white: {
        100: '#ffffff',
      },
      antiquewhite: {
        100: '#faf6e8',
      },
      cream: {
        100: '#f3f1e5',
      },
      lightbeige: {
        100: '#e9e4cd',
      },
      burgundy: {
        100: '#7a1e1d',
      },
    },
    extend: {},
  },
  plugins: [],
}
