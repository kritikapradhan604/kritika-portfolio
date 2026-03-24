/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          purple: '#b94aff',
          cyan: '#00fff0',
          pink: '#ff2d78',
        },
        dark: {
          100: '#0d0d1a',
          200: '#12121f',
          300: '#1a1a2e',
          400: '#16213e',
          500: '#1f2040',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 10s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradientShift 4s ease infinite',
        'typing': 'typing 3s steps(40) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' },
          '50%': { boxShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00d4ff, 0 0 30px #00d4ff50',
        'neon-purple': '0 0 10px #b94aff, 0 0 30px #b94aff50',
        'neon-cyan': '0 0 10px #00fff0, 0 0 30px #00fff050',
        'glass': 'inset 0 1px 0 0 rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
}
