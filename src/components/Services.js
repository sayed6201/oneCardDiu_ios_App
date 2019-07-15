import React, { Component } from 'react';
import { 
  View,
  Dimensions,
  TouchableOpacity } from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text, 
  Card, 
  CardItem, } from 'native-base';



const { height, width } = Dimensions.get('window');


export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Content  >
          <View style={{ flexDirection:'row', flexWrap:'wrap', padding:5 }}>

            <Card style={{ width: width/3-10,paddingTop:10, paddingBottom:10 }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                <View style={{  flex:1, alignItems:'center', justifyContent:'center' }} > 
                  <Icon type="FontAwesome" name="money" style={{fontSize: 50, color: '#3672b1' }} />
                  <Text style={{ color: '#3672b1'}} >Tution Fees</Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10,paddingTop:10, paddingBottom:10  }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                <View style={{  flex:1, alignItems:'center', justifyContent:'center' }} > 
                  <Icon type="AntDesign" name="car" style={{fontSize: 50, color: '#3672b1', alignSelf: 'center', }} />
                  <Text style={{ color: '#3672b1', alignSelf: 'center'}} >Parking</Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10, paddingTop:10, paddingBottom:10  }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                  <View> 
                    <Icon type="FontAwesome5" name="dumbbell" style={{fontSize: 40, color: '#3672b1', alignSelf:'center' }} />
                    <Text style={{ color: '#3672b1', alignSelf:'center'}} >Gym</Text>
                  </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10,paddingTop:10, paddingBottom:10 }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                <View style={{  flex:1, alignItems:'center', justifyContent:'center' }} > 
                  <Icon type="FontAwesome" name="money" style={{fontSize: 50, color: '#3672b1' }} />
                  <Text style={{ color: '#3672b1'}} >Tution Fees</Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10,paddingTop:10, paddingBottom:10  }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                <View style={{  flex:1, alignItems:'center', justifyContent:'center' }} > 
                  <Icon type="AntDesign" name="car" style={{fontSize: 50, color: '#3672b1', alignSelf: 'center', }} />
                  <Text style={{ color: '#3672b1', alignSelf: 'center'}} >Parking</Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10, paddingTop:10, paddingBottom:10  }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                  <View> 
                    <Icon type="FontAwesome5" name="dumbbell" style={{fontSize: 40, color: '#3672b1', alignSelf:'center' }} />
                    <Text style={{ color: '#3672b1', alignSelf:'center'}} >Gym</Text>
                  </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10,paddingTop:10, paddingBottom:10 }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                <View style={{  flex:1, alignItems:'center', justifyContent:'center' }} > 
                  <Icon type="FontAwesome" name="money" style={{fontSize: 50, color: '#3672b1' }} />
                  <Text style={{ color: '#3672b1'}} >Tution Fees</Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10,paddingTop:10, paddingBottom:10  }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                <View style={{  flex:1, alignItems:'center', justifyContent:'center' }} > 
                  <Icon type="AntDesign" name="car" style={{fontSize: 50, color: '#3672b1', alignSelf: 'center', }} />
                  <Text style={{ color: '#3672b1', alignSelf: 'center'}} >Parking</Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={{ width: width/3-10, paddingTop:10, paddingBottom:10  }} >
              <TouchableOpacity style={{ flex:1, alignItems:'center', justifyContent:'center' }} >
                  <View> 
                    <Icon type="FontAwesome5" name="dumbbell" style={{fontSize: 40, color: '#3672b1', alignSelf:'center' }} />
                    <Text style={{ color: '#3672b1', alignSelf:'center'}} >Gym</Text>
                  </View>
              </TouchableOpacity>
            </Card>

          </View>
        </Content>
      </Container>
    );
  }
}
