import { storiesOf } from '@storybook/vue'
import TheHeader from '../components/TheHeader.vue'
import menu from '../data/menu.json'

storiesOf('TheHeader', module).add('default', () => ({
  components: { TheHeader },
  template: '<TheHeader :menu="menu"/>',
  data() {
    return {
      menu: menu
    }
  }
}))
