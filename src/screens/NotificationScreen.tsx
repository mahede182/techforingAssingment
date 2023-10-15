import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GBar from "../components/Barchart/GBar";

const NotificationScreen: React.FC = (): JSX.Element => {
  return (
    // <VicotyBar />
    <GBar />
  );
};

export default NotificationScreen;

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
