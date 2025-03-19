import { View, Text, FlatList, Pressable, ScrollView, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import ItemLayout from '../components/ItemLayout'
import Constants from '../Constants'
import { Search, Tick } from '../assets/Images'
import { useNavigation, useRoute } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
import Snackbar from 'react-native-snackbar'
import LanguageHandler from '../LanguageHandler'
const {places}=DataConstants
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const{Colors}=Constants
 
const HandleNavigation=({Active,navigation,params})=>{
    Active!==null?
    navigation.navigate('ScheduleServices',{location:Active,...params}):Snackbar.show({text:"Please select an item to continue",backgroundColor:'red'})
          }
const RenderFlatlistItem=({item,index,Active,setActive,isArabic})=>{
    return(
        <Pressable style={{flexDirection:isArabic?'row-reverse':'row',justifyContent:'space-between',padding:10,marginVertical:10,alignItems:'center'}} onPress={()=>{Active==item.name?setActive(null):setActive(item.name)}}>
            <Text style={{fontSize:16,fontFamily:'Gibson',color:Colors.White,fontWeight:'400'}}>{item.name}</Text>
            <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_HEIGHT,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center',overflow:'hidden',backgroundColor:item.name===Active?Colors.Green1:null}}>
               {Active===item.name?<Image style={{height:SCREEN_WIDTH*.03,width:SCREEN_WIDTH*.03}} resizeMode='contain' source={Tick}/>:null}
                </View>
            </Pressable>
    )
}
const ChooseLocation = (props) => {
const isArabic=LanguageHandler()
const navigation=useNavigation()
const params=props.route.params
const [Active, setActive] = useState(null)
  return (
   <ItemLayout name="Done" colors={Colors.Black_Bg} onPress={()=>HandleNavigation({navigation:navigation,Active:Active,params:params})} >
    <View style={{width:SCREEN_WIDTH*.9,alignSelf:'center',}}>
<View style={{height:SCREEN_WIDTH*.15,backgroundColor:Colors.Black,alignItems:'center',padding:SCREEN_WIDTH*.05,flexDirection:isArabic?'row-reverse':'row',borderRadius:SCREEN_WIDTH*.02}}>
<Image source={Search}/>
<TextInput style={{height:SCREEN_WIDTH*.12,width:SCREEN_WIDTH*.78,color:Colors.White,marginLeft:!isArabic?SCREEN_WIDTH*.02:0,marginRight:isArabic?SCREEN_WIDTH*.02:0,fontFamily:'Gibson',fontWeight:'400',textAlign:isArabic?'right':'left'}}/>
    </View>   
    <FlatList ListHeaderComponent={ <Text style={{color:Colors.White,fontSize:18,textTransform:'uppercase',marginTop:SCREEN_WIDTH*.05,textAlign:isArabic?'right':'left'}}>Choose Location</Text>}contentContainerStyle={{height:SCREEN_HEIGHT*.7,paddingTop:SCREEN_WIDTH*.02}} data={places} renderItem={item=><RenderFlatlistItem item={item.item} index={item.index} Active={Active} setActive={setActive} isArabic={isArabic}/>}/>


     </View>
   </ItemLayout>
  )
}

export default ChooseLocation