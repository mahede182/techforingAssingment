import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Caution, CustomHeader, Devider, Option, Tab } from "../components";
import CustomSwitch from "../components/CustomHeader/CustomSwitch";
import { OptionData } from "../constants/data";
import { TOptionData } from "../types/Data";
import { LinearGradient } from "expo-linear-gradient";

const SettingScreen: React.FC = (): JSX.Element => {
  return (
    <LinearGradient
      colors={["#2A2D32", "#050505"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <CustomHeader />
      <Tab />
      <LinearGradient
        colors={["#2A2D32", "#131313"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.wrapOption}
      >
        <FlatList
          data={OptionData}
          renderItem={({ item }) => (
            <Option
              id={item.id}
              imgSource={item.imgSource}
              title={item.title}
              exerpt={item.exerpt}
            />
          )}
        />
      </LinearGradient>
      <Caution />
    </LinearGradient>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D32",
    padding: 24,
  },
  wrapOption: {
    marginTop: 24,
    paddingVertical: 24,
    paddingHorizontal: 12,
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
});
