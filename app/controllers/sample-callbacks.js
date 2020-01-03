/* ---------------- sumTwoNumbers ---------------- */

const sum = (num1, num2) => num1 + num2;
const calc = (num1, num2, callback) => callback(num1, num2);

exports.sumTwoNumbers = (req, res) => {
  const result = calc(6, 2, sum);
  res.send({ result });
};

/* ---------------- printDate ---------------- */

const printDate = (dateNow) => console.log('B', dateNow);

const currentDate = (callback) => {
  console.log('A', new Date());

  setTimeout(() => {
    const date = new Date();
    callback(date);
  }, 3000);

  console.log('C', new Date());
};

exports.callbackPrintDate = (req, res) => {
  const result = currentDate(printDate);
  res.send(result);
};

/* ---------------- testCallback ---------------- */

const callbackTest = (callback) => {
  console.log('init testing callback');
  callback();
};

exports.testCallback = (req, res) => {
  callbackTest(() => {
    res.send('finished testing callback');
  });
};

/* ---------------- callbackParam ---------------- */

const callbackWithParam = (name, callback) => {
  console.log(`init callback with param ${name}`);
  callback(name);
};

exports.callbackParam = (req, res) => {
  callbackWithParam('Jonny Alexander', (name) => {
    console.log('finished callback with parameter', name);
    res.send(`running callback with param ${name}`);
  });
};

/* ---------------- fullNameCallback ---------------- */

const fullName = (name, lastName) => {
  console.log('finished callbackFullName');
  return `${name} ${lastName}`;
};
const callbackFullName = (name, lastName, callback) => {
  console.log('init callbackFullName');
  return callback(name, lastName);
};

exports.fullNameCallback = (req, res) => {
  const result = callbackFullName('Jonny', 'López', fullName);
  res.send({ result });
};
