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

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Token_details extends Component {
  navigateToHome() {
    this.props.navigation.navigate("Home");
  }
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
            text: "Token details",
            style: { color: "#ffffff", fontSize: 22 }
          }}
        />
        <View style={{ textAlign: "center", padding: 20, marginBottom: 15 }}>
          <View style={{ fontSize: 18, flexDirection: "row", marginTop:20, width:(deviceWidth-40) }}>
            <View style={{width:((deviceWidth/2)-20)}}>
              <Text style={{ fontSize: 18 }}>Name :</Text>
            </View>
            <View style={{width:((deviceWidth/2)-20)}}>
              <Text style={{ fontSize: 18, marginLeft: 15, textAlign:'right' }}>Sweeti Jha</Text>
            </View>
          </View>
          <View style={{  flexDirection: "row", width:(deviceWidth-40), marginTop:20  }}>
           <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18 }}>Gender : </Text>
            </View>
            <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18, marginLeft: 15, textAlign:'right' }}>Femail</Text>
            </View>
          </View>
          <View style={{  flexDirection: "row" , width:(deviceWidth-40), marginTop:20 }}>
          <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18 }}>Phone : </Text>
            </View>
            <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18, marginLeft: 15, textAlign:'right' }}>9999999999</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row"  , width:(deviceWidth-40), marginTop:20}}>
          <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18}}>Date Of Birth : </Text>
            </View>
            
            <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18, marginLeft: 15, textAlign:'right' }}>6 Dec 2018</Text>
            </View>
          </View>
          <View style={{flexDirection: "row", width:(deviceWidth-40) , marginTop:20 }}>
          <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18 }}>Address :</Text>
            </View>
            <View style={{width:((deviceWidth/2)-20)}}>
            <Text style={{ fontSize: 18, marginLeft: 15, textAlign:'right' }}>Baswangaudi</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

export default Token_details;
