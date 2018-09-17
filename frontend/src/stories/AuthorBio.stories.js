import { storiesOf } from '@storybook/vue'
import AuthorBio from '../components/AuthorBio.vue'

const defaultData = {
  author: {
    id: 0,
    name: 'Faker Author',
    avatarUrl: 'http://localhost:3000/assets/avatar.png',
    bio:
      'Et omnis consequatur quisquam eos. Rem voluptatem blanditiis non dolorum nihil vel laborum veniam. Consequuntur nam eligendi optio rerum aliquam ratione et qui. Nihil temporibus ut magni eveniet vel qui. Blanditiis nostrum provident voluptatem inventore sint architecto mollitia. Sit consequatur quaerat aspernatur consequatur vero fugit. Voluptas qui odio nobis cum dignissimos magnam molestiae. Nihil doloribus est temporibus mollitia quasi ipsa laudantium iusto.'
  }
}

storiesOf('AuthorBio', module).add('default', () => ({
  components: { AuthorBio },
  template: '<AuthorBio :id="author.id" :name="author.name" :avatar-url="author.avatarUrl" :bio="author.bio"/>',
  data() {
    return {
      ...defaultData
    }
  }
}))
