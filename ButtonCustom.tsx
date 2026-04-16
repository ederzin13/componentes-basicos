import { Pressable, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "./styles/global";

export default function ButtonCustom() {
  return (
    <TouchableOpacity style={globalStyles.buttonCustom}>
      <Pressable>
        <Text style={globalStyles.whiteText}>Boberson</Text>
      </Pressable>
    </TouchableOpacity>
  );
}
