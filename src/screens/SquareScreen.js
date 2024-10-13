import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [redColor, setRedColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [blueColor, setBlueColor] = useState(0);

  const CHANGE_COLOR = 10;

  const setColor = (color, change) => {
    // color === red, green, blue
    // change === CHANGE_COLOR
    if (color === "red") {
      if (redColor + change > 255 || redColor - change < 0) {
        return;
      } else {
        setRedColor(redColor + change);
      }
    }

    if (color === "green") {
      if (greenColor + change > 255 || greenColor - change < 0) {
        return;
      } else {
        setGreenColor(greenColor + change);
      }
    }

    if (color === "blue") {
      if (blueColor + change > 255 || blueColor - change < 0) {
        return;
      } else {
        setBlueColor(blueColor + change);
      }
    }
  };

  const increaseRedColor = () => {
    setColor("red", CHANGE_COLOR);
  };

  const decreaseRedColor = () => {
    setColor("red", -1 * CHANGE_COLOR);
  };

  const increaseGreenColor = () => {
    setColor("green", CHANGE_COLOR);
  };

  const decreaseGreenColor = () => {
    setColor("green", -1 * CHANGE_COLOR);
  };

  const increaseBlueColor = () => {
    setColor("blue", CHANGE_COLOR);
  };
  const decreaseBlueColor = () => {
    setColor("blue", -1 * CHANGE_COLOR);
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
          backgroundColor: `rgb(${redColor}, ${blueColor}, ${greenColor})`,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
