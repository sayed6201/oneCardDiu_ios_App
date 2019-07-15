import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-elements';



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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card title="About The App">
                {/*react-native-elements Card*/}
                <Text style={styles.paragraph}>
                    About Diu one Card App
                </Text>
                <Button
                  title="profile"
                  style={ {margin: '100'} }
                  onPress={console.log('hi')}
                />
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