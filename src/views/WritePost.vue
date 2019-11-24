<template>

  <div class="about">
    <form>
      <input id="title" v-model="title" type="text" name="title" placeholder="Title">
      <textarea rows="10" id="content" v-model="content" name="content" placeholder="Content"></textarea>
      <input id="slug" v-model="slug" type="text" name="slug" placeholder="Slug">
      <button type="submit" name="button" v-on:click.prevent="submitBlogPost">Submit</button>
    </form>
  </div>

</template>

<script>

  import * as axios from 'axios'

  export default {
    name: 'WritePost',
    data() {
      return {
        title: '',
        content: '',
        slug: ''
      }
    },
    methods: {
      submitBlogPost: function() {
        this.$store.commit('SET_ACTIVE_POST', {
          title: this.title,
          content: this.content,
          slug: this.slug
        })
        this.$router.push('/blog/' + this.slug)

        axios
          .post('/blogposts', {
            title: this.title,
            content: this.content,
            slug: this.slug
          })
          .then(function(res) {
            console.log(res)
          })
          .catch(function(err) {
            console.log(err)
          })
      }
    }
  }

</script>

<style scoped>

  form {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
  }

  input,
  textarea {
    display: block;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 0.75rem;
    outline: none;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 400;
    overflow: visible;
  }

  textarea {
    line-height: 1.6;
  }

</style>
