module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('postcss-pxtorem')(),
    require('postcss-browser-reporter'),
    require('autoprefixer')({
      grid: false,
      remove: false
    })
  ]
}
