<script>
export default {
  props: {
    article: { type: Object, required: true }
  }
}
</script>

<template>
  <article class="article">
    <header class="meta">
      <h1 class="headline">{{ article.title }}</h1>
      <p class="author">By <router-link :to="{ name: 'author', params: { authorId: article.author.id } }">{{ article.author.name }}</router-link></p>
      <p class="date">{{ article.postedDate | apDate }}</p>
    </header>
    <img
      :src="article.imageUrl"
      class="image-lead">
    <section
      class="body"
      v-html="article.body"/>
  </article>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);

.article {
  margin-bottom: 48px;

  & .meta {
    margin-bottom: 24px;
  }
  & .headline {
    margin-bottom: 20px;
    @apply --font-twentyfour;
    font-weight: bold;
  }

  & .author {
    margin-bottom: 6px;
    color: var(--color-link);
  }

  & .image-lead {
    margin-bottom: 24px;
    border-radius: 25px;
  }

  & .body {
    & h2 {
      margin: 24px 0 16px;
      @apply --font-twenty;
      font-weight: bold;
    }

    & h3 {
      margin: 16px 0;
      @apply --font-sixteen;
      font-weight: bold;
    }

    & p {
      margin-bottom: 16px;
      @apply --font-sixteen;
    }
  }
}
</style>
