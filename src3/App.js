import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(reducer);
//console.log(store); // dispatch,getState,replaceReducer,subscribe
//console.log(store.getState()); // 원하던 State오브젝트가 나온다.

export default function Loading() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Timer></Timer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CE0B24"
  }
});
