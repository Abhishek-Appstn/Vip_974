import { View, Text, Pressable, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { ChevronLeft, ChevronRight } from '../assets/Images'

const ItemLayout = ({name,children,size,colors,onPress,screenname,padding}) => {
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const{Colors}=Constants

  return (
    <View>
       <View style={{backgroundColor:colors?colors:Colors.Black,height:SCREEN_HEIGHT*.92,width:SCREEN_WIDTH,borderRadius:15,zIndex:9,overflow:"hidden",borderTopRightRadius:0,borderTopLeftRadius:0}}>
       <SafeAreaView style={{width:SCREEN_WIDTH,alignSelf:'center',marginTop:SCREEN_WIDTH*.2,overflow:'hidden'}}>
     <View style={{marginHorizontal:SCREEN_WIDTH*.07,}}>
     </View> 
        {children}
        </SafeAreaView>
   </View>
   <Pressable style={{backgroundColor:Colors.Green1,height:SCREEN_WIDTH*.24,top:-15,zIndex:-1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}onPress={onPress}>
   <Image source={ChevronRight} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/>
   <Image source={ChevronRight} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
   <Image source={ChevronRight} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/> 
   <Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase'}}>{name}</Text>
   <Image source={ChevronLeft} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/>
   <Image source={ChevronLeft} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
   <Image source={ChevronLeft} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/> 
    </Pressable>
   </View>
  )
}

export default ItemLayout