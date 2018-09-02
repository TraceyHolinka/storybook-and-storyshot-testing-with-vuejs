module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('autoprefixer')({
      grid: false,
      remove: false
    })
  ]
}
