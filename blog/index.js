// import Axios from 'axios';
const dotenv = require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const path = require('path');
const port = 3000

const userCtrl = require('./public/Ctrl/controller');
// const loginCtrl = require('./ctrl/loginCtrl');

const app = module.exports = express();
app.use(json());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

const connectionString = process.env.DATABASE_URL; //Connects to heroku bro
console.log('connetion', connectionString)
massive(connectionString).then(db => {app.set('db', db)});

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static('./public'));

app.post('/postArticle', userCtrl.post_article);
app.get('/getAllArticles', userCtrl.get_all_articles);
app.get('/getArticle/:id', userCtrl.get_article);



app.listen(process.env.PORT, () => { console.log(`Listening on port: 3000`)});