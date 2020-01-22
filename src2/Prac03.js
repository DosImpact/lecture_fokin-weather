/**
 * 초간단 기획
 * 미프 처럼 UI 구현
 */

import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => (
  <View style={styles.Container}>
    <View style={styles.HeaderContainer}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          style={{ color: "#FEFEFE" }}
          size={30}
          name="palette"
        ></MaterialCommunityIcons>
        <Text style={{ color: "#FEFEFE", fontWeight: "600", fontSize: 22 }}>
          MEEFF
        </Text>
      </View>
      <View>
        <MaterialCommunityIcons
          style={{ color: "#FEFEFE" }}
          size={30}
          name="settings"
        ></MaterialCommunityIcons>
      </View>
    </View>
  </View>
);
const Navbar = () => (
  <View style={styles.Container}>
    <View style={styles.NavContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <View style={styles.NavItem}>
          <MaterialCommunityIcons
            style={{ color: "#FEFEFE" }}
            size={24}
            name="account-search"
          ></MaterialCommunityIcons>
          <Text style={{ color: "#FEFEFE" }}>친구찾기</Text>
        </View>
        <View style={styles.NavItem}>
          <MaterialCommunityIcons
            style={{ color: "#FEFEFE" }}
            size={24}
            name="arch"
          ></MaterialCommunityIcons>
          <Text style={{ color: "#FEFEFE" }}>라운지</Text>
        </View>
        <View style={styles.NavItem}>
          <MaterialCommunityIcons
            style={{ color: "#FEFEFE" }}
            size={24}
            name="assistant"
          ></MaterialCommunityIcons>
          <Text style={{ color: "#FEFEFE" }}>대화</Text>
        </View>
        <View style={styles.NavItem}>
          <MaterialCommunityIcons
            style={{ color: "#FEFEFE" }}
            size={24}
            name="cogs"
          ></MaterialCommunityIcons>
          <Text style={{ color: "#FEFEFE" }}>설정</Text>
        </View>
      </View>
    </View>
  </View>
);
export default class extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <StatusBar hidden />
        <Header></Header>
        <View style={styles.Content}>
          <Text>가운데 사진넣고... 프로필 + 히스토리</Text>
        </View>
        <Navbar></Navbar>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: { flex: 1 },
  HeaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: "#E63727",
    color: "#FEFEFE"
  },
  NavContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: "#252525",
    color: "#FEFEFE"
  },
  NavItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Content: { flex: 11 },
  Navbar: { flex: 1 }
});
