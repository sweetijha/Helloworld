import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, KeyboardAvoidingView, ScrollView, Animated, Keyboard, AsyncStorage, Dimensions, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Main extends Component {
  navigateToLogin(){
        this.props.navigation.navigate('Login');
    }
    navigateToSignup(){
        this.props.navigation.navigate('Signup');
    }
     navigateToHome(){
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <View>
               <Image
          style={styles.stretch}
          source={require('../../images/hospital.png')}
        />
        <View style={styles.backgroundOpacity}></View>
        <View style={styles.viewData}>
          <View style={styles.loginButton}>
            <TouchableOpacity>
              <Text onPress = { this.navigateToLogin.bind(this) } style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupButton}>
            <TouchableOpacity>
              <Text  onPress = { this.navigateToSignup.bind(this) } style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.skipButton}>
            <TouchableOpacity onPress = { this.navigateToHome.bind(this) }>
              <Text style={styles.loginText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  stretch: {
    width: deviceWidth,
    height: deviceHeight,
    position:'absolute',
    zIndex: 100
  },
  backgroundOpacity:{
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex: 1000,
    width: deviceWidth,
    height: deviceHeight,
    position:'absolute',
  },
  viewData:{
    zIndex:10000,
    width: deviceWidth,
    height: deviceHeight,
    justifyContent :'center',
    alignItems: 'center'
  },
  loginButton:{
    width: deviceWidth-30,
    backgroundColor:'#2782d2',
    marginLeft:0,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:10,
    opacity:0.8
  },
  loginText:{
    textAlign:'center',
    fontSize:18,
    color:'white'
  },
  signupButton:{
    width: deviceWidth-30,
    backgroundColor:'#ee871b',
    marginLeft:0,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:10,
    opacity:0.8,
    marginTop: 20
  },
  skipButton:{
    width: deviceWidth-30,
    marginLeft:0,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:10,
    opacity:0.8,
  },
});
export default Main;
