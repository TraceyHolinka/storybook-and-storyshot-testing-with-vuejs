import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import expect from 'expect'

const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

initStoryshots({
  configPath: 'config/storybook',
  suite: 'storyshots',
  test: imageSnapshot({
    beforeScreenshot(page) {
      page.setViewport({ width: 750, height: 100 })
    },
    storybookUrl: 'http://localhost:6006'
  })
})

// https://github.com/americanexpress/jest-image-snapshot#optional-configuration
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: { threshold: 0 }
})

expect.extend({ toMatchImageSnapshot })
