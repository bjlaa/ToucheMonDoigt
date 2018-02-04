import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text
          style={styles.headerTitle}
          textShadowColor='black'
        >Touch my finger...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})
