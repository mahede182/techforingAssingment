import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.numTextStyle}>0</Text>
      <Text style={styles.titleStyle}>Malicious Website</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 165,
    backgroundColor: "#00ffff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 12
  },
  numTextStyle: {
    color: "#F6DB56",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    // lineHeight: normal,
  },
  titleStyle: {
    color: "#fafafa",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: 12
  },
});
