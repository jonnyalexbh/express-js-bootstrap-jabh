const fs = require('fs');

const readFile = (file, format = 'utf-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, format, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

exports.readFileAwait = async (req, res) => {
  const content = await readFile('./tmp/empleados.csv');
  console.log(content);
};

exports.readFile = (req, res) => {
  const handleReading = (err, content) => {
    if (err) res.send('error reading file');
    return console.log(content);
  };
  fs.readFile('./tmp/empleados.csv', 'utf-8', handleReading);
};
