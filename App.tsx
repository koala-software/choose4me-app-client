import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.hostBtn}  onPress={()=> {}}><Text style={styles.btnText}>HOST</Text></Pressable>
      <Pressable style={styles.joinBtn}  onPress={()=> {}}><Text style={styles.btnText}>JOIN</Text></Pressable>
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
      height:120,
      width:120,
      borderRadius:60,
      backgroundColor:'#337AE2',
      marginBottom:60,
      display:'flex',
      justifyContent:'center',
    },
    joinBtn:{
      display:'flex',
      height:120,
      width:120,
      borderRadius:60,
      borderWidth:5,
      backgroundColor:"transparent",
      borderColor:'#337AE2',
      justifyContent:'center',
    },
    btnText:{
      color:"white",
      textAlign:"center",
      fontSize:20,
      fontWeight:"bold",
    }
});
