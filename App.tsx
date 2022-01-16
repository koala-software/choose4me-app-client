import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StartWIFI from "./src/screens/StartWIFI";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StartWIFI />
    </GestureHandlerRootView>
  );
}
