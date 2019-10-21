<template>
<main>
  <div class="sidebar">

    <a @click.prevent="showModels = !showModels">
        <img v-if="!showModels" alt="Model List" class="sidebar-toggle" src="../../assets/bars.svg" height="32" width="32">
        <img v-if="showModels" alt="CloseModel List" class="sidebar-toggle" src="../../assets/x.svg" height="32" width="32">
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
      this.$store.commit('SET_ACTIVE_MESH', {});
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
  position: fixed;
  display: block;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 1;
}

.model-list {
  position: relative;
  top: -1rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.model-link {
  padding: .5rem .75rem;
}

.model-link:hover {
  color: #888;
}

a.highlight {
  font-weight: 600;
}

a.highlight:hover {
  color: #444;
}

</style>
