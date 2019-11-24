<template>

  <div class="home">
    <Toolbar />
    <AnimBar />
    <Scene />
    <MeshName />
    <Sidebar />
  </div>

</template>

<script>

  import Scene from '@/components/models/Scene.vue'
  import Toolbar from '@/components/models/Toolbar.vue'
  import AnimBar from '@/components/models/AnimBar.vue'
  import MeshName from '@/components/models/MeshName.vue'
  import Sidebar from '@/components/models/Sidebar.vue'

  export default {
    name: 'home',
    components: {
      Scene,
      AnimBar,
      Toolbar,
      MeshName,
      Sidebar
    }
  }

</script>
