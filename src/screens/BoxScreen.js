import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.textOne}>Box 1</Text>
      <Text style={styles.textTwoo}>Box 2</Text>
      <Text style={styles.textThree}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    // default is column in react native
    // flexDirection: "row",
    // default alignItems is stretch in react native
    // alignItems: "center",
    // default justifyContent is flex-start in react native
    // justifyContent: "center",
  },
  textOne: {
    borderWidth: 3,
    borderColor: "skyblue",
    // flex: 2,
    // Absolute fill objects, fills parent container, shortcut to top,bottom,left,right 0
    ...StyleSheet.absoluteFillObject,
  },
  textTwoo: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 1,
    // overrides alignItems on parent element
    // alignSelf: "flex-start",
    // some flexbox properties apply on absolute positioning
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  textThree: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 1,
  },
});

export default BoxScreen;
