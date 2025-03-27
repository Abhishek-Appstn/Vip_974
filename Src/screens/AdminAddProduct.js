import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Constants from '../Constants'
import { DisplayComponent } from './AdminHome'
import { FlatList } from 'react-native-gesture-handler'
import { Jetski, QuadBike } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const {Colors}=Constants
const SelectionData=[
    {title:'Rent',subTypes:[
        {title:'Beach',icon:Jetski},
        {title:'Desert',icon:QuadBike}, ],navigate:'AdminAddProduct'},
    {title:'Service',navigate:'AdminAddProduct'},
    {title:'Cabana',navigate:'AdminAddProduct'},
    {title:'Remove Products',navigate:'AdminAddProduct'},
]

export const AdminFlatlistRenderer=({Data})=>{
    const navigation=useNavigation()

    return(
          <FlatList scrollEnabled={false} contentContainerStyle={{marginTop:SCREEN_HEIGHT*.02,alignSelf:'center'}} data={Data} numColumns={2} renderItem={item=><DisplayComponent headerText={item.item.title} onPress={()=>navigation.navigate(item.item.navigate)}/>}/>
    )
}
const AdminAddProduct = () => {
  return (
    <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT,width:SCREEN_WIDTH,padding:SCREEN_WIDTH*.02}}>
<SafeAreaView>
 <AdminFlatlistRenderer Data={SelectionData}/>
</SafeAreaView>
    </View>
  )
}

export default AdminAddProduct