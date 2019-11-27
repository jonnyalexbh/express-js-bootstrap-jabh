const { cities, products } = require('../constants');

exports.main = (req, res) => {
  res.send({ data: 'working example' });
};

exports.sampleMiddleware = (_, res) => {
  res.send({ data: 'middleware works' });
};

exports.sampleFilterMap = (_, res) => {
  // const populatedCities = cities.filter((city) => city.habitantes >= 50);
  const getPopulatedCities = cities.filter(({ habitantes }) => habitantes >= 50);
  const getNamePopulatedCities = getPopulatedCities.map(({ name }) => name);
  res.send(getNamePopulatedCities);
};

exports.sampleReduce = (_, res) => {
  const totalInhabitants = cities.reduce((accumulator, { population }) => {
    console.log('accumulator->', accumulator);
    console.log('currentValue->', population);
    return accumulator + population;
  }, 0);

  res.send({ totalInhabitants });
};

exports.sampleReduceMerge = (_, res) => {
  const mergeproducts = products.reduce((accumulator, current) => {
    console.log('accumulator->', accumulator);
    console.log('current->', current);
    return accumulator.concat(current);
  }, []);
  res.send(mergeproducts);
};
