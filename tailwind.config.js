/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0a0a0a',
        panel: '#0d0f0d',
        neon: {
          DEFAULT: '#00ff9f',
          dim: '#00cc7f',
        },
        cyber: {
          cyan: '#00e5ff',
          purple: '#a855f7',
        },
        term: {
          fg: '#c8ffe8',
          muted: '#5b7a6d',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 12px rgba(0,255,159,0.35), 0 0 2px rgba(0,255,159,0.6)',
        cyan: '0 0 12px rgba(0,229,255,0.35), 0 0 2px rgba(0,229,255,0.6)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.7' },
          '97%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        glitchTop: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, -2px)' },
          '40%': { transform: 'translate(-2px, 2px)' },
          '60%': { transform: 'translate(2px, -1px)' },
          '80%': { transform: 'translate(1px, 2px)' },
        },
        glitchBottom: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-2px, 1px)' },
          '80%': { transform: 'translate(-1px, -2px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        flicker: 'flicker 6s linear infinite',
        drift: 'drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
