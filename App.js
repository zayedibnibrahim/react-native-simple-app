import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem'

const App = () => {
  return (
    <View style={styles.container}>
      <CarItem name="Model S" image={require('./assets/images/ModelS.jpeg')} tagline={'Demo test for model S'} taglineCTA={'love Model S'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;