<template>
<main>
  <div class="animbar" v-if="this.$store.state.animated">

    <a class="animbar-btn">
      <div v-show="paused" v-on:click="play">
        <img class="play" alt="Play" src="../../assets/play.svg" height="28" width="28">
      </div>
      <div v-show="!paused" v-on:click="pause">
        <img class="pause" alt="Pause" src="../../assets/pause.svg" height="28" width="28">
      </div>
    </a>

  </div>
</main>
</template>

<script>
export default {
  name: "animbar",
  methods: {
    play: function() {
      this.$store.dispatch("PLAY_ANIM");
    },
    pause: function() {
      this.$store.dispatch("PAUSE_ANIM");
    }
  },
  computed: {
    paused() {
      return this.$store.state.paused
    }
  }
};
</script>

<style>
.animbar {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 4.5rem;
}

.animbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 .5rem 0;
  width: 48px;
  height: 48px;
  background: #aaa;
  border-radius: 50%;
  cursor: pointer;
}

.play {
  margin: 4px 0 0 4px;
}

.pause {
  margin: 4px 0 0 0;
}

.animbar-btn:hover {
  background: #888;
}
</style>
