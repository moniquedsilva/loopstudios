/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-white': 'hsl(0, 0%, 100%)',
        'brand-black': 'hsl(0, 0%, 0%)',
        'brand-dark-gray': 'hsl(0, 0%, 55%)',
      },
      backgroundColor: {
        'brand-white': 'hsl(0, 0%, 100%)',
        'brand-black': 'hsl(0, 0%, 0%)',
        'brand-dark-gray': 'hsl(0, 0%, 55%)',
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
