const moment = require('moment');
const { chunk } = require('lodash');
const { cities, products, elasticsearch } = require('../constants');

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

const builderReport = {
  DAY: 'day report',
  QUARTER: 'quarter report',
  HALF: 'half report',
  YEAR: 'year report',
};

exports.generateReport = ({ query: { split } }, res) => {
  const result = builderReport[split];
  res.send(result);
};

const greetingCo = (name) => `Hello ${name} in Colombia`;
const greetingPe = (name) => `Hello ${name} in Peru`;
const greetingAr = (name) => `Hello ${name} in Argentina`;
const greetingCl = (name) => `Hello ${name} in Chile`;

const builderGreeting = {
  CO: (name) => greetingCo(name),
  PE: (name) => greetingPe(name),
  AR: (name) => greetingAr(name),
  CL: (name) => greetingCl(name),
};

exports.accordingCountry = ({ query: { country, name } }, res) => {
  const result = builderGreeting[country](name);
  res.send(result);
};

exports.separateTransactionsBy = (req, res) => {
  const quarters = [1, 2, 3, 4];

  const transactions = elasticsearch.map((item) => ({
    quarter: moment(item.key_as_string).quarter(),
    amount: item.amount.value,
  }));

  const billingData = quarters
    .map((quarter) => chunk(transactions
      .filter((transations) => transations.quarter === quarter)
      .map(({ amount }) => amount), 3));

  res.send(billingData);
};
