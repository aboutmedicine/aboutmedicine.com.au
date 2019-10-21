const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
// const serveStatic = require("serve-static")
const expressStaticGzip = require('express-static-gzip');
app = express();

app.use(history());
app.use(bodyParser.json());
app.use('/', expressStaticGzip(path.join(__dirname,'/dist'), {
    // index: false,
}));

BlogPost = require('./server/models/blogposts');
Note = require('./server/models/notes');

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

app.get('/notes', (req, res) => {
    Note.getNotes((err, notes) => {
      if(err){
        throw err;
      }
      res.json(notes)
    });
});

app.post('/notes', (req, res) => {
  var note = req.body;
  Note.addNote(note, (err, note) => {
    if(err){
      throw err;
    }
    res.json(note);
  });
});

const port = process.env.PORT || 80;
console.log(port)
app.listen(port);
