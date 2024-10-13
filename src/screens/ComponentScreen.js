import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Szabi";
  return (
    // View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
    // View is used to encapsulate other components and provide a container with a specific layout or styling.
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.infoStyle}>My name is {name}</Text>
    </View>
  );
};

// Stylesheet for the component using the StyleSheet API.
// Stylesheet.create() takes an object as an argument and returns a stylesheet object.
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  infoStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
