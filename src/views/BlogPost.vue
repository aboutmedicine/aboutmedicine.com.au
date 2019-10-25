<template>
<div class="blog">
  <h4>{{blogpost.title}}</h4>
  <div class="content" v-html="blogpost.content">
  </div>
</div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'blog',
  data() {
    return {}
  },
  created() {
    let vm = this
    if (!vm.$store.state.activeBlogPost.slug) {
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
  computed: {
    blogpost: function() {
      return this.$store.state.activeBlogPost
    }
  },
  methods: {},
}
</script>

<style scoped>
.content, p {
  margin: 2rem;
  line-height: 1.6;
}

h4 {
  margin: 2rem;
}

@media screen and (max-width: 500px) {

  .content, p {
    margin: 1rem .5rem;
  }

  h4 {
    margin: 1rem .5rem;
  }
}
</style>
