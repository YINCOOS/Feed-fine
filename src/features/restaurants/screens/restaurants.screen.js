import React, {useContext} from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Search} from '../components/search.component';
// import { SearchBar } from '@rneui/themed';
import styled from 'styled-components/native';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacer/spacer.component';

import {FlatList} from 'react-native';
import {RestaurantInfoCard} from '../components/restaurants-info-card.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  // console.log(RestaurantContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue500} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
