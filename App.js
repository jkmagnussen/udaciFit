import React from "react";
import { Text, View, Slider, StyleSheet, Platform } from "react-native";
import AddEntry from "./components/addEntry.js";
import { createStore } from "redux"
import { Provider } from 'react-redux'
import reducer from "./reducers"
import History from "./components/history.js"

export default class App extends React.Component {
  state = {
    value: 0,
  };
  render() {
    return (
      // Main Body of Appp
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{height: 20}} />
         <History />
       </View>
      </Provider>

    );
  }
}
