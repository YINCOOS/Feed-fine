import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsNavigator} from './restaurants.navigator';
// import {Text} from 'react-native';
import {SafeArea} from '../../components/utility/safe-area.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MapScreen} from '../../features/map/screens/map.screen';
import {SettingsScreen} from '../../features/settings/screen/settings.screen';

// import { Icon } from '@rneui/themed';
// import Icon from 'react-native-paper/lib/typescript/components/Icon';

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};
const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
    <Tab.Navigator
      screenOptions={(createScreenOptions, {headerShown: false})}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
);
