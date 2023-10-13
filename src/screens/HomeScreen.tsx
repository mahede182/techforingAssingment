import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, CustomHeader, Tab, Wificard } from "../components";

import { Dimensions } from "react-native";

console.log({
  width: Dimensions.get("window").width / 390,
  height: Dimensions.get("window").height,
});
const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Tab />
      <Wificard />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card />
        <Card />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D32",
    padding: 24
  },
});
