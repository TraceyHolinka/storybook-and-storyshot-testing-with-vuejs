module.exports = context => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: false,
          remove: false
        }
      }
    }),
    require('postcss-custom-properties')(),
    require('postcss-pxtorem')(),
    require('postcss-browser-reporter'),
    require('postcss-reporter')()
  ]
})
