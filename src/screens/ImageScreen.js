import React from "react";
import { View, StyleSheet, FlatListComponent, FlatList } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const imageData = [
    {
      title: "Forest",
      imageUrl: require("../../assets/images/forest.jpg"),
      imageScore: 9,
    },
    {
      title: "Beach",
      imageUrl: require("../../assets/images/beach.jpg"),
      imageScore: 8,
    },
    {
      title: "Mountain",
      imageUrl: require("../../assets/images/mountain.jpg"),
      imageScore: 10,
    },
  ];

  return (
    <View>
      <FlatList
        style={style.listStyle}
        data={imageData}
        keyExtractor={(item) => item.title}
        // element argument has two properties: {item : {imageData[x]}, index }.
        renderItem={({ item }) => (
          <ImageDetail
            title={item.title}
            imageUrl={item.imageUrl}
            imageScore={item.imageScore}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listStyle: {
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default ImageScreen;
