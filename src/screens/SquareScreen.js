import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const initialState = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === {type: 'change_red' || 'change_green' || 'change_blue, payload: +10,-10}

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  const CHANGE_COLOR = 15;

  const increaseRedColor = () => {
    dispatch({ type: "change_red", payload: CHANGE_COLOR });
  };

  const decreaseRedColor = () => {
    dispatch({ type: "change_red", payload: -1 * CHANGE_COLOR });
  };

  const increaseGreenColor = () => {
    dispatch({ type: "change_green", payload: CHANGE_COLOR });
  };

  const decreaseGreenColor = () => {
    dispatch({ type: "change_green", payload: -1 * CHANGE_COLOR });
  };

  const increaseBlueColor = () => {
    dispatch({ type: "change_blue", payload: CHANGE_COLOR });
  };
  const decreaseBlueColor = () => {
    dispatch({ type: "change_blue", payload: -1 * CHANGE_COLOR });
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={increaseRedColor}
        onDecrease={decreaseRedColor}
      />
      <ColorCounter
        color="Blue"
        onIncrease={increaseBlueColor}
        onDecrease={decreaseBlueColor}
      />
      <ColorCounter
        color="Green"
        onIncrease={increaseGreenColor}
        onDecrease={decreaseGreenColor}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green} ,${blue})`,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
