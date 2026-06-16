/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        'ink-2': '#141414',
        'ink-3': '#1c1c1c',
        cream: '#f5efe1',
        muted: '#8a8a8a',
        gold: '#d4a857',
        'gold-2': '#b88c3a',
        rule: '#2a2a2a',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        ultra: '0.25em',
      },
    },
  },
  plugins: [],
};
