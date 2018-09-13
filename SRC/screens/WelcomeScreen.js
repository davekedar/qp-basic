import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  I18nManager,
  StyleSheet,
  AsyncStorage
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Left,
  Body,
  Title,
  Form
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screen Styles
import styles from "../Theme/Styles/Signin";
import Logo from "../image/qualpros.png";

class WelcomeScreen extends Component {
    static navigationOptions = {
        header : null
    }   
  render() {
    return (
      <Container>
        
          <Header style={styles.header}>
            <Left style={styles.left}>
              
            </Left>
            <Body style={styles.body} />
            <Right style={styles.right} />
          </Header>
          <View style={styles.logosec}>
            <Image source={Logo} style={styles.logostyle} />
          </View>
          <Form style={styles.form}>
            <TouchableOpacity
              info
              style={styles.signInbtn}
              onPress={()=>{this.props.navigation.navigate('SignIn')}}
            >
              <Text autoCapitalize="words" style={styles.buttongetstarted}>
                Log In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              info
              style={styles.signInbtn}
              onPress={()=>{this.props.navigation.navigate('SignUp')}}
            >
              <Text autoCapitalize="words" style={styles.buttongetstarted}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Form>
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.bottomText}>
              <Text style={styles.bottomText01}>
                Find out more about QualPros
              </Text>
            </TouchableOpacity>
          </View>
        
      </Container>
    );
  }
}
export default WelcomeScreen;