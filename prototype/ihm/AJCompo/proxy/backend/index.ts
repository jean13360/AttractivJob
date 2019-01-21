const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// getMock récupère le chemin d'un mock de manière générique
const getMock = (file) => path.join(__dirname,   file);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '..', '../dist')));

app.get('/metierproche', (req, res) => { 
  res.status(200);
  return res.json(
    require(getMock('./mocks/mp.json'))
  )
});
 
module.exports = app;
