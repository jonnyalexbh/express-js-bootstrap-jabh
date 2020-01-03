const { fetchDataRick } = require('../services/rickandmortyapi');

const URI = 'https://rickandmortyapi.com/api/character/';
const active = true;

/* ---------------- infoRick ---------------- */

exports.infoRick = () => {
  fetchDataRick(URI)
    .then((data) => {
      console.log(data.info.count);
      return fetchDataRick(`${URI}${data.results[0].id}`);
    })
    .then((data) => {
      console.log(data.name);
      return fetchDataRick(data.origin.url);
    })
    .then((data) => {
      console.log(data.dimension);
    })
    .catch((error) => {
      console.error(error);
    });
};

/* ---------------- samplePromise ---------------- */

const somethingWillHappen = () => new Promise((resolve, reject) => {
  if (active) {
    resolve('all good');
  } else {
    reject(new Error('something bad happened'));
  }
});

exports.samplePromise = (_, res) => {
  somethingWillHappen()
    .then((response) => res.send({ res: response }))
    .catch((error) => {
      res.send({ error: error.message });
    });
};

/* ---------------- samplePromiseTwo ---------------- */

const somethingWillHappenTwo = () => new Promise((resolve, reject) => {
  if (active) {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  } else {
    const error = new Error('something bad happened with samplePromiseTwo');
    reject(error);
  }
});

exports.samplePromiseTwo = (_, res) => {
  somethingWillHappenTwo()
    .then((response) => res.send({ res: response }))
    .catch((error) => {
      res.send({ error: error.message });
    });
};

/* ---------------- samplePromiseAll ---------------- */

exports.samplePromiseAll = (_, res) => {
  Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
    .then((response) => res.send(response))
    .catch((error) => {
      res.send(error);
    });
};
