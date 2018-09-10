import { storiesOf } from '@storybook/vue'
import Author from '../components/Author.vue'

const defaultData = {
  author: {
    id: 0,
    name: 'Faker Author',
    avatarUrl: 'http://localhost:3000/assets/avatar.png',
    bio:
      'Et omnis consequatur quisquam eos. Rem voluptatem blanditiis non dolorum nihil vel laborum veniam. Consequuntur nam eligendi optio rerum aliquam ratione et qui. Nihil temporibus ut magni eveniet vel qui. Blanditiis nostrum provident voluptatem inventore sint architecto mollitia. Sit consequatur quaerat aspernatur consequatur vero fugit. Voluptas qui odio nobis cum dignissimos magnam molestiae. Nihil doloribus est temporibus mollitia quasi ipsa laudantium iusto.',
    articles: [
      {
        id: 0,
        imageUrl: 'http://localhost:3000/assets/animals1.jpg',
        postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
        title: 'Headline for Faker Article'
      },
      {
        id: 0,
        imageUrl: 'http://localhost:3000/assets/animals1.jpg',
        postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
        title: 'Headline for Faker Article'
      }
    ]
  }
}

storiesOf('Author', module).add('default', () => ({
  components: { Author },
  template: '<author :author="author"/>',
  data() {
    return {
      ...defaultData
    }
  }
}))
