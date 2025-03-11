import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { BathroomSide, CoffeeCabana, Condition, Family_Cabana, Kitchen, Rooms, XlCabana, YamahaJetski1 } from '../assets/Images'
import CabanaListRenderItem from '../components/CabanaListRenderItem'

const {Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const DummyData=[
    {name:'Family Cabana',builder:'Al-Rayyan Co.',size:'6X4',price:250,image:Family_Cabana,address:'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar',features:[{featureName:'Kitchen',qty:1,image:Kitchen},{featureName:'Rooms',qty:1,image:Rooms},{featureName:'AC',qty:1,image:Condition},{featureName:'Bathroom',qty:1,image:BathroomSide},]},
    {name:'Coffee Shop Cabana',builder:'Al-Sad Co.',size:'6X4',price:250,image:CoffeeCabana},
    {name:'XL Family Cabana',builder:'Amaar Co.',size:'6X4',price:250,image:XlCabana},
]

const SelectCabanas = (props) => {
  return (
    <View style={{backgroundColor:Colors.Black,height:SCREEN_HEIGHT}}>
     <SafeAreaView style={{width:SCREEN_WIDTH*.9,alignSelf:'center',marginTop:SCREEN_HEIGHT*.1}}>
        <DrawerHeaderComponent name='Cabanas' type='login'/>
        <FlatList showsVerticalScrollIndicator={false} renderItem={item=><CabanaListRenderItem item={item.item} index={item.index}/>} data={DummyData}/>
     </SafeAreaView>
    </View>
  )
}

export default SelectCabanas