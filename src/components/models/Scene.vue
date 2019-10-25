<template>
<div class="scene">
  <canvas class="" id="scene">
  </canvas>
</div>
</template>

<script>
import SceneManager from "@/modules/SceneManager";

export default {
  name: "Scene",
  data: () => ({
    intersected: null,
    canvas: null,
  }),
  mounted() {
    const canvas = document.getElementById("scene");
    const controller = new SceneManager(canvas);

    this.canvas = canvas;
    this.controller = controller;
    this.$store.commit("SET_CONTROLLER", controller);

    canvas.addEventListener("mousedown", e =>
      this.highlightMesh(e, this.$store.state.controller)
    );
    canvas.addEventListener("touchstart", e =>
      this.highlightMesh(e, this.$store.state.controller)
    );

    if (this.$route.params.model) {
      this.loadModel(this.$route.params.model);
    } else {
      this.$router.push('/models/heart');
    }
  },
  methods: {
    highlightMesh(e, controller) {
      const intersection = this.$store.state.controller.checkIntersection(e);

      let intersected = this.intersected;

      if (intersection) {
        if (intersected != intersection.object) {
          if (intersected)
            intersected.material.emissive.setHex(intersected.currentHex);
          intersected = this.intersected = intersection.object;

          intersected.currentHex = intersected.material.emissive.getHex();
          intersected.material.emissive.setHex(0xaa00aa);

          this.$store.commit("SET_ACTIVE_MESH", {
            name: intersection.object.name.replace(/_/g, " ").replace(/\d/g, ''),
            object: intersection.object
          });
        }
      }
    },
    loadModel(model) {
      this.$store.state.controller.load("../static/models/" + model + ".glb");
    }
  },
  watch: {
    $route(to) {
      this.loadModel(to.params.model);
    }
  }
};
</script>

<style scoped>
#scene {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.loading {
  z-index: 5;
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
