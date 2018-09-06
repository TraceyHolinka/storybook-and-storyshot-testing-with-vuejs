/*
If you use require-context-hook the you need to add:
env: {
  test: {
    plugins: ['require-context-hook']
  }
}
*/

module.exports = function(api) {
  api.cache(false)

  return {
    presets: ['@vue/app'],
    plugins: ['@babel/plugin-proposal-optional-chaining']
  }
}
