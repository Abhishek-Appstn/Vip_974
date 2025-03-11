import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Constants from '../Constants'
import SelectorComponentRenderItem from '../components/SelectorComponentRenderItem'
import CabanaListRenderItem from '../components/CabanaListRenderItem'
import { CoffeeCabana, Family_Cabana, XlCabana } from '../assets/Images'

const MyBuilds = () => {
    const{Colors}=Constants
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const [SelectedIndex, setSelectedIndex] = useState(0)
    const [Data, setData] = useState([])

    const DummyData=[
        {id:1,name:'Standard'},
        {id:2,name:'Custom'},
    ]
    const DummyStandardData=[
        {name:'Family Cabana',builder:'Al-Rayyan Co.',size:'6X4',price:250,image:Family_Cabana},
        {name:'Coffee Shop Cabana',builder:'Al-Sad Co.',size:'6X4',price:250,image:CoffeeCabana},
        {name:'XL Family Cabana',builder:'Amaar Co.',size:'6X4',price:250,image:XlCabana},
    ]
    const DummyCustomData=[
        {name:'Coffee Shop Cabana',builder:'Al-Sad Co.',size:'6X4',price:250,image:CoffeeCabana},
        {name:'XL Family Cabana',builder:'Amaar Co.',size:'6X4',price:250,image:XlCabana},
        {name:'Family Cabana',builder:'Al-Rayyan Co.',size:'6X4',price:250,image:Family_Cabana},
    ]
    useEffect(() => {
      SelectedIndex===0?setData(DummyStandardData): SelectedIndex===1?setData(DummyCustomData):null
    }, [SelectedIndex])
    
  return (
    <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT}}>
     <SafeAreaView style={{alignSelf:'center'}}>
    <View style={{width:SCREEN_WIDTH*.9,marginVertical:SCREEN_HEIGHT*.02}}>
    <DrawerHeaderComponent name={"My Builds"} type={"login"} search={true}/>
    </View>
    <FlatList horizontal style={{alignSelf:'center'}} contentContainerStyle={{alignItems:'center',justifyContent:'space-between',width:SCREEN_WIDTH*.7,}} data={DummyData} renderItem={item=><SelectorComponentRenderItem item={item.item} index={item.index} SelectedIndex={SelectedIndex}setSelectedIndex={setSelectedIndex}/>}/>

<FlatList data={Data} showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}} renderItem={item=><CabanaListRenderItem index={item.index} item={item.item}/>}/>
     </SafeAreaView>
    </View>
  )
}

export default MyBuilds