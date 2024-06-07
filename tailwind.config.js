/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}', './src/*.js'],
  theme: {
    extend: {
      width: {
        mobile: 375,
        desktop: 1440
      },
      fontFamily: {
        inter: '"Inter", sans-serif', /* 400, 700 */
        'lexend-deca': '"Lexend Deca", sans-serif' /* 400 */
      },
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        white: 'hsl(0, 0%, 100%)',
        'slightly-transparent-white-for-main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'slightly-transparent-white-for-stat-headings': 'hsla(0, 0%, 100%, 0.6)'
      }
    }
  },
  plugins: []
}
