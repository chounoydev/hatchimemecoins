/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hatchiGold: '#FFD700',
        hatchiBrown: '#8B4513',
        hatchiCream: '#FFF5E1',
        hatchiDark: '#4B2E2E',
      },
      fontFamily: {
        playful: ['"Comic Neue"', 'cursive'],
        modern: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/bg.jpg')",
      },

      /* 🔥 SLIDING ANIMATION */
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 18s linear infinite',
      },
    },
  },
  plugins: [],
}
