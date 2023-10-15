import { Image, StyleSheet, Text, View, Platform } from "react-native";
import { exerptData } from "../../constants/data";
import React from "react";
import Exerpt from "./Exerpt";
import GBar from "../Barchart/GBar";
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
        <View style={styles.exerptContainer}>
          {/* {exerptData.map((exerpt) => (
            <Exerpt
              id={exerpt.id}
              lExerpt={exerpt.lExerpt}
              rExerpt={exerpt.rExerpt}
              color={exerpt.color}
            />
          ))}
        </View> */}
          <Exerpt lExerpt="Wifi Name" rExerpt="TechForing" color="#F6DB56" />
          <Exerpt lExerpt="Network" rExerpt="Monitoring" color="#fafafa" />
          <Exerpt lExerpt="Firewall" rExerpt="Active" color="#fafafa" />
        </View>
        <View
          style={{width: '48%', paddingLeft: 10}}
        >
          <Exerpt lExerpt="Network type" rExerpt="Public" color="#F6DB56" />
          <Exerpt lExerpt="Protocol" rExerpt="WPA" color="#fafafa" />
        </View>
      </View>
      <Devider />
      <GBar />
    </View>
  );
};

export default Wifecard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "48%",
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 24,
    marginVertical: 24,
    alignSelf: "center",
    backgroundColor: "#303337",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.50)",
        shadowOffset: { width: -4.5066, height: -4.5066 },
        shadowOpacity: 1,
        shadowRadius: 9.0132,
      },
      android: {
        elevation: 4,
        shadowColor: "rgba(0, 0, 0, 0.75)",
      },
    }),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16
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
    fontFamily: "PoppinsBold",
    paddingLeft: 12,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#F6DB56B2",
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fafafa",
    paddingRight: 6,
  },
  exerptContainer: {
    width: "48%",
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderRightColor: "#F6DB56",
  },
});
