import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import Finger from './components/Finger'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Finger />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
