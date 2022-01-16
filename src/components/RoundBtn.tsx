import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

interface Props {
  onPress?: (event: any) => void | null;
  text: string;
  outline?: boolean;
}

const RoundBtn: React.FC<Props> = ({ onPress, text, outline }) => {
  return (
    <Pressable
      style={outline == true ? styles.outlineBtn : styles.fillBtn}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fillBtn: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "#337AE2",
    marginBottom: 60,
    display: "flex",
    justifyContent: "center",
  },
  outlineBtn: {
    display: "flex",
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 5,
    backgroundColor: "#232735",
    borderColor: "#337AE2",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RoundBtn;
