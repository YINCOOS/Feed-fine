const {locations: locationsMock} = require('./geocode.mock');
const url = require('url');
const functions = require('firebase-functions');

module.exports.geocodeRequest = (request, response, googleClient) => {
  const {city, mock} = url.parse(request.url, true).query;
  // const {city, mock} = request.query.params;
  if (mock === 'true') {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }
  googleClient
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then(res => {
      return response.json(res.data);
    })
    .catch(e => {
      response.status(400);
      return response.send(e.response.dta.error_message);
    });
};
