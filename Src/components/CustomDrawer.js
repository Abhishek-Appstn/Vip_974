import { View, Text, SafeAreaView, Image, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import Constants from '../Constants'
import { AboutUS, ChevronRight, ChevronRightWhite, Gift, Home, Logout, PrivacyPolicy, Profile, Profile_Damu, ProfileDP, Support } from '../assets/Images'
import Svg, { Path } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'

const{Colors}=Constants
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
 const LowerSvg = () => {
    return (
      <View style={{position: 'absolute', left: -130, bottom: -175}}>
        <Svg
          id="Group_12530"
          data-name="Group 12530"
          width={277.526}
          height={365.168}
          viewBox="0 0 277.526 365.168">
          <Path
            id="Path_8641"
            data-name="Path 8641"
            d="M126.471,133.71h30.861L30.861,356.756H0Z"
            transform="translate(92.988 -51.685)"
            fill="#0fc1a1"
          />
          <Path
            id="Path_8642"
            data-name="Path 8642"
            d="M126.471,133.71h30.861L30.861,356.756H0Z"
            transform="translate(120.195 8.412)"
            fill="#8a50ee"
          />
          <Path
            id="Path_8645"
            data-name="Path 8645"
            d="M126.471,133.71h30.861L30.861,356.756H0Z"
            transform="translate(77.558 -133.71)"
            fill="#ff5f00"
          />
          <Path
            id="Path_8643"
            data-name="Path 8643"
            d="M126.471,133.71h30.861L30.861,356.756H0Z"
            transform="translate(89.74 8.412)"
            fill="#1e75d1"
          />
          <Path
            id="Path_8646"
            data-name="Path 8646"
            d="M126.471,133.71h30.861L30.861,356.756H0Z"
            transform="translate(0 -51.685)"
            fill="#e91ccf"
          />
          <Path
            id="Path_8644"
            data-name="Path 8644"
            d="M126.471,133.71h30.861L30.861,356.756H0Z"
            transform="translate(108.825 -133.71)"
            fill="#e50c58"
          />
        </Svg>
      </View>
    );
  };
const CustomDrawer = (props) => {
    const [SelectedLanguage, setSelectedLanguage] = useState('English')
    const { navigation } = props;

    const Languages=['Arabic',"English"]
    const DrawerData=[
        {id:1,title:'Home',icon:Home,navigate:'Home'},
        {id:2,title:'My Profile',icon:Profile,navigate:'MyProfile'},
        {id:3,title:'About Us',icon:AboutUS},
        {id:4,title:'Support',icon:Support},
        {id:5,title:'Privacy Policy',icon:PrivacyPolicy},
        {id:6,title:'Logout',icon:Logout},


    ]
  return (
    <SafeAreaView style={{backgroundColor:Colors.Black_Bg,flex:1,overflow:'hidden'}}>
        <View style={{marginVertical:SCREEN_HEIGHT*.1,marginHorizontal:SCREEN_WIDTH*.05,alignSelf:SelectedLanguage==='Arabic'?'flex-end':'flex-start'}}>
        <View style={{height:SCREEN_WIDTH*.2,width:SCREEN_WIDTH*.2,borderRadius:SCREEN_HEIGHT,overflow:'hidden',alignSelf:SelectedLanguage==='Arabic'?'flex-end':'flex-start'}}>
<Image style={{height:SCREEN_WIDTH*.2,width:SCREEN_WIDTH*.2,}} source={Profile_Damu} resizeMode='cover'/>
            </View>
            <View style={{marginTop:SCREEN_HEIGHT*.01,justifyContent:SelectedLanguage==='Arabic'?'flex-end':'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'600',color:Colors.White,marginVertical:SCREEN_HEIGHT*.007}}>Hisham Tourbag </Text>
            <View style={{flexDirection:'row',alignItems:'center',}}>
                <Image source={Gift}/> 
                <Text style={{fontFamily:"Gibson",color:Colors.Green1,fontWeight:"900",marginHorizontal:SCREEN_WIDTH*.01}}>GOLD</Text>
                <Text style={{fontFamily:"Gibson",color:Colors.White,}}>(1038) Point</Text>
                <Image source={ChevronRightWhite}/>
            </View>
            <View style={{flexDirection:'row'}}>

       {     Languages.map((language,index)=>(
        <Pressable style={{backgroundColor:language===SelectedLanguage?Colors.Green1:Colors.Black,marginVertical:SCREEN_HEIGHT*.01,width:SCREEN_HEIGHT*.1,borderRadius:SCREEN_WIDTH*.02,alignItems:"center",justifyContent:'center',height:SCREEN_HEIGHT*.04}}onPress={()=>{setSelectedLanguage(language)}}>
                <Text style={{color:language===SelectedLanguage?Colors.Black :Colors.White,fontSize:14,fontWeight:'600'}}>{language}</Text>
        </Pressable>
       ))    
}
</View>

<FlatList contentContainerStyle={{marginTop:SCREEN_HEIGHT*.025}} data={DrawerData} scrollEnabled={false} renderItem={({item,index})=>{
    return(

        <Pressable style={{justifyContent:SelectedLanguage==='Arabic'?'flex-end':null, flexDirection:'row',alignItems:'center',padding:SCREEN_WIDTH*.03,marginTop:item.title==='Logout'?SCREEN_HEIGHT*.1:0}} onPress={()=>navigation.navigate(item.navigate)}>
          {SelectedLanguage!=='Arabic'?  <Image source={item.icon} style={{height:SCREEN_HEIGHT*.04,resizeMode:'contain',marginRight:SCREEN_WIDTH*.04,}}/>:null}
            <Text style={{color:Colors.White,fontWeight:'500',fontSize:16,marginRight:SCREEN_WIDTH*.04,}}>{item.title}</Text>
          {SelectedLanguage=='Arabic'?  <Image source={item.icon} style={{height:SCREEN_HEIGHT*.04,resizeMode:'contain',}}/>:null}

            </Pressable>
    )
}}/>

<LowerSvg/>           


            </View>
        </View>
    </SafeAreaView>
  )
}

export default CustomDrawer