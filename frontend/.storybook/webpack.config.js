const path = require('path')

// https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode
module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.svg/,
      loader: 'vue-svg-loader'
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }
  )
  return storybookBaseConfig
}
