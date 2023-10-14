import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exerpt = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Network</Text>
      <View style={styles.colonWrapper}>
        <Text style={styles.colonStyle}>:</Text>
      </View>
      <Text style={styles.textStyle}>Monitoring</Text>
    </View>
  );
};

export default Exerpt;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    fontFamily: "Poppins",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
  },
  colonWrapper: {
    alignSelf: "center",
    justifyContent: "center",
  },
  colonStyle: {
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Poppins",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
