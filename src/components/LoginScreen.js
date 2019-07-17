import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, View,Icon,Button } from 'native-base';

export default class LoginScreen extends Component {

loginRequest(){
    let formData = new FormData();
    formData.append('email', 'saddam2872@diu.edu.bd');
    formData.append('password', '1234567');

    fetch('https://api.1card.com.bd/login', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Authorization' : 'Bearer eac1425e6eb1683478b50924a5bfdcOkrwppgzkHcgX'
        // 'Content-Type': 'application/json'
    },
        body: formData,
    }).then(res=>res.json())
    .then(res =>{
        alert(res.email);
        AsyncStorage.setItem('email',res.email);
        console.log(res);
    });
}
  render() {
    return (
      <Container>
        <Header style={{ height:150, paddingTop:50 }} >
            <Image style={{ height:100, width:100 }} source={require("../../assets/logo.png")} resizeMode="contain" />
        </Header>
        <Content>
            
            <View style={{ flexDirection:"column" }} >
                <View style={{ flex:1, height:"100%", justifyContent: 'center' }}>
                    <Item
                        style={{ 
                            backgroundColor: 'white',
                            paddingHorizontal: 10,
                            borderRadius: 4
                        }}>
                        <Icon name="mail" style={{ fontSize:20, paddingTop: 5, color:"#3672b1" }}/>
                        <Input placeholder="Enter Email" /> 
                    </Item>
                </View>

                <View style={{ flex:1, height:"100%", justifyContent: 'center', }}>
                    <Item
                        style={{ 
                            backgroundColor: 'white',
                            paddingHorizontal: 10,
                            borderRadius: 4
                        }}>
                        <Icon name="key" style={{ fontSize:20, paddingTop: 5, color:"#3672b1" }}/>
                        <Input secureTextEntry placeholder="Enter Password" /> 
                    </Item>
                </View>
                
                    <Button onPress={ this.loginRequest } block style={{ backgroundColor:"#3672b1", marginHorizontal:20, marginVertical:40 }}>
                        <Text style={{color:"white"}} >Login</Text>
                    </Button>
                
                
            </View>
            
            
        </Content>
      </Container>
    );
  }
}