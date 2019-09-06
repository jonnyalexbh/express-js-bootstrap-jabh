const fs = require('fs');

exports.readFile = (req, res) => {
  const handleReading = (err, content) => {
    if (err) res.send('error reading file');
    return console.log(content);
  };
  fs.readFile('./tmp/empleados.csv', 'utf-8', handleReading);
};
