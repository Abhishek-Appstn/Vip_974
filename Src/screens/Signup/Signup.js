import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Alert, FlatList, Image, Keyboard, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import Constants from '../../Constants'
import { Logo_White } from '../../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../../assets/DataConstants'
import Snackbar from 'react-native-snackbar'
import Helpers from '../../Helpers'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/slice/UserSlice'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const Signup = () => {
  const [FormData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Qid: ''
  })
  const [Unfilled, setUnfilled] = useState([])
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const HandleNavigation = (name) => {
    const Filled = Object.values(FormData).every(value => value !== '')
    name !== 'Login' ? Filled ?
      Helpers({ type: 'email', data: FormData.Email }) ? Helpers({ type: 'mobilenumber', data: FormData.Phone }) ? (
        Snackbar.show({ text: 'Success', backgroundColor: 'green' }), dispatch(setUserData({ isloggedin: true }))) : Snackbar.show({ text: "Phone Number is invalid", backgroundColor: "red" }) : Snackbar.show({ text: "Email is invalid", backgroundColor: "red" }) : Snackbar.show({ text: "Pls fill all Fields", backgroundColor: 'red' }) : setUnfilled(Object.keys(FormData).filter((key) => FormData[key] === ''));
  }
  const handleTextChange = (text, key) => {
    setUnfilled(Unfilled.filter(item => item !== key))
    setFormData({
      ...FormData,
      [key]: text
    })
  }
  return (
    <Layout>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          height: SCREEN_HEIGHT,
          marginHorizontal: SCREEN_WIDTH * .05,
        }}>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
          <KeyboardAvoidingView behavior='padding' >
            <Image source={Logo_White} style={{ width: SCREEN_WIDTH * .16 }} resizeMode="contain" />
            <Text
              style={{
                fontFamily: 'Gibson',
                color: Colors.Green1,
                fontSize: 48,
                marginTop: SCREEN_HEIGHT * .02,
              }}>
              SIGNUP
            </Text>
            <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .03 }} scrollEnabled={false} data={DataConstants.SignupFields} renderItem={({ item, index }) => {
              return (
                <View style={{}}>
                  <CustomTextInput error={Unfilled ? Unfilled.includes(item.key) ? true : false : null} value={FormData[item.key]} placeholder={item.name} name={item.name} type={item.name == 'Phone' ? "PhoneNumber" : null} onChangeText={text => handleTextChange(text, item.key)} />
                </View>
              )
            }} />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ color: Colors.White_Text }}>
            Do You Have An Account?
          </Text>
          <Pressable onPress={() => HandleNavigation("Login")}>
            <Text style={{ color: Colors.AccentColor5 }}>SIGN IN</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: SCREEN_HEIGHT * .02 }}>
          <CustomButton title={'SIGN UP'} onPress={() => HandleNavigation("Drawer")} />
        </View>
        <Pressable style={{
          marginTop: SCREEN_HEIGHT * .02
        }} onPress={() => HandleNavigation('Drawer')}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Gibson-Regular',
              color: Colors.White_Text,
              alignSelf: 'center',
            }}>
            Continue As Guest
          </Text>
        </Pressable>
      </SafeAreaView>
    </Layout>
  )
}

export default Signup