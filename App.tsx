import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.hostBtn}  onPress={()=> {}}><Text>HOST</Text></Pressable>
      <Pressable style={styles.joinBtn}  onPress={()=> {}}><Text>JOIN</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232735',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hostBtn:{
      height:100,
      width:100,
      borderRadius:50,
      backgroundColor:'#337AE2',
      color:"#fff",
      textAlign:'center',
    },
    joinBtn:{
      height:100,
      width:100,
      borderRadius:50,
      borderWidth:5,
      backgroundColor:"transparent",
      borderColor:'#337AE2',
      color:"#fff",
      textAlign:'center',
    }
});
