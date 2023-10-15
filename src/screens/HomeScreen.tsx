import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, CustomHeader, Tab, Wificard } from "../components";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <LinearGradient
      colors={["#2A2D32", "#050505"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <CustomHeader />
      <Tab />
      <Wificard />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Card count={0} title="Malicious Website" />
        <Card count={13} title="Ad Blocked" />
        <Card count={6} title="Unwanted codes in QR" />
        <Card count={1} title="Phishing/Scam" />
      </View>
    </LinearGradient>
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
