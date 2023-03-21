import firebase from 'firebase/compat/app';
import React, {useState, useEffect} from 'react';
// import auth from '@react-native-firebase/auth';
// import 'firebase/compat/firestore';
// import {initializeApp} from 'firebase/app';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
