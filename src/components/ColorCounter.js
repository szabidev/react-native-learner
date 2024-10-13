import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  const handleColorIncrease = () => {
    onIncrease();
  };

  const handleColorDecrease = () => {
    onDecrease();
  };

  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={handleColorIncrease} />
      <Button title={`Decrease ${color}`} onPress={handleColorDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 5,
  },
});

export default ColorCounter;
