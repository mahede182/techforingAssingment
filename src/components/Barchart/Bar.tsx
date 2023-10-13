import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart,StackedBarChart } from "react-native-chart-kit";

const Bar = () => {
  // const chartConfig = {
  //     {
  //         backgroundColor: '#000000',
  //         backgroundGradientFrom: '#1E2923',
  //         backgroundGradientTo: '#08130D',
  //         color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  //         style: {
  //           borderRadius: 16
  //         }
  //       }
  // },
  const graphStyle = {
    marginVertical: 8,
    padding: 5,
    backgroundColor: "#000000",
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: "#F6DB56",
    style: {
      borderRadius: 16,
    },
  };

  const data = {
    labels: ["7 May", "08 May", "9 May", "10 May", "11 May"],
    legend: ["Incoming", "Outgoing"],
    data: [
      [900, 510],
      [480, 760],
      [10,720],
      [710,0],
      [500,480]
    ],
    barColors: ["#F6DB56", "#FAFAFA"]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.35,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <StackedBarChart
      style={graphStyle}
      data={data}
      width={318}
      height={160}
      yAxisLabel=" "
      chartConfig={chartConfig}
      verticalLabelRotation={0}
    />
  );
};

export default Bar;

const styles = StyleSheet.create({});
