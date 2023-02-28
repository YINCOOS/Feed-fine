import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from './src/components/utility/safe-area.component';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Settings = () => {
  return (
    <SafeArea>
    <Text>Settings</Text>
    </SafeArea>
  );
}

const Map = () => {
  return (
    <SafeArea>
    <Text>Map</Text>
    </SafeArea>
  );
}

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </>

  );
}