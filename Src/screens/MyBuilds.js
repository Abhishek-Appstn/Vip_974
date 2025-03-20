import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Constants from '../Constants'
import SelectorComponentRenderItem from '../components/SelectorComponentRenderItem'
import CabanaListRenderItem from '../components/CabanaListRenderItem'
import { CoffeeCabana, Family_Cabana, XlCabana } from '../assets/Images'
import DataConstants from '../assets/DataConstants'

const MyBuilds = () => {
    const{Colors}=Constants
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const [SelectedIndex, setSelectedIndex] = useState(0)
    const [Data, setData] = useState([])
const {MyBuildHeader,MybuildCustomData,MybuildStandardData}=DataConstants

   
    useEffect(() => {
      SelectedIndex===0?setData(MybuildStandardData): SelectedIndex===1?setData(MybuildCustomData):null
    }, [SelectedIndex])
    
  return (
    <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT}}>
     <SafeAreaView style={{alignSelf:'center'}}>
    <View style={{width:SCREEN_WIDTH*.9,marginVertical:SCREEN_HEIGHT*.02}}>
    <DrawerHeaderComponent name={"My Builds"} type={"login"} search={true}/>
    </View>
    <FlatList horizontal style={{alignSelf:'center'}} contentContainerStyle={{alignItems:'center',justifyContent:'space-between',width:SCREEN_WIDTH*.7,}} data={MyBuildHeader} renderItem={item=><SelectorComponentRenderItem item={item.item} index={item.index} SelectedIndex={SelectedIndex}setSelectedIndex={setSelectedIndex}/>}/>

<FlatList data={Data} showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}} renderItem={item=><CabanaListRenderItem index={item.index} item={item.item}/>}/>
     </SafeAreaView>
    </View>
  )
}

export default MyBuilds