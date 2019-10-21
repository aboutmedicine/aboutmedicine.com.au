<template>
  <div class="home">
    <Toolbar />
    <Scene />
    <MeshName v-if="this.$store.state.activeMesh.name"></MeshName>
  </div>
</template>

<script>
import Toolbar from "@/components/models/Toolbar.vue";
import Scene from "@/components/models/Scene.vue";
import MeshName from "@/components/models/MeshName.vue";

export default {
  name: "home",
  components: {
    Scene,
    Toolbar,
    MeshName
  }
};
</script>
