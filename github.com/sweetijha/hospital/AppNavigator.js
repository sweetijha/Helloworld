import React from 'react';
import {
    createStackNavigator
} from 'react-navigation';
import Main from './src/components/Main';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Home from './src/components/Home';
import Setting from './src/components/Setting';
import Token_form from './src/components/Token_form';
import Token from './src/components/Token';
import Token_details from './src/components/Token_details';
import My_Account from './src/components/My_Account';
import Changepwd from './src/components/Changepwd';
import {StyleSheet, View, TextInput, Image, Text, Button, ScrollView} from 'react-native';

const AppNavigator = createStackNavigator({
  Main: {
        screen : Main,
        navigationOptions: {
            header: null,
        }
    },
  Home: {
        screen : Home,
        navigationOptions: {
            header: null,
        }
    },
  Token_details: {
        screen : Token_details,
        navigationOptions: {
            header: null,
        }
  },
  Token:{
        screen : Token,
        navigationOptions: {
            header: null,
        }
    },
  
    Token_form:{
        screen : Token_form,
        navigationOptions: {
            header: null,
        }
    },
   Setting: {
        screen : Setting,
        navigationOptions: {
            header: null,
        }
    },
  
   Signup: {
        screen : Signup,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen : Login,
        navigationOptions: {
            header: null,
        }
    },
     My_Account: {
        screen : My_Account,
        navigationOptions: {
            header: null,
        }
    },
    Changepwd: {
        screen : Changepwd,
        navigationOptions: {
            header: null,
        }
    },
});



export default AppNavigator;
