import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play';
import AppLoading from 'expo-app-loading';
import React from 'react';
import Header from './src/components/Header';
import Home from './src/pages/Home';

export default function App() {

  let [fontsLoaded] = useFonts({
    Play_700Bold,
    Play_400Regular
  });

  if (fontsLoaded === false) {
    return <AppLoading></AppLoading>
  } else {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Home></Home>
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0B1F35',  
  }

});


