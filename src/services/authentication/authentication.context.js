import React, {useState, createContext} from 'react';
import {Text} from 'react-native';
// import firebase from 'firebase/compat';
import auth from '@react-native-firebase/auth';
import firebase from 'firebase/app';
import {loginRequest} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  auth().onAuthStateChanged(usr => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setUser(null);
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Passwords do not match');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.toString());
        setIsLoading(false);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};