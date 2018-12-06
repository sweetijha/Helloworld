import React, { Component } from "react";
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
import { Constants } from "expo";
import { Header } from "react-native-elements";

import { createStackNavigator } from "react-navigation";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Token extends Component {
  navigateToHome() {
    this.props.navigation.navigate("Home");
  }
   navigateToSetting() {
    this.props.navigation.navigate("Setting");
  }
   navigateToToken_details(){
        this.props.navigation.navigate('Token_details');
    }
  render() {
    return (
      <View style={{ height: deviceHeight }}>
        <View>
          <Header
            backgroundColor="#2782d2"
            centerComponent={{
              text: "My Token",
              style: { color: "#ffffff", fontSize: 22 }
            }}
          />
        </View>
        <TouchableOpacity onPress={ this.navigateToToken_details.bind(this)}>
        <View style={styles.token}>
          <View style={{flexDirection: "row",width:'auto'}}>
            <Text style={styles.text}>Token ID :</Text>
            <Text style={styles.id}>101</Text>
          </View>
          <View style={{alignSelf:"flex-end",width:'auto',position:'absolute',right:10, top:24}}>
            <Text style={{color: "#FFFF00", fontSize:18 }}>
              Active
            </Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Image
          style={{marginLeft:10, width:16, height:16, marginTop: 12}}
          source={require('../../images/calendar.png')}
        />
        <Text style={{marginTop: 12, marginLeft:5, color:'#A9A9A9' }}>Dec 5, 2018</Text>
          </View>
        </View>
        </TouchableOpacity>

        <View style={styles.token}>
          <View style={{flexDirection: "row",width:'auto'}}>
            <Text style={styles.text}>Token ID :</Text>
            <Text style={styles.id}>101</Text>
          </View>
          <View style={{alignSelf:"flex-end",width:'auto',position:'absolute',right:10, top:24}}>
            <Text style={{color: "#FF0000", fontSize:18 }}>
              Incomplete
            </Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Image
          style={{marginLeft:10, width:16, height:16, marginTop: 12}}
          source={require('../../images/calendar.png')}
        />
        <Text style={{marginTop: 12, marginLeft:5, color:'#A9A9A9' }}>Dec 5, 2018</Text>
          </View>
        </View>

        <View style={styles.token}>
          <View style={{flexDirection: "row",width:'auto'}}>
            <Text style={styles.text}>Token ID :</Text>
            <Text style={styles.id}>101</Text>
          </View>
          <View style={{alignSelf:"flex-end",width:'auto',position:'absolute',right:10, top:24}}>
            <Text style={{color: "green", fontSize:18, textAlign:'right' }}>
              Completed
            </Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Image
          style={{marginLeft:10, width:16, height:16, marginTop: 12}}
          source={require('../../images/calendar.png')}
        />
        <Text style={{marginTop: 12, marginLeft:5, color:'#A9A9A9' }}>Dec 5, 2018</Text>
          </View>
        </View>

        <View style={styles.token}>
          <View style={{flexDirection: "row",width:'auto'}}>
            <Text style={styles.text}>Token ID :</Text>
            <Text style={styles.id}>101</Text>
          </View>
          <View style={{alignSelf:"flex-end",width:'auto',position:'absolute',right:10, top:24}}>
            <Text style={{color: "#FFFF00", fontSize:18 }}>
              Active
            </Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Image
          style={{marginLeft:10, width:16, height:16, marginTop: 12}}
          source={require('../../images/calendar.png')}
        />
        <Text style={{marginTop: 12, marginLeft:5, color:'#A9A9A9' }}>Dec 5, 2018</Text>
          </View>
        </View>


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
          <View style={{width: (deviceWidth/3), height: 75, justifyContent:'center',alignItems:'center',borderRightWidth:1,borderColor:'lightgray', borderBottomColor:'#0f55b5', borderBottomWidth:3}}>
          <Image
          style={styles.iconImage}
          source={require('../../images/tokenactive.png')}
        />
        <Text style={{color:'#0f55b5'}}>Token</Text>
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
  token: {
    width: deviceWidth - 20,
    marginLeft: 10,
    backgroundColor: "#D3D3D3",
    marginTop: 15,
    height: 70,
    borderLeftWidth: 4,
    borderColor:'#2782d2'
   
  },
  text: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 16,
    color: "#2782d2"
  },
  id: {
    marginTop: 8,
    fontSize: 16,
    fontWeight:'bold',

  },
  iconImage:{
    width:30,
    height:30,
    color:'blue'
  },
});
export default Token;
