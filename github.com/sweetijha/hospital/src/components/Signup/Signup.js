import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, KeyboardAvoidingView, ScrollView, Animated, Keyboard, AsyncStorage, Dimensions, TouchableOpacity,TextInput } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Signup extends Component {
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
          placeholder="Name"
          placeholderTextColor = "#ffffff"
        />
        </View>
        <View style={styles.phoneInputView}>
          <TextInput
          style={styles.phoneInput}
          placeholder="Phone"
          placeholderTextColor = "#ffffff"
        />
        </View>
         <View style={styles.phoneInputView}>
          <TextInput
           style={styles.phoneInput}
          placeholder="Email"
          placeholderTextColor = "#ffffff"
        />
        </View>
         <View style={styles.phoneInputView}>
          <TextInput
           style={styles.phoneInput}
          placeholder="Password"
          placeholderTextColor = "#ffffff"
        />
        </View>
         <View style={styles.phoneInputView}>
          <TextInput
           style={styles.phoneInput}
          placeholder="Confirm Password"
          placeholderTextColor = "#ffffff"
        />
        </View>
          <View style={styles.submitButton}>
            <TouchableOpacity onPress = { this.navigateToHome.bind(this) }>
              <Text style={styles.loginText}>Submit</Text>
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
  submitButton:{
    width: deviceWidth-20,
    backgroundColor:'#2782d2',
    marginLeft:0,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:5,
    opacity:0.8,
    marginTop:10
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
    borderRadius:5,
    marginTop:10,
    
  },
  
  phoneInputView:{
    width: deviceWidth-20,
    marginLeft:0, 
  },
});
export default Signup;
