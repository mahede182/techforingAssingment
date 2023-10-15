import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart, LineChart, StackedBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const Bar = () => {
  const screenWidth = Dimensions.get("window").width * 0.95;
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
    padding: 10,
    backgroundColor: "#2A2D32",
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: "#F6DB56",
    style: {
      borderRadius: 30,  
      overflow: 'hidden'
    },
  };

  const data = {
    datasets: [
      { data: [900, 480, 10, 710, 500], color: () => "#fafafa", strokeWidth: 2 },
      { data: [510, 760, 720, 0, 480], color: () => "#F6DB56" },
    ],
    labels: ["7 May", "08 May", "9 May", "10 May", "11 May"],
    legend: ["Incoming", "Outgoing"],
  };
  const chartConfig = {
    backgroundGradientFrom: "#2A2D32",
    backgroundGradientFromOpacity: 0.25,
    backgroundGradientTo: "#131313",
    backgroundGradientToOpacity: 0.25,
    color: (opacity = 0.5) => `rgba(250, 250, 250, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.35,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <LineChart
      style={graphStyle}
      data={data}
      width={screenWidth}
      height={170}
      yAxisLabel=" "
      chartConfig={chartConfig}
      verticalLabelRotation={0}
    />
  );
};

export default Bar;

const styles = StyleSheet.create({});
