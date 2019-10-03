import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBlogPost: {},
    activeSpec: '',
    activeSection: '',
    activeNote: {},
    specs: ['Anaesthetics', 'Cardio', 'Dent', 'Derm', 'ED', 'Endo', 'Gastro', 'GP', 'Geris', 'Gynae', 'Haem', 'HB', 'Immuno', 'ID', 'Psych', 'Neonates', 'Neuro', 'Obs', 'Onc', 'Ophthalm', 'Ortho', 'Oto', 'Path', 'Paeds', 'Pharm', 'Radiology', 'Renal', 'Resp', 'Rheum', 'Surg', 'Uro'],
    sections: ['Anatomy', 'Cases', 'Pathology', 'Physiology', 'Tests'],
    notes: [],
    notes_local: [{
      "_id": {
        "$oid": "5c643a495dc65311811bc716"
      },
      "_category": "Geriatric Medicine",
      "_type": "Pathology",
      "description": "3% of all >65yo patient IP stays are due to falls; 30% of ≥65yo and 50% of ≥80yo have had a fall in the previous year.",
      "name": "Falls",
      "special": {
        "mx": "Rehabilitation programme w/ OT input, remediation of RFs",
        "hx": "Where / when / why, injury sustained, Hx of falls -frequency in past 12m, ?gait and balance disorders, sensory impairment, MSK issues, CVS, Rx, incontinence",
        "ix": "X-ray if ?#, urine MCS if confused, CTB / MRI if headstrike",
        "ex": "Relevant neuro; falls testing: TUG + Romberg's + functional reach + sternal push, heel-to-toe; CV",
        "etiology": ""
      }
    }]
  },
  mutations: {
    SET_ACTIVE_POST(state, payload) {
      state.activeBlogPost = payload;
    },
    SET_NOTES(state, payload) {
      state.notes = payload;
      console.log(state.notes)
    },
  },
  actions: {

  }
})
