import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Timer from "./components/Timer";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Timer></Timer>
    </View>
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
