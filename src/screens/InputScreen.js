import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const InputScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const renderError = () => {
    return <Text>Password must contain at least 5 letters</Text>;
  };

  return (
    <View>
      {/* By default TextInput has 0 styling */}
      {/*  autoCorrect = false , to swith off for ios, for example email inputs*/}
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is `${name}`</Text>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {password.length < 4 ? renderError() : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default InputScreen;
