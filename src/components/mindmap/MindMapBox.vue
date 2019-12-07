<template>
<div v-resize:debounce="onResize" class="box" :id="id" :style="typestyle" ref="container">

  <div v-if="this.$route.path === '/mindmap/make'" id="x" class="box-icon" @click="remove">
    <img class="icon" src="../../assets/x.svg" height="24" alt="">
  </div>

  <textarea class="box-details" rows="10" placeholder="Type Here..." name="description" @input="inputChange" :value="text.description"></textarea>

</div>
</template>

<script>
import resize from 'vue-resize-directive'

export default {
  name: 'mindmap-box',
  directives: {
    resize,
  },
  props: {
    id: Number,
    text: Object,
    typestyle: Object,
    height: String,
    width: String
  },
  data: () => ({
    title: '',
    description: ''
  }),
  mounted() {
    if (this.height !== undefined) {
      console.log('height should be:' + this.height);

      let box = this.$refs.container;
      box.style.height = this.height;

    };
    if (this.width !== undefined) {
      console.log('width should be:' + this.width);

      let box = this.$refs.container;
      box.style.width = this.width;

    }
  },
  methods: {
    remove() {
      this.$store.commit('REMOVE_BOX', this.id)
    },

    inputChange(e) {
      if(this.$route.path !== "/mindmap/make") return;

      this.$store.commit('EDIT_BOX_CONTENTS', {
        key: e.target.name,
        value: e.target.value
      })
    },

    onResize(e) {
      if(this.$route.path !== "/mindmap/make") return;

        console.log(e.offsetWidth);

        this.$store.commit('EDIT_BOX_DIMENSIONS', {
          key: 'width',
          value: (e.offsetWidth - 32) + 'px'
        })
        this.$store.commit('EDIT_BOX_DIMENSIONS', {
          key: 'height',
          value: (e.offsetHeight - 32) + 'px'
        })

    }
  }
}
</script>

<style scoped>
.box {
  position: absolute;
  z-index: 1;
  background: #e1f1f6;
  width: 300px;
  padding: 1rem;
  border-radius: 6px;
  resize: both;
  overflow: auto;
}

.box-icon {
  position: relative;
}

.box-details {
  font-size: 1em;
  font-weight: 600;
}

.icon {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

textarea {
  color: #555;
  font-family: inherit;
  font-weight: 300 !important;
  margin-bottom: 10px;
  background: none;
  border: none;
  width: 95%;
  resize: none;
  height: inherit;
  overflow: visible;
  text-align: left;
}

@media screen and (max-width: 500px) {
  .box {
    width: 150px;
    height: 75px;
  }
}

</style>
