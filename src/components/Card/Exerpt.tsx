import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TExerptData } from "../../types/Data";

const Exerpt: React.FC<TExerptData> = ({ lExerpt, rExerpt, color }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{lExerpt}</Text>
      <View style={styles.colonWrapper}>
        <Text style={styles.colonStyle}>:</Text>
      </View>
      <Text style={[styles.textStyle, { color: `${color}` }]}>{rExerpt}</Text>
    </View>
  );
};

export default Exerpt;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingVertical: 4
    // backgroundColor: 'white'
  },
  textStyle: {
    fontFamily: "Poppins",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FAFAFA80",
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
    color: "#FAFAFA80",
  },
});
