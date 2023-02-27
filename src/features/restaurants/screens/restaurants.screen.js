import React from "react";
import {Searchbar} from 'react-native-paper';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from 'react-native';
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
export const RestaurantsScreen = () => {
  
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    search: {
      padding: 16,
      backgroundColor: 'white',
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: 'blue',
    },
  });