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
    height: 120,
    width: '48%',
    backgroundColor: "#75777b",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 24,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOffset: {
      width: 4.5066,
      height: 4.5066,
    },
    shadowOpacity: 1,
    shadowRadius: 9.0132,
    elevation: 4.5066,
  },
  numTextStyle: {
    fontFamily: 'PoppinsBold',
    color: "#F6DB56",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "normal",
    // lineHeight: normal,
  },
  titleStyle: {
    fontFamily: "Poppins",
    color: "#fafafa",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    paddingTop: 12
  },
});
