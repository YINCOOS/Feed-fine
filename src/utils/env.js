// const liveHost = "https://us-central1-foodisready-ced8d.cloudfunctions.net"
// const localHost = "https://localhost:5001/foodisready-ced8d/us-central1"
// export const isDevelopment = process.env.NODE_ENV === "development";
// export const host = isDevelopment ? localHost : liveHost;
// import {Platform} from 'react-native';
// import {Platform} from 'react-native';
const liveHost = 'https://us-central1-foodisready-ced8d.cloudfunctions.net/';
// const localHost = 'http://localhost:5000/foodisready-ced8d/us-central1/';
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
import { Platform } from "react-native";
export const isAndroid = Platform.OS === 'android';
export const isDevelopment = process.env.NODE_ENV === 'development';
// export const isProduction = process.env.NODE_ENV === 'production';
export const isMock = true;
// export const host = !isDevelopment || isAndroid ? localHost : liveHost;

export const host = liveHost;


//USE THIS AFTER YOU HAVE THE BACKEND RUNNING
// import {Platform} from 'react-native';
// const liveHost = 'https://us-central1-foodisready-ced8d.cloudfunctions.net/';
// const localHost = 'http://localhost:5000/foodisready-ced8d/us-central1/';
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// export const isAndroid = Platform.OS === 'android';
// export const isDevelopment = process.env.NODE_ENV === 'development';
// export const isMock = false;
// export const host = !isDevelopment || isAndroid ? liveHost : localHost;