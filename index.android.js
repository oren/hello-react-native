/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{flex: 1, backgroundColor: 'skyblue'}}>just red</Text>
        <Text style={{flex: 1, backgroundColor: 'grey'}}>just bigblue</Text>
        <Text style={{flex: 1, backgroundColor: 'white'}}>bigblue, then red</Text>
        <Text style={{flex: 1, backgroundColor: 'red'}}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
