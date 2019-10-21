

<template>
<div>
  <p><strong>Hx:</strong> {{this.$store.state.activeNote.special.hx}}</p>
  <p><strong>Ex:</strong> {{this.$store.state.activeNote.special.ex}}</p>
  <p><strong>Ix:</strong> {{this.$store.state.activeNote.special.ix}}</p>
  <p><strong>Mx:</strong> {{this.$store.state.activeNote.special.mx}}</p>
  <p v-if="this.$store.state.activeNote.special.etiology"><strong>Etiology:</strong> {{this.$store.state.activeNote.special.etiology}}</p>
  <p v-if="this.$store.state.activeNote.notes"><strong>Notes:</strong> {{this.$store.state.activeNote.notes}}</p>
</div>
</template>

<script>
export default {
  name: 'pathology',
}
</script>


<style scoped>
p {
  margin: 1rem;
  line-height: 1.6;
}
</style>
