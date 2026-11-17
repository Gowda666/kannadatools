/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C8102E',      // Karnataka crimson red accent
          yellow: '#FFD100',   // Karnataka golden yellow accent
          amber: '#f5510bf6',
          dark: '#0F172A',
          surface: '#1E293B',
          muted: '#151c27ff',
        },
      },
      fontFamily: {
        kannada: [
          '"Noto Sans Kannada"',
          'Tunga',
          'Kedage',
          'Mallige',
          '"Nirmala UI"',
          'Vijaya',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        sans: [
          '"Noto Sans Kannada"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
