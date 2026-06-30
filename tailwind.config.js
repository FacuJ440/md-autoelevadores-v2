/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vellum: '#f0efe9',
        'paper-white': '#ffffff',
        'carbon-warm': '#322d2a',
        'onyx-depth': '#0f0e12',
        mercury: '#8b8b8b',
      },
      fontFamily: {
        't1-sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'label': ['12px', { lineHeight: '1.3', letterSpacing: '0.12px' }],
        'body-sm': ['14px', { lineHeight: '1.3', letterSpacing: '0.14px' }],
        'body': ['16px', { lineHeight: '1.4', letterSpacing: '0.16px' }],
        'subheading': ['22px', { lineHeight: '1.3', letterSpacing: '0.22px' }],
        'heading': ['32px', { lineHeight: '1.2', letterSpacing: '0.32px' }],
        'display': ['52px', { lineHeight: '1', letterSpacing: '0.52px' }],
      },
      spacing: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '22px': '22px',
        '24px': '24px',
        '36px': '36px',
        '48px': '48px',
        '60px': '60px',
        '96px': '96px',
        '120px': '120px',
      },
      borderRadius: {
        'nav': '16px',
        'body': '12px',
        'cards': '80px',
        'pills': '100px',
        'small': '8px',
        'buttons': '16px',
      },
      maxWidth: {
        'page': '1200px',
      },
    },
  },
  plugins: [],
}
