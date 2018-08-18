import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import StoryRouter from 'storybook-vue-router'
import AppStorybook from '../src/stories/AppStorybook.vue'

Vue.component('AppStorybook', AppStorybook)

addDecorator(StoryRouter())
// https://storybook.js.org/basics/writing-stories/#using-decorators
addDecorator(() => {
  return {
    template: '<AppStorybook><story/></AppStorybook>'
  }
})

// https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
const req = require.context('../src/stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
