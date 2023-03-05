import React, {useContext, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components/native';
import {LocationContext} from '../../../services/location/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {Search} from '../components/search.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = () => {
  const {location} = useContext(LocationContext);
  const {restaurants = []} = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const {lat, lng, viewport} = location;
  console.log(viewport.northeast);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    // const latDelta = notheastlat - southwestLat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  const initialRegion = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: latDelta,
    longitudeDelta: 0.0421,
  };
  return (
    <>
      <Search />
      <Map region={initialRegion}>
        {restaurants.map(restaurant => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </>
  );
};
