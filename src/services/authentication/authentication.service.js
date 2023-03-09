import auth from '@react-native-firebase/auth';

// export const loginRequest = async (email, password) => {
//   try {
//     const response = await auth().signInWithEmailAndPassword(email, password);
//     if (response.user) {
//       console.log('login successful');
//     } else {
//       console.log('user does not exist');
//     }
//     return response;
//   } catch (error) {
//     console.log('login failed');
//     return error;
//   }
// };

export const loginRequest = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};
