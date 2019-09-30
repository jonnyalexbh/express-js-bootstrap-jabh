const express = require('express');
const db = require('../app/models');

const api = express.Router();
const countryController = require('../app/controllers/CountryController');
const albumController = require('../app/controllers/AlbumController');

api.get('/', (req, res) => {
  res.send({ data: 'index api rest' });
});

api.get('/countries', countryController.index);
api.get('/country/:id', countryController.show);

api.get('/albums', albumController.all);
api.get('/albums-async-await', albumController.allAlbums);

api.get('/users', (req, res) => db.User.findAll()
  .then(users => res.send(users))
  .catch((err) => {
    console.log('There was an error querying contacts', JSON.stringify(err));
    return res.send(err);
  }));

api.post('/users', (req, res) =>
  db.User.create({
    firstName: req.body.name,
    lastName: req.body.lastname,
    email: req.body.email
  }).then((result) => res.json(result))
);

module.exports = api;
