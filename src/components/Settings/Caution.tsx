import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Caution: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/settingIcon/causion.png")}
        resizeMode="contain"
      />
      <Text style={styles.textStyle}>
        Configuring firewall settings incorrectly can leave your device and
        personal information vulnerable to cyber attacks. Please ensure you have
        a thorough understanding of the settings before making any changes
      </Text>
    </View>
  );
};

export default Caution;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 36,
    width: 36,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  textStyle: {
    fontFamily: "Poppins",
    color: "#F6DB56B2",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "normal",
  },
});
