const moment = require('moment');

const getTimeUtc = () => moment.utc();
const getTimePe = (date) => moment.utc(date).tz('America/Lima').format();
const getTimeCo = (date) => moment.utc(date).tz('America/Bogota').format();
const getTimeAr = (date) => moment.utc(date).tz('America/Argentina/Buenos_Aires').format();
const getTimeCl = (date) => moment.utc(date).tz('America/Santiago').format();
const getTimeMx = (date) => moment.utc(date).tz('America/Mexico_City').format();

exports.getTimeZone = (pCountry, dateTimeUtc) => {
  const country = pCountry.toLowerCase();

  const timeByCountry = {
    utc: getTimeUtc,
    pe: getTimePe,
    co: getTimeCo,
    ar: getTimeAr,
    cl: getTimeCl,
    mx: getTimeMx,
  };

  const localTime = timeByCountry[country];

  return localTime(dateTimeUtc);
};
