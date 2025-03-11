import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Constants from '../Constants'

const SelectorComponentRenderItem = ({item,index,SelectedIndex,setSelectedIndex}) => {
    const{Colors}=Constants
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const handlePress=(index)=>{
    console.log("INdex",index,SelectedIndex)
    SelectedIndex==index?
    setSelectedIndex(null):
    setSelectedIndex(index)
}
  return (
   <Pressable style={{paddingHorizontal:SCREEN_WIDTH*.04,paddingVertical:SCREEN_HEIGHT*.01,borderBottomWidth:1,borderColor:SelectedIndex==index?Colors.Green1:Colors.White,alignItems:'center'}}onPress={()=>handlePress(index)}>
    <Text style={{color:SelectedIndex==index?Colors.Green1:Colors.White}}>{item.name}</Text>
    </Pressable>
  )
}

export default SelectorComponentRenderItem