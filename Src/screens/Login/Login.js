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
    const MobileRegex = /^[0-9]{7,}$/;
    const handleTextChange=(value)=>{
        setMobileNumber(value)
    }
const navigation=useNavigation()
    const HandleNavigation=(name)=>{
      name!=='Signup'?
MobileRegex.test(MobileNumber)?(
        navigation.navigate(name)):(Alert.alert("Invalid Mobile Number")):navigation.navigate(name)
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
          <CustomTextInput value={MobileNumber} name="Phone Number" type="PhoneNumber"onChangeText={text=>handleTextChange(text)} />
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{color: Constants.Colors.White_Text}}>
            Don't Have An Account?{' '}
          </Text>
          <Pressable onPress={()=>HandleNavigation("Signup")}>
            <Text style={{color: Constants.Colors.AccentColor5}}>SIGN UP</Text>
          </Pressable>
        </View>
        <View style={{marginVertical: 30}}>
          <CustomButton title={'Send'} onPress={()=>HandleNavigation('OtpValidation')} />
        </View>
<Pressable style={{alignSelf:'center'}}onPress={()=>HandleNavigation("Home")}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Gibson-Regular',
            color: Constants.Colors.White_Text,
           
          
          }}>
          Continue As Guest{' '}
        </Text>
</Pressable>

      </SafeAreaView>
    </Layout>
  );
};

export default Login;
