import React from "react";
import { View, Text } from "react-native";
import { SparklesIcon } from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
// Old solid style from heroicons v1
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

export const SettingsScreen = () => {
  return (
    <View>
      <SparklesIcon color="red"/>
      <SparklesIconOutline color="red"/>
      <SparklesIconMini color="red" fill="black"/>
        <Text>Settings Screen</Text>
    </View>
  );
};
