import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Img from "./Img";

type SliderItemProps = {
  imageUri: string;
  caption: string;
};

export default function SliderItem({ imageUri, caption }: SliderItemProps) {
  return (
    <View style={styles.container}>
      <Img imageUri={imageUri}></Img>
      <Text style={styles.text}>{caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 5,
    margin: 10,
  },

  text: {
    fontWeight: "bold",
  },
});
