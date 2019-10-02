<template>
<div class="notes">
  <div class="flex-row">
    <div class="flex-column">
      <a v-for="spec in specs" @click="selectSpec(spec)">{{spec}}</a>
    </div>
    <div v-if="sectionsOn" class="flex-column">
      <a v-for="section in sections" @click="selectSection(section)">{{section}}</a>
    </div>
    <div v-if="notesOn" class="flex-column">
      <a v-for="pathology in pathologies" @click="selectNote(pathology)">{{pathology.name}}</a>
    </div>
  </div>
  <div v-if="noteOn" class="note">
    <!-- {{this.$store.state.activeSpec}} >
    {{this.$store.state.activeSection}} > -->
    <div>
      <div class="note-head">
        <h5>{{this.$store.state.activeNote.name}}</h5>
        <a @click.prevent="noteOn = false"><img class="icon" src="../assets/x.svg"></a>
      </div>
      <p>{{this.$store.state.activeNote.description}}</p>
      <p><strong>Hx:</strong> {{this.$store.state.activeNote.hx}}</p>
      <p><strong>Ex:</strong> {{this.$store.state.activeNote.ex}}</p>
      <p><strong>Ix:</strong> {{this.$store.state.activeNote.ix}}</p>
      <p><strong>Mx:</strong> {{this.$store.state.activeNote.mx}}</p>
    </div>
  </div>
</div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'notes',
  data() {
    return {
      mounted: false,
      sectionsOn: false,
      notesOn: false,
      noteOn: false,
      specs: this.$store.state.specs,
      sections: this.$store.state.sections,
      pathologies: []
    }
  },
  methods: {
    selectSpec: function(spec) {
      this.$store.state.activeSpec = spec

      if (!this.mounted) {
        this.$router.push('/notes/' + spec)
      }

      this.sectionsOn = true;
      this.notesOn = false;
    },
    selectSection: function(section) {
      this.$store.state.activeSection = section

      let i
      for (i = 0; i < 3; i++) {
        let pathology = this.$store.state.pathologies[i]
        if (pathology._category === this.$store.state.activeSpec) {
          this.pathologies.push(pathology)
        }
      }
      this.notesOn = true;

      if (!this.mounted) {
        this.$router.push('/notes/' + this.$store.state.activeSpec + '/' + section)
      }
    },
    selectNote: function(note) {
      console.log(note.name)
      console.log(this.pathologies)

      let i
      for (i = 0; i < 3; i++) {
        let pathology = this.pathologies[i]
        if (pathology.name === note.name) {
          this.$store.state.activeNote = pathology
        }
      }

      this.noteOn = true;

      if (!this.mounted) {
        this.$router.push('/notes/' + this.$store.state.activeSpec + '/' + this.$store.state.activeSection + '/' + note.name)
      }
    }
  },
  mounted() {
    if (this.$route.params.spec) {
      this.mounted = true;
      let spec = this.$route.params.spec
      this.selectSpec(spec)

      if (this.$route.params.section) {
        let section = this.$route.params.section
        this.selectSection(section)

        if (this.$route.params.section) {
          let note = this.$route.params.note
          this.selectNote(note)
        }
      }
    }
    this.mounted = false;
  }
}
</script>

<style scoped>
a {
  padding: 1rem;
  border-radius: .25rem;
}

a:hover {
  background: #eee;
}

p {
  margin: 1rem;
  line-height: 1.6;
}

h5,
h6 {
  margin: 1rem;
}

.flex-row {
  display: flex;
  flex-direction: row;
  margin: 1rem 2rem;
}

.flex-column {
  display: flex;
  flex-direction: column;
  max-height: 38rem;
  overflow: scroll;
}

h4 {
  margin: 2rem;
}

.note {
  margin: 2rem;
  background: #eee;
  padding: 1rem;
  border-radius: .25rem;
  position: sticky;
  bottom: 2rem;
}

.note-head {
  display: flex;
  justify-content: space-between;
}

.icon {
  width: 1rem;
}

@media screen and (max-width: 500px) {
  .note,
  .flex-row {
    margin: .2rem;
  }

  .flex-column {
    max-width: 33%;
  }

  a {
    padding: .5rem .2rem;
  }
}
</style>
