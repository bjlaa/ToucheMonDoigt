import React from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Player } from 'react-native-audio-toolkit'

export default class Finger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isBarryWhited: false,
      player: false
    }

    this.toggleBarryWhite = this.toggleBarryWhite.bind(this)
  }

  toggleBarryWhite() {
    if (!this.state.player) {
      const player = new Player('https://jeeliz.com/audio/barrywhite.mp3')
      this.setState({ player: player }, () => {
        if (!this.state.isBarryWhited) {
          this.state.player.play()
        } else {
          this.state.player.stop()
        }        
      })
    } else {
      if (!this.state.isBarryWhited) {
        this.state.player.play()
      } else {
        this.state.player.stop()
      }      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.toggleBarryWhite}
        >
          <Image
            source={require('../../src/images/finger.jpeg')}
            style={styles.image}
          />          
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4
  },
  image: {
    transform: [{ rotate: '180deg' }, { translateY: 400 }]
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    flex: 1
  }
})
