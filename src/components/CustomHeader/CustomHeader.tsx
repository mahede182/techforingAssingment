import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CustomHeader: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("hello world")}>
        <Image style={styles.imgStyle} source={require("../../assets/homeIcon/BackButton.png")} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Firewall</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16
  },
  imgStyle: {
    height: 40,
    width: 40,
    marginTop: 8
  },
  textStyle: {
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 27,
    alignSelf: "center",
    color: "#F6DB56B2",
    marginLeft: 160
  },
});
