import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { useNavigation } from '@react-navigation/native'
const {Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const CabanaListRenderItem = ({item,index,list}) => {
const navigation=useNavigation()

  return (
    <Pressable style={{backgroundColor:Colors.Black_Bg,marginVertical:SCREEN_WIDTH*.06,overflow:'hidden',borderRadius:SCREEN_WIDTH*.02,paddingVertical:SCREEN_WIDTH*.02,width:SCREEN_WIDTH*.9,}} onPress={()=>navigation.navigate('CabanaView',item)}>
    <View >
    <Image source={item.image} style={{height:SCREEN_HEIGHT*.2,width:SCREEN_WIDTH*.85,alignSelf:'center',overflow:'hidden',resizeMode:'cover',borderRadius:10}}/>

    </View>
    <View style={{}}>
     <View style={{flexDirection:'row',marginTop:SCREEN_WIDTH*.02,justifyContent:'space-between',alignItems:'flex-end',paddingBottom:SCREEN_HEIGHT*.01,borderColor:Colors.Gray_Border,borderBottomWidth:.19,marginHorizontal:SCREEN_WIDTH*.04}}>
        <View style={{}}>
        <Text style={{color:Colors.White,fontSize:18,textTransform:'uppercase',fontWeight:'600',marginVertical:SCREEN_WIDTH*.02}}>{item.name}</Text>
        <Text style={{color:Colors.Orange1,fontSize:12,textTransform:'capitalize'}}>{item.builder}</Text>
        </View>
        <Text style={{color:Colors.White,fontSize:18,fontWeight:'600'}}>{item.size} m²</Text>
    
 </View>
 <View style={{flexDirection:'row',marginTop:SCREEN_WIDTH*.03,justifyContent:'space-between',paddingHorizontal:SCREEN_WIDTH*.045,alignItems:'flex-end'}}>
        <Text style={{color:Colors.White,fontSize:12,textTransform:'capitalize'}}>Starting Price</Text>
        <Text style={{color:Colors.Green1,fontSize:18,fontWeight:'600'}}>{item.price} <Text style={{fontSize:12}}>QAR</Text></Text>       
 </View>
     </View>
 </Pressable>
  )
}

export default CabanaListRenderItem