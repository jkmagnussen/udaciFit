import React, { Component } from "react";
import { View, Slider, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function udaciSlider({ max, unit, step, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />

      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  );
}
