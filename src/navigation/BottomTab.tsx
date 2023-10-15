import { StyleSheet, Text, View, Image } from "react-native";
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

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // left: -5,
          // right: -5,
          // bottom: -5,
          backgroundColor: "#2A2D32",
          height: 90,
          // width: "100%",
          ...styles.shadow,
          // borderTopColor: 'rgba(255, 255, 255, 0.30)',
          // borderTopWidth: 5
        },
      }}
      initialRouteName="home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  source={require("../assets/tabIcon/ActiveHome.png")}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                  }}
                />
              ) : (
                <Image
                  source={require("../assets/tabIcon/InactiveHome.png")}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                  }}
                />
              )}
            </View>
          ),
        }}
        name="home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/tabIcon/Notification.png")}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? "#FCE977" : "#ffffff",
                }}
              />
            </View>
          ),
        }}
        name="notification"
        component={NotificationScreen}
      />
      <Tab.Screen
        name="scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 90,
                width: 90,
                backgroundColor: "rgb(84, 86, 89)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 80,
                top: -35,
                borderColor: "rgba(0, 0, 0, 0.45)",
                borderWidth: 5,
              }}
            >
              <Text style={styles.scanText}>Scan</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/tabIcon/Profile.png")}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? "#FCE977" : "#ffffff",
                }}
              />
            </View>
          ),
        }}
        name="profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/tabIcon/Settings.png")}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? "#FCE977" : "#ffffff",
                }}
              />
            </View>
          ),
        }}
        name="setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  scanText: {
    fontFamily: "PoppinsBold",
    color: "#F6DB56",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
  },
});
