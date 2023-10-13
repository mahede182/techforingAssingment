import { FlatList, Image, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomHeader, Devider, Option, Tab } from "../components";
import CustomSwitch from "../components/CustomHeader/CustomSwitch";
import { OptionData } from "../constants/data";
import { TOptionData } from "../types/Data";

const SettingScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Tab />
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
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D32",
    padding: 24,
  },
});
