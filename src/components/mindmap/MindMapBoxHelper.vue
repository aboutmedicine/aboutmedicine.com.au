<template>
<div class="box-helper" :style="style">
  <div class="box-icon">
    <i class="fas fa-plus"></i>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'mindmap-box-helper',
  data: () => ({
    style: {
      top: '',
      left: '',
      display: 'none'
    },
    isActive: false
  }),
  props: {
    type: null,
  },
  computed: {
    ...mapState(
      ['mindmapping']
    ),
  },
  mounted() {
    document.addEventListener('mousemove', this.move);
    document.addEventListener('click', this.place);
  },
  methods: {
    move(e) {
      if (!this.isActive) return;

      this.style.top = `${e.y}px`;
      this.style.left = `${e.x}px`;
      this.style.display = 'block';
    },

    place(e) {
      if (!this.isActive) return;

      this.style.display = 'none';
      this.$store.dispatch('ADD_BOX', {
        //we'll need this later for positioning, for ex window resize or scene controls changes
        id: new Date().getTime(),
        text: {},
        type: this.type,
      });
    }
  },
  watch: {
    'mindmapping'(to) {
      this.isActive = to;
    }
  }
}
</script>

<style>
.box-helper {
  position: absolute;
  z-index: 1;
  background: #e1f1f6;
  width: 300px;
  padding: 1rem;
  border-radius: 6px;
  resize: both;
  overflow: auto;
}

</style>
