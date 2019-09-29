<template>
<div>
  <h5>Recent Posts</h5>
  <a class="posts" v-for="post in posts_array" v-on:click.prevent="setActiveBlogPost(post)" :key="post.id">
    {{post.title}}
  </a>
</div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'BlogPosts',
  data() {
    return {
      posts_array: []
    }
  },
  methods: {
    setActiveBlogPost: function(post) {
      this.$store.commit("SET_ACTIVE_POST", {
        title: post.title,
        content: post.content,
        slug: post.slug
      });
      this.$router.push('/blog/' + post.slug)
    }
  },
  created() {
    let vm = this
    axios
      .get('/blogposts')
      .then(function(res) {
        let i
        for (i = 0; i < res.data.length; i++) {
          vm.posts_array.push(res.data[i])
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
p {
  margin: 0px 0px 52px;
  text-align: center;
}

h5 {
  margin: 2rem;
}

.posts {
  padding: 16px;
  display: block;
  border-radius: 8px;
}

a {
  text-decoration: none;
  margin: 0 2rem;
}

.posts:hover {
  background-color: #eee;
}
</style>
