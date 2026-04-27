import { View, Text, ScrollView } from "react-native";
import React from "react";
import Img from "./Img";
import SliderItem from "./SliderItem";

export default function SideScroll() {
  return (
    <ScrollView horizontal>
      <SliderItem
        imageUri="https://res.cloudinary.com/ddfxcmxk7/image/upload/v1713639329/samples/smile.jpg"
        caption="Cidadão"
      ></SliderItem>
      <SliderItem
        imageUri="https://res.cloudinary.com/ddfxcmxk7/image/upload/v1713639309/samples/animals/three-dogs.jpg"
        caption="Cachorros"
      ></SliderItem>
      <SliderItem
        imageUri="https://res.cloudinary.com/ddfxcmxk7/image/upload/v1713639303/samples/animals/cat.jpg"
        caption="Gato!"
      ></SliderItem>
      <SliderItem
        imageUri="https://res.cloudinary.com/ddfxcmxk7/image/upload/v1713639303/samples/ecommerce/analog-classic.jpg"
        caption="Relógio"
      ></SliderItem>
    </ScrollView>
  );
}
