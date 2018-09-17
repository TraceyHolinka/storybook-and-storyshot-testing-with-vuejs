import { storiesOf } from '@storybook/vue'
import Article from '../components/Article.vue'

const defaultData = {
  article: {
    author: {
      id: 0,
      name: 'Faker Author'
    },
    id: 0,
    imageUrl: 'http://localhost:3000/assets/animals1.jpg',
    postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
    body:
      '<h2>Quibusdam sed temporibus temporibus sit est occaecati</h2><p>Consequuntur porro repellat est culpa. Dolor aut omnis amet ratione quod placeat deserunt. Ipsum quaerat esse. Delectus accusantium saepe molestiae laboriosam nesciunt. Doloremque rem debitis voluptas ad hic.</p><p>Accusamus consectetur eligendi consequatur enim sit enim. In commodi pariatur iste corporis. Praesentium est enim veritatis occaecati. Quia quisquam ea ut aspernatur tempora qui iste rem. Repellat voluptatem earum inventore.</p><p>Optio nihil ut adipisci dolor. Animi quia sunt non ab. Pariatur autem aut. Doloribus voluptatem veniam neque eos. Architecto mollitia id commodi consequuntur id iste.</p><p>Velit quod non. Et et aut sed. In dolor molestiae nemo reprehenderit fugit velit. Et quasi tempora. Autem ea sit quaerat dolor et ad sunt aut. Eum illo quod exercitationem repellat deserunt ipsa qui.</p><p>Cumque eaque eaque id quaerat deserunt fugit placeat tenetur. Unde quasi nam tempora consequuntur deleniti molestiae cumque vel rem. Illum amet voluptas.</p><h3>rerum qui consequatur omnis</h3><p>Pariatur excepturi impedit aliquam enim. Quo consequuntur maiores illum dolores at facilis. Corporis ut quibusdam ea aperiam tempore hic assumenda eos. Eos ratione expedita optio eos. A eveniet dolorem vel voluptatem ut. A natus incidunt necessitatibus totam harum.</p><p>Consequatur aut et quaerat officia corporis voluptatibus animi. Magnam eligendi corporis. Quisquam odio provident aliquid ullam doloribus et eum. Beatae quo quos sit impedit quos. Modi magnam expedita saepe quasi veritatis ut quasi quibusdam amet. Laborum veritatis quibusdam ad a molestiae qui consectetur consequatur.</p><p>Delectus beatae quas quisquam vel enim sit. Sequi cupiditate quibusdam et. Quia expedita quia unde eligendi. Nobis necessitatibus laborum cupiditate. Quia facilis officiis necessitatibus debitis laudantium vitae. Est quia fugit atque qui consectetur exercitationem aut atque.</p><p>Quae est accusantium. Eius eum voluptas a voluptates modi dicta repudiandae corporis iusto. Quis velit in nihil et quisquam. A rerum perferendis eum voluptatem iure ab. Nobis quibusdam repellat amet blanditiis qui qui. Velit in cum et fugit nobis id.</p>',
    title: 'Headline for Faker Article'
  }
}

storiesOf('Article', module).add('default', () => ({
  components: { Article },
  template: '<Article :article="article"/>',
  data() {
    return {
      ...defaultData
    }
  }
}))
