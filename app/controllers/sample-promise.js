const active = true;

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
