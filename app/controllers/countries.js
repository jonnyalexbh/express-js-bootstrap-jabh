exports.getCountry = (req, res) => {
  const { countryId } = req.query;
  res.send(`should the country id ${countryId}`);
};

exports.storeCountry = (req, res) => {
  res.send(req.body);
};
