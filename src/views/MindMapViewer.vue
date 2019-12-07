<template>
<div class="mind-map-viewer">

    <div id="container">

      <div class="title">
        {{ title }}
      </div>

      <div class="author">
        {{ author }}
      </div>

      <template v-for="(item) in boxes">
        <mind-map-box :key="item.id" :id="item.id" :type="item.type" :text="item.text" :typestyle="item.style" :height="item.height" :width="item.width">
        </mind-map-box>
      </template>

      <template v-for="arrow in arrows">
        <div v-html="arrow">
        </div>
      </template>

    </div>
</div>
</template>

<script>
import * as axios from 'axios'
import MindMapBox from '../components/mindmap/MindMapBox.vue'

export default {
  name: 'mind-map-viewer',
  data() {
    return {
      title: '',
      author: '',
      arrows: {},
      boxes: {}
    }
  },
  created() {
    let vm = this
    axios
      .get('/mindmap/' + this.$route.params.id)
      .then(function(res) {
        console.log(res);
        vm.title = res.data.title,
          vm.arrows = res.data.arrows,
          vm.boxes = res.data.boxes,
          vm.author = res.data.author
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  components: {
    MindMapBox
  },
  methods: {}
}
</script>

<style scoped>
p {
  margin: 2rem;
  line-height: 1.6;
}

#container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 5rem;
  left: 0;
  background: #fff;
  border: 2px dashed #eee;
  z-index: 0;
}

.title {
  padding: 2rem 2rem 1rem 2rem;
  display: block;
  color: #555;
  font-size: 2rem;
  font-weight: 400;
  z-index: 2;
}

.author {
  padding: .5rem 3rem;
  font-size: 1.1rem;
  color: #555;
}

.mindmap-viewer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
}
</style>
