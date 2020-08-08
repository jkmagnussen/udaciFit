import React from "react";
import { Text, View, Slider, StyleSheet } from "react-native";
import AddEntry from "./components/addEntry.js";

export default class App extends React.Component {
  state = {
    value: 0,
  };
  render() {
    return (
      <View>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />
        <Text>Value: {this.state.value} </Text>
        <AddEntry />
      </View>
    );
  }
}
