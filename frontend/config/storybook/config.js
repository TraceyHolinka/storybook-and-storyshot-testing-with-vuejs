/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import StoryRouter from 'storybook-vue-router'
import AppStorybook from '../../src/stories/AppStorybook.vue'

Vue.component('AppStorybook', AppStorybook)

addDecorator(StoryRouter())
// https://storybook.js.org/basics/writing-stories/#using-decorators
addDecorator(() => {
  return {
    template: '<AppStorybook><story/></AppStorybook>'
  }
})

/* 
To dynamically load stories with storyshot requires babel-plugin-require-context-hook but this conflicts
with storybook so stories are loaded individually unit this is fix.
// https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
require('babel-plugin-require-context-hook/register')()

// https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
const req = require.context('../../src/stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}
*/

function loadStories() {
  require('../../src/stories/Article.stories')
  require('../../src/stories/ArticleCard.stories')
  require('../../src/stories/TheHeader.stories')
}

configure(loadStories, module)
