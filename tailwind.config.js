/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#080b14',
        panel: '#101625',
        line: 'rgba(148, 163, 184, 0.16)',
        accent: '#7c9cff',
        mint: '#78f0c2',
      },
    },
  },
  plugins: [],
}
