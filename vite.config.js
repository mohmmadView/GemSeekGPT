import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  /** @type {import('tailwindcss').Config} */
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'robot-blue': '#3B82F6',
        'robot-gray': '#D1D5DB',
        'user-green': '#10B981',
        'deepseek': '#0E7490', // رنگ اختصاصی DeepSeek
        'gemini': '#4F46E5',   // رنگ اختصاصی Gemini
        'chatgpt': '#101A20',  // رنگ اختصاصی ChatGPT
      },
      fontFamily: {
        'robot': ['"Rajdhani"', 'sans-serif'], // فونت با حس رباتیک
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.2s ease-out forwards',
      },
    },
  },
  plugins: [tailwindcss(),],
})
