import React, { Component } from "react";
import { Constants } from 'expo';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, KeyboardAvoidingView, ScrollView, Animated, Keyboard, AsyncStorage, Dimensions, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Setting extends Component {
  navigateToHome(){
        this.props.navigation.navigate('Home');
    }
    navigateToToken(){
      this.props.navigation.navigate('Token');
    }
    navigateToMy_Account(){
      this.props.navigation.navigate('My_Account');
    }
    navigateToChangepwd(){
      this.props.navigation.navigate('Changepwd');
    }
     navigateToMain(){
      this.props.navigation.navigate('Main');
    }
    render() {
        return (
           <View style={{height: deviceHeight}}>
           <View style={styles.container}>
        <Header
          backgroundColor="#2782d2"
          centerComponent={{ text: 'Setting', style: { color: '#ffffff', fontSize:22 } }}
        />
      </View>
      <TouchableOpacity onPress = { this.navigateToMy_Account.bind(this) }>
      <View style={styles.buttonView}>
      <Image
          style={styles.buttonIcon}
          source={require('../../images/profile.png')}
        />
        <Text style={styles.buttonText}>My Account</Text>
        <Image
          style={styles.buttonNext}
          source={require('../../images/next.png')}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = { this.navigateToToken.bind(this) }>
      <View style={styles.buttonView}>
      <Image
          style={styles.buttonIcon}
          source={require('../../images/Tokenimg.png')}
        />
        <Text style={styles.buttonText}>My Tokens</Text>
        
        <Image
          style={styles.buttonNext}
          source={require('../../images/next.png')}
        />
        
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = { this.navigateToChangepwd.bind(this) }>
      <View style={styles.buttonView}>
      <Image
          style={styles.buttonIcon}
          source={require('../../images/reset_password.png')}
        />
        <Text style={styles.buttonText}>Change Password</Text>
        <Image
          style={styles.buttonNext}
          source={require('../../images/next.png')}
        />
      </View>
      </TouchableOpacity>
       <TouchableOpacity onPress = { this.navigateToMain.bind(this) }>
      <View style={styles.buttonView}>
      <Image
          style={styles.buttonIcon}
          source={require('../../images/logout.png')}
        />
        <Text style={styles.buttonText}>Log Out</Text>
        <Image
          style={styles.buttonNext}
          source={require('../../images/next.png')}
        />
      </View>
      </TouchableOpacity>

      <View style={{flex: 1, flexDirection: 'row', position:'absolute',bottom:0, borderTopWidth:1,borderColor:'lightgray'}}>
          <View style={{width: (deviceWidth/3), height: 75, justifyContent:'center',alignItems:'center',borderColor:'lightgray',borderRightWidth:1}} >
          <TouchableOpacity onPress = { this.navigateToHome.bind(this) }>
           <Image
          style={styles.iconImage}
          source={require('../../images/home.png')}
        />
        <Text style={{color:'#7a7a7a'}}>Home</Text>
        </TouchableOpacity>
        </View>
          <View style={{width: (deviceWidth/3), height: 75, justifyContent:'center',alignItems:'center',borderRightWidth:1,borderColor:'lightgray'}}>
          <TouchableOpacity onPress = { this.navigateToToken.bind(this) }>
          <Image
          style={styles.iconImage}
          source={require('../../images/token.png')}
        />
        <Text style={{color:'#7a7a7a'}}>Token</Text>
        </TouchableOpacity>
          </View>
          <View style={{width: (deviceWidth/3), height: 75, justifyContent:'center',alignItems:'center', borderBottomColor:'#0f55b5', borderBottomWidth:3}} >
            <Image
          style={styles.iconImage}
          source={require('../../images/settingsactive.png')}
        />
        <Text style={{color:'#0f55b5'}}>Setting</Text>
          </View>
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
  buttonView:{
    paddingLeft:16,
    paddingRight:16,
    marginTop:16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#797979',
    paddingBottom:16
  },
  buttonIcon:{
    width:20,
    height:20
  },
  buttonText:{
    fontSize:16,
    marginLeft: 16
  },
  buttonNext:{
    width: 24,
    height:24,
    position:'absolute',
    right: 10
  },
  iconImage:{
    width:30,
    height:30,
    color:'blue'
  },
  
});
export default Setting;
