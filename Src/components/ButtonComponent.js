import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Barcode } from '../assets/Images'
import Constants from '../Constants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const{Colors}=Constants
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const ButtonComponent = ({title,style,Onpress}) => {
    const language=useSelector(state=>state.Language.value)
    const CustomFlexDirection=Utils.flexDirection(language)
    return(
        <Pressable style={[{backgroundColor:Colors.Green1,height:SCREEN_HEIGHT*.1,alignItems:'center',justifyContent:'center',flexDirection:'row',position:'absolute',bottom:0,width:SCREEN_WIDTH,zIndex:0},style,CustomFlexDirection]}onPress={Onpress}>
   <Image
                 source={Barcode}
                 style={{
                   height: SCREEN_HEIGHT * 0.04,
                   width: SCREEN_WIDTH * 0.08,
                   backgroundColor: Colors.Black,
                   padding: SCREEN_WIDTH * 0.011,
                   resizeMode: 'contain',
                   borderRadius: 4,
                   borderColor: Colors.Green1,
                   borderWidth: 0.5,
                 }}
               />
   <Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase'}}>{title}</Text>
    </Pressable>
    )
}

export default ButtonComponent

