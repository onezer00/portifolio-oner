module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "scale-x-0",
    "scale-x-100",
    "opacity-0",
    "opacity-100",
    "group-hover:scale-x-100",
    "group-hover:opacity-100"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%, 100%': { opacity: 0 },
          '10%, 90%': { opacity: 1 },
        },
      },
      animation: {
        fade: 'fade 2.5s ease-in-out infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb', // azul destaque
          dark: '#1e40af',
        },
        accent: {
          DEFAULT: '#22c55e', // verde destaque
          dark: '#15803d',
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
