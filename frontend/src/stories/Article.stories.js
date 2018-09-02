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
      '<h2>quibusdam sed temporibus temporibus sit est occaecati</h2><p>Dolores non molestiae iste qui alias incidunt quia. Necessitatibus modi qui possimus. Vel distinctio expedita impedit voluptate autem autem rerum libero. Et repudiandae hic. Et perferendis sequi incidunt. Saepe ea dolores ex voluptatem consequatur.</p><p>Corrupti alias nihil voluptatum magni. Aliquid dolor consequatur et tempora nam sed atque. Qui tenetur voluptatem ratione. Consectetur ducimus sed sint molestias odio aut vel laboriosam dolorem. Consequatur adipisci ea omnis ipsa molestiae quo ratione. Animi fugiat iure ea et quasi quo molestiae fugiat.</p><p>Consequuntur porro repellat est culpa. Dolor aut omnis amet ratione quod placeat deserunt. Ipsum quaerat esse. Delectus accusantium saepe molestiae laboriosam nesciunt. Doloremque rem debitis voluptas ad hic.</p><p>Accusamus consectetur eligendi consequatur enim sit enim. In commodi pariatur iste corporis. Praesentium est enim veritatis occaecati. Quia quisquam ea ut aspernatur tempora qui iste rem. Repellat voluptatem earum inventore.</p><p>Optio nihil ut adipisci dolor. Animi quia sunt non ab. Pariatur autem aut. Doloribus voluptatem veniam neque eos. Architecto mollitia id commodi consequuntur id iste.</p><p>Velit quod non. Et et aut sed. In dolor molestiae nemo reprehenderit fugit velit. Et quasi tempora. Autem ea sit quaerat dolor et ad sunt aut. Eum illo quod exercitationem repellat deserunt ipsa qui.</p><p>Cumque eaque eaque id quaerat deserunt fugit placeat tenetur. Unde quasi nam tempora consequuntur deleniti molestiae cumque vel rem. Illum amet voluptas.</p><p>Dolorum molestiae aut eum rerum unde similique aut. Recusandae molestias magni culpa laudantium deserunt dolor reiciendis. Reprehenderit blanditiis vitae optio quidem. Quia animi at harum.</p><h3>rerum qui consequatur omnis</h3><p>Pariatur excepturi impedit aliquam enim. Quo consequuntur maiores illum dolores at facilis. Corporis ut quibusdam ea aperiam tempore hic assumenda eos. Eos ratione expedita optio eos. A eveniet dolorem vel voluptatem ut. A natus incidunt necessitatibus totam harum.</p><p>Consequatur aut et quaerat officia corporis voluptatibus animi. Magnam eligendi corporis. Quisquam odio provident aliquid ullam doloribus et eum. Beatae quo quos sit impedit quos. Modi magnam expedita saepe quasi veritatis ut quasi quibusdam amet. Laborum veritatis quibusdam ad a molestiae qui consectetur consequatur.</p><p>Delectus beatae quas quisquam vel enim sit. Sequi cupiditate quibusdam et. Quia expedita quia unde eligendi. Nobis necessitatibus laborum cupiditate. Quia facilis officiis necessitatibus debitis laudantium vitae. Est quia fugit atque qui consectetur exercitationem aut atque.</p><p>Quae est accusantium. Eius eum voluptas a voluptates modi dicta repudiandae corporis iusto. Quis velit in nihil et quisquam. A rerum perferendis eum voluptatem iure ab. Nobis quibusdam repellat amet blanditiis qui qui. Velit in cum et fugit nobis id.</p><p>Laudantium iusto odit possimus mollitia quos aliquam voluptatem omnis. Quia nulla dolorem id iusto sed rem est consequatur. Quisquam eos qui quaerat deserunt et. Iure quos aperiam qui sit velit asperiores et. Repudiandae earum aut saepe voluptas commodi sit quo.</p><p>Et est qui quia ratione natus omnis nesciunt qui. Perferendis ducimus distinctio rem aut distinctio excepturi et. Vel qui sint fugit nobis est maxime. Et et hic.</p><p>Veritatis accusantium dolorem. Enim quo est voluptas ad dolores consequatur ut non. Quia voluptas nihil in. Est in error quia impedit quas iusto sed velit.</p><p>Sed suscipit consequatur velit sint quasi molestiae id. Et ipsam totam alias ut laboriosam dicta qui. Sit rerum maiores sed voluptatum eum labore. Labore enim velit consequatur. Saepe sint vel quam qui.</p><p>Blanditiis voluptatem tenetur deleniti odit aut dolor quibusdam qui. Voluptates fuga vitae ducimus dolor ut voluptatum. Voluptate asperiores pariatur enim quia similique minus maiores in. Illo repellendus enim quo ut fugit expedita. Qui sit non accusamus consequatur. Qui placeat qui assumenda voluptate.</p>',
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
