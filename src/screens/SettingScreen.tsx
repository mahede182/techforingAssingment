import { Image, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomHeader, Devider, Tab } from "../components";
import CustomSwitch from "../components/CustomHeader/CustomSwitch";

const SettingScreen: React.FC = (): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);

  return (
    <View style={styles.container}>
      <CustomHeader />
      <Tab />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 12,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/settingIcon/connect.png")} />
          <Text
            style={{
              paddingLeft: 8,
              color: "#F6DB56B2",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            Monitor Connections
          </Text>
        </View>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={isEnabled ? "rgb(246, 219, 86)" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
        <CustomSwitch
          barHeight={24}
          switchWidth={20}
          switchHeight={20}
          value={isEnabled}
          onValueChange={toggleSwitch}
          disabled={false}
          backgroundActive={"#767577"}
          backgroundInactive={"#767577"}
          circleActiveColor={"#F6DB56B2"}
          circleInActiveColor={"#ffffff"}
          // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
          innerCircleStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          outerCircleStyle={{}}
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={3}
          switchRightPx={3}
          switchWidthMultiplier={2.2}
          switchBorderRadius={30}
        />
      </View>
      <Text style={{ fontSize: 10, fontStyle: "normal", fontWeight: "400" ,paddingHorizontal: 12,color: '#fafafa'}}>
        React Time Monitoring
      </Text>
      <Devider />
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
