import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CustomHeader from "../CustomHeader/CustomHeader";

const Scan: React.FC = (): JSX.Element => {
  return (
    <LinearGradient
      colors={["#2A2D32", "#050505"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <CustomHeader />
      <Text style={styles.textStyle}>Scan</Text>
    </LinearGradient>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2A2D32",
    padding: 24,
  },
  textStyle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    alignSelf: "center",
    color: "#F6DB56B2",
  },
});
