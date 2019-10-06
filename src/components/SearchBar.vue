<template>
<div class="search">

  <input v-model="search_data" type="text" name="search_data" placeholder="Search">
  <div v-if="search_data !== ''" class="dropdown-search">
    <a v-for="link in dropdown_contents" :key="link.id" @click="goToNote(link)">{{link}}</a>
  </div>

</div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      search_data: '',
      dropdown_contents: [],
      link_array: []
    }
  },
  methods: {
    goToNote: function(note) {
      let i;
      for (i = 0; i < this.link_array.length; i++) {
        let link = this.link_array[i]
        if (link.name === note) {
          console.log(link);
          this.$router.push('/notes/' + link._spec + '/' + link._section + '/' + note);
          this.search_data = '';
        }
      }
    }
  },
  computed: {},
  watch: {
    search_data: function() {
      let i, txtValue
      this.dropdown_contents = [];

      for (i = 0; i < this.$store.state.notes.length; i++) {
        txtValue = this.$store.state.notes[i].name

        if (txtValue.toUpperCase().indexOf(this.search_data.toUpperCase()) > -1) {
          this.dropdown_contents.push(txtValue)
          this.link_array.push(this.$store.state.notes[i])

          if (this.dropdown_contents.length > 5) {
            break
          }
        }
      }
    }
  }
}
</script>

<style scoped>
form {}

input,
.dropdown-search {
  display: block;
  font-family: inherit;
  position: fixed;
  outline: none;
  font-size: 1.01rem;
  font-weight: 400;
  overflow: visible;
  left: 21rem;
  min-width: 25%;
  padding: .75rem;
}

input {
  z-index: 3;
  top: 1rem;
  border: 2px solid #ccc;
  border-radius: 4rem;
}

a {
  z-index: 2;
  display: block;
  margin: 1rem 0;
}

a:hover {
  font-weight: 600;
}

.dropdown-search {
  top: 3rem;
  background: #fff;
  border-radius: .2rem;
  padding: .75rem .75rem 0 .75rem;
  z-index: 2;
}

input:active {
  border: 2px solid #aaa;
}



select {
  height: 3rem;
}

textarea {
  line-height: 1.6;
}

@media screen and (max-width: 800px) {

  input,
  .dropdown-search {
    min-width: 35%;
    left: 5rem;
  }



  form {
    margin-top: .2rem;
  }
}
</style>
