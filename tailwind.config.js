/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B0510',
        platinum: '#F5F5F7',
        lavender: '#AFAAB9',
        primary: {
          DEFAULT: '#5D2E8C',
          light: '#7B42BC',
        },
        accent: {
          gold: '#FFD700',
          emerald: '#10B981',
          deepEmerald: '#1A3A36',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
