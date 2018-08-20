const faker = require('faker')

const avatarUrl = 'http://localhost:3000/assets/avatar.png'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function bodyText(headingWordCount, paragraphCount) {
  return (
    '<h2>' +
    faker.lorem.words(getRandomInt(headingWordCount, headingWordCount + 5)) +
    '</h2><p>' +
    faker.lorem.paragraphs(getRandomInt(paragraphCount, paragraphCount + 2), '</p><p>') +
    '</p><h3>' +
    faker.lorem.words(getRandomInt(headingWordCount, headingWordCount + 5)) +
    '</h3><p>' +
    faker.lorem.paragraphs(getRandomInt(paragraphCount, paragraphCount + 2), '</p><p>') +
    '</p>'
  )
}

function postedDate(days) {
  return faker.date.recent(days)
}

const authors = [
  {
    id: 0,
    name: 'Faker News Author 1',
    bio: faker.lorem.paragraph(getRandomInt(3, 4)),
    avatarUrl: avatarUrl
  },
  {
    id: 1,
    name: 'Faker News Author 2',
    bio: faker.lorem.paragraph(getRandomInt(3, 4)),
    avatarUrl: avatarUrl
  },
  {
    id: 2,
    name: 'Faker News Author 3',
    bio: faker.lorem.paragraph(getRandomInt(3, 4)),
    avatarUrl: avatarUrl
  }
]

const articles = [
  {
    id: 0,
    title: 'Headline for Faker News Article 1',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(3, 8),
    imageUrl: 'http://localhost:3000/assets/animals1.jpg',
    authorId: 0,
    postedDate: postedDate(0)
  },
  {
    id: 1,
    title: 'Headline for Faker News Article 2',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(2, 10),
    imageUrl: 'http://localhost:3000/assets/cats1.jpg',
    authorId: 0,
    postedDate: postedDate(1)
  },
  {
    id: 2,
    title: 'Headline for Faker News Article 3',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(2, 10),
    imageUrl: 'http://localhost:3000/assets/nature1.jpg',
    authorId: 0,
    postedDate: postedDate(1)
  },
  {
    id: 3,
    title: 'Headline for Faker News Article 4',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(5, 20),
    imageUrl: 'http://localhost:3000/assets/animals2.jpg',
    authorId: 1,
    postedDate: postedDate(1)
  },
  {
    id: 4,
    title: 'Headline for Faker News Article 5',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(5, 20),
    imageUrl: 'http://localhost:3000/assets/cats2.jpg',
    authorId: 2,
    postedDate: postedDate(2)
  },
  {
    id: 5,
    title: 'Headline for Faker News Article 6',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(5, 20),
    imageUrl: 'http://localhost:3000/assets/nature2.jpg',
    authorId: 0,
    postedDate: postedDate(2)
  },
  {
    id: 6,
    title: 'Headline for Faker News Article 7',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(5, 20),
    imageUrl: 'http://localhost:3000/assets/animals3.jpg',
    authorId: 1,
    postedDate: postedDate(2)
  },
  {
    id: 7,
    title: 'Headline for Faker News Article 8',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(5, 20),
    imageUrl: 'http://localhost:3000/assets/cats3.jpg',
    authorId: 1,
    postedDate: postedDate(2)
  },
  {
    id: 8,
    title: 'Headline for Faker News Article 9',
    summary: faker.lorem.paragraph(getRandomInt(3, 5)),
    body: bodyText(5, 20),
    imageUrl: 'http://localhost:3000/assets/nature3.jpg',
    authorId: 2,
    postedDate: postedDate(2)
  }
]

module.exports = {
  getArticle(id) {
    return articles.find(x => x.id === id)
  },
  getAuthor(id) {
    return authors.find(x => x.id === id)
  },
  getArticles() {
    return articles
  },
  getAuthors() {
    return authors
  },
  getArticlesByAuthor(id) {
    return articles.filter(x => x.authorId === id)
  },
  setAuthorName(id, name) {
    const author = authors.find(x => x.id === id)
    author.name = name
    return author
  }
}
