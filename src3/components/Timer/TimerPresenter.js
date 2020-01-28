import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({ timerInterval });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    console.log(this.props);
    const {
      isPlaying,
      timerDuration,
      elapsedTime,
      startTimer,
      restartTimer
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>{timerDuration - elapsedTime}</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && (
            <Button iconName={"ios-play"} onPressOut={startTimer} />
          )}
          {isPlaying && (
            <Button iconName={"ios-square"} onPressOut={restartTimer} />
          )}
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
