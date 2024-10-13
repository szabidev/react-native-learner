import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// For creating list we use the FlatList primitive component from React Native.
// FlatList is a component that helps you render a list of items. It's a core component designed to efficiently render large lists of data.
// It needs two props to render a list:
// data: An array of data that you want to render.
// renderItem: A function that takes an item from the data array and returns a React element.
// ! Don't forget about the key prop, use key or keyExtractor

const ListScreen = () => {
  const friends = [
    {
      name: "Friend #1",
      age: 20,
    },
    {
      name: "Friend #2",
      age: 45,
    },
    {
      name: "Friend #3",
      age: 32,
    },
    {
      name: "Friend #4",
      age: 27,
    },
    {
      name: "Friend #5",
      age: 53,
    },
    {
      name: "Friend #6",
      age: 30,
    },
    {
      name: "Friend #7",
      age: 42,
    },
    {
      name: "Friend #8",
      age: 19,
    },
    {
      name: "Friend #9",
      age: 25,
    },
  ];

  return (
    <FlatList
      // horziontal = true , scrolling horizontally
      // horizontal
      // Do not show horizontal scroll bar
      // showsHorizontalScrollIndicator={false}
      // keyExtractor prop is a function that takes an item from the data array and returns a unique key for that item.
      keyExtractor={(friend) => friend.name}
      data={friends}
      // element argument has two properties: {item : {friends[x]}, index }.
      renderItem={({ item }) => {
        return (
          // If key is not provided and want to delete an item for example, React will delete all the items and re-render them.If key is provided, React will only update the items that have changed.
          <View style={styles.listStyle}>
            <Text style={styles.nameStyle}>Name :{item.name}</Text>
            <Text style={styles.ageStyle}>Age :{item.age}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 20,
  },
  ageStyle: {
    fontSize: 15,
  },
  listStyle: {
    marginVertical: 40,
  },
});

export default ListScreen;
