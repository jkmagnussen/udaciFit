import React from "react";
import { View } from "react-native";
import AddEntry from "./components/addEntry.js";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}
