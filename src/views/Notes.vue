<template>
<div class="notes">

  <SearchBar />

  <div class="flex-row">

    <div class="flex-column">
      <a v-for="spec in this.$store.state.specs" :key="spec.id" :class="{highlight:spec == selected_spec}" @click="selectSpec(spec)">{{spec}}</a>
    </div>

    <div v-if="this.$store.state.activeSpec" class="flex-column">
      <a v-for="section in this.$store.state.sections" :key="section.id" :class="{highlight:section == selected_section}" @click="selectSection(section)">{{section}}</a>
    </div>

    <div v-if="notesOn" class="flex-column">
      <a v-for="note in notes_local" :key="note.id" :class="{highlight:note.name == selected_note}" @click="selectNote(note.name)">{{note.name}}</a>
    </div>

    <div v-if="dbLoading" class="flex-column">
      <a> <strong>Loading notes...</strong></a>
    </div>

  </div>

  <div v-if="noteOn" class="note">

    <div class="note-head">
      <h5>{{this.$store.state.activeNote.name}}</h5>
      <div @click="noteOn = false" class="icon"><img src="../assets/x.svg"> </div>
    </div>

    <p style="padding: 0 0 .5rem"><i>{{this.$store.state.activeNote.description}}</i></p>

    <Pathology v-if="this.$store.state.activeNote._section === 'Pathology'" />
    <Cases v-else-if="this.$store.state.activeNote._section === 'Cases'" />
    <div v-else>
      <pre>{{this.$store.state.activeNote.notes}}</pre>
    </div>

  </div>
</div>
</template>

<script>
import * as axios from 'axios'
import Pathology from '@/components/notes/Pathology.vue'
import Cases from '@/components/notes/Cases.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'notes',
  components: {
    Pathology,
    Cases,
    SearchBar
  },
  data() {
    return {
      routeLoading: false,
      dbLoading: false,
      selected_spec: undefined,
      selected_section: undefined,
      selected_note: undefined,
      notesOn: false,
      noteOn: false,
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
        if (notei.name === note) {
          this.$store.state.activeNote = notei
        }
      }

      if (!this.routeLoading) {
        this.$router.push('/notes/' + this.$store.state.activeSpec + '/' + this.$store.state.activeSection + '/' + note)
      }

      this.noteOn = true;
    },
    routeCheck: function(vm) {
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
    }
  },
  mounted() {

    let vm = this;

    vm.dbLoading = true;
    axios
      .get('/notes')
      .then(function(res) {
        vm.$store.commit("SET_NOTES", res.data);
        vm.routeCheck(vm)

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
  },
  watch: {
    $route(to, from) {
      this.routeCheck(this)
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

p,
pre {
  font-family: inherit;
  word-wrap: normal;
  margin: 1rem;
  line-height: 1.6;
}

h5 {
  margin: 1rem 1rem 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
  margin: 1rem 2rem;
}

.flex-column {
  display: flex;
  flex-direction: column;
  margin: 0 .2rem;
  max-height: 36rem;
  min-width: 8rem;
  overflow: scroll;
}

.note {
  background: #fafafa;
  border: 3px solid #eee;
  margin: 2rem;
  padding: 1rem;
  border-radius: .25rem;
  position: sticky;
  bottom: 1rem;
  z-index: 0;
}

.note-head {
  display: flex;
  justify-content: space-between;
}

.icon {
  min-width: 1rem;
  height: auto;
  padding: 1rem 1rem 0;
  cursor: pointer;
}

.front {
  z-index: 4;
}

@media screen and (max-width: 500px) {

  .note,
  .flex-row {
    margin: .2rem 0;
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
