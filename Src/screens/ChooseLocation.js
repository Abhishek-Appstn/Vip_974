import { View, Text, FlatList, Pressable, ScrollView, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import ItemLayout from '../components/ItemLayout'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Constants from '../Constants'
import { Search } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'

const ChooseLocation = () => {
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const{Colors}=Constants
const navigation=useNavigation()
const [Active, setActive] = useState(null)
   const places = [
        {name: 'New York'},
        {name: 'Paris'},
        {name: 'Tokyo'},
        {name: 'Sydney'},
        {name: 'Cairo'},
        {name: 'Mumbai'},
        {name: 'Rome'},
        {name: 'London'},
        {name: 'Beijing'},
        {name: 'Rio de Janeiro'}
      ];
      const HandleNavigation=()=>{
Active!==null?
navigation.navigate('ScheduleServices',{Active,type:'Washing'}):Alert.alert("Please select an item to continue")
      }
  return (
   <ItemLayout name="Done" colors={Colors.Black_Bg} onPress={HandleNavigation} >
    <View style={{width:SCREEN_WIDTH*.9,alignSelf:'center',}}>
<View style={{height:SCREEN_WIDTH*.15,backgroundColor:Colors.Black,alignItems:'center',padding:SCREEN_WIDTH*.05,flexDirection:'row',borderRadius:SCREEN_WIDTH*.02}}>
<Image source={Search}/>
<TextInput style={{height:SCREEN_WIDTH*.12,width:SCREEN_WIDTH*.78}}/>
    </View>
    <Text style={{color:Colors.White,fontSize:18,textTransform:'uppercase',marginTop:SCREEN_WIDTH*.05}}>Choose Location</Text>

     <ScrollView>
     <FlatList scrollEnabled={false} contentContainerStyle={{height:SCREEN_HEIGHT*.7,paddingTop:SCREEN_WIDTH*.02}} data={places} renderItem={({item,index})=>{
return(
    <Pressable style={{flexDirection:'row',justifyContent:'space-between',padding:10,marginVertical:10,alignItems:'center'}} onPress={()=>{Active==item.name?setActive(null):setActive(item.name)}}>
        <Text style={{fontSize:16,fontFamily:'Gibson',color:Colors.White,fontWeight:'400'}}>{item.name}</Text>
        <View style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderRadius:SCREEN_WIDTH,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
        <View style={{height:SCREEN_WIDTH*.03,width:SCREEN_WIDTH*.03,borderRadius:SCREEN_WIDTH,backgroundColor:Active===item.name?Colors.Green1:null}}/>
            
            </View>
        </Pressable>
)
     }}/>
     </ScrollView>

     </View>
   </ItemLayout>
  )
}

export default ChooseLocation