const {addNewVisitor,createTable,viewVisitor} = require('./database')
const visitors = require('./api')
const express = require('express')
const app = express() //init app
const path = require('path');
var bodyParser = require('body-parser')

//app.use(express.urlencoded()); //load view engine
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(__dirname + '/'));
app.set('view engine', 'pug')  


//rendering the form to host 
app.get('/new_Visitor', (req, res) =>{ 
  res.sendFile('${_dirname} /index.html')})

// creating the table
 
createTable();

// post which sends to database
 app.post('/action', async (req, res) =>{
     console.log(req.body);
     const visitor = req.body.name;
     const assistant_name = req.body.assistant;
     const visitors_age = req.body.age;
     const time_of_visit = req.body.time;
     const date_of_visit =req.body.date;
     const comments =req.body.comment;
     const id = await addNewVisitor(visitor, visitors_age, date_of_visit, time_of_visit, assistant_name,comments);
     res.render('newVisitor',{visitor: req.body.name,
                               assistant_name: req.body.assistant,
                               visitors_age: req.body.age, 
                               time_of_visit: req.body.time,
                               date_of_visit: req.body.date,
                               comments: req.body.comment,
                                id: id})
    res.end();
  });



app.listen(3000, () => console.log(` app listening on port ${3000}!`));

