<template>
<div class="blog">
  <h4>{{blogpost.title}}</h4>
  <div v-html="blogpost.content">
  </div>
</div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'blog',
  data() {
    return {
      blogpost: this.$store.state.activeBlogPost
    }
  },
  created() {
    let vm = this
    if (this.blogpost.slug !== this.$route.params.id) {
      axios
        .get('/blogposts/' + this.$route.params.id)
        .then(function(res) {
          vm.$store.commit("SET_ACTIVE_POST", {
            title: res.data.title,
            content: res.data.content,
            slug: res.data.slug
          });
        })
        .catch(function(error) {
          console.log(error)
        })
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
