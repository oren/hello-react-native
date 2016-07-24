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
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={{width:50, height: 50, backgroundColor: 'skyblue'}}>just red</Text>
        <Text style={{width:50, height: 50, backgroundColor: 'grey'}}>just bigblue</Text>
        <Text style={{width:50, height: 50, backgroundColor: 'white'}}>bigblue, then red</Text>
        <Text style={{width:50, height: 50, backgroundColor: 'red'}}>red, then bigblue</Text>
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
