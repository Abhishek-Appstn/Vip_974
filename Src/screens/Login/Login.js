import {View, Text, SafeAreaView, Image, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import {Logo_White} from '../../assets/Images';
import Constants from '../../Constants';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [MobileNumber, setMobileNumber] = useState('')
    const [borderColor, setborderColor] = useState(Constants.Colors.Green1)

    const handleTextChange=(value)=>{
        setMobileNumber(value)
    }
const navigation=useNavigation()
    const HandleNavigation=()=>{
        setborderColor(Constants.Colors.Green1)
MobileNumber.length>5?(
        navigation.navigate('OtpValidation')):(Alert.alert("Invalid"),setborderColor(Constants.Colors.AccentColor5))
    }
  return (
    <Layout>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          height: Constants.SCREEN_DIMENSIONS.SCREEN_HEIGHT,
          marginHorizontal: 25,
        }}>
        <Image source={Logo_White} style={{width: 60}} resizeMode="contain" />
        <Text
          style={{
            fontFamily: 'Gibson',
            color: Constants.Colors.Green1,
            fontSize: 48,
            marginTop: 20,
          }}>
          LOGIN
        </Text>
        <Text
          style={{
            fontFamily: 'Gibson-Regular',
            color: Constants.Colors.White_Text,
            fontSize: 16,
            marginTop: 20,
            lineHeight: 20,
            width: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.7,
          }}>
          We Will Send You A Verification Code On This Mobile Number
        </Text>
        <View style={{marginTop: 20, marginBottom: 10}}>
          <CustomTextInput value={MobileNumber} borderColor={borderColor} name="Phone Number" type="PhoneNumber"onChangeText={text=>handleTextChange(text)} />
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{color: Constants.Colors.White_Text}}>
            Don't Have An Account?{' '}
          </Text>
          <Pressable>
            <Text style={{color: Constants.Colors.AccentColor5}}>SIGN UP</Text>
          </Pressable>
        </View>
        <View style={{marginVertical: 30}}>
          <CustomButton title={'Send'} onPress={HandleNavigation} />
        </View>

        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Gibson-Regular',
            color: Constants.Colors.White_Text,
            alignSelf: 'center',
            bottom: 25,
            position: 'absolute',
          }}>
          Continue As Guest{' '}
        </Text>
      </SafeAreaView>
    </Layout>
  );
};

export default Login;
