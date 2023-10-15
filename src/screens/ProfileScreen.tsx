import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A2D32",
    padding: 24,
  },
  textStyle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    alignSelf: "center",
    color: "#F6DB56B2",
  },
});
