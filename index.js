const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const serveStatic = require("serve-static")
app = express();

app.use(history());
app.use(bodyParser.json());
app.use(serveStatic(path.join(__dirname, 'dist')));

BlogPost =require('./server/models/blogposts');

const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_28trdw16:tpk3e8svp7nu5mlceio2ir16jh@ds029814.mlab.com:29814/heroku_28trdw16', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.render('./client/index')
})

app.get('/blogposts', (req, res) => {
    BlogPost.getBlogPosts((err, blogPosts) => {
      if(err){
        throw err;
      }
      res.json(blogPosts)
    });
});

app.get('/blogposts/:_id', (req, res) => {
	BlogPost.getBlogPostBySlug(req.params._id, (err, blogpost) => {
		if(err){
			throw err;
		}
		res.json(blogpost);
	});
});

app.post('/blogposts', (req, res) => {
  var blogpost = req.body;
  BlogPost.addBlogPost(blogpost, (err, blogpost) => {
    if(err){
      throw err;
    }
    res.json(blogpost);
  });
});

const port = process.env.PORT || 80;
console.log(port)
app.listen(port);
