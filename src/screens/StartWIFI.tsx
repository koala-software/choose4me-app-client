import React, { useMemo, useRef, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import RoundBtn from "../components/RoundBtn";
import JoinWIFI from "./JoinWIFI";
import Animated from "react-native-reanimated";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const StartWIFI = () => {
  const joinSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["80%"], []);

  const handlePresentModalPress = useCallback(() => {
    joinSheetRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleClosePress = () => joinSheetRef.current?.dismiss();

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <RoundBtn text={"HOST"} onPress={handleClosePress} />
        <RoundBtn text={"JOIN"} outline onPress={handlePresentModalPress} />
      </View>
      <BottomSheetModal
        ref={joinSheetRef}
        index={0}
        enablePanDownToClose
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <JoinWIFI />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232735",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default StartWIFI;
