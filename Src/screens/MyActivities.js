import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { calendar, ChevronDown, Plus, YamahaJetski1 } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'

const MyActivities = () => {
    const {Colors}=Constants
    const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const {HistoryData,HistoryServicesData,HistoryBuildData,HistoryHeaders}=DataConstants
    const [SelectedIndex, setSelectedIndex] = useState(0)
    const navigation=useNavigation()

    const HandleNavigation=({item,type})=>{

        navigation.navigate('BookedTicket',{...item,type:type})
    }


  

  
  return (
    <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_WIDTH*.5}}>
<SafeAreaView>
    <View style={{marginHorizontal:SCREEN_WIDTH*.07,marginTop:SCREEN_WIDTH*.04}}>
    <DrawerHeaderComponent name='MY Activities' type='login'/>
<FlatList scrollEnabled={false} contentContainerStyle={{flexDirection:'row',justifyContent:'space-between',marginTop:SCREEN_WIDTH*.129}} data={HistoryHeaders} renderItem={({item,index})=>{
return(
    <Pressable style={{height:SCREEN_WIDTH*.13,alignItems:'center',justifyContent:"center", borderBottomWidth:3,borderBottomColor:index===SelectedIndex?Colors.Green1:Colors.Black_Bg,width:SCREEN_WIDTH*.22}} onPress={()=>{setSelectedIndex(index)}}>
        <Text style={{fontFamily:'Gibson',fontSize:18, color:index===SelectedIndex?Colors.Green1:Colors.White}}>{item.name}</Text>
        </Pressable>
)
}}/>
    </View>
    <View style={{height:SCREEN_WIDTH*1.67 ,backgroundColor:Colors.Black}}>
        {SelectedIndex==0?
<FlatList contentContainerStyle={{marginHorizontal:SCREEN_WIDTH*.07,paddingBottom:SCREEN_WIDTH*.2,paddingTop:SCREEN_WIDTH*.05}} data={HistoryData} renderItem={({item,index})=>{
    return(
        <Pressable onPress={()=>HandleNavigation({item:item,type:"rent"})} style={{marginVertical:10,}}>
            <View style={{flexDirection:'row'}}>
            <Image source={YamahaJetski1} style={{height:SCREEN_WIDTH*.12,width:SCREEN_WIDTH*.12,borderRadius:10}}/>
<View style={{marginHorizontal:SCREEN_WIDTH*.03}}>
   <Text style={{fontFamily:'Gibson',fontWeight:'500',fontSize:18,textTransform:'uppercase',color:Colors.White,}}>{item.name}</Text>
 <Text
                style={{
                  color: Colors.Orange1,
                  fontSize: 12,
                  fontFamily: 'Gibson',
                  textTransform: 'capitalize',
                  marginVertical:SCREEN_WIDTH*.015

                }}>
            {item.brand}
              </Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:SCREEN_WIDTH*.02}}>
                 <View style={{padding:7,backgroundColor:Colors.Black}}>
                 <Image source={calendar} style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05, resizeMode:'contain'}} />
                  </View> 
                  <View>
          
                  <Text style={{fontFamily:'Gibson',fontSize:12,color:Colors.Green1,marginLeft:SCREEN_WIDTH*.028,}}>{item.date}</Text>
                  <Text style={{fontFamily:'Gibson-Regular',fontSize:12,color:Colors.White,marginLeft:5,marginVertical:3}}>{item.time}</Text>
                  </View>
       </View>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:SCREEN_WIDTH*.02}}>
<Text style={{fontFamily:'Gibson',fontSize:12,color:item.status=='completed'?Colors.Green1:Colors.Orange1,marginVertical:3,backgroundColor:item.status=='completed'?`${Colors.Green1}30`:`${Colors.Orange1}30`,padding:SCREEN_WIDTH*.015,borderRadius:10,textTransform:'capitalize'}}>{item.status}</Text>
<Text style={{fontFamily:'Gibson',fontWeight:'600',fontSize:20,color:Colors.White,marginVertical:3,}}>250</Text>

</View>
        </Pressable>
    )
}}/>
:SelectedIndex==1?
<FlatList contentContainerStyle={{marginHorizontal:SCREEN_WIDTH*.07,paddingBottom:SCREEN_WIDTH*.2,paddingTop:SCREEN_WIDTH*.05,}} data={HistoryServicesData} renderItem={({item,index})=>{
    return(
        <Pressable onPress={()=>HandleNavigation({item:item,type:"services"})}  style={{marginVertical:10}}>
            <View style={{flexDirection:'row',width:SCREEN_WIDTH*.9}}>
            <Image source={YamahaJetski1} style={{height:SCREEN_WIDTH*.15,width:SCREEN_WIDTH*.15,borderRadius:SCREEN_WIDTH,borderColor:Colors.Gray_Border,borderWidth:3}}/>
<View style={{margin:SCREEN_WIDTH*.03,width:SCREEN_WIDTH*.6}}>
   <Text style={{fontFamily:'Gibson',fontWeight:'500',fontSize:18,textTransform:'uppercase',color:Colors.White,}}>{item.name}</Text>
 <Text
                style={{
                  color: Colors.Orange1,
                  fontSize: 12,
                  fontFamily: 'Gibson',
                  textTransform: 'capitalize',
                  marginVertical:SCREEN_WIDTH*.015
                }}>
            {item.servicename} | {item.size}
              </Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <View style={{backgroundColor:Colors.Black}}>
                 <Image source={calendar} style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05, resizeMode:'contain'}} />
                  </View> 
                  <View>
                  <Text style={{fontFamily:'Gibson',fontSize:12,color:Colors.Green1,marginLeft:SCREEN_WIDTH*.028,marginVertical:3,}}>{item.date}</Text>
                  <Text style={{fontFamily:'Gibson-Regular',fontSize:12,color:Colors.White,marginLeft:SCREEN_WIDTH*.028,marginVertical:3}}>{item.time}</Text>
                  </View>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:SCREEN_WIDTH*.04}}>
<Text style={{fontFamily:'Gibson',fontSize:12,color:item.status=='completed'?Colors.Green1:Colors.Orange1,marginVertical:3,backgroundColor:item.status=='completed'?`${Colors.Green1}30`:`${Colors.Orange1}30`,padding:SCREEN_WIDTH*.015,borderRadius:10,textTransform:'capitalize'}}>{item.status}</Text>
<Text style={{fontFamily:'Gibson',fontWeight:'600',fontSize:20,color:Colors.White,marginVertical:3,}}>{item.total}</Text>

</View>
</View>
</View>

        </Pressable>
    )
}}/>
:SelectedIndex==2?<FlatList contentContainerStyle={{marginHorizontal:SCREEN_WIDTH*.05,paddingBottom:SCREEN_WIDTH*.2,paddingTop:SCREEN_WIDTH*.05,}} data={HistoryBuildData} renderItem={({item,index})=>{
    return(
        <Pressable onPress={()=>HandleNavigation({item:item,type:"build"})}  style={{paddingHorizontal:SCREEN_WIDTH*.02, marginVertical:10,backgroundColor:Colors.Black_Bg,overflow:'hidden',width:SCREEN_WIDTH*.9,padding:SCREEN_WIDTH*.03,}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderColor:`${Colors.Gray_Text}50`,paddingBottom:SCREEN_WIDTH*.04, borderBottomWidth:1,width:SCREEN_WIDTH*.82,alignSelf:'center',paddingTop:SCREEN_WIDTH*.02}}>
<View style={{justifyContent:'center'}}>
   <Text style={{fontFamily:'Gibson',fontWeight:'400',fontSize:18,textTransform:'uppercase',color:Colors.White,}}>{item.name}</Text>
 <Text
                style={{
                  color:item.buildtype=='standard'?Colors.AccentColor4: Colors.Orange1,
                  fontSize: 12,
                  fontFamily: 'Gibson',
                  textTransform: 'capitalize',
                  marginVertical:SCREEN_WIDTH*.015
                }}>
           {item.buildtype}
              </Text>
              
</View>
<Image
              source={ChevronDown}
              style={{
                height: SCREEN_WIDTH * 0.06,
                width: SCREEN_WIDTH * 0.06,
                backgroundColor: Colors.Black,
                padding: SCREEN_WIDTH * 0.015,
                resizeMode: 'contain',
                borderRadius: 4,
                borderColor: Colors.Green1,
                borderWidth: 0.5,
              }}
            />
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:SCREEN_WIDTH*.02,alignItems:'flex-end',paddingHorizontal:SCREEN_WIDTH*.017}}>
<Text style={{fontFamily:'Gibson',fontSize:12,color:item.status=='completed'?Colors.Green1:Colors.Gray_Text,marginVertical:3,padding:SCREEN_WIDTH*.015,borderRadius:10}}>{item.date}</Text>

<Text style={{fontFamily:'Gibson',fontSize:8,color:Colors.Green1,marginVertical:3,}}><Text style={{fontFamily:'Gibson',fontWeight:'600',fontSize:20,color:Colors.Green1,}}>{item.total} </Text>QAR</Text>

</View>
        </Pressable>
    )
}}/>:null}
    </View>
</SafeAreaView>
    </View>
  )
}

export default MyActivities

