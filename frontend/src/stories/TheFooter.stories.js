import { storiesOf } from '@storybook/vue'
import TheFooter from '../components/TheFooter.vue'

storiesOf('The Footer', module).add('default', () => ({
  components: { TheFooter },
  template: '<TheFooter/>'
}))
