import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
 } from 'react-native';

import { 
  Content,
  Right,
  Icon,
  Card,
  CardItem
 } from 'native-base';

export class Transection extends Component {
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
              <Icon type="SimpleLineIcons" name="cup" style={{ marginLeft: 10, fontSize:60, color:"#3672b1" }}/>
            </View>
            <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
              <Text style={{fontSize:25}} >53.5 BDT</Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Canteen 2 | 1016-02-01</Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}></Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Daffodil Tower 5</Text> 
            </Right>
            <View>
              <Icon type="AntDesign" name="caretup" style={{ marginLeft: 10, fontSize:30, color:"red" }}/>
            </View>
          </View>

          <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"flex-start", padding:10, borderBottomWidth:0.5, borderBottomColor:'grey' }} >
            <View>
              <Icon type="SimpleLineIcons" name="cup" style={{ marginLeft: 10, fontSize:60, color:"#3672b1" }}/>
            </View>
            <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
              <Text style={{fontSize:25}} >53.5 BDT</Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Canteen 2 | 1016-02-01</Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}></Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Daffodil Tower 5</Text> 
            </Right>
            <View>
              <Icon type="AntDesign" name="caretup" style={{ marginLeft: 10, fontSize:30, color:"red" }}/>
            </View>
          </View>

          <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"flex-start", padding:10, borderBottomWidth:0.5, borderBottomColor:'grey' }} >
            <View>
              <Icon type="SimpleLineIcons" name="cup" style={{ marginLeft: 10, fontSize:60, color:"#3672b1" }}/>
            </View>
            <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
              <Text style={{fontSize:25}} >53.5 BDT</Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Canteen 2 | 1016-02-01</Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}></Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Daffodil Tower 5</Text> 
            </Right>
            <View>
              <Icon type="AntDesign" name="caretup" style={{ marginLeft: 10, fontSize:30, color:"red" }}/>
            </View>
          </View>

          <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"flex-start", padding:10, borderBottomWidth:0.5, borderBottomColor:'grey' }} >
            <View>
              <Icon type="SimpleLineIcons" name="cup" style={{ marginLeft: 10, fontSize:60, color:"#3672b1" }}/>
            </View>
            <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
              <Text style={{fontSize:25}} >53.5 BDT</Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Canteen 2 | 1016-02-01</Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}></Text>
              <Text style={{ color: 'grey', fontSize: 11 }}>Daffodil Tower 5</Text> 
            </Right>
            <View>
              <Icon type="AntDesign" name="caretup" style={{ marginLeft: 10, fontSize:30, color:"red" }}/>
            </View>
          </View>
        </Card>
      </Content>
    );
  }
}
