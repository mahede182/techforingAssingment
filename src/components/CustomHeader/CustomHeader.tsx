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
    width: '95%',
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
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 18,
    left: -24,
    alignSelf: "center",
    color: "#F6DB56B2",
    marginLeft: 160
  },
});
