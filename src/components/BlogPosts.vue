<template>

  <div>
    <h4>Recent Posts</h4>

    <div v-if="!showAll">
      <a class="posts"
         v-for="post in posts_array.slice(0, 10)"
         @click.prevent="setActiveBlogPost(post)"
         :key="post.id">
         {{post.title}}
        </a>
    </div>

    <div v-else>
      <a class="posts"
         v-for="post in posts_array.slice()"
         @click.prevent="setActiveBlogPost(post)"
         :key="post.id">
         {{post.title}}
        </a>
    </div>

    <button class="show-all" @click.prevent="showAll = true">Show All Posts</button>

  </div>

</template>

<script>

  import * as axios from 'axios'

  export default {
    name: 'BlogPosts',
    data() {
      return {
        posts_array: [],
        showAll: false
      }
    },
    methods: {
      setActiveBlogPost: function(post) {
        this.$store.commit('SET_ACTIVE_POST', {
          title: post.title,
          content: post.content,
          slug: post.slug
        })
        this.$router.push('/blog/' + post.slug)
      }
    },
    created() {
      console.log(this.$route)
      let vm = this
      axios
        .get('/blogposts')
        .then(function(res) {
          let i
          for (i = 0; i < res.data.length; i++) {
            vm.posts_array.unshift(res.data[i])
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

  h4 {
    margin: 1rem 2rem;
  }

  .posts {
    padding: 1rem;
    display: block;
    border-radius: 0.5rem;
  }

  .posts:hover {
    background-color: #eee;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    margin: 0 2rem;
  }

  .show-all {
    margin: 1rem 2rem 0;
  }

  @media screen and (max-width: 800px) {
    h4 {
      margin: 1rem 1rem;
    }

    a {
      margin: 0 1rem;
    }
  }

</style>
