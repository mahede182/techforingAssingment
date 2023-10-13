import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./src/navigation/RootStack";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={styles.container}>
        <RootStack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D32",
  },
});
