const { XMLHttpRequest } = require('xmlhttprequest');

exports.fetchDataRick = (urlApi) => new Promise((resolve, reject) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      return (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error', urlApi));
    }
    return true;
  };
  xhttp.send();
});
