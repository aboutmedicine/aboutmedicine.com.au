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
            vm.$store.commit('SET_ACTIVE_POST', {
              title: res.data.title,
              content: res.data.content,
              slug: res.data.slug
            })
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
    methods: {}
  }

</script>

<style scoped>

  div >>> p {
    margin: 2rem .5rem;
    line-height: 1.6;
  }

  div >>> a {
    font-weight: 600;
    color: #7b98fc;
    text-decoration: none;
  }

  div >>> a:hover {
    cursor: pointer;
    color: #5183f5;
  }

  div >>> .flex-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    margin: 2rem 1.5rem;
  }

  h4 {
    margin: 2rem;
  }

  @media screen and (max-width: 500px) {
    .content {
      margin: 1rem 0;
    }

    h4 {
      margin: 1rem 0.5rem;
    }
  }

</style>
