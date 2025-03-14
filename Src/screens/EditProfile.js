import React, { useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import CustomTextInput from '../components/CustomTextInput/CustomTextInput'
import CustomButton from '../components/CustomButton/CustomButton'
import Constants from '../Constants'
import { Logo_White, Profile_Damu } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const{Colors}=Constants
const profileImage=Profile_Damu
const EditProfile = (props) => {
  const [FormData, setFormData] = useState({
    FirstName:'',
    LastName:'',
    Email:'',
    Phone:'',
    Qid:''
  })
const navigation=props
  
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
  
    <SafeAreaView
      style={{
        justifyContent: 'center',
        height: SCREEN_HEIGHT,
        backgroundColor:Colors.Black_Bg
      }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding:SCREEN_WIDTH*.05}}>
<DrawerHeaderComponent type={'login'} name="Edit Profile" search={true}/>
 
 <View style={{borderColor:Colors.Green1,borderWidth:1 ,height:SCREEN_WIDTH*.3,width:SCREEN_WIDTH*.3,borderRadius:SCREEN_HEIGHT,overflow:'hidden',alignItems:"center",justifyContent:'center',alignSelf:'center',marginVertical:SCREEN_HEIGHT*.04}}>
                    <Image style={{height:SCREEN_WIDTH*.28,width:SCREEN_WIDTH*.28,overflow:'hidden',resizeMode:'cover',borderRadius:SCREEN_HEIGHT}} source={profileImage}/>
                </View>
      <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} data={data} renderItem={({item,index})=>{
        return(
          <View style={{marginTop: 20, marginBottom: 10}}>
          <CustomTextInput value={FormData[item.key]} placeholder={item.name} name={item.name} type={item.name=='Phone'?"PhoneNumber":null} onChangeText={text=>handleTextChange(text,item.key)} />
        </View>
        )

      }}/>
      <View style={{marginTop: 30}}>
        <CustomButton title={'Save'} onPress={()=>navigation.goBack()} />
      </View>  
        </ScrollView>
       
    </SafeAreaView>
  )
}

export default EditProfile