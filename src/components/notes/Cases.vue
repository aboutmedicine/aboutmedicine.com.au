<template>
<div>
  <p><strong>Structure:</strong> {{this.$store.state.activeNote.special.structure}}</p>
  <p><strong>Mnemonic:</strong> {{this.$store.state.activeNote.special.mnemonic}}</p>
  <p><strong>Questions:</strong> {{this.$store.state.activeNote.special.questions}}</p>
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
