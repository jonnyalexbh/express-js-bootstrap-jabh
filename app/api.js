const express = require('express');
const db = require('./models');

const api = express.Router();

api.get('/users', (req, res) => db.User.findAll()
  .then(users => res.send(users))
  .catch((err) => {
    console.log('There was an error querying contacts', JSON.stringify(err));
    return res.send(err);
  }));

module.exports = api;
