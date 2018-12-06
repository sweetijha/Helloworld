import React, { Component } from "react";
import { Header } from "react-native-elements";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, KeyboardAvoidingView, ScrollView, Animated, Keyboard, AsyncStorage, Dimensions, TouchableOpacity,TextInput } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Changepwd extends Component {
    render() {
      const { goBack } = this.props.navigation;
        return (
            <View style={{ height: deviceHeight }}>
              <Header
                backgroundColor="#2782d2"
                leftComponent={{
                  icon: "keyboard-backspace",
                  color: "white",
                  onPress: () => goBack()
                }}
                centerComponent={{
                  text: "Change Password",
                  style: { color: "#ffffff", fontSize: 22 }
                }}
              />

              <View style={styles.phoneInputView}>
               <Text style={{marginBottom:6,}}>Old Password</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="Old Password"
        />
        <Text style={{marginBottom:6, marginTop:4}}>New Password</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="New Password"
        />
        <Text style={{marginBottom:6, marginTop:4}}>Confirm Password</Text>
          <TextInput
           style={styles.phoneInput}
          placeholder="Confirm Password"
        />
        </View>
         <View style={styles.submitButton}>
            <TouchableOpacity>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        
            </View>
        );
    }
}
const styles = StyleSheet.create({
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
export default Changepwd;
