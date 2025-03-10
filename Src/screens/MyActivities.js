import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { calendar, ChevronDown, Plus, YamahaJetski1 } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'

const MyActivities = () => {
    const {Colors}=Constants
    const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const [SelectedIndex, setSelectedIndex] = useState(0)
    const navigation=useNavigation()

    const HandleNavigation=({item,type})=>{

        navigation.navigate('BookedTicket',{...item,type:type})
    }
const Data=[
        {name:'2021 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1,model:'2021 Cruising, 2021 Yamaha Waverunners',detail:' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',detailSub:'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',addOn:[{name:'Drinks Box'},{name:'Home Businesses'}],status:'completed',date:'23,December,2020',time:'09:00 am | 10:00 am | 11:00 am'},
        {name:'2021 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1,model:'2021 Cruising, 2021 Yamaha Waverunners',detail:' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',detailSub:'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',addOn:[{name:'Drinks Box'},{name:'Home Businesses'}],status:'pending',date:'24,December,2020',time:'09:00 am | 10:00 am | 11:00 am'},
        {name:'2021 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1,model:'2021 Cruising, 2021 Yamaha Waverunners',detail:' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',detailSub:'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',addOn:[{name:'Drinks Box'},{name:'Home Businesses'}],status:'completed',date:'26,December,2020',time:'09:00 am | 10:00 am | 11:00 am'},
        {name:'2021 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1,model:'2021 Cruising, 2021 Yamaha Waverunners',detail:' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',detailSub:'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',addOn:[{name:'Drinks Box'},{name:'Home Businesses'}],status:'pending',date:'29,December,2020',time:'09:00 am | 10:00 am | 11:00 am'},
        {name:'2021 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1,model:'2021 Cruising, 2021 Yamaha Waverunners',detail:' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',detailSub:'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',addOn:[{name:'Drinks Box'},{name:'Home Businesses'}],status:'completed',date:'31,December,2020',time:'09:00 am | 10:00 am | 11:00 am'},

]
const build = [
    { 
      name: 'Badri Cleanups', 
      location: 'Abu Hamour, Doha', 
      image: YamahaJetski1, 
      model: '2021 Cruising, 2021 Yamaha Waverunners', 
      status: 'completed', 
      buildtype: 'standard',
      date: '23, December, 2020', 
      time: 'Morning', 
      total: 200, 
      servicename: 'Cleaning', 
    },
    { 
      name: 'Luxury Auto Detailing', 
      location: 'Al Sadd, Doha', 
      image: YamahaJetski1, 
      model: '2022 Tesla Model X', 
      status: 'pending', 
      buildtype: 'Custom',
      date: '15, March, 2021', 
      time: 'Afternoon', 
      total: 350, 
      servicename: 'Detailing', 
    },
    { 
      name: 'Yacht Polishing', 
      location: 'The Pearl, Doha', 
      image: YamahaJetski1, 
      model: '2020 Azimut Grande', 
      status: 'in-progress', 
      buildtype: 'Custom',
      date: '12, January, 2023', 
      time: 'Morning', 
      total: 500, 
      servicename: 'Polishing', 
    },
    { 
      name: 'Speedboat Maintenance', 
      location: 'Lusail Marina, Doha', 
      image: YamahaJetski1, 
      model: '2023 Bayliner VR6', 
      status: 'completed', 
      buildtype: 'standard',
      date: '5, November, 2022', 
      time: 'Evening', 
      total: 250, 
      servicename: 'Maintenance', 
    },
    { 
      name: 'Home Pool Cleaning', 
      location: 'West Bay, Doha', 
      image: YamahaJetski1,  
      model: 'N/A', 
      status: 'completed', 
      buildtype: 'standard',
      date: '30, April, 2021', 
      time: 'Morning', 
      total: 150, 
      servicename: 'Cleaning', 
    },
    { 
      name: 'Garden Landscaping', 
      location: 'Al Waab, Doha', 
      image: YamahaJetski1, 
      model: '2022 Modern Designs', 
      status: 'pending', 
      buildtype: 'Custom',
      date: '20, February, 2024', 
      time: 'Afternoon', 
      total: 400, 
      servicename: 'Landscaping', 
    }
  ];
  
const services = [
    { 
      name: 'Badri Cleanups', 
      location: 'Abu Hamour, Doha', 
      image: YamahaJetski1, 
      model: '2021 Cruising, 2021 Yamaha Waverunners', 
      status: 'completed', 
      date: '23, December, 2020', 
      time: 'Morning', 
      total: 200, 
      servicename: 'Cleaning', 
      size: '4 x 6' 
    },
    { 
      name: 'Luxury Auto Detailing', 
      location: 'Al Sadd, Doha', 
      image: YamahaJetski1, 
      model: '2022 Tesla Model X', 
      status: 'pending', 
      date: '15, March, 2021', 
      time: 'Afternoon', 
      total: 350, 
      servicename: 'Detailing', 
      size: 'Full Size' 
    },
    { 
      name: 'Yacht Polishing', 
      location: 'The Pearl, Doha', 
      image: YamahaJetski1, 
      model: '2020 Azimut Grande', 
      status: 'in-progress', 
      date: '12, January, 2023', 
      time: 'Morning', 
      total: 500, 
      servicename: 'Polishing', 
      size: '75 ft' 
    },
    { 
      name: 'Speedboat Maintenance', 
      location: 'Lusail Marina, Doha', 
      image: YamahaJetski1,  
      model: '2023 Bayliner VR6', 
      status: 'completed', 
      date: '5,November, 2022', 
      time: 'Evening', 
      total: 250, 
      servicename: 'Maintenance', 
      size: '20 ft' 
    },
    { 
      name: 'Home Pool Cleaning', 
      location: 'West Bay, Doha', 
      image: YamahaJetski1, 
      model: 'N/A', 
      status: 'completed', 
      date: '30, April, 2021', 
      time: 'Morning', 
      total: 150, 
      servicename: 'Cleaning', 
      size: '10 x 20' 
    },
    { 
      name: 'Garden Landscaping', 
      location: 'Al Waab, Doha', 
      image: YamahaJetski1, 
      model: '2022 Modern Designs', 
      status: 'pending', 
      date: '20, February, 2024', 
      time: 'Afternoon', 
      total: 400, 
      servicename: 'Landscaping', 
      size: '30 x 40' 
    }
  ];
  
  return (
    <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_WIDTH*.5}}>
<SafeAreaView>
    <View style={{marginHorizontal:SCREEN_WIDTH*.07,marginTop:SCREEN_WIDTH*.04}}>
    <DrawerHeaderComponent name='MY Activities' type='login'/>
<FlatList scrollEnabled={false} contentContainerStyle={{flexDirection:'row',justifyContent:'space-between',marginTop:SCREEN_WIDTH*.129}} data={[{name:'Rent'},{name:'Services'},{name:'Build'}]} renderItem={({item,index})=>{
return(
    <Pressable style={{height:SCREEN_WIDTH*.13,alignItems:'center',justifyContent:"center", borderBottomWidth:3,borderBottomColor:index===SelectedIndex?Colors.Green1:Colors.Black_Bg,width:SCREEN_WIDTH*.22}} onPress={()=>{setSelectedIndex(index)}}>
        <Text style={{fontFamily:'Gibson',fontSize:18, color:index===SelectedIndex?Colors.Green1:Colors.White}}>{item.name}</Text>
        </Pressable>
)
}}/>
    </View>
    <View style={{height:SCREEN_WIDTH*1.67 ,backgroundColor:Colors.Black}}>
        {SelectedIndex==0?
<FlatList contentContainerStyle={{marginHorizontal:SCREEN_WIDTH*.07,paddingBottom:SCREEN_WIDTH*.2,paddingTop:SCREEN_WIDTH*.05}} data={Data} renderItem={({item,index})=>{
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
<FlatList contentContainerStyle={{marginHorizontal:SCREEN_WIDTH*.07,paddingBottom:SCREEN_WIDTH*.2,paddingTop:SCREEN_WIDTH*.05,}} data={services} renderItem={({item,index})=>{
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
:SelectedIndex==2?<FlatList contentContainerStyle={{marginHorizontal:SCREEN_WIDTH*.05,paddingBottom:SCREEN_WIDTH*.2,paddingTop:SCREEN_WIDTH*.05,}} data={build} renderItem={({item,index})=>{
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

