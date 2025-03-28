import { View, Text, SafeAreaView, Image, Pressable, Alert, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Logo_White } from '../assets/Images';
import Constants from '../Constants';
import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Helpers from '../Helpers';
import Snackbar from 'react-native-snackbar';
import Utils from '../Utils';
import { useSelector } from 'react-redux';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from '@react-native-firebase/auth'
const { Colors } = Constants;
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;

const Login = () => {
  const [MobileNumber, setMobileNumber] = useState('');
  const [Confirmation, setConfirmation] = useState('');
  const [Error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, [Error]);

  const handleTextChange = value => {
    setMobileNumber(value);
  };
  const language = useSelector(state => state.Language.value)
  const navigation = useNavigation();
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomAlignSelf = Utils.alignSelf(language)
  const CustomTextAlign = Utils.textAlign(language)

  const HandleNavigation = name => {
    name !== 'Signup' && name !== 'Drawer'
      ? Helpers({ data: MobileNumber, type: 'mobilenumber' })
        ? navigation.navigate(name)
        : (Snackbar.show({
          text: 'Invalid Mobile Number',
          backgroundColor: 'red',
        }),
          setError(true))
      : navigation.navigate(name)

  };
  return (
    <Layout>
      {/* <ScrollView contentContainerStyle={{paddingBottom:SCREEN_HEIGHT*.15}}> */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

          <SafeAreaView
            style={{
              justifyContent: 'center',
              height: SCREEN_HEIGHT,
              marginHorizontal: SCREEN_WIDTH * .05,

            }}>
            <Image source={Logo_White} style={[{ width: 60 }, CustomAlignSelf]} resizeMode="contain" />
            <Text
              style={[{
                fontFamily: 'Gibson',
                color: Colors.Green1,
                fontSize: 48,
                marginTop: 20,
              }, CustomAlignSelf]}>
              LOGIN
            </Text>
            <Text
              style={[{
                fontFamily: 'Gibson-Regular',
                color: Colors.White_Text,
                fontSize: 16,
                marginTop: 20,
                lineHeight: 20,
                width: SCREEN_WIDTH * 0.7,

              }, CustomAlignSelf, CustomTextAlign]}>
              We Will Send You A Verification Code On This Mobile Number
            </Text>
            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <CustomTextInput
                value={MobileNumber}
                name="Phone Number"
                type="PhoneNumber"
                onChangeText={text => handleTextChange(text)}
                error={Error}
              />
            </View>
            <View style={[{ flexDirection: 'row', alignItems: 'center' }, CustomFlexDirection]}>
              <Text style={{ color: Colors.White_Text }}>Don't Have An Account?</Text>
              <Pressable onPress={() => HandleNavigation('Signup')}>
                <Text style={{ color: Colors.AccentColor5 }}>SIGN UP </Text>
              </Pressable>
            </View>
            <View style={{ marginVertical: SCREEN_HEIGHT * .04 }}>
              <CustomButton
                title={'Send'}
                onPress={() => HandleNavigation('OtpValidation')}
              />
            </View>
            <Pressable
              style={{
                alignSelf: 'center',
                bottom: SCREEN_HEIGHT * 0.05,
                position: 'absolute',
              }}
              onPress={() => HandleNavigation('Drawer')}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Gibson-Regular',
                  color: Colors.White_Text,
                }}>
                Continue As Guest
              </Text>
            </Pressable>
          </SafeAreaView>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default Login;
