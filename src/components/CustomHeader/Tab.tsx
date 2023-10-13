import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Tab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.activeTab}>
        <Text style={styles.textStyle}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inactiveTab}>
        <Text style={styles.textStyle}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 49,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    alignSelf: "center",

    backgroundColor: "red",
  },
  activeTab: {
    width: 163,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 6,
    borderRadius: 100,
  },
  textStyle: {
    color: "#F6DB56B2",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign:'center',
  },
  inactiveTab: {
    width: 163,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    margin: 6,
    borderRadius: 100,
  }
});
