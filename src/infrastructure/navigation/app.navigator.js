import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsNavigator} from './restaurants.navigator';
import {Text} from 'react-native';
import {SafeArea} from '../../components/utility/safe-area.component';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {MapScreen} from '../../features/map/screens/map.screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NoMealsIcon from '@mui/icons-material/NoMeals';

const TAB_ICON = {
  Restaurants: NoMealsIcon,
  Map: 'md-map',
  Settings: 'settings',
};
const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
      // <ion-icon ios="heart-outline" md="heart-sharp"/>
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

const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
  <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(createScreenOptions, {headerShown: false})}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  </>
);
