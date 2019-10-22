import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBlogPost: {},
    //
    // Notes
    //
    specs: ['Anaesthetics', 'Cardio', 'Dent', 'Derm', 'ED', 'Endo', 'Gastro', 'GP', 'Geris', 'Gynae', 'Haem', 'HB', 'Immuno', 'ID', 'Psych', 'Neonates', 'Neuro', 'Obs', 'Onc', 'Ophthalm', 'Ortho', 'Oto', 'Path', 'Paeds', 'Pharm', 'Radiology', 'Renal', 'Resp', 'Rheum', 'Surg', 'Uro'],
    sections: ['Anatomy', 'Cases', 'Pathology', 'Physiology', 'Tests'],
    notes: [],
    activeSpec: '',
    activeSection: '',
    activeNote: {},
    //
    // Models
    //
    models: ['heart', 'heart-schematic', 'ischioanal-fossae', 'peritoneum'],
    controller: null,
    currentModel: null,
    activeMesh: {},
  },
  mutations: {
    SET_ACTIVE_POST(state, payload) {
      state.activeBlogPost = payload;
    },
    SET_NOTES(state, payload) {
      state.notes = payload;
    },
    SET_MODELS(state, payload) {
      state.models = payload;
    },
    SET_CURRENT_MODEL(state, payload) {
      state.currentModel = payload;
    },
    SET_CONTROLLER(state, payload) {
      state.controller = payload;
    },
    SET_ACTIVE_MESH(state, payload) {
      state.activeMesh = payload;
    },
  },
  actions: {
    CLEAR_SCENE({
      commit,
      state
    }) {
      commit('SET_ACTIVE_MESH', {});
      state.controller.restoreVisibility();
    },
    HIDE_MESH({
      state
    }) {
      state.controller.hideMesh(state.activeMesh.object);
    }
  },
  getters: {
    sortedModels: (state) => {
      return [...state.models].sort((a, b) => a.localeCompare(b));
    },
    activeModel: (state) => {
      const model = state.models.filter(x => x === state.currentModel)[0];
      if (model) {
        return model;
      } else {
        return 'No model selected'
      }
    }
  }
})
