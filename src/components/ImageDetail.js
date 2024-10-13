import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const ImageDetail = ({ title, imageUrl, imageScore }) => {
  return (
    <View>
      {/* Image component uses source property, and require function for the image source */}
      <Image source={imageUrl} />
      <Text>{title}</Text>
      <Text>{imageScore}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;
