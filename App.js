import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import RestaurantsContainer from './components/RestaurantsContainer'

export default function App() {

  const store = createStore(reducers)

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RestaurantsContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    backgroundColor: '#fff',
  },
});
