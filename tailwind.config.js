/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#151a3d',
        muted: '#5d6680',
        brand: {
          DEFAULT: '#f23d6d',
          light: '#ff6b81',
          dark: '#d92f5f',
          soft: '#fff0f4',
        },
        coral: '#ff6f61',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(95deg, #ff6a63 0%, #f23d6d 100%)',
        'cta-gradient': 'linear-gradient(100deg, #ff7a63 0%, #f2457a 45%, #9a5bd3 100%)',
        'text-gradient': 'linear-gradient(90deg, #f23d6d 0%, #ff5f7e 100%)',
      },
      boxShadow: {
        card: '0 12px 32px -14px rgba(60, 30, 90, 0.18)',
        soft: '0 14px 30px -12px rgba(242, 61, 109, 0.45)',
        float: '0 20px 45px -18px rgba(40, 25, 80, 0.28)',
      },
    },
  },
  plugins: [],
};
