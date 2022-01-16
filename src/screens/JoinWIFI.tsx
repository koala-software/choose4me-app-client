import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const JoinWIFI = () => {
  const [roomCode, setRoomCode] = useState("454040");

  return (
    <View
      style={{
        padding: 30,
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{ fontSize: 40 }}
        keyboardType="number-pad"
        onChangeText={(text) => setRoomCode(text)}
        value={roomCode}
      />
    </View>
  );
};

export default JoinWIFI;
