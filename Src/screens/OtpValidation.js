import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../components/Layout/Layout';
import {Logo_White} from '../assets/Images';
import Constants from '../Constants';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import Helpers from '../Helpers';
import Snackbar from 'react-native-snackbar';
import Utils from '../Utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/slice/UserSlice';

const {Colors} = Constants;
const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;

const OtpValidation = () => {
  const navigation = useNavigation();
  const [Otp, setOtp] = useState('');
  const language=useSelector(state=>state.Language.value)
  const CustomAlignSelf=Utils.alignSelf(language)
  const CustomTextAlign=Utils.textAlign(language)
const dispatch=useDispatch()
  const HandleNavigation = name => {
      Helpers({data: Otp, type: 'otp'})
        ? dispatch(setUserData({isloggedin:true}))
        : Snackbar.show({text: 'Invalid Otp entered', backgroundColor: 'red'})
      
  };

  const HandleNumberChange = () => {
    navigation.navigate('Login')
  };

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'}>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          height: SCREEN_HEIGHT,
          marginHorizontal: 25,
        }}>
        <Image
          source={Logo_White}
          style={[{width: SCREEN_WIDTH * 0.15},CustomAlignSelf]}
          resizeMode="contain"
        />
        <Text
          style={[{
            fontFamily: 'Gibson',
            color: Colors.Green1,
            fontSize: 48,
            marginTop: SCREEN_HEIGHT*.02,
            textTransform: 'uppercase',
          },CustomTextAlign,CustomAlignSelf]}>
          ENTER OTP
        </Text>
        <Text
          style={[{
            fontFamily: 'Gibson-Regular',
            color: Colors.White_Text,
            fontSize: 16,
            marginTop: SCREEN_HEIGHT*.02,
            lineHeight: 20,
            width: SCREEN_WIDTH * 0.75,
            textTransform: 'capitalize',
          },CustomTextAlign,CustomAlignSelf]}>
          Enter 5 digit verification code sent to your number
        </Text>
        <View style={{marginTop: 20, marginBottom: 10}}>
          <OtpInput
            autoFocus
            theme={{
              pinCodeContainerStyle: {
                borderColor: Colors.Black_2,
                elevation: 10,
                backgroundColor: Colors.Black,
                height: SCREEN_HEIGHT*.067,
                width: SCREEN_HEIGHT*.067,
                borderRadius: SCREEN_HEIGHT*.01,
              },
              pinCodeTextStyle: {color: Colors.White_Text},
            }}
            numberOfDigits={5}
            focusColor={Colors.Green1}
            onTextChange={text => setOtp(text)}
          />
        </View>

        <Pressable style={CustomAlignSelf} onPress={HandleNumberChange}>
          <Text
            style={{
              color: Colors.White_Text,
              fontSize: 12,
              fontFamily: 'Gibson',
              marginTop: 10,
            }}>
            Change Phone Number ?
          </Text>
        </Pressable>

        <View style={{marginVertical: 30}}>
          <CustomButton
            title={'Submit'}
            onPress={() => HandleNavigation('Drawer')}
          />
        </View>
        <Pressable style={{alignSelf: 'center'}}>
          <Text style={{color: Colors.AccentColor5}}>Send Again ?</Text>
        </Pressable>
      </SafeAreaView>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default OtpValidation;
