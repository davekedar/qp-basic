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

class SignInScreen extends Component {
    static navigationOptions = {
        header : null
    }   
  signIn = async () => {
    await AsyncStorage.setItem("userToken", "varun");

    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <Container>
          <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("Welcome")}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="#6f6f6f"
                />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body} />
            <Right style={styles.right} />
          </Header>
          <View style={styles.logosec}>
            <Image source={Logo} style={styles.logostyle} />
          </View>
          <Form style={styles.form}>
            <Item rounded style={styles.inputStyle}>
              <Input
                placeholderTextColor="#ffffff"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Email"
                style={styles.inputmain}
              />
            </Item>
            <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
              <Input
                placeholderTextColor="#ffffff"
                placeholder="Password"
                secureTextEntry={true}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                style={styles.inputmain}
              />
            </Item>
            <TouchableOpacity
              info
              style={styles.signInbtn}
              onPress={this.signIn}
            >
              <Text autoCapitalize="words" style={styles.buttongetstarted}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Forgot Password")}>
              <Text autoCapitalize="words" style={styles.buttongettext}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </Form>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={styles.fbButton}
              onPress={() => alert("Facebook button Clicked")}
            >
              <View iconRight style={styles.fbview}>
                <Ionicons name="logo-linkedin" size={30} color="white" />
                <Text autoCapitalize="words" style={styles.fbButtonText}>
                  Sign in with LinkedIn
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.bottomText}
              onPress={()=>{this.props.navigation.navigate('SignUp')}}>
              <Text style={styles.bottomText01}>
                Don&apos;t have an account?{" "}
                <Text style={styles.bottomText02}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        
      </Container>
    );
  }
}
export default SignInScreen;

// const styles1 = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
