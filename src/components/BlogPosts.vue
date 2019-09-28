<template>

  <div>
    <h5>Recent Posts</h5>
    <a class="posts" v-for="post in posts_array" :key="post.id" :href="'/blog/' + post.slug">
              {{post.title}}
              {{post.content}}
            </a>
  </div>

</template>

<script>

  import * as axios from 'axios'

  export default {
    name: 'BlogPosts',
    data() {
      return {
        posts_array: [{title: 'test', content: 'testing', slug:'tester'}]
      }
    },
    methods: {},
    created() {
      let vm = this
      axios
        .get('/blogposts')
        .then(function(response) {
          let i
          for (i = 0; i < response.data.length; i++) {
            vm.posts_array.push(response.data[i])
          }
          console.log(vm.posts_array)
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
    margin: 0px 0px 16px;
  }

  .posts {
    padding: 16px;
    display: block;
    border-radius: 8px;
  }

  a {
    text-decoration: none;
  }

  .posts:hover {
    background-color: #eee;
  }

</style>
