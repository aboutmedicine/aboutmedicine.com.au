import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBlogPost: {},
    specs: ['Anaesthetics', 'Cardio', 'Dent', 'Derm', 'ED', 'Endo', 'Gastro', 'GP', 'Geris', 'Gynae', 'Haem', 'HB', 'Immuno', 'ID', 'Psych', 'Neonates', 'Neuro', 'Obs', 'Onc', 'Ophthalm', 'Ortho', 'Oto', 'Path', 'Paeds', 'Pharm', 'Radiology', 'Renal', 'Resp', 'Rheum', 'Surg', 'Uro'],
    sections: ['Anatomy', 'Cases', 'Pathology', 'Physiology', 'Tests'],
    notes: [],
    activeSpec: '',
    activeSection: '',
    activeNote: {},
  },
  mutations: {
    SET_ACTIVE_POST(state, payload) {
      state.activeBlogPost = payload;
    },
    SET_NOTES(state, payload) {
      state.notes = payload;
    },
  },
  actions: {

  }
})
