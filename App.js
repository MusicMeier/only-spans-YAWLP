import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const store = createStore(reducers)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
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
