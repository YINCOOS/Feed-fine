import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {RestaurantList} from '../components/restaurant-list.styles';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {FadeInView} from '../../../components/animations/fade.animation';
import {Spacer} from '../../../components/spacer/spacer.component';
import {FavouritesBar} from '../../../components/favourites/favourites-bar.component';
import {LocationContext} from '../../../services/location/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {RestaurantInfoCard} from '../components/restaurants-info-card.component';
import {Search} from '../components/search.component';
import {Text} from '../../../components/typography/text.component';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({navigation}) => {
  const {error: LocationError} = useContext(LocationContext);
  const {isLoading, restaurants, error} = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!error || !!LocationError;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue500} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving data</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  })
                }>
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
};
