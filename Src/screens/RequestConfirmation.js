import { View, Text, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Tick } from '../assets/Images'

const RequestConfirmation = () => {
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const{Colors}=Constants
const navigation=useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'center'}}>
    <View style={{height:SCREEN_WIDTH*.9,backgroundColor:Colors.Black,width:SCREEN_WIDTH*.8,borderRadius:15,alignItems:'center',paddingTop:SCREEN_WIDTH*.078}}>
    <View style={{ height:SCREEN_WIDTH*.2,width:SCREEN_WIDTH*.2,backgroundColor:Colors.Green1,alignItems:'center',justifyContent:'center',padding:SCREEN_WIDTH*.01,borderRadius:SCREEN_WIDTH}}>
    <Image source={Tick} style={{resizeMode:'contain'}}/>
    
    </View>
    <Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,maxWidth:SCREEN_WIDTH*.4,textTransform:'uppercase',color:Colors.White,marginTop:SCREEN_WIDTH*.08,alignSelf:'center'}}>Request Done Successfully</Text>
    <Text style={{fontFamily:'Gibson',fontWeight:'light',fontSize:14,alignSelf:'center',width:SCREEN_WIDTH*.6,color:Colors.White,textAlign:'center',marginVertical:SCREEN_WIDTH*.04}}>Thank you. The lease has been successful. You can follow the order from the My Rentals  page</Text>
    <CustomButton width={SCREEN_WIDTH*.55} title="My Builds" onPress={()=>{navigation.navigate("MyBuilds")}}/>
    </View>
            </View>
  )
}

export default RequestConfirmation