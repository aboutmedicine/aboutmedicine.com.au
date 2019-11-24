<template>

  <div class="home">
    <Me />
    <BlogPosts />
  </div>

</template>

<script>

  // @ is an alias to /src
  import Me from '@/components/Me.vue'
  import BlogPosts from '@/components/BlogPosts.vue'

  export default {
    name: 'home',
    components: {
      Me,
      BlogPosts
    }
  }

</script>
