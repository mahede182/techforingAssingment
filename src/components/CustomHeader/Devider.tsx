import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Devider: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        height: 0.5,
        width: "95%",
        backgroundColor: "#F6DB56",
        alignSelf: "center",
        marginVertical: 16,
      }}
    ></View>
  );
};

export default Devider;

const styles = StyleSheet.create({});
