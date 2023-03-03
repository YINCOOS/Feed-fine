import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
// import {Icon} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { color } from '@rneui/themed/dist/config';

import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
        <RestaurantsContextProvider>
         <Navigation />
        </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
