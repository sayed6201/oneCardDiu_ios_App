import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';


export class Feed extends Component {
    static navigationOptions = {
        headerTitle: 'News Feed',
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card>
            {/*react-native-elements Card*/}
            <Text style={{textAlign: 'center', fontSize:30, color:"#3672b1"}}>
                Coming Soon
            </Text>
        </Card>
      </View>
    );
  }
}
