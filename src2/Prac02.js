import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Loading = () => (
  <LinearGradient
    colors={["#77A1D3", "#79CBCA", "#E684AE"]}
    style={styles.Container}
  >
    <View style={styles.Box}>
      <Text>Loading...</Text>
    </View>
  </LinearGradient>
);
const Container = ({ latitude, longitude }) => {
  return (
    <LinearGradient
      colors={["#77A1D3", "#79CBCA", "#E684AE"]}
      style={styles.Container}
    >
      <View style={styles.Container}>
        {Alert.alert("FIND YOU!!")}
        <View style={styles.Box}>
          <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
          <Text>latitude : {latitude}</Text>
        </View>
        <View style={styles.Box2}>
          <MaterialCommunityIcons size={96} name="track-light" />
          <Text>longitude : {longitude}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
class Prac02 extends React.Component {
  state = {
    loading: true
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.setState({ loading: false, latitude, longitude });
    } catch (error) {
      Alert.alert("can't find you");
      console.log("can't find you");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { loading, latitude, longitude } = this.state;
    return loading ? (
      <Loading></Loading>
    ) : (
      <Container latitude={latitude} longitude={longitude}></Container>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  Box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Box2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Prac02;
