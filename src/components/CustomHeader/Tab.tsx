import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Tab = () => {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");
  const navigation = useNavigation();

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName === "Dashboard") {
      navigation.navigate("home");
    } else if (tabName === "Settings") {
      navigation.navigate("setting");
    }
  };

  return (
    <LinearGradient
        colors={['#2A2D32', '#131313']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }} style={styles().container}>
      <TouchableOpacity
        style={
          activeTab === "Settings" ? styles().activeTab : styles().inactiveTab
        }
        onPress={() => handleTabPress("Dashboard")}
      >
        <Text style={styles().textStyle}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          activeTab === "Dashboard" ? styles().activeTab : styles().inactiveTab
        }
        onPress={() => handleTabPress("Settings")}
      >
        <Text style={styles().textStyle}>Settings</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Tab;

const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 55,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 50,
      alignSelf: "center",
      marginTop: 20,
    },
    activeTab: {
      width: "40%",
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#131313",
      paddingVertical: 8,
      paddingHorizontal: 12,
      margin: 6,
      borderRadius: 100,
    },
    textStyle: {
      fontFamily: "Poppins",
      color: "#F6DB56B2",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "500",
      textAlign: "center",
    },
    inactiveTab: {
      width: "40%",
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      margin: 6,
      borderRadius: 100,
    },
  });
