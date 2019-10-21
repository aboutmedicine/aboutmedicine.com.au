<template>
<main>
  <div class="toolbar">

    <a href="/"><img alt="AboutMedicine" id="logo" src="../../assets/logo.png" height="48" width="48"></a>

    <div id="dissect" class="toolbar-btn" @click="dissect" data-tooltip-bottom="Remove part">
      <img alt="Remove Part" src="../../assets/eye-slash.svg" height="32" width="32">
    </div>

    <div id="toolbar" class="toolbar-btn" @click="dialog.clip = !dialog.clip">
      <img alt="Cut Model" src="../../assets/cut.svg" height="32" width="32">

      <div class="toolbar-dropdown" v-show="dialog.clip">
        <div class="toolbar-btn" @click.stop="clip(0,0,-1)" data-tooltip-bottom="Cut coronal">
          <img alt="Cut coronal" src="../../assets/square.svg" height="32" width="32">
        </div>
        <div class="toolbar-btn" @click.stop="clip(0,-1,0)" data-tooltip-bottom="Cut transverse">
          <img alt="Cut transverse" src="../../assets/minus.svg" height="32" width="32">
        </div>
        <div class="toolbar-btn" @click.stop="clip(-1,0,0)" data-tooltip-bottom="Cut sagittal">
          <img alt="Cut sagittal" src="../../assets/minus.svg" style="transform: rotate(90deg)" height="32" width="32">
        </div>
      </div>
    </div>

    <div id="restore" class="toolbar-btn" @click="reset" data-tooltip-bottom="Reset model">
      <img alt="Reset model" src="../../assets/redo.svg" height="32" width="32">
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: "Toolbar",

  data: () => ({
    dialog: {
      clip: false
    },
  }),
  methods: {
    reset() {
      this.$store.state.controller.restoreVisibility();
    },
    dissect() {
      this.$store.state.controller.hideMesh(this.$store.state.activeMesh.object);
    },
    clip(...args) {
      this.$store.state.controller.clip(...args);
      this.dialog.clip = false;
    }
  }
};
</script>

<style>
.toolbar {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  top: 1rem;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 .5rem;
  width: 48px;
  height: 48px;
  background: #aaa;
  border-radius: 50%;
  cursor: pointer;
}

.toolbar-btn:hover{
  background: #888;
}

.toolbar-dropdown {
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 6.5rem;
  top: 100%;
}

.toolbar-dropdown .toolbar-btn {
  margin-top: .5rem;
}

</style>
