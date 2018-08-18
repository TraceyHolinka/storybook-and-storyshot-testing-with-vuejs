/* 
https://jestjs.io/docs/en/configuration#options
https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-for-vue
*/

const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@storybook/.*\\.vue$))'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testURL: 'http://localhost:8080'
}
