import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(counter + 1);
  };
  const decreaseCount = () => {
    setCounter(counter - 1);
  };

  return (
    <View>
      <Button title="Increase" onPress={increaseCount} />
      <Button title="Decrease" onPress={decreaseCount} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
