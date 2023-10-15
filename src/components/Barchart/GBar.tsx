import React from "react";
import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const GBar = () => {
  const barData = [
    {
      value: 900,
      label: "07 May",
      spacing: 3,
      labelWidth: 60,
      labelTextStyle: { color: "#fafafa",fontFamily: "Poppins", },
      frontColor: "#F6DB56",
    },
    { value: 600, frontColor: "#FAFAFA80" },
    {
      value: 480,
      label: "08 May",
      spacing: 2,
      labelWidth: 60,
      labelTextStyle: { color: "#fafafa",fontFamily: "Poppins", },
      frontColor: "#F6DB56",
    },
    { value: 800, frontColor: "#FAFAFA80" },
    {
      value: 20,
      label: "09 May",
      spacing: 2,
      labelWidth: 60,
      labelTextStyle: { color: "#fafafa",fontFamily: "Poppins", },
      frontColor: "#F6DB56",
    },
    { value: 720, frontColor: "#FAFAFA80" },
    {
      value: 730,
      label: "10 May",
      spacing: 2,
      labelWidth: 60,
      labelTextStyle: { color: "#fafafa" ,fontFamily: "Poppins",},
      frontColor: "#F6DB56",
    },
    { value: 0, frontColor: "#FAFAFA80" },
    {
      value: 440,
      label: "11 May",
      spacing: 2,
      labelWidth: 60,
      labelTextStyle: { color: "#fafafa",fontFamily: "Poppins", },
      frontColor: "#F6DB56",
    },
    { value: 460, frontColor: "#FAFAFA80" },
  ];

  const renderTitle = () => {
    return (
      <View style={{ marginVertical: 12 }}>
        <Text
          style={{
            fontFamily: "PoppinsBold",
            color: "white",
            fontSize: 20,
            // fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Data Usage Statistic
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 24,
            backgroundColor: "yellow",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#F6DB56",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins",
                width: 100,
                height: 30,
                color: "lightgray",
              }}
            >
              Incomming
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#FAFAFA80",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins",
                width: 100,
                height: 30,
                color: "lightgray",
              }}
            >
              Outgoing
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        paddingHorizontal: 12,
        width: '100%',
      }}
    >
      <BarChart
        data={barData}
        barWidth={24}
        spacing={18}
        barBorderRadius={5}
        hideRules
        xAxisThickness={2}
        yAxisThickness={2}
        yAxisTextStyle={{ color: "#fafafa", width: 50 }}
        noOfSections={4}
        maxValue={1000}
        height={100}
      />
      {renderTitle()}
    </View>
  );
};
export default GBar;
