import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Platform } from "react-native";
import FusionCharts from "react-native-fusioncharts";

const dataSource = {
  chart: {
    caption: "Split of visitors by Channels",
    placevaluesinside: "1",
    showvalues: "0",
    plottooltext: "<b>$dataValue</b> visitors from $label in $seriesName",
    theme: "candy"
  },
  categories: [
    {
      category: [
        {
          label: "Organic"
        },
        {
          label: "Offline Stores"
        },
        {
          label: "Email Campaigns"
        },
        {
          label: "Social Events"
        },
        {
          label: "Paid Channels"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "2017",
      data: [
        {
          value: "17000"
        },
        {
          value: "19500"
        },
        {
          value: "12500"
        },
        {
          value: "14500"
        },
        {
          value: "17500"
        }
      ]
    },
    {
      seriesname: "2018",
      data: [
        {
          value: "25400"
        },
        {
          value: "29800"
        },
        {
          value: "21800"
        },
        {
          value: "19500"
        },
        {
          value: "21200"
        }
      ]
    }
  ],
  trendlines: [
    {
      line: [
        {
          startvalue: "16200",
          color: "#5D62B5",
          thickness: "1.5",
          displayvalue: "2017's Avg."
        },
        {
          startvalue: "23500",
          color: "#29C3BE",
          thickness: "1.5",
          displayvalue: "2018's Avg."
        }
      ]
    }
  ]
};

export default class LBar extends Component {
  constructor(props) {
    super(props);

    this.state = dataSource;

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      ios: require("./assets/fusioncharts.html"),
      android: { uri: "file:///android_asset/fusioncharts.html" }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  chartContainer: {
    height: 200
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("ReactNativeFusionCharts", () => App);
