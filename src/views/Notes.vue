<template>
<div class="notes">
  <div class="flex-row">
    <div class="flex-column">
      <a v-for="spec in specs" :class="{highlight:spec == selected_spec}" @click="selectSpec(spec); selected_spec = spec">{{spec}}</a>
    </div>
    <div v-if="sectionsOn" class="flex-column">
      <a v-for="section in sections" :class="{highlight:section == selected_section}" @click="selectSection(section); selected_section = section">{{section}}</a>
    </div>
    <div v-if="notesOn" class="flex-column">
      <a v-for="note in notes_local" :class="{highlight:note == selected_note}" @click="selectNote(note); selected_note = note">{{note.name}}</a>
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
      <p><strong>Hx:</strong> {{this.$store.state.activeNote.special.hx}}</p>
      <p><strong>Ex:</strong> {{this.$store.state.activeNote.special.ex}}</p>
      <p><strong>Ix:</strong> {{this.$store.state.activeNote.special.ix}}</p>
      <p><strong>Mx:</strong> {{this.$store.state.activeNote.special.mx}}</p>
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
      selected_spec: undefined,
      selected_section: undefined,
      selected_note: undefined,
      specs: this.$store.state.specs,
      sections: this.$store.state.sections,
      notes_local: []
    }
  },
  methods: {
    selectSpec: function(spec) {
      this.$store.state.activeSpec = spec

      if (!this.mounted) {
        this.$router.push('/notes/' + spec)
      }

      this.sectionsOn = true;
      this.notesOn, this.noteOn = false;
    },
    selectSection: function(section) {
      this.$store.state.activeSection = section

      this.notes_local = [];

      let i
      for (i = 0; i < this.notes.length; i++) {
        let note = this.notes[i]
        if (note._spec === this.$store.state.activeSpec) {
          this.notes_local.push(note)
        }
      }
      this.notesOn = true;

      if (!this.mounted) {
        this.$router.push('/notes/' + this.$store.state.activeSpec + '/' + section)
      }
    },
    selectNote: function(note) {

      let i
      for (i = 0; i < this.notes.length; i++) {
        let notei = this.notes[i]
        if (notei.name === note.name) {
          this.$store.state.activeNote = notei
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

    let vm = this;
    axios
      .get('/notes')
      .then(function(res) {
        vm.$store.commit("SET_NOTES", res.data);
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  computed: {
    notes: function() {
      return this.$store.state.notes
    }
  }
}
</script>

<style scoped>
a {
  padding: 1rem;
  border-radius: .25rem;
  border-bottom: 1px solid #fafafa;
}

a:hover {
  background: #fafafa;
}

a.highlight {
  background: #eaeaea;
  font-weight: 600;
}

p {
  margin: 1rem;
  line-height: 1.6;
}

h4 {
  margin: 2rem;
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
  margin: 0 .2rem;
  overflow: scroll;
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