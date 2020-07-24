import React, { Component } from "react";
import { View, Text } from "react-native";
import { getMetricMetaInfo } from "../utils/helpers";

export default class AddEntry extends Component {
  render() {
    return (
      <View>
        <Text>Add Entry</Text>
        <MaterialCommunityIcons name="swim" color={"black"} size={35} />
      </View>
    );
  }
}
