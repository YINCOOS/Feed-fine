// import camelize from 'camelize';

// import {locations} from './location.mock';


// export const locationRequest = searchTerm => {
//   return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     if (!locationMock) {
//       reject('not found');
//     }
//     resolve(locationMock);
//   });
// };

// export const locationTransform = (result) => {
//   const formattedResponse = camelize(result);
//   const {geometry = {} } = formattedResponse.results[0];
//   const {lat, lng} = geometry.location;

//   return { lat, lng, viewport: geometry.viewport };
// };

import camelize from 'camelize';
import {host, isMock} from '../../utils/env';

export const locationRequest = async searchTerm => {
  const res = await fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`);
  return await res.json();
};

export const locationTransform = result => {
  const formattedResponse = camelize(result);
  // console.log(result);
  const {geometry = {}} = formattedResponse.results[0];
  const {lat, lng} = geometry.location;

  return {lat, lng, viewport: geometry.viewport};
};
