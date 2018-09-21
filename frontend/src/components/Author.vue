<script>
import AuthorBio from './AuthorBio.vue'
import ArticleList from './ArticleList.vue'

export default {
  components: {
    AuthorBio,
    ArticleList
  },
  props: {
    author: { type: Object, required: true }
  }
}
</script>

<template>
  <section class="author">
    <AuthorBio
      v-if="!!author"
      :id="author.id"
      :name="author.name"
      :avatar-url="author.avatarUrl"
      :bio="author.bio"/>
    <ArticleList
      v-if="!!author.articles"
      :articles="author.articles"
      :show-author="false"
      :title="`Articles by ${author.name}`"/>
  </section>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);

.author-page {
  margin: 0 16px;

  & .author-bio {
    margin-bottom: 36px;
  }
}
</style>
