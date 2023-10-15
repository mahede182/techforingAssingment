import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Devider: React.FC = (): JSX.Element => {
  return (
    <LinearGradient
      colors={["#F6DB56", "#ffffffaa","#F6DB56"]}
      start={{ x: 0, y: 0.25 }}
      end={{ x: 0.5, y: 0.5 }}
      style={styles.container}
    ></LinearGradient>
  );
};

export default Devider;

const styles = StyleSheet.create({
  container: {
    height: 0.5,
    width: "95%",
    backgroundColor: "#F6DB56",
    alignSelf: "center",
    marginVertical: 16,
  },
});
