import React, { Component } from "react";
import ImageSlider from "react-native-image-slider";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Keyboard,
  AsyncStorage,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import { createStackNavigator } from 'react-navigation';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class Home extends Component {
  navigateToSetting(){
        this.props.navigation.navigate('Setting');
    }
    navigateToToken(){
      this.props.navigation.navigate('Token');
    }
    navigateToToken_form(){
      this.props.navigation.navigate('Token_form');
    }
  render() {
    
    return (
      <View style={{height: deviceHeight}}>
        <View style={styles.imageView}>
          <ImageSlider
            autoPlayWithInterval={2000}
            images={[
              "http://listing.iimtc.com/wp-content/uploads/2017/12/slide-onebf66f2f6-699a-4722-980f-96a3452e45ae.jpg",
              "http://icmer.in/data1/images/banner3.jpg",
              "http://www.mgcancerhospital.com/wp-content/uploads/2015/11/banner.jpg",
              "https://logi-tag.com/wp-content/uploads/2017/11/SmartCabinet_slider.jpg"
            ]}
          />
        </View>
        <View style={{padding: 10,}}>
          <Text style={{fontSize: 20,fontWeight: "bold",textAlign:'center'}}>Apollo Hospitals</Text>
          <Text style={{textAlign:'center'}}>
            Apollo Hospitals introduced its digital platform, Ask Apollo. The
            platform provides remote healthcare services. The platform connects
            patients with doctors remotely and provides services like
            consultation with doctors via video, voice calls and email.
          </Text>
        </View>
        <View style={styles.tokenButton}>
          <TouchableOpacity onPress={ this.navigateToToken_form.bind(this)} >
            <Text style={styles.loginText}>Token a token</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', position:'absolute',bottom:0, borderTopWidth:1,borderColor:'lightgray'}}>
          <View style={{width: (deviceWidth/3), height: 75, justifyContent:'center',alignItems:'center',borderColor:'lightgray',borderRightWidth:1, borderBottomColor:'#0f55b5', borderBottomWidth:3}} >
           <Image
          style={styles.iconImage}
          source={require('../../images/homeactive.png')}
        />
        <Text style={{color:'#0f55b5'}}>Home</Text>
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
          <View style={{width: (deviceWidth/3), height: 75, justifyContent:'center',alignItems:'center'}} >
          <TouchableOpacity onPress = { this.navigateToSetting.bind(this) }>
            <Image
          style={styles.iconImage}
          source={require('../../images/settings.png')}
        />
        <Text style={{color:'#7a7a7a'}}>Setting</Text>
        </TouchableOpacity>
          </View>


        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageView: {
    height: 250
  },
  iconImage:{
    width:30,
    height:30,
    color:'blue'
  },
  tokenButton: {
    width: deviceWidth - 20,
    backgroundColor: "#2782d2",
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    opacity: 0.8,
    marginTop: 20
  },
  loginText: {
    textAlign: "center",
    fontSize: 18,
    color: "white"
  },
});
export default Home;
