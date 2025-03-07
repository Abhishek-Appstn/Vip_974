import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Constants from '../../Constants'

const CustomButton = ({title,onPress,width}) => {
  return (
    <Pressable  onPress={onPress}style={{backgroundColor:Constants.Colors.Green1,alignItems:'center',justifyContent:'center',height:50,borderRadius:7,width:width?width:null }}>
        <Text style={{textTransform:'uppercase',fontSize:18,fontFamily:'Gibson'}}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton