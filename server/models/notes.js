const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    icon: {
        type: String
    }
});

mongoose.model('Tag', TagSchema);

// Osce Schema
const noteSchema = mongoose.Schema({
  //general
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },

  //post type specific
  special: mongoose.Schema.Types.Mixed,

  //taxonomies
  _tags: [TagSchema],
  _category: {
    type: String,
  },
  _type: {
    type: String,
  }
});

const Note = module.exports = mongoose.model('Note', noteSchema);

// Get notes
module.exports.getNotes = (callback, limit) => {
  Note.find(callback).limit(limit);
}

// Add note
module.exports.addNote = (note, callback) => {
  Note.create(note, callback);
}
