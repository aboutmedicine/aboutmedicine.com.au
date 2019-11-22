<template>
<main>
  <div class="sidebar">

    <a @click.prevent="showModels = !showModels">
      <img v-show="!showModels" alt="Model List" class="sidebar-toggle" src="../../assets/bars.svg" height="32" width="32">
      <img v-show="showModels" alt="CloseModel List" class="sidebar-toggle" src="../../assets/x.svg" height="32" width="32">
    </a>

    <div class="sidebar-open">

      <div class="border" v-if="showModels" style="margin-right:2rem;"></div>

      <div class="model-list" v-if="showModels" v-for="model in this.$store.state.models">
        <a @click.prevent="showModel(model)" :key="model.id" :class="{highlight:model == active}">{{model}}</a>
      </div>

      <div class="border" v-if="showModels"></div>

      <div class="navigation" v-if="showModels">
        <router-link to="/notes">MDNotes</router-link>
        <a href="https://twitter.com/About_Medicine">Twitter</a>
      </div>

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
      this.showModels = false;
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

.sidebar-open {
  position: absolute;
  right: .5rem;
  top: .45rem;
  text-align: right;
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  overflow: scroll;
}

.model-list {
  padding: .5rem .5rem;
  text-align: right;
  display: flex;
  flex-direction: column;
}

.navigation {
  text-align: right;
  display: flex;
  flex-direction: row;
  font-weight: 600;
}

.border {
  border: 1px solid #f0f0f0;
  margin: 1rem 0;
}

.navigation a {
  color: #7B98FC;
  padding: .5rem .5rem;
}

.navigation a:hover {
  color: #5183f5;
}

a:hover {
  color: #888;
}

a.highlight {
  font-weight: 600;
  border: 4px dashed #f0f0f0;
  border-radius: 8px;
}

a.highlight:hover {
  color: #444;
}
</style>
