import React from "react";
import { StyleSheet, View } from "react-native";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux"; //provider는 store를 자식 컴포넌트들에게 넣어준다.

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
