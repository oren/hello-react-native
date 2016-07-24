/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    let foo = {width: 153, height: 110};

    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        <Image source={pic} style={foo}/>
      </View>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Josh' size='45' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
