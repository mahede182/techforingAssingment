import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomHeader } from "../components";

const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text style={{color: "#ffffff"}}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D32",
  },
});
