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
          justifyContent: "space-between",
          flexWrap: 'wrap',
          width: "100%",
        }}
      >
        <Card count={0} title="Malicious Website" />
        <Card count={13} title="Ad Blocked" />
        {/* </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width:'100%'
        }} 
      >*/}
        <Card count={6} title="Unwanted codes in QR" />
        <Card count={1} title="Phishing/Scam" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D32",
    padding: 24,
  },
});
