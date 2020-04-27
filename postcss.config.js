module.exports = {
  plugins: [
    require('tailwindcss')('./src/tailwind.config.js'), // eslint-disable-line global-require
    require('autoprefixer'), // eslint-disable-line global-require
  ],
}
