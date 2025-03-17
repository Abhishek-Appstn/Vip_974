import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../components/Layout/Layout';
import {Logo_White} from '../assets/Images';
import Constants from '../Constants';
import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import Helpers from '../Helpers';
import Snackbar from 'react-native-snackbar';

const {Colors} = Constants;
const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;

const OtpValidation = () => {
  const navigation = useNavigation();
  const [Otp, setOtp] = useState('');

  const HandleNavigation = name => {
    name != 'Login'
      ? Helpers({data: Otp, type: 'otp'})
        ? navigation.navigate(name)
        : Snackbar.show({text: 'Invalid Otp entered', backgroundColor: 'red'})
      : navigation.navigate(name)
  };

  return (
    <Layout>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          height: SCREEN_HEIGHT,
          marginHorizontal: 25,
        }}>
        <Image
          source={Logo_White}
          style={{width: SCREEN_WIDTH * 0.15}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: 'Gibson',
            color: Colors.Green1,
            fontSize: 48,
            marginTop: 20,
            textTransform: 'uppercase',
          }}>
          ENTER OTP
        </Text>
        <Text
          style={{
            fontFamily: 'Gibson-Regular',
            color: Colors.White_Text,
            fontSize: 16,
            marginTop: 20,
            lineHeight: 20,
            width: SCREEN_WIDTH * 0.75,
            textTransform: 'capitalize',
          }}>
          Enter 5 digit verification code sent to your number
        </Text>
        <View style={{marginTop: 20, marginBottom: 10}}>
          <OtpInput
            autoFocus
            theme={{
              pinCodeContainerStyle: {
                borderColor: Colors.Black_2,
                elevation: 10,
                backgroundColor: Colors.Black_2,
                height: 56,
                width: 56,
                borderRadius: 5,
              },
              pinCodeTextStyle: {color: Colors.White_Text},
            }}
            numberOfDigits={5}
            focusColor={Colors.Green1}
            onTextChange={text => setOtp(text)}
          />
        </View>

        <Pressable style={{}} onPress={() => HandleNavigation('Login')}>
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
    </Layout>
  );
};

export default OtpValidation;
