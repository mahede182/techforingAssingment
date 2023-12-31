import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  count: number;
  title: string;
};

const Card: React.FC<Props> = ({ count, title }: Props): JSX.Element => {
  return (
    <LinearGradient
      colors={["#2A2D32", "#131313"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.numTextStyle}>{count}</Text>
      <Text style={styles.titleStyle}>{title}</Text>
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "48%",
    backgroundColor: "#75777b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 24,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4.5066,
      height: 4.5066,
    },
    shadowOpacity: 1,
    shadowRadius: 9.0132,
    elevation: 4.5066,
  },
  numTextStyle: {
    fontFamily: "PoppinsBold",
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
    paddingTop: 12,
  },
});
