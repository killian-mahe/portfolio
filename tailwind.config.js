module.exports = {
      content: [
          "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}"
      ],
      theme: {

          fontFamily: {
              serif: ['Noto Serif', 'Trirong', 'serif'],
              mono: ['Overpass Mono', 'monospace'],
              sans: ['Mitr', 'sans-serif']
          },
          extend: {
              colors: {
                  'primary': '#3B65C4',
                  'primary-dark': '#2C4B93',
                  'secondary': '#C49A3B',
                  'secondary-dark': '#93742C',
                  'black-blue': '#0D1B2A',
                  'black': '#070E15',
                  'white': '#F7F7F6'
              },
          },
      },
      plugins: [],
}
