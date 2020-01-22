import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    console.log(this.props);
    const { isPlaying, timerDuration, elapsedTime } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName={"ios-play"} />}
          {isPlaying && <Button iconName={"ios-square"} />}
          {isPlaying && (
            <Button
              iconName={"ios-pause"}
              onPressOut={() => alert("it works")}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 25,
    paddingRight: 25
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});
export default Timer;
