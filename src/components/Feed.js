import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Feed extends Component {
    static navigationOptions = {
        title: 'News Feed',
        headerStyle: {
            backgroundColor: '#3672b1',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
        };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Feed </Text>
      </View>
    );
  }
}
