import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class WelcomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Dashboard')}
          />
          <Button title="Sign Up" onPress={() => alert('button pressed')} />
        </View>
      );
    }
  }
  
  
  export class Settings extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings</Text>
        </View>
      );
    }
  }
  
 

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });