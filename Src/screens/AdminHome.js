import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import HomeHeaderComponent from '../components/HomeHeaderComponent'
import LowerSvg from '../components/LowerSvg'
import HomeLowerSvg from '../components/HomeLowerSvg'
import { useNavigation } from '@react-navigation/native'
const {Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const Data=[
    {title:'Add new Product',navigate:'AdminAddProduct'},
    {title:'Modify Product',navigate:'AdminAddProduct'},
    {title:'View Products',navigate:'AdminAddProduct'},
    {title:'Remove Products',navigate:'AdminAddProduct'},
]

 export const DisplayComponent=({ backgroundColor,headerText,style,onPress})=>{
return(
    <Pressable style={[{width:SCREEN_WIDTH*.41,height:SCREEN_HEIGHT*.09,backgroundColor:Colors.Green1,borderColor:Colors.Green1,borderWidth:1, borderRadius:SCREEN_WIDTH*.03,padding:SCREEN_HEIGHT*.01,alignItems:'center',margin:SCREEN_WIDTH*.02,justifyContent:'center',elevation:10},style]}onPress={onPress}>
        <Text style={{color:Colors.White,fontSize:15,fontFamily:"Gibson",fontWeight:'600',textAlign:'center'}}>{headerText}</Text>
    </Pressable>
)
}
const AdminHeader=()=>{
    return(
    <View style={{marginTop:SCREEN_HEIGHT*.04}}>
        <Text style={{color:Colors.White,fontSize:18,fontFamily:"Gibson",fontWeight:'400',}}>Good Morning, Admin</Text>
    </View>
    )
}
const AdminHome = () => {
    const navigation=useNavigation()
  return (
   <View style={{height:SCREEN_HEIGHT,width:SCREEN_WIDTH,backgroundColor:Colors.Black_Bg}}>
    <SafeAreaView style={{marginHorizontal:SCREEN_WIDTH*.05}}>
    <DrawerHeaderComponent name={"Admin Home"} />
<AdminHeader/>
    <FlatList scrollEnabled={false} contentContainerStyle={{marginTop:SCREEN_HEIGHT*.02,alignSelf:'center'}} data={Data} numColumns={2} renderItem={item=><DisplayComponent headerText={item.item.title} onPress={()=>navigation.navigate(item.item.navigate)}/>}/>
    <DisplayComponent style={{width:SCREEN_WIDTH*.85,alignSelf:'center',backgroundColor:Colors.Black_Bg}} headerText={"View Tickets"}/>
    </SafeAreaView>
<LowerSvg/>
   </View>
  )
}

export default AdminHome