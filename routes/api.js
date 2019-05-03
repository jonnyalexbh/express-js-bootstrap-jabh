const express = require('express');
const db = require('../app/models');

const api = express.Router();
const countryController = require('../app/controllers/Api/CountryController');

api.get('/countries', countryController.index);
api.get('/country/:id', countryController.show);

api.get('/users', (req, res) => db.User.findAll()
  .then(users => res.send(users))
  .catch((err) => {
    console.log('There was an error querying contacts', JSON.stringify(err));
    return res.send(err);
  }));

module.exports = api;
