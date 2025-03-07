import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Background_Icon, CabanSize } from '../assets/Images'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import CustomTextInput from '../components/CustomTextInput/CustomTextInput'
import CustomButton from '../components/CustomButton/CustomButton'

const CabanSizeDetail = () => {
    const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const [Size, setSize] = useState('')
    const {Colors}=Constants
const HandleTextChange=(text)=>{
  setSize(text)
}
  return (
  <View style={{backgroundColor:Constants.Colors.Black_Bg,height:SCREEN_HEIGHT,width:SCREEN_WIDTH}}>
    <Image style={{position:'absolute',top:0,right:-110,opacity:.45,height:SCREEN_WIDTH*.7,resizeMode:'contain'}} source={Background_Icon}/>
<SafeAreaView style={{width:SCREEN_WIDTH*.9,alignSelf:"center",marginTop:SCREEN_WIDTH*.2}}>
<DrawerHeaderComponent type='login' search={true} name="Size" />
<View style={{alignItems:'center',justifyContent:'center',height:SCREEN_HEIGHT/1.1,}}>
<Image source={CabanSize} style={{height:SCREEN_WIDTH*.25,width:SCREEN_WIDTH*.25}}/>
   <Text style={{fontSize:24,fontFamily:'Gibson',textTransform:'uppercase',fontWeight:'semibold',marginTop:30,color:Colors.White}}>Caban Size</Text>
   <Text style={{fontSize:16,fontFamily:'Gibson',fontWeight:'semibold',marginTop:30,color:Colors.White,width:SCREEN_WIDTH*.7,textAlign:'center',textTransform:'capitalize'}}>Please enter the cubicle area to be washed in square meters</Text>
<View style={{marginVertical:SCREEN_WIDTH*.07}}>
<CustomTextInput value={Size} onChangeText={text=>HandleTextChange(text)} name={"Caban Size"}type='size'/>
</View>
<View style={{marginVertical:SCREEN_WIDTH*.2}}>
<CustomButton title="NExt" width={SCREEN_WIDTH*.8}/>

</View>
</View>
</SafeAreaView>
        </View>
  )
}

export default CabanSizeDetail