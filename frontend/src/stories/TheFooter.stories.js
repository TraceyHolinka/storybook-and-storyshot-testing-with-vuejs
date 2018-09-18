import { storiesOf } from '@storybook/vue'
import TheFooter from '../components/TheFooter.vue'

storiesOf('TheFooter', module).add('default', () => ({
  components: { TheFooter },
  template: '<TheFooter/>'
}))
