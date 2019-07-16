import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'native-base';



export class About extends Component {
    /*
    in Nav drawer it will only change the icon and button text, but not the activity, if u don't use stackNav..
    to chenge activity header use StackNav inside navDrawer ...
    */
    static navigationOptions = {
      title: 'About',
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
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Card>
                <View style={{width: 400, height:400 }} >
                    <Image style= {{flex:1 , width: "100%", height: undefined}}    
                    source={require("../../assets/logo.png")}
                    resizeMode="contain"
                    />
                    <Text style={{ alignSelf:"center" }} >Single Point of Access</Text>
                    <Text style={{ alignSelf:"center" }} >Powered By Daffodil Computers</Text>
                </View>
            </Card>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
        paragraph: {
          textAlign: 'center'
        }
      });