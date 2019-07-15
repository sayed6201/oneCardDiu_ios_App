import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { 
    Content,
    Right,
    Icon,
    Card
   } from 'native-base';

export class Noticeboard extends Component {
  static navigationOptions = {
    title: 'Noticeboard',
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
        <Content>
            <Card>
                <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"flex-start", padding:10, borderBottomWidth:0.5, borderBottomColor:'grey' }} >
                    <View>
                        <Text style={{ marginLeft: 10, fontSize:40, color:"#3672b1",fontWeight:'900' }}>CSE</Text>
                    </View>
                    <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
                        <Text style={{fontSize:20}} >Notice For mid Term Seat plan</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Published on: 1016-02-01</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Hits: 100</Text> 
                    </Right>
                    <View>
                        <Icon type="AntDesign" name="clouddownload" style={{ marginLeft: 10, fontSize:40, color:"#3672b1" }}/>
                    </View>
                </View>

                <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"flex-start", padding:10, borderBottomWidth:0.5, borderBottomColor:'grey' }} >
                    <View>
                        <Text style={{ marginLeft: 10, fontSize:40, color:"#3672b1",fontWeight:'900' }}>CSE</Text>
                    </View>
                    <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
                        <Text style={{fontSize:20}} >Notice For mid Term Seat plan</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Published on: 1016-02-01</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Hits: 100</Text> 
                    </Right>
                    <View>
                        <Icon type="AntDesign" name="clouddownload" style={{ marginLeft: 10, fontSize:40, color:"#3672b1" }}/>
                    </View>
                </View>  

                <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"flex-start", padding:10, borderBottomWidth:0.5, borderBottomColor:'grey' }} >
                    <View>
                        <Text style={{ marginLeft: 10, fontSize:40, color:"#3672b1",fontWeight:'900' }}>SWE</Text>
                    </View>
                    <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
                        <Text style={{fontSize:20}} >Notice For mid Term Seat plan</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Published on: 1016-02-01</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Hits: 100</Text> 
                    </Right>
                    <View>
                        <Icon type="AntDesign" name="clouddownload" style={{ marginLeft: 10, fontSize:40, color:"#3672b1" }}/>
                    </View>
                </View>  

                <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"flex-start", padding:10, borderBottomWidth:0.5, borderBottomColor:'grey' }} >
                    <View>
                        <Text style={{ marginLeft: 10, fontSize:40, color:"#3672b1",fontWeight:'900' }}>EEE</Text>
                    </View>
                    <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
                        <Text style={{fontSize:20}} >Notice For mid Term Seat plan</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Published on: 1016-02-01</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>Hits: 100</Text> 
                    </Right>
                    <View>
                        <Icon type="AntDesign" name="clouddownload" style={{ marginLeft: 10, fontSize:40, color:"#3672b1" }}/>
                    </View>
                </View>          
            </Card>
      </Content>
    );
  }
}
