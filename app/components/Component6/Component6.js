import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Component6 extends Component{
  render(){
    return(
      <View>
          <Text>Details</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component6', () => Component6);