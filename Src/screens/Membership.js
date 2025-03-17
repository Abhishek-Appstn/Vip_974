import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Constants from '../Constants'
import Membershipcard from '../components/Membershipcard'
import {  Build_White, Rent_White, Towing_White } from '../assets/Images'
const {Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const Data=[
  {name:'Rentals',date:'03 Jun 2021',image:Rent_White,point:120,type:'inc'},
  {name:'Services',date:'02 Jun 2021',image:Towing_White,point:120,type:'inc'},
  {name:'Builds',date:'01 Jun 2021',image:Build_White,point:120,type:'dec'},
  {name:'Rentals',date:'03 Jun 2021',image:Rent_White,point:120,type:'inc'},
  {name:'Services',date:'02 Jun 2021',image:Towing_White,point:120,type:'inc'},
  {name:'Builds',date:'01 Jun 2021',image:Build_White,point:120,type:'dec'},{name:'Rentals',date:'03 Jun 2021',image:Rent_White,point:120,type:'inc'},
  {name:'Services',date:'02 Jun 2021',image:Towing_White,point:120,type:'inc'},
  {name:'Builds',date:'01 Jun 2021',image:Build_White,point:120,type:'dec'},
]
const PointHistory=()=>{
  return(
    <View style={{backgroundColor:Colors.Black_M}}>
      <Text style={{color:Colors.White,fontFamily:'Gibson',fontSize:18,fontWeight:'400',padding:SCREEN_WIDTH*.02}}>Points history</Text>
   <FlatList data={Data} contentContainerStyle={{marginTop:SCREEN_HEIGHT*.02,paddingBottom:SCREEN_HEIGHT*.3}} renderItem={({item,index})=>{
    return(
        <View style={{height:SCREEN_HEIGHT*.06,flexDirection:'row',alignSelf:'center',width:SCREEN_WIDTH*.9,marginVertical:SCREEN_HEIGHT*.01,alignItems:'baseline',paddingLeft:SCREEN_WIDTH*.03,justifyContent:"space-between"}}>
          <View style={{flexDirection:'row'}}>
          <View style={{backgroundColor:Colors.Black_Bg,padding:SCREEN_WIDTH*.016,borderRadius:SCREEN_WIDTH*.02}}>
          <Image source={item.image}/>
          </View>
          <View style={{marginLeft:SCREEN_WIDTH*.04}}>
            <Text style={{fontSize:18,color:Colors.White,fontFamily:'Gibson',fontWeight:'400'}}>{item.name}</Text>
            <Text style={{fontSize:12,color:Colors.Gray_Text,fontFamily:'Gibson',fontWeight:'400',marginVertical:SCREEN_HEIGHT*.006}}>{item.date}</Text>
</View>
            </View>
<Text style={{fontSize:18,color:item.type==='dec'?'red':Colors.Green1}}>{item.type=='inc'?"+":'-'} {item.point} </Text>

          </View>
    )
   }}/>
    </View>
  )
}
const Membership = () => {
  return (
 <SafeAreaView style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT,width:SCREEN_WIDTH}}>
  <View style={{paddingHorizontal:SCREEN_WIDTH*.05}}>
  <DrawerHeaderComponent name={"Membership"} type={"login"} search={true}/>
<View style={{marginTop:SCREEN_HEIGHT*.04}}>
  <Membershipcard/>
  </View>
  </View>
  <PointHistory/>
 </SafeAreaView>
  )
}

export default Membership