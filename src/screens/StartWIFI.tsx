import React, { useMemo, useRef, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import RoundBtn from "../components/RoundBtn";
import JoinWIFI from "./JoinWIFI";
import BottomSheet from "@gorhom/bottom-sheet";

const StartWIFI = () => {
  const joinSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["80%"], []);

  const handlePresentPress = useCallback(() => {
    joinSheetRef.current?.expand();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  joinSheetRef.current?.close();

  return (
    <View style={styles.container}>
      <RoundBtn text={"HOST"} />
      <RoundBtn text={"JOIN"} outline onPress={handlePresentPress} />
      <BottomSheet
        ref={joinSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <JoinWIFI />
      </BottomSheet>
    </View>
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
