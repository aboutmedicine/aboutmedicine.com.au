const mongoose = require('mongoose');

// Osce Schema
const mindMapSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
      type: String,
      required: true
    },
    author: {
        type: String,
    },
    boxes: {
        type: Object,
        required: true
    },
    arrows: {
        type: Object,
    }
});

const MindMap = module.exports = mongoose.model('MindMap', mindMapSchema);

// Get MindMaps
module.exports.getMindMaps = (callback, limit) => {
    MindMap.find(callback).limit(limit);
}

// Get MindMap
module.exports.getMindMapBySlug = (s, callback) => {
    MindMap.findOne({ slug: s }, callback);
}

// Add MindMap
module.exports.addMindMap = (mindmap, callback) => {
    MindMap.create(mindmap, callback);
}
