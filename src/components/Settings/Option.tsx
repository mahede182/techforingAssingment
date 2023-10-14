import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TOptionData } from "../../types/Data";
import CustomSwitch from "../CustomHeader/CustomSwitch";
import Devider from "../CustomHeader/Devider";

const Option: React.FC<TOptionData> = ({
  id,
  imgSource,
  title,
  exerpt,
}: TOptionData) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);
  // console.log(isEnabled,"=== isEnable")
  return (
    <View key={id}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Image source={imgSource} />
          <Text style={styles.textStyle}>{title}</Text>
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
          changeValueImmediately={true}
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
      <Text style={styles.exerpt}>{exerpt}</Text>
      <Devider />
    </View>
  );
};
export default Option;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  textStyle: {
    fontFamily: 'Poppins',
    paddingLeft: 8,
    color: "#F6DB56B2",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  exerpt: {
    fontFamily: 'Poppins',
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    paddingHorizontal: 12,
    paddingTop: 8,
    color: "#fafafa",
  },
});
