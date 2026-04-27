import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React from "react";

type ImgProps = {
  imageUri: string;
};

export default function Img({ imageUri }: ImgProps) {
  return (
    <Image
      style={styles.container}
      source={{
        uri: imageUri,
      }}
    ></Image>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
});
