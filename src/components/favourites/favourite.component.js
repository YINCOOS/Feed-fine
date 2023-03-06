import React, {useContext} from 'react';
// import {View} from 'react-native';
import styled from 'styled-components/native';
// import * as Icons from "react-native-heroicons/solid";
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import {FavouritesContext} from '../../services/favourites/favourites.context';
import {HeartIcon} from 'react-native-heroicons/solid';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({restaurant}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContext);
  console.log(favourites.length);
  const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }>
      <HeartIcon
        name={isFavourite ? 'Heart' : 'Hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
