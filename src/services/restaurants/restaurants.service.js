// import {mocks, mockImages} from './mock';
// import camelize from 'camelize';

// export const restaurantsRequest = location => {
//   return new Promise((resolve, reject) => {
//     const mock = mocks[location];
//     if (!mock) {
//       reject('location not found');
//     }
//     resolve(mock);
//   });
// };

// export const restaurantsTransform = ({results = []}) => {
//   const mappedResults = results.map(restaurant => {
//     restaurant.photos = restaurant.photos.map(p => {
//       return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
//     });

//     return {
//       ...restaurant,
//       address: restaurant.vicinity,
//       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
//       isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
//     };
//   });

//   return camelize(mappedResults);
// };

import camelize from 'camelize';
import {host, isMock} from '../../utils/env';

export const restaurantsRequest = location => {
  return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`).then(
  // return fetch('https://us-central1-foodisready-ced8d.cloudfunctions.net/placesNearby').then(
    res => {
      return res.json();
    },
  );
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
