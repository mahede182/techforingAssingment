import { View, Text } from "react-native";
import React from "react";

const Exerpt = () => {
  return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 10, fontStyle: "normal", fontWeight: "400" }}>
          Network
        </Text>
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text style={{ textAlign: "center", alignSelf: "center" }}>:</Text>
        </View>
        <Text style={{ fontSize: 10, fontStyle: "normal", fontWeight: "400" }}>
          Monitoring
        </Text>
      </View>
  );
};

export default Exerpt;
