import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import Constants from '../../Constants'
import { Logo_White } from '../../assets/Images'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
  const [FormData, setFormData] = useState({
    FirstName:'',
    LastName:'',
    Email:'',
    Phone:'',
    Qid:''
  })
const navigation=useNavigation()
  
   const data=[
        {name:'First Name',key:'FirstName'},
        {name:'Last Name',key:'LastName'},
        {name:'Email',key:'Email'},
        {name:'Phone',key:'Phone'},
        {name:'Qid',key:'Qid'},
    ]
    const HandleNavigation=(name)=>{
    const FIlled =Object.values(FormData).every(value=>value!=='')
navigation.navigate(name)
    }
    const handleTextChange=(text,key)=>{
      setFormData({
        ...FormData,
        [key]:text
      }
      )
    }
  return (
    <Layout>
    <SafeAreaView
      style={{
        justifyContent: 'center',
        height: Constants.SCREEN_DIMENSIONS.SCREEN_HEIGHT,
        marginHorizontal: 25,
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>

      <Image source={Logo_White} style={{width: 60}} resizeMode="contain" />
      <Text
        style={{
          fontFamily: 'Gibson',
          color: Constants.Colors.Green1,
          fontSize: 48,
          marginTop: 20,
        }}>
        SIGNUP
      </Text>
      <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} data={data} renderItem={({item,index})=>{
        return(
          <View style={{marginTop: 20, marginBottom: 10}}>
          <CustomTextInput value={FormData[item.key]} placeholder={item.name} name={item.name} type={item.name=='Phone'?"PhoneNumber":null} onChangeText={text=>handleTextChange(text,item.key)} />
        </View>
        )

      }}/>
    
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Text style={{color: Constants.Colors.White_Text}}>
         Do You Have An Account?{' '}
        </Text>
        <Pressable onPress={()=>HandleNavigation("Login")}>
          <Text style={{color: Constants.Colors.AccentColor5}}>SIGN IN</Text>
        </Pressable>
      </View>
      <View style={{marginTop: 30}}>
        <CustomButton title={'SIGN UP'} onPress={()=>HandleNavigation("Home")} />
      </View>  
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Gibson-Regular',
          color: Constants.Colors.White_Text,
          alignSelf: 'center',
        marginVertical:17
        }}>
        Continue As Guest{' '}
      </Text>
        </ScrollView>
       
    </SafeAreaView>
  </Layout>
  )
}

export default Signup