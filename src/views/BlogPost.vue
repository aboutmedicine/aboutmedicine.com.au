<template>

  <div class="blog">
    <h4>{{blogpost.title}}</h4>
    <div>
      {{blogpost.content}}
    </div>
  </div>

</template>

<script>

  import * as axios from 'axios'

  export default {
    name: 'blog',
    data() {
      return {
        blogpost: {},
      }
    },
    methods: {},
    created() {
      console.log(this.$route.params)
      let vm = this
      axios
        .get('/blogposts/' + vm.$route.params.id)
        .then(function(response) {
          vm.blogpost = response.data
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }

</script>

<style scoped>
p{
  margin: 16px 0px;
}

h4{
  margin: 16px 0px;
}

</style>
