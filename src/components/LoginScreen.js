import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, View,Icon,Button, Spinner  } from 'native-base';

export default class LoginScreen extends Component {

state = {email: '', password:'', loading: false};

    

loginRequest(){
    
    let formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    this.setState({loading:true});
    fetch('https://api.1card.com.bd/login', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Authorization' : 'Bearer eac1425e6eb1683478b50924a5bfdcOkrwppgzkHcgX'
        // 'Content-Type': 'application/json'
    },
        body: formData,
    }).then(res=>{
        if (res.status=="200") {
            console.log(res);
            return res.json();
          }
          throw res;
    })
    .then(res =>{
        // alert(res.email);
        // AsyncStorage.setItem('email',res.email);
        console.log(res);
        this.setState({loading: false});
        if(res.message == "fail"){
            alert("Wrong username or password");
        }else if(res.message == "success"){
            // alert("correct username");
            this.props.navigation.navigate('Dashboard');
        }
        
    })
    .catch((error) => {
        console.log(error);
        alert("Something went wrong");
        this.setState({loading: false});

      });
    ;
}

renderButton(){
    // if(this.state.loading){
    //     return <Spinner size="small" />;
    // }
    return(
        <Button onPress={ this.loginRequest.bind(this) } block style={{ backgroundColor:"#3672b1", marginHorizontal:20, marginVertical:40 }}>
                        <Text style={{color:"white"}} >Login</Text>
        </Button>
        );
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
                        <Input placeholder="Enter Email" 
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.email} /> 
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
                        <Input 
                            secureTextEntry 
                            placeholder="Enter Password"
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password} 
                         /> 
                    </Item>
                </View>
                {this.renderButton}
            </View>
            
            
        </Content>
      </Container>
    );
  }
}