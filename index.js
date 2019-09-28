const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const serveStatic = require("serve-static")
app = express();

app.use(history());
app.use(bodyParser.json());
app.use(serveStatic(path.join(__dirname, 'dist')));

const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_28trdw16:tpk3e8svp7nu5mlceio2ir16jh@ds029814.mlab.com:29814/heroku_28trdw16');
var db = mongoose.connection;

const port = process.env.PORT || 80;
console.log(port)
app.listen(port);
