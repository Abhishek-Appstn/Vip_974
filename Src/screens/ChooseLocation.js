import { View, Text, FlatList, Pressable, ScrollView, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import ItemLayout from '../components/ItemLayout'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Constants from '../Constants'
import { Search } from '../assets/Images'
import { useNavigation, useRoute } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
import Snackbar from 'react-native-snackbar'
const {places}=DataConstants
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const{Colors}=Constants
 
const HandleNavigation=({Active,navigation,params})=>{
    Active!==null?
    navigation.navigate('ScheduleServices',{location:Active,...params}):Snackbar.show({text:"Please select an item to continue",backgroundColor:'red'})
          }
const RenderFlatlistItem=({item,index,Active,setActive})=>{
    return(
        <Pressable style={{flexDirection:'row',justifyContent:'space-between',padding:10,marginVertical:10,alignItems:'center'}} onPress={()=>{Active==item.name?setActive(null):setActive(item.name)}}>
            <Text style={{fontSize:16,fontFamily:'Gibson',color:Colors.White,fontWeight:'400'}}>{item.name}</Text>
            <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_WIDTH,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
            <View style={{height:SCREEN_WIDTH*.03,width:SCREEN_WIDTH*.03,borderRadius:SCREEN_WIDTH,backgroundColor:Active===item.name?Colors.Green1:null}}/>
                </View>
            </Pressable>
    )
}
const ChooseLocation = (props) => {

const navigation=useNavigation()
const params=props.route.params
const [Active, setActive] = useState(null)
 console.log('Params@@Locationchoose',params)
  return (
   <ItemLayout name="Done" colors={Colors.Black_Bg} onPress={()=>HandleNavigation({navigation:navigation,Active:Active,params:params})} >
    <View style={{width:SCREEN_WIDTH*.9,alignSelf:'center',}}>
<View style={{height:SCREEN_WIDTH*.15,backgroundColor:Colors.Black,alignItems:'center',padding:SCREEN_WIDTH*.05,flexDirection:'row',borderRadius:SCREEN_WIDTH*.02}}>
<Image source={Search}/>
<TextInput style={{height:SCREEN_WIDTH*.12,width:SCREEN_WIDTH*.78,color:Colors.White,marginLeft:SCREEN_WIDTH*.02,fontFamily:'Gibson',fontWeight:'400'}}/>
    </View>
    <Text style={{color:Colors.White,fontSize:18,textTransform:'uppercase',marginTop:SCREEN_WIDTH*.05}}>Choose Location</Text>

     <ScrollView>
     <FlatList scrollEnabled={false} contentContainerStyle={{height:SCREEN_HEIGHT*.7,paddingTop:SCREEN_WIDTH*.02}} data={places} renderItem={item=><RenderFlatlistItem item={item.item} index={item.index} Active={Active} setActive={setActive}/>}/>
     </ScrollView>

     </View>
   </ItemLayout>
  )
}

export default ChooseLocation