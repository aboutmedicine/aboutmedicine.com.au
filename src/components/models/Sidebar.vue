<template>
<main>
  <div class="sidebar">

    <a @click.prevent="showModels = !showModels">
      <transition name="fade">
        <img key=1 v-if="!showModels" alt="Model List" class="sidebar-toggle" src="../../assets/bars.svg" height="32" width="32">
        <img key=2 v-if="showModels" alt="CloseModel List" class="sidebar-toggle" src="../../assets/x.svg" height="32" width="32">
      </transition>
    </a>

    <div class="model-list" v-if="showModels" v-for="model in this.$store.state.models">
      <a @click.prevent="showModel(model)" class="model-link" :key="model.id" :class="{highlight:model == active}">{{model}}</a>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    showModels: false
  }),
  methods: {
    showModel: function(model) {
      this.$router.push('/models/' + model);
    }
  },
  computed: {
    active: function() {
      return this.$route.params.model
    }
  }
};
</script>

<style>
.sidebar-toggle {
  position: absolute;
  display: block;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 1;
  transition: .2s;
}

.model-list {
  position: sticky;
  margin-top: -1rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.model-link {
  padding: .75rem;
}

.model-link:hover {
  color: #888;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

a.highlight {
  font-weight: 600;
}

a.highlight:hover {
  color: #444;
}
</style>
