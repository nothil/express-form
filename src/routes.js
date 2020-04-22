const {addNewVisitor,createTable,listVisitor,deleteVisitor} = require('./database');

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded());


app.use('/single-page-app', express.static(__dirname + '/'));



//rendering the form to host 
app.get('/single-page-app', (req, res) =>{
  return res.sendFile('index.html')
});

// creating the table
 
createTable();

// post which sends to database
 app.post('/newVisitor', async (req, res) =>{
     console.log(req.body);
     const name = req.body.name;
     const assistant_name = req.body.assistant;
     const visitors_age = parseInt(req.body.age, 10);
     const date_of_visit =req.body.date;
     const time_of_visit = req.body.time;

     const comments =req.body.comment;

     const visitors = await addNewVisitor(name, visitors_age, date_of_visit, time_of_visit, assistant_name,comments);



  });




app.get('/viewAllVisitors', async(req, res) =>{
    const allVisitors = await listVisitor()


    res.status(200).json({
        status: 'ok',
        visitors: allVisitors
    });

})

app.delete('/deleteVisitor/:id', async(req, res) =>{
    const visitors = await deleteVisitor(req.params.id);
    res.sendFile(JSON.stringify(visitors))
    res.end();

})




const server = app.listen(3000, () => console.log(` app listening on port ${3000}!`));

module.exports = server;