const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/docs/EuropaPlus.docx', (req, res) => {
  res.download(__dirname + '/docs/EuropaPlus.docx');
})

app.get('/docs/RetroFM.docx', (req, res) => {
  res.download(__dirname + '/docs/RetroFM.docx');
})

exports.app = functions.https.onRequest(app);
