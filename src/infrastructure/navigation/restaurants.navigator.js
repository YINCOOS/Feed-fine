import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

const RestaurantDetails = () => {
  return <Text>Restaurants Detail</Text>;
};
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};