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
      <View>
        <Text style={{width: 360, height:50, backgroundColor: 'skyblue'}}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
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
