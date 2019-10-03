<template>
<div>
  <h5>Recent Posts</h5>
  <a class="posts" v-for="post in posts_array.slice().reverse()" v-on:click.prevent="setActiveBlogPost(post)" :key="post.id">
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
      posts_array: [{
        title: 'test'
      }]
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
  margin: 1rem 2rem;
}

.posts {
  padding: 1rem;
  display: block;
  border-radius: .5rem;
}

a {
  text-decoration: none;
  margin: 0 2rem;
}

.posts:hover {
  background-color: #eee;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  h5 {
    margin: 1rem 1rem;
  }

  a {
    margin: 0 1rem;
  }
}
</style>
