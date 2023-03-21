// const {mocks, addMockImage} = require('./mock');
// const url = require('url');

// module.exports.placesRequest = (request, response) => {
//   const {location} = url.parse(request.url, true).query; // location = '51.219448,4.402464'
//   const data = mocks[location];
//   if (data) {
//     data.results = data.results.map(addMockImage);
//   }
//   response.json(data);
//   console.log('geo', data);
// };

const {mocks, addMockImage} = require('./mock');
const url = require('url');
const functions = require('firebase-functions');

const addGoogleImage = restaurant => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg',
    ];
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      functions.config().google.key
    }`,
  ];
};
module.exports.placesRequest = (request, response, googleClient) => {
  const {location, mock} = url.parse(request.url, true).query;
  // const {location, mock} = request.query;
  if (mock === 'true') {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }

    return response.json(data);
  }
  googleClient
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: 'restaurant',
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then(res => {
      res.data.results = res.data.results.map(addGoogleImage);
      return response.json(res.data);
    })
    .catch(e => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
