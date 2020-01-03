const { XMLHttpRequest } = require('xmlhttprequest');

const URI = 'https://rickandmortyapi.com/api/character/';

const fetchData = (uriApi, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', uriApi, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${uriApi}`);
        return callback(error, null);
      }
    }
    return true;
  };
  xhttp.send();
};

exports.rickData = (req, res) => {
  fetchData(URI, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(URI + data1.results[0].id, (error2, data2) => {
      if (error2) return console.error(error2);
      fetchData(data2.origin.url, (error3, data3) => {
        if (error3) return console.error(error3);
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        return true;
      });
      return true;
    });
    return true;
  });
  res.send('executed hell callback');
};
