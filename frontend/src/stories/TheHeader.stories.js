import { storiesOf } from '@storybook/vue'
import TheHeader from '../components/TheHeader.vue'

storiesOf('TheHeader', module).add('default', () => ({
  components: { TheHeader },
  template: '<TheHeader/>'
}))
