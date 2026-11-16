/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#0A1530', lime: '#D9FF3F', ink: '#10182A', cloud: '#F5F6F2' },
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [],
}
