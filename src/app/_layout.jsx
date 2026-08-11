import { Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tab)" />
        <Stack.Screen name="index"/>
      </Stack>
    </SafeAreaProvider>
  );
}