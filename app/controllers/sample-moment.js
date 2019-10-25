const { getTimeZone } = require('../utils');

exports.timeByCountry = (_, res) => {
  const utcDateUnformatted = '2019-10-10T01:43:31.172Z';
  const dateUtc = getTimeZone('utc');
  const datePeru = getTimeZone('pe', utcDateUnformatted);
  const dateColombia = getTimeZone('co', utcDateUnformatted);
  const dateArgentina = getTimeZone('ar', utcDateUnformatted);
  const dateChile = getTimeZone('cl', utcDateUnformatted);
  const dateMexico = getTimeZone('mx', utcDateUnformatted);

  res.send({
    dateUtc,
    datePeru,
    dateColombia,
    dateArgentina,
    dateChile,
    dateMexico,
  });
};
