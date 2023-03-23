import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsNavigator} from './restaurants.navigator';
// import {Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MapScreen} from '../../features/map/screens/map.screen';
import { CheckoutNavigator } from './checkout.navigator';
// import { CheckoutScreen } from '../checkout/screens/checkout.screen';
import {FavouritesContextProvider} from '../../services/favourites/favourites.context';
import {LocationContextProvider} from '../../services/location/location.context';
import {CartContextProvider} from '../../services/cart/cart.context';
import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context';
import {SettingsNavigator} from './settings.navigator';

// import { Icon } from '@rneui/themed';
// import Icon from 'react-native-paper/lib/typescript/components/Icon';

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Checkout: 'cart',
  Settings: 'settings',
};
const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <Icon name={iconName} size={size} color={color} />
    ),
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <CartContextProvider>
          <Tab.Navigator
            screenOptions={(createScreenOptions, {headerShown: false})}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
            <Tab.Screen name="Checkout" component={CheckoutNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </CartContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
