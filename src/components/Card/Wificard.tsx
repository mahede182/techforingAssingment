import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Wifecard: React.FC = (): JSX.Element => {
  return (
    <View>
      <View>

      <Image source={require('../../assets/homeIcon/wifi.png')} />
      <Text>Wifi Connection</Text>
      <Text>Connected</Text>
      </View>
      <View>
        <Text>Connected</Text>
        {/* try to blink this */}
        <Image source={require('../../assets/homeIcon/dot.png')}/>
      </View>
    </View>
  );
};

export default Wifecard;

const styles = StyleSheet.create({});
