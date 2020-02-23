const moment = require('moment');
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

exports.manipulateDate = (req, res) => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const getDay = currentDate.getDate();
  const getYear = currentDate.getFullYear();

  const momentCurrentDate = moment();
  const momentCurrentDateFormat = moment().format();
  const momentExtractYear = moment().year();
  const momentExtractMonth = moment().month() + 1;
  const momentExtractDay = moment().date();
  const momentExtractHour = moment().hour();
  const momentExtractMinutes = moment().minutes();
  const twoYearsPrevious = moment()
    .subtract(2, 'year')
    .startOf('day')
    .startOf('year');

  const firstDayCurrentMonth = moment()
    .startOf('day')
    .startOf('month');

  const finalDayCurrentYear = moment()
    .endOf('year').utc('America/Bogota');

  const firstDayYear = moment()
    .locale('es')
    .startOf('month')
    .startOf('year')
    .format('D MMM YYYY');

  const endtDayYear = moment()
    .locale('es')
    .endOf('month')
    .endOf('year')
    .format('D MMM YYYY');

  const birthdayDate = '2019-09-26T20:30:54.660Z';
  const birthdaySubtractTwoDays = moment(birthdayDate).subtract(4, 'd');
  const birthdayAddTwoDays = moment(birthdayDate).add(2, 'd');

  res.send({
    currentDate,
    month,
    getDay,
    getYear,
    momentCurrentDate,
    momentCurrentDateFormat,
    momentExtractYear,
    momentExtractMonth,
    momentExtractDay,
    momentExtractHour,
    momentExtractMinutes,
    birthdayDate,
    birthdaySubtractTwoDays,
    birthdayAddTwoDays,
    twoYearsPrevious,
    firstDayCurrentMonth,
    finalDayCurrentYear,
    initialAndfinalDayOfYear: `${firstDayYear} - ${endtDayYear}`.replace(/[.]/g, ''),
  });
};
