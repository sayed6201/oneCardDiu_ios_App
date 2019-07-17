
import React, { Component } from 'react';
import { View, StyleSheet, Button, AsyncStorage } from 'react-native';
import {
  Container,
  Header, 
  Content,
  Right,
  Icon,
  Card,
  Badge,
  Text
 } from 'native-base';

export class DashboardScreen extends Component {

  state = { email:null };

  componentWillMount(){
      AsyncStorage.getItem('email').then(value =>{
        this.setState({ email: value });
        // alert(value);
      });
  }
    render() {
      return (
        <Container>
          <Header style={{ height:200, backgroundColor: '#3672b1', padding:5, flexDirection:"column" }} >

            <View style={{ flexDirection:'row', borderBottomWidth:0.5, borderBottomColor:"white", paddingBottom:5  }} >
              <Icon name="person" style={{ fontSize:50, color:"white", marginLeft:20 }}  />
              <View style={{ flexDirection:'column', marginLeft:20,   }} >
                <Text style={{ color:"white", fontSize:18 }} >{this.state.email}</Text>
                <Text style={{ color:"white", fontSize:15 }} >161-15-7041</Text>
                <View style={{flexDirection:"row"}} >
                  <Text style={{ color:"white", fontSize:15, marginRight:5 }} >Card status</Text>
                  <Badge success> 
                    <Text>active</Text> 
                  </Badge>
                </View>
              </View>
            </View>

            <View style={{ flexDirection:"row" }} >
              <View style={{width:"70%", borderRightWidth:0.5, borderRightColor:'white', alignItems:"center", justifyContent:"center" }} >
                  <Text style={{fontSize:25, color:"white"}} > 25 BDT </Text>
                  <Text style={{ fontSize:15, color:'white' }} >Usable balance</Text>
              </View>
              <View style={{flex:1, justifyContent:"center", alignItems: 'center'}} >
                <Icon type="AntDesign" name="qrcode" style={{fontSize:50, color:"white"}} />
              </View>
            </View>  
          </Header>
          <Content>
            
          </Content>
        </Container>
      );
    }
  }