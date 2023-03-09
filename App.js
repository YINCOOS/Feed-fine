import firebase from 'firebase/compat/app';
import React, {useState, useEffect} from 'react';
// import auth from '@react-native-firebase/auth';
// import 'firebase/compat/firestore';
// import {initializeApp} from 'firebase/app';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';


export default function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <FavouritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <Navigation />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavouritesContextProvider>
          </AuthenticationContextProvider>
        </ThemeProvider>
    </>
  );
}
