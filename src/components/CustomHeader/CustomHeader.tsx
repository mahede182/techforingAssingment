import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CustomHeader: React.FC = (): JSX.Element => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/homeIcon/BackButton.png")}
        />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Firewall</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  imgStyle: {
    height: 40,
    width: 40,
    marginTop: 8,
  },
  textStyle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    left: -24,
    alignSelf: "center",
    color: "#F6DB56B2",
    marginLeft: 160,
  },
});
