// import React, {useState, createContext} from 'react';
// import {Text} from 'react-native';
// import firebase from 'firebase/compat';
// // import firebase from 'firebase/app';
// import {loginRequest} from './authentication.service';

// export const AuthenticationContext = createContext();

// export const AuthenticationContextProvider = ({children}) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   const onLogin = (email, password) => {
//     setIsLoading(true);
//     loginRequest(email, password)
//       .then(response => {
//         setUser(response.user);
//         setIsLoading(false);
//       })
//       .catch(e => {
//         setError(e);
//         setIsLoading(false);
//       });
//   };
//   return (
//     <AuthenticationContext.Provider
//       value={{
//         isLoading,
//         user,
//         error,
//         onLogin,
//       }}
//       >
//       <Text>{children}<Text/> </AuthenticationContext.Provider>
//   );
// };

import React, {useState, createContext} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase/compat';
// import firebase from 'firebase/app';
import {loginRequest} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e);
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
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
