<script>
export default {
    props: {
        article: { type: Object, required: true }
    }
}
</script>

<template>
    <article>
        <h2>{{ article.title }}</h2>
        <img :src="article.imageUrl">
        <p>{{ article.summary }}</p>
        <p>Author: {{ article.author.name }}</p>
    </article>
</template>

<style>
</style>
