<template>

  <div v-if="type" class="box-helper" :style="style">
    {{ type.name }}
  </div>

</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'mindmap-box-helper',
    data: () => ({
      style: {
        top: '',
        left: '',
        display: 'none',
        background: ''
      },
      isBoxHelperActive: false
    }),
    props: {
      type: Object
    },
    computed: {
      ...mapState(['mindmapping'])
    },
    mounted() {
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mousedown', this.place)
    },
    methods: {
      move(e) {
        if (!this.isBoxHelperActive) return

        this.style.top = `${e.y}px`
        this.style.left = `${e.x}px`
        this.style.display = 'block'
        this.style.background = this.type.style.background
      },

      place(e) {
        if (!this.isBoxHelperActive) return

        this.style.display = 'none'
        this.$store.dispatch('ADD_BOX', {
          id: new Date().getTime(),
          text: {},
          type: this.type.name,
          style: {
            top: this.style.top,
            left: this.style.left,
            background: this.type.style.background
          },
        })
      }
    },
    watch: {
      mindmapping(to) {
        this.isBoxHelperActive = to
      }
    }
  }

</script>

<style>

  .box-helper {
    position: absolute;
    z-index: 1;
    width: 150px;
    padding: 1rem;
    border-radius: 6px;
  }

</style>
