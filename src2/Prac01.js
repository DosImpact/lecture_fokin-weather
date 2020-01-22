import React from "react";
import { Text, View, StyleSheet } from "react-native";

/** 가장 basic 한 화면. */
export const Prac011 = () => (
  <View style={styles.container}>
    <View style={styles.headerBox}>
      <Text>HEADER</Text>
    </View>
    <View style={styles.contentBox}>
      <Text>Content</Text>
      <Text>Content</Text>
      <Text>Content</Text>
      <Text>Content</Text>
      <Text>Content</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerBox: {
    flex: 1,
    backgroundColor: "#77A1D3",
    alignItems: "center",
    justifyContent: "center"
  },
  contentBox: {
    flex: 4,
    backgroundColor: "#E684AE",
    alignItems: "center",
    justifyContent: "center"
  }
});
