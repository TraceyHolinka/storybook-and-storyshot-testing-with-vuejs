import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots'
import expect from 'expect'

const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

initStoryshots({
  suite: 'storyshots',
  test: imageSnapshot({
    beforeScreenshot(page) {
      page.setViewport({ width: 980, height: 1080 })
    }
  })
})

// https://github.com/americanexpress/jest-image-snapshot#optional-configuration
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: { threshold: 0 }
})

expect.extend({ toMatchImageSnapshot })
