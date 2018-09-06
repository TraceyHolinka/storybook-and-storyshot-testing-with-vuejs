import { storiesOf } from '@storybook/vue'
import ArticleCard from '../components/ArticleCard.vue'

const defaultData = {
  article: {
    author: {
      id: 0,
      name: 'Faker Author 1'
    },
    id: 0,
    imageUrl: 'http://localhost:3000/assets/animals1.jpg',
    postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
    summary: 'Quam sed est quis distinctio quia perspiciatis eum. Quisquam ab quo mollitia. Et ut et doloremque. Aut similique aut explicabo unde neque nobis voluptatem. Quis doloremque nostrum sint distinctio expedita error.',
    title: 'Headline for Faker Article 1'
  }
}

storiesOf('ArticleCard', module)
  .add('default', () => ({
    components: { ArticleCard },
    template: '<ArticleCard :article="article"/>',
    data() {
      return {
        ...defaultData
      }
    }
  }))
  .add("don't show author", () => ({
    components: { ArticleCard },
    template: '<ArticleCard :article="article" :show-author="false"/>',
    data() {
      return {
        ...defaultData
      }
    }
  }))
