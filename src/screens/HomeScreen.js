import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // props.navigation is an object that contains methods for navigation.
  // navigation contains methods for navigation such as navigate(), goBack(), push(), pop(), popToTop(), etc.
  // navigate() is a method that allows you to navigate to a different screen in your app. It accepts a string as an argument that represents the name of the route you want to navigate to.
  // console.log(navigation);

  const navigateToComponentsScreen = () => {
    navigation.navigate("Components");
  };
  const navigatToListScreen = () => {
    navigation.navigate("List");
  };
  const navigatToImageScreen = () => {
    navigation.navigate("ImageScreen");
  };
  const navigatToCounterScreen = () => {
    navigation.navigate("Counter");
  };
  const navigatToColorScreen = () => {
    navigation.navigate("Color");
  };
  const navigatToSquareScreen = () => {
    navigation.navigate("Square");
  };
  const navigatToInputScreen = () => {
    navigation.navigate("InputScreen");
  };
  const navigatToBoxtScreen = () => {
    navigation.navigate("Box");
  };

  return (
    <View>
      <Text style={styles.title}>Hello Native</Text>
      {/* Button component not that customizable, prestyled */}
      <Button
        onPress={navigateToComponentsScreen}
        title="Go to Components Demo"
      />
      {/* TouchableOpacity highly customizable, accepts multiple components (image, text, etc) */}
      <TouchableOpacity style={styles.navigation} onPress={navigatToListScreen}>
        <Text style={styles.text}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigation}
        onPress={navigatToImageScreen}
      >
        <Text style={styles.text}>Go to Image Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigation}
        onPress={navigatToCounterScreen}
      >
        <Text style={styles.text}>Go to Counter Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigation}
        onPress={navigatToColorScreen}
      >
        <Text style={styles.text}>Go to Color Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigation}
        onPress={navigatToSquareScreen}
      >
        <Text style={styles.text}>Go to Square Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigation}
        onPress={navigatToInputScreen}
      >
        <Text style={styles.text}>Go to Input Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigation} onPress={navigatToBoxtScreen}>
        <Text style={styles.text}>Go to Box Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
  },
  navigation: {
    alignSelf: "center",
    marginVertical: 5,
  },
});

export default HomeScreen;
