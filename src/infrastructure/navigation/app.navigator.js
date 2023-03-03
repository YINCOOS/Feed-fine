// import React from 'react';
// import NavigationContainer from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Ionicons} from 'react-native-vector-icons/Ionicons';
// import {Text} from 'react-native';
// import {SafeArea} from '../../components/utility/safe-area.component';
// import RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsNavigator} from './restaurants.navigator';
import {Text} from 'react-native';
import {SafeArea} from '../../components/utility/safe-area.component';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      // <ion-icon ios="heart-outline" md="heart-sharp"></ion-icon>
    ),
  };
};

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
};

const Map = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
  <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Restaurant123" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  </>
);
