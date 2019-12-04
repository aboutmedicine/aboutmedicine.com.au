<template>
<div class="mindmap">
  <div class="canvas">

    <div class="pathophys" @click="toggleMindMapMode">
      Pathophysiology
    </div>

    <mind-map-box-helper />

    <template v-for="(item) in this.$store.state.boxes">
      <mind-map-box :key="item.id" :id="item.id" :type="item.type" :text="item.text" :position="item.position" :isOpen="activeBox === item.id"></mind-map-box>
    </template>
  </div>

</div>
</template>

<script>

import MindMapBox from '../components/mindmap/MindMapBox.vue'
import MindMapBoxHelper from '../components/mindmap/MindMapBoxHelper.vue'

export default {
  name: 'mindmap',
  data() {
    return {}
  },
  components: {
    MindMapBox,
    MindMapBoxHelper
  },
  methods: {
    toggleMindMapMode() {
      this.$store.commit('SET_ACTIVE_BOX', null);
      this.$store.commit('SET_MINDMAP_MODE', !this.mindmapping);
    }
  }
}
</script>

<style scoped>
.canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
}

p {
  margin: 2rem;
  line-height: 1.6;
}

h4 {
  margin: 2rem;
}

h5,
h6 {
  margin: 2rem 2rem 1rem;
}

ul {
  padding-left: 0.5rem;
  padding-bottom: 1rem;
}

ul li {
  list-style-type: none;
  margin-bottom: 0.3rem;
}

ul li::before {
  padding-left: 5px;
}

.pathophys {
  background: #e1f1f6;
  width: 300px;
  padding: 1rem;
  border-radius: 6px;
  position: relative;
  resize: both;
  overflow: auto;
}

.mover {
  font-weight: 600;
  position: absolute;
  right: 2rem;
  top: .5rem;
}

.flex-row {
  display: flex;
  justify-content: space-between;
}

.icon {
  height: auto;
  padding: 0 1rem 0;
  cursor: pointer;
}
</style>
