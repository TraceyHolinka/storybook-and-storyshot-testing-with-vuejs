module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],

  /* According to storyshot docs you need jest-vue-preprocessor rather than vue-jest:
  https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-for-vue
  However, vue-jest works. If you use jest-vue-preprocessor, you'll need to install babel-template v6.26.0.
  */
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@storybook/.*\\.vue$))'],
  testPathIgnorePatterns: ['<rootDir>/test/e2e/.*'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.js', '**/src/stories/**/*.test.js'],
  testURL: 'http://localhost:8080',
  verbose: true
}
