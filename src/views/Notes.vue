<template>
<div class="notes">
  <div class="flex-row">

    <div class="flex-column">
      <a v-for="spec in specs" :class="{highlight:spec == selected_spec}" @click="selectSpec(spec)">{{spec}}</a>
    </div>

    <div v-if="sectionsOn" class="flex-column">
      <a v-for="section in sections" :class="{highlight:section == selected_section}" @click="selectSection(section)">{{section}}</a>
    </div>

    <div v-if="notesOn" class="flex-column">
      <a v-for="note in notes_local" :class="{highlight:note == selected_note}" @click="selectNote(note.name)">{{note.name}}</a>
    </div>

    <div v-if="dbLoading" class="flex-column">
      <a> <strong>dbLoading notes...</strong>  </a>
    </div>

  </div>

  <div v-if="noteOn" class="note">

    <div>
      <div class="note-head">
        <h5>{{this.$store.state.activeNote.name}}</h5>
        <div @click="noteOn = false" class="icon"><img src="../assets/x.svg"> </div>
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
      routeLoading: false,
      dbLoading: false,
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
      this.selected_spec = spec
      this.$store.state.activeSpec = spec

      if (!this.routeLoading) {
        this.$router.push('/notes/' + spec)
      }

      this.sectionsOn = true;
      this.notesOn = false;
      this.noteOn = false;
      this.selected_section = undefined;
    },
    selectSection: function(section) {
      this.selected_section = section
      this.$store.state.activeSection = section

      this.notes_local = [];

      let i
      for (i = 0; i < this.notes.length; i++) {
        let note = this.notes[i]
        if ((note._spec === this.$store.state.activeSpec && note._section === section)) {
          this.notes_local.push(note)
        }
      }

      if (!this.routeLoading) {
        this.$router.push('/notes/' + this.$store.state.activeSpec + '/' + section)
      }

      this.notesOn = true;
      this.noteOn = false;
    },
    selectNote: function(note) {
      this.selected_note = note

      let i
      for (i = 0; i < this.notes_local.length; i++) {
        let notei = this.notes_local[i]
        console.log(notei.name)
        if (notei.name === note) {
          this.$store.state.activeNote = notei
        }
      }

      this.noteOn = true;

      if (!this.routeLoading) {
        this.$router.push('/notes/' + this.$store.state.activeSpec + '/' + this.$store.state.activeSection + '/' + note)
      }
    }
  },
  mounted() {

    let vm = this;
    vm.dbLoading = true;
    axios
      .get('/notes')
      .then(function(res) {
        vm.$store.commit("SET_NOTES", res.data);

        if (vm.$route.params.spec) {
          vm.routeLoading = true;
          let spec = vm.$route.params.spec
          vm.selectSpec(spec)

          if (vm.$route.params.section) {
            let section = vm.$route.params.section
            vm.selectSection(section)

            if (vm.$route.params.note) {
              let note = vm.$route.params.note
              vm.selectNote(note)

            }
          }
        }
        vm.routeLoading = false;
        vm.dbLoading = false;
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
  background: #fafafa;
  padding: .65rem .5rem;
  margin: .25rem 0;
  border-radius: .25rem;
}

a:hover {
  background: #eee;
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
  min-width: 8rem;
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
  padding: 1rem;
  cursor: pointer;
}

@media screen and (max-width: 500px) {

  .note,
  .flex-row {
    margin: .2rem;
  }

  .flex-column {
    max-width: 33%;
    min-width: 0;
  }

  a {
    padding: .5rem .2rem;
  }
}
</style>
