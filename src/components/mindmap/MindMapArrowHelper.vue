<template>

  <div class="arrow-helper" :style="style">
    >
  </div>

</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'mindmap-arrow-helper',
    data: () => ({
      style: {
        top: '',
        left: '',
        display: 'none'
      },
      start: {
        x: '',
        y: '',
      },
      isActive: false
    }),
    computed: {
      ...mapState(['mindmapArrow'])
    },
    mounted() {
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mousedown', this.place)
    },
    methods: {
      move(e) {
        if (!this.isActive) return

        this.style.top = `${e.y}px`
        this.style.left = `${e.x}px`
        this.style.display = 'block'

        this.start.x = e.x
        this.start.y = e.y
      },

      place(e) {
        if (!this.isActive) return

        this.style.display = 'none'
        this.$store.dispatch('ADD_ARROW', {
          id: new Date().getTime(),
          start: this.start,
          end: this.end
        })
      }
    },
    watch: {
      'mindmapArrow'(to) {
        this.isActive = to
      }
    }
  }

</script>

<style>

  .arrow-helper {
    position: absolute;
    z-index: 1;
    width: 150px;
    padding: 1rem;
    border-radius: 6px;
  }

</style>
