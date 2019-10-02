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
    pathologies: [{
        "name": "Falls",
        "description": "3% of all >65yo patient IP stays are due to falls; 30% of ≥65yo and 50% of ≥80yo have had a fall in the previous year.",
        "hx": "Where / when / why, injury sustained, Hx of falls -frequency in past 12m, ?gait and balance disorders, sensory impairment, MSK issues, CVS, Rx, incontinence",
        "ex": "Relevant neuro; falls testing: TUG + Romberg's + functional reach + sternal push, heel-to-toe; CV",
        "ix": "X-ray if ?#, urine MCS if confused, CTB / MRI if headstrike",
        "mx": "Rehabilitation programme w/ OT input, remediation of RFs",
        "_category": "Geriatrics"
      },
      {
        "name": "Cardiac failure",
        "description": "The decline of the heart, precipitated and exacerbated by injury.",
        "hx": "SOBOE, angina, swelling",
        "ex": "Vitals, cardiac examination - JVP, lung crackles, peripheral oedema, thready pulse",
        "ix": "FBE + UEC + BNP",
        "mx": "Optimisation of fluid balance (diuretics vs. fluid restriction), cardiac Rx (ACEi + cardioselective β-blocker + CaCB)",
        "_category": "Geriatrics"
      },
      {
        "name": "Faecal incontinence",
        "description": "Serious psychological sequelae result.",
        "hx": "Investigate cause",
        "ex": "LL neurological exam",
        "ix": "NCS + fecal MCS",
        "mx": "Treat cause",
        "_category": "Geriatrics"
      },
    ]
  },
  mutations: {
    SET_ACTIVE_POST(state, payload) {
      state.activeBlogPost = payload;
    },
  },
  actions: {

  }
})
