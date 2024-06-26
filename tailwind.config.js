module.exports = {
  content: ['./src/**/*.jsx', './src/**/*.svg'],
  theme: {
    extend: {
      colors: {
        'main-blue': '#31315c',
        'header-blue': '#43446f',
        'dark-blue': '#202041',
        'button-blue': '#29294f',
        'text-blue': '#29eee7',
        'main-gray': '#9595ae',
        'text-gray': '#a8a9bc',
        'gold': '#f9aa03',
        'silver': '#b8bbf2',
        'bronze': '#795304',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      screens: {
        'min': { 'raw': '(max-width: 1280px)' },
        'profile-modal': { 'raw': '(min-width: 800px)' },
      },
    },
  },
  plugins: [],
}
