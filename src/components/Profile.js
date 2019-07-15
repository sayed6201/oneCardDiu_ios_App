import React, { Component } from 'react';
import { View, StyleSheet, Button, Platform, StatusBar } from 'react-native';
import { Icon ,Container, Content, Header, Left, Body, Right,Card, CardItem, Text,Badge } from 'native-base';


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
          <View style={{ flexDirection: 'row', flex:1 }}>
            <Icon name="person" style={{ color: 'white', fontSize:50 }} />
            <View style={{ flexDirection:'column', marginLeft:10 }} >
              <Text style={{ marginLeft: 5, fontSize: 20, color: 'white', fontWeight:'bold' }}> Sayed Ahmed</Text>
              <Text style={{ marginLeft: 5, fontSize: 15, color: 'white', fontStyle: 'italic' }}> Sayed@gmail.com</Text>
            </View>
          </View>
        </Header>
        <Content >
        <Card>
            <CardItem>
              <Body>
                <View style={{ flexDirection:'row', marginBottom:10 }} >
                  <Badge info style={{marginRight:5}} ><Text>Department: </Text></Badge><Text>CSE</Text>
                </View>
                <View style={{ flexDirection:'row', marginBottom:10 }} >
                  <Badge info style={{marginRight:5}} ><Text>Mobile: </Text></Badge><Text>01774760591</Text>
                </View>
                <View style={{ flexDirection:'row', marginBottom:10 }} >
                  <Badge info style={{marginRight:5}} ><Text>Address: </Text></Badge><Text>Sylhet</Text>
                </View>
                <View style={{ flexDirection:'row', marginBottom:10 }} >
                  <Badge info style={{marginRight:5}} ><Text>Father's name: </Text></Badge><Text>01774760591</Text>
                </View>
                <View style={{ flexDirection:'row', marginBottom:10 }} >
                  <Badge info style={{marginRight:5}} ><Text>Mother's name: </Text></Badge><Text>01774760591</Text>
                </View>
                <View style={{ flexDirection:'row', marginBottom:10 }} >
                  <Badge info style={{marginRight:5}} ><Text>Date Of Birth:: </Text></Badge><Text>01 feb 95</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
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