import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + action.payload };

    case "Decrement":
      return state.counter - action.payload < 0
        ? state
        : { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter } = state;

  const increaseCount = () => {
    dispatch({ type: "Increment", payload: 1 });
  };
  const decreaseCount = () => {
    dispatch({ type: "Decrement", payload: 1 });
  };
  console.log(counter);
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
