import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";
import TopTab from "./TopTab";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="topTabStack" component={TopTab} /> */}
        <Stack.Screen name="tabStack" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
