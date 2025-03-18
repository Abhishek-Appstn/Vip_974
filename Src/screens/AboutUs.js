import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeHeaderComponent from '../components/HomeHeaderComponent'
import Constants from '../Constants'
import DataConstants from '../assets/DataConstants'
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const{Colors}=Constants
const {CompanyName,AboutCompanyData}=DataConstants

const CompanyData=()=>{
  return(
    <ScrollView contentContainerStyle={{marginHorizontal:SCREEN_WIDTH*.05,marginTop:SCREEN_HEIGHT*.05}}>
      <Text style={{color:Colors.White,textAlign:'center',fontSize:18,fontFamily:'Gibson',fontWeight:'400'}}>{CompanyName}</Text>
      <Text style={{color:Colors.White_Text,fontSize:16,fontWeight:'light',textAlign:'justify',fontFamily:'Gibson',marginTop:SCREEN_HEIGHT*.03,lineHeight:20}}>{AboutCompanyData}</Text>
    </ScrollView>
  )
}

const AboutUs = () => {
  return (
    <View style={{backgroundColor:Colors.Black,height:SCREEN_HEIGHT,alignItems:'center'}}>
<HomeHeaderComponent height={SCREEN_HEIGHT*.3}headerText={"About Us"}/>
<CompanyData/>
    </View>
  )
}

export default AboutUs