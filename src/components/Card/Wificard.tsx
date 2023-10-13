import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Exerpt from "./Exerpt";
import Bar from "../Barchart/Bar";
import Devider from "../CustomHeader/Devider";

const Wifecard: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerStyle}>
          <Image
            style={styles.imgStyle}
            source={require("../../assets/homeIcon/wifi.png")}
          />
          <Text style={styles.title}>Wifi Connection</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subtitle}>Connected</Text>
          {/* try to blink this */}
          <Image source={require("../../assets/homeIcon/dot.png")} />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 159,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: "#F6DB56",
          }}
        >
          <Exerpt />
          <Exerpt />
          <Exerpt />
        </View>
        <View style={{ width: 159, padding: 5 }}>
          <Exerpt />
          <Exerpt />
          <Exerpt />
        </View>
      </View>
      <Devider />
      <Bar />
    </View>
  );
};

export default Wifecard;

const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 316,
    padding: 12,
    backgroundColor: "red",
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  title: {
    paddingLeft: 12,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
    color: "#F6DB56B2",
  },
  subtitle: {
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fafafa",
    paddingRight: 6,
  },
});
