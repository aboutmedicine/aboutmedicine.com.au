const mongoose = require('mongoose');

// Osce Schema
const blogPostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});

const BlogPost = module.exports = mongoose.model('BlogPost', blogPostSchema);

// Get BlogPosts
module.exports.getBlogPosts = (callback, limit) => {
    BlogPost.find(callback).limit(limit);
}

// Get BlogPost
module.exports.getBlogPostBySlug = (s, callback) => {
    BlogPost.findOne({ slug: s }, callback);
}
