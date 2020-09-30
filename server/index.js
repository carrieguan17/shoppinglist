// import dependencies
const express = require('express');
const path = require('path');
const model = require('../db/model.js');
const app = express();
const PORT = 3000;

var items = [
  {itemName: 'Camera', quantity: 1},
  {itemName: 'White Board', quantity: 3},
  {itemName: 'Codenames Pictures', quantity: 1},
  {itemName: 'Exploding Kitten', quantity: 1},
  {itemName: 'Marvel\'s Avengers', quantity: 1},
  {itemName: 'PS4 Controlers', quantity: 2},
  {itemName: 'Ink Cartridge', quantity: 5}
]

const testFunction = function(req, res, next) {
  console.log(`Received a ${req.method} request to ${req.path}`);
  next();
}
// find the data
// req.body = data

// middleware
// processes *all* requests locally
app.use(express.json());
app.use(testFunction);
app.use(express.static(path.join(__dirname, '../client/dist')));

// routes
// specific code for each type of request
app.get('/items', (req, res) => {
  model.getAllItems((err, results) => {
    if(err){
      console.log(err);
    } else {
      res.status(200).send(results);
    }
  });
})

app.post('/items', (req, res) => {
  console.log(req.body);
  model.insertItem(req.body, (err, results) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log(results);
      res.status(201).send();
    }
  })
})

// start server
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The server is listening on port:', PORT)
  }
})
