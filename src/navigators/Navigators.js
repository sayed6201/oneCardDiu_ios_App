
import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, ScrollView } from 'react-native';
import { Icon ,Container, Content, Header, Left, Body, Right, List, ListItem } from 'native-base';
// import Icon from '@expo/vector-icons/Ionicons';


import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  SafeAreaView,
  DrawerItems,
} from 'react-navigation';

import { WelcomeScreen }  from '../components/Screens';
import { Profile } from '../components/Profile';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { DashboardScreen } from '../components/DashboardScreen';
import { Transection } from '../components/Transection';
import { Feed } from '../components/Feed';
import { Constants } from 'expo';


/*
=============================================================
Bottom Tab navigation for Dashboard
=============================================================
*/
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Dashboard:{
     screen: DashboardScreen,
    },
    Services,
    Transection,
    Feed
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: '#3672b1',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white'
        },
      };
    }
  }
);


/*
=============================================================
Stack navigation for Dashboard, all components will
have following Navigation option inside DashboardTabNavigator
=============================================================
*/
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color:'white' }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}

          />
        )
      };
    }
  }
);

/*
=============================================================
Stack navigation for About 
=============================================================
*/
const AboutStackNavigator = createStackNavigator(
  {
    About: About,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color:'white' }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

/*
=============================================================
Stack navigation for Profile 
=============================================================
*/
const profileStackNavigator = createStackNavigator(
  {
    Profile: Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color:'white' }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}

          />
        )
      };
    }
  }
);

/*
=============================================================
Custom drawer
=============================================================
*/
const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={[{ backgroundColor: '#3a455c', height: 90 }, styles.androidHeader]}>
      <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="person" style={{ color: 'white' }} />
        <Text style={{ marginLeft: 5, fontSize: 18, color: 'white', fontStyle: 'italic' }}>Hello, Sayed</Text>
      </Left>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
</Container>

);

/*
=============================================================
Drawer navigation 
=============================================================
*/
const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
      screen: DashboardStackNavigator
    },
    Profile:{
      screen: profileStackNavigator
    },
    About:{
      screen: AboutStackNavigator
    }
    
  },
  {
    drawerType: 'back', //slide
    drawerPosition: 'left',
    drawerWidth: 200,
    drawerBackgroundColor: '#3672b1',
    contentComponent: CustomDrawerContentComponent
  }
);


/*
=============================================================
Switch navigation 
=============================================================
*/
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 300,
  },
});