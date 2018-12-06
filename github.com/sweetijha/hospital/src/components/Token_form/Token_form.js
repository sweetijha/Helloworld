import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, KeyboardAvoidingView, ScrollView, Animated, Keyboard, AsyncStorage, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Constants } from 'expo';
import { Header } from 'react-native-elements';

import { createStackNavigator } from 'react-navigation';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Token_form extends Component {
  navigateToToken_details(){
        this.props.navigation.navigate('Token_details');
    }
    render() {
        return (
            <View style={{height: deviceHeight}}>
             <View style={styles.container}>
            <Header
          backgroundColor="#2782d2"
          centerComponent={{ text: 'Token Form', style: { color: '#ffffff', fontSize:22 } }}
        />
        </View>
               <View style={styles.phoneInputView}>
               <Text style={{marginBottom:6,}}>Full Name</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="Full Name"
        />
        <Text style={{marginBottom:6, marginTop:4}}>Gender</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="Gender"
        />
        <Text style={{marginBottom:6, marginTop:4}}>Phone Number</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="Phone Number"
        />
        <Text style={{marginBottom:6,}}>Date of Birth</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="Date of Birth"
        />
        <Text style={{marginBottom:6, marginTop:4}}>Address</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="Address"
        />
        </View>
         <View style={styles.submitButton}>
            <TouchableOpacity onPress={ this.navigateToToken_details.bind(this)}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
           
        );
    }
}
const styles = StyleSheet.create({
   container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  phoneInput:{
    borderColor: '#808080',
    borderWidth: 1,
    height: 40, 
    color:'#000000',
    width: '100%',
    paddingLeft:10,
    paddingRight:10,
    borderRadius:5
  },
  phoneInputView:{
    width: deviceWidth-30,
    marginLeft:15, 
    marginTop:20,
  },
  submitButton:{
    width: deviceWidth-20,
    backgroundColor:'#2782d2',
    marginLeft:10,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:5,
    opacity:0.8,
    marginTop:20
  },
  submitText:{
    textAlign:'center',
    fontSize:18,
    color:'white'
  },
});
export default Token_form;
