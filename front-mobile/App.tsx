import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Projeto game survey versão mobile com react native!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white', 
    
  },
  text: {
    display: 'flex',
    color: 'white',
    fontSize: 35,
    fontFamily: 'Arial Black',
    justifyContent: "center",
    alignItems: 'center',
    textShadowColor:'#989898',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    borderWidth: 4,
    borderColor: "thistle",
    borderRadius: 20,
    marginHorizontal: 10, 
    marginVertical: 20,
    padding: 20,    

  }
});
