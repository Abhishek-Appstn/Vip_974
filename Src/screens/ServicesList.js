import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { calendar, Location_White, YamahaJetski1 } from '../assets/Images'
import StarComponent from '../components/StarComponent'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
const{Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS

const ServicesRenderItem=({item,index,params})=>{
    const navigation=useNavigation()
    const HandleNavigation=(item)=>{
   
        navigation.navigate('ProductPage',{...item,...params})
    }
    return(
        <Pressable style={{width:SCREEN_WIDTH*.95,marginVertical:8,alignSelf:'center',height:SCREEN_WIDTH*.28,backgroundColor:Colors.Black_Bg,borderRadius:12,flexDirection:'row',alignItems:'center',paddingHorizontal:15,justifyContent:'space-between'}} onPress={()=>HandleNavigation(item)}>
    <View style={{flexDirection:'row'}}>
    <View style={{height:SCREEN_WIDTH*.2,width:SCREEN_WIDTH*.2,borderRadius:10,overflow:'hidden'}}>
    <Image source={item.image} resizeMode='cover' style={{height:SCREEN_WIDTH*.2,width:SCREEN_WIDTH*.2}} />
    </View>
    
    
    <View style={{marginHorizontal:SCREEN_WIDTH*.03,}}>
        <Text style={{color:Colors.White,fontSize:18,fontFamily:'Gibson',textTransform:'uppercase',marginVertical:SCREEN_WIDTH*.011}}>{item.name}</Text>
        <StarComponent maxStars={5} rating={item.rating}/>
        <Text style={{color:Colors.Orange1,fontSize:12,fontFamily:'Gibson',textTransform:'capitalize',marginVertical:SCREEN_WIDTH*.011}}>{item.brand}</Text>
        <View style={{flexDirection:'row',marginVertical:SCREEN_WIDTH*.011}}>
            <Image source={Location_White}/>
        <Text style={{color:Colors.Gray_Text,fontSize:12,fontFamily:'Gibson',textTransform:'capitalize',marginLeft:SCREEN_WIDTH*.01}}>{item.location}</Text>
    
        </View>
        
    </View>
    </View>
    <View>
    <Text style={{color:Colors.Green1,fontSize:24,fontFamily:'Gibson',fontWeight:'600',textAlign:'right'}}>{item.price}</Text>
    <Text style={{color:Colors.Green1,fontSize:12,fontFamily:'Gibson',fontWeight:'600'}}>QAR/hour</Text>
    
    
    </View>
        </Pressable>
    )
}

const ServicesList = (props) => {
    const params=props.route.params
    const type=params.subtype
    
  return (
    <View style={{height:SCREEN_HEIGHT,width:SCREEN_WIDTH,backgroundColor:Colors.Black}}>
     <View style={{height:SCREEN_WIDTH*.5,backgroundColor:Colors.Black_Bg,borderBottomRightRadius:15,borderBottomLeftRadius:15,paddingHorizontal:SCREEN_WIDTH*.08,paddingTop:SCREEN_WIDTH*.17}}>
<SafeAreaView>
    <DrawerHeaderComponent name={params.subtype} type='filter'/>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:55}}>
       <View style={{padding:7,backgroundColor:Colors.Black}}>
       <Image source={calendar} style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05, resizeMode:'contain'}} />
        </View> 
        <View>
        <Text style={{fontFamily:'Gibson',fontSize:12,color:Colors.Green1,marginLeft:8,marginVertical:3}}>{params.selectedDate}</Text>
        <Text style={{fontFamily:'Gibson-Regular',fontSize:12,color:Colors.White,marginLeft:5,marginVertical:3}}> {params.selectedTime}</Text>
        </View>


    </View>
</SafeAreaView>
     </View>
     <SafeAreaView>
   <FlatList ListFooterComponent={<Text style={{color:Colors.White,alignSelf:'center',fontFamily:'Gibson'}}>--------End---------</Text>} keyExtractor={item=>item.name} data={type=='Beach'?DataConstants.BeachServiceData:DataConstants.DesertServiceData} contentContainerStyle={{marginTop:10,paddingBottom:200}}renderItem={item=><ServicesRenderItem item={item.item} index={item.index} params={params}/>}/>
   </SafeAreaView>
    </View>
  )
}

export default ServicesList