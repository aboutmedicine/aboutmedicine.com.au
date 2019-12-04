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
    models: ['axilla', 'brain-schematic', 'cranial-nerves', 'embryo', 'femoral-triangle', 'forearm-anterior', 'heart', 'heart-schematic', 'inguinal-canal', 'ischioanal-fossae', 'perineum', 'peritoneum'],
    controller: null,
    currentModel: null,
    activeMesh: {},
    animated: false,
    paused: true,
    //
    // MindMaps
    //
    mindmapping: false,
    currentTopic: "AMI",
    boxes: {},
    activeBox: null
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
    ADD_BOX(state, payload) {
      let boxes = JSON.parse(JSON.stringify(state.boxes));

      boxes[state.currentTopic] = {
        ...boxes[state.currentTopic],
        [payload.id]: payload
      };

      state.boxes = boxes;
    },
    SET_ACTIVE_BOX(state, id) {
      state.activeBox = id;
    },
    REMOVE_BOX(state, id) {
      Vue.delete(state.boxes[state.currentTopic], id);
      state.activeBox = null;
    },
    EDIT_BOX(state, payload) {
      const note = state.boxes[state.currentTopic][state.activeBox];

      note.text[payload.key] = payload.value;
    },
    SET_MINDMAP_MODE(state, value) {
      state.mindmapping = value;
    },
  },
  actions: {
    CLEAR_SCENE({
      commit,
      state
    }) {
      commit('SET_ACTIVE_MESH', {});
      state.animated = false;
      state.paused = true;
      state.controller.restoreVisibility();
    },
    HIDE_MESH({
      commit,
      state
    }) {
      state.controller.hideMesh(state.activeMesh.object);
      commit('SET_ACTIVE_MESH', {});
    },
    PLAY_ANIM({
      commit,
      state
    }) {
      state.controller.play(state.activeMesh.object);
      if (state.controller.checkAnimating()) {
        state.paused = false;
      }
    },
    PAUSE_ANIM({
      commit,
      state
    }) {
      state.paused = true;
      state.controller.pause(state.activeMesh.object);
    },
    ADD_BOX({
      commit
    }, payload) {
      commit('SET_MINDMAP_MODE', false);
      commit('ADD_BOX', payload);
      commit('SET_ACTIVE_BOX', payload.id);
    },
  },
  getters: {
    annotations: (state) => {
      return state.annotations[state.currentTopic];
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
