import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon ,Container, Content, Header, Left, Body, Right, List, ListItem } from 'native-base';


export class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    // drawerIcon: ({ focused }) => (
    //   <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    // ),
    headerStyle: {
      backgroundColor: '#3672b1',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white'
    },
  };
  
  render() {
    return (
      <Container>
        <Header style={[{ backgroundColor: '#3672b1', height: 90 }, styles.androidHeader]}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Icon name="person" style={{ color: 'white', fontSize:30 }} />
            <Text style={{ marginLeft: 5, fontSize: 18, color: 'white', fontStyle: 'italic' }}> Sayed Ahmed</Text>
          </View>
        </Header>
        <Content >
          <Text>Sayed ahmed</Text>
          <Text>Sayed ahmed</Text>
          <Text>Sayed ahmed</Text>
          <Text>Sayed ahmed</Text>
          <Text>Sayed ahmed</Text>
        </Content>
      </Container>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3672b1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});


  /*

  */