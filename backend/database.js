const faker = require('faker')

function bodyText (headingWordCount, paragraphCount) {
  return '<h2>'+ faker.lorem.words(headingWordCount) +'</h2><p>' + faker.lorem.paragraphs(paragraphCount, "</p><p>") + '</p><h3>' + faker.lorem.words(headingWordCount) +'</h3><p>' + faker.lorem.paragraphs(paragraphCount, "</p><p>") + '</p>'

 }

const authors = [{
  id: 0,
  name: 'Test Author 1',
},
{
  id: 1,
  name: 'Test Author 2',
}]

const articles = [{
  id: 0,
  title: 'Test Article 1',
  summary: faker.lorem.sentence(15),
  body: bodyText (3, 8),
  imageUrl: 'http://localhost:3000/assets/cats1.jpeg',
  authorId: 0
},
{
  id: 1,
  title: 'Test Article 2',
  summary: faker.lorem.sentence(12),
  body: bodyText (2, 10),
  imageUrl: 'http://localhost:3000/assets/cats2.jpeg',
  authorId: 0
},
{
  id: 3,
  title: 'Test Article 3',
  summary: faker.lorem.sentence(20),
  body: bodyText (5, 20),
  imageUrl: 'http://localhost:3000/assets/cats3.jpeg',
  authorId: 1
}]

module.exports = {
  getArticle (id) {
    return articles.find(x => x.id === id)
  },
  getAuthor (id) {
    return authors.find(x => x.id === id)
  },
  getArticles () {
  return articles
  },
  getAuthors () {
    return authors
  },
  getArticlesByAuthor (id) {
    return articles.filter(x => x.authorId === id)
  },
  setAuthorName (id, name) {
    const author = authors.find(x => x.id === id)
    author.name = name
    return author
  }
}