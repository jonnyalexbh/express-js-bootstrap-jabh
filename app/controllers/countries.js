exports.getCountry = (req, res) => {
  const { countryId } = req.query;
  res.send(`should the country id ${countryId}`);
};
