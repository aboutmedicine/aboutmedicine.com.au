<template>
<div class="home">
  <Toolbar />
  <Scene />
  <MeshName v-if="this.$store.state.activeMesh.name" />
  <Sidebar></Sidebar>
</div>
</template>

<script>
import Toolbar from "@/components/models/Toolbar.vue";
import Scene from "@/components/models/Scene.vue";
import MeshName from "@/components/models/MeshName.vue";
import Sidebar from "@/components/models/Sidebar.vue";

export default {
  name: "home",
  components: {
    Scene,
    Toolbar,
    MeshName,
    Sidebar
  }
};
</script>
