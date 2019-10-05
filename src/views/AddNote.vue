<template>
<div class="about">
  <form>
    <input v-model="name" type="text" name="name" placeholder="Name">
    <input v-model="description" type="text" name="description" placeholder="Description">
    <input v-model="spec" type="text" name="spec" placeholder="Specialty">

    <select v-model="section" name="section">
      <option value="Pathology" selected>Pathology</option>
      <option value="Cases">Cases</option>
      <option value="Anatomy">Anatomy</option>
      <option value="Tests">Tests</option>
      <option value="Physiology">Physiology</option>
    </select>

    <div v-if="this.section === 'Pathology'">
      <input v-model="pathology_special.hx" type="text" name="hx" placeholder="Hx">
      <input v-model="pathology_special.ex" type="text" name="ex" placeholder="Ex">
      <input v-model="pathology_special.ix" type="text" name="ix" placeholder="Ix">
      <input v-model="pathology_special.mx" type="text" name="mx" placeholder="Mx">
    </div>

    <div v-if="this.section === 'Cases'">
      <input v-model="cases_special.structure" type="text" name="structure" placeholder="Structure">
      <input v-model="cases_special.mnemonic" type="text" name="mnemonic" placeholder="Mnemonic">
      <input v-model="cases_special.questions" type="text" name="questions" placeholder="Questions">
    </div>

    <textarea rows="10" id="content" v-model="notes" name="notes" placeholder="Notes"></textarea>

    <button type="submit" name="button" v-on:click.prevent="submitNote">Submit</button>

  </form>
</div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'add-note',
  data() {
    return {
      name: '',
      description: '',
      spec: '',
      section: 'Pathology',
      pathology_special: {
        hx: '',
        ex: '',
        ix: '',
        mx: ''
      },
      cases_special: {
        structure: '',
        mnemonic: '',
        questions: ''
      },
      special: {},
      notes: ''
    }
  },
  methods: {
    submitNote: function() {

      if (this.section === 'Pathology') {
        this.special = this.pathology_special
      } else if (this.section === 'Cases') {
        this.special = this.cases_special
      } else {
        this.special = {}
      }

      axios
        .post('/notes', {
          name: this.name,
          description: this.description,
          _spec: this.spec,
          _section: this.section,
          special: this.special,
          notes: this.notes,
        })
        .then(function(res) {
          console.log(res);
          console.log('success');
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

input,
textarea,
select {
  display: block;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: .75rem;
  outline: none;
  margin-bottom: .5rem;
  font-size: 1.1rem;
  font-weight: 400;
  overflow: visible;
}

input {
  min-width: 96.9%;
}

select {
  height: 3rem;
}

textarea {
  line-height: 1.6;
}

@media screen and (max-width: 800px) {
  input {
    min-width: 90%;
  }

  form {
    margin-top: .2rem;
  }
}
</style>
