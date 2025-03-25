import { View, Text, Pressable, FlatList } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const {Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const AddonRenderItem=({item,index,data,CustomTextAlign})=>{
    let Subdata=data[item] ||[ ]
    let DataArray=Subdata.length>0?Subdata.map(item => `(${item.qty}) ${item.name}`).join('  |  '):null;
    return (
            <Pressable style={{marginTop:index!==0?SCREEN_HEIGHT*.035:null}}>
           <Text style={[{color:Colors.White,fontSize:20,fontFamily:'Gibson',textTransform:'uppercase',fontWeight:'400'},CustomTextAlign]}>{item}</Text>
            <Text style={[{color:Colors.White,fontSize:14,fontFamily:'Gibson',textTransform:'uppercase',marginVertical:SCREEN_HEIGHT*.008,maxWidth:SCREEN_WIDTH*.9},CustomTextAlign]}>{DataArray}</Text>       
            </Pressable>
      )
}
const AddonComponent = ({AddonData}) => {
    const language=useSelector(state=>state.Language.value)
    const CustomTextAlign=Utils.textAlign(language)
    return(
  <FlatList scrollEnabled={false} data={AddonData?Object.keys(AddonData):null} contentContainerStyle={{marginTop:SCREEN_HEIGHT*.05}} ListEmptyComponent={<Text style={{color:Colors.White}}>No Addons Selected</Text>}renderItem={item=><AddonRenderItem item={item.item} index={item.index} data={AddonData} CustomTextAlign={CustomTextAlign}/>}/>
    )
}

export default AddonComponent