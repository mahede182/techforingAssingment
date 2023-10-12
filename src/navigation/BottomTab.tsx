import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  SettingScreen,
} from "../screens";
import { Scan } from "../components";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="notification">
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="notification" component={NotificationScreen} />
      <Tab.Screen name="scan" component={Scan} />
      <Tab.Screen name="profile" component={ProfileScreen} />
      <Tab.Screen name="setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
