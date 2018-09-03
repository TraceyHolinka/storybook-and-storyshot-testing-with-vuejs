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
  <div class="author">
    <AuthorBio
      v-if="author"
      :id="author.id"
      :name="author.name"
      :avatar-url="author.avatarUrl"
      :bio="author.bio"/>
    <ArticleList
      v-if="author && author.articles"
      :articles="author.articles"
      :show-author="false"
      :title="`Articles by ${author.name}`"/>
  </div>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);

.author {
  & .author-bio {
    margin-bottom: 36px;
  }
}
</style>
