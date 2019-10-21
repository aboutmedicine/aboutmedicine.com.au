<template>
  <main>
    <div class="mesh-name">
        <h5>{{this.$store.state.activeMesh.name}}</h5>
    </div>
  </main>
</template>

<script>
export default {
  name: "MeshName",
  props: {}
};
</script>

<style scoped>
.mesh-name {
  position: absolute;
  bottom: 0;
  z-index: 1;
  padding: 1rem 0;
}

</style>
