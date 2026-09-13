/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Dark mode is toggled by adding the "dark" class to <html> (see src/components/ThemeToggle.jsx).
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Deep Saudi green, shared by every page.
        saudi: {
          DEFAULT: '#006C35',
          light: '#E6F0EA',
          dark: '#004D25',
          50: '#F0F7F3',
          100: '#E6F0EA',
          200: '#C4DDCE',
          300: '#8FC3A4',
          400: '#5BAA7D',
          500: '#1F8A50',
          600: '#007A3C',
          700: '#006C35',
          800: '#005A2C',
          900: '#004D25',
          950: '#022C16',
        },
        charcoal: {
          DEFAULT: '#1F2937',
          light: '#374151',
          lighter: '#4B5563',
          dark: '#111827',
        },
        offwhite: '#F8F9FA',
      },
      boxShadow: {
        subtle: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
        card: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.025)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'pulse-slow': 'pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
