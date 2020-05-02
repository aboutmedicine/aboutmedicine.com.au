<template>
<main>
  <div class="toolbar">

    <a href="/"><img alt="AboutMedicine" id="logo" src="../../assets/logo.png" height="48" width="48"></a>

    <div id="dissect" class="toolbar-btn" @click="dissect" data-tooltip-bottom="Remove part">
      <img alt="Remove Part" src="../../assets/eye-slash.svg" height="32" width="32">
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
      this.$store.dispatch("CLEAR_SCENE");
    },
    dissect() {
      this.$store.dispatch("HIDE_MESH");
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

.toolbar-btn:hover {
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
