import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue}) `;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const genereatColor = () => {
    setColors([...colors, randomRGB()]);
  };
  console.log(colors);

  return (
    <View>
      <Button title="Add a color" onPress={genereatColor} />
      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: item,
            }}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorScreen;
