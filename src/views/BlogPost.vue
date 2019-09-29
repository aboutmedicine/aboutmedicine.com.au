<template>
<div class="blog">
  <h4>{{blogpost.title}}</h4>
  <div v-html="blogpost.content">
  </div>
</div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      blogpost: this.$store.state.activeBlogPost
    }
  },
  methods: {},
}
</script>

<style scoped>
p {
  margin: 2rem;
  line-height: 1.6;
}

h4 {
  margin: 2rem;
}
</style>
