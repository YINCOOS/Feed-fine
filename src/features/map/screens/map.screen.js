import React, {useContext, useState, useEffect} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {LocationContext} from '../../../services/location/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {Search} from '../components/search.component';
import {MapCallout} from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
const RestaurantMap = ({navigation}) => {
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
    longitudeDelta: 0.01,
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
              }}>
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {restaurant})
                }>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({navigation}) => {
  const {location} = useContext(LocationContext);

  if (!location) {
    return (
      <Map
        region={{
          latitude,
          longitude,
        }}
      />
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
