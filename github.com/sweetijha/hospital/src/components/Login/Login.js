import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, KeyboardAvoidingView, ScrollView, Animated, Keyboard, AsyncStorage, Dimensions, TouchableOpacity,TextInput } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Login extends Component {
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
        
        <View style={styles.phoneInputView}>
          <TextInput
           style={styles.phoneInput}
          placeholder="Phone"
          placeholderTextColor = "#ffffff"
        />
        </View>
        <View style={styles.pwdInputView}>
          <TextInput
          style={styles.pwdInput}
          placeholder="Password"
          placeholderTextColor = "#ffffff"
        />
        </View>
          <View style={styles.loginButton}>
            <TouchableOpacity onPress = { this.navigateToHome.bind(this) }>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
           <View style={styles.forgotButton}>
            <TouchableOpacity>
              <Text style={styles.loginText}>Forgot Password?</Text>
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
    width: deviceWidth-20,
    backgroundColor:'#2782d2',
    marginLeft:0,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:5,
    opacity:0.8
  },
  loginText:{
    textAlign:'center',
    fontSize:18,
    color:'white'
  },
  phoneInput:{
    borderColor: '#7cb9b9',
    borderWidth: 1,
    height: 40, 
    color:'white',
    width: '100%',
    paddingLeft:10,
    paddingRight:10,
    borderRadius:5
  },
  pwdInput:{
    borderColor: '#7cb9b9',
    borderWidth: 1,
    height: 40, 
    color:'white',
    width: '100%',
    paddingLeft:10,
    paddingRight:10,
    borderRadius:5,
    marginTop:10,
    marginBottom:15
  },
  phoneInputView:{
    width: deviceWidth-20,
    marginLeft:0, 
  },
  pwdInputView:{
    width: deviceWidth-20,
    marginLeft:0,
  },
  forgotButton:{
    width: deviceWidth-30,
    marginLeft:0,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:10,
    opacity:0.8,
  },
});
export default Login;
