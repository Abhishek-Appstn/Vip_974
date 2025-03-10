import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import ItemLayout from '../components/ItemLayout'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import { Jetski, YamahaJetski1 } from '../assets/Images'
import Svg, { G, Path } from 'react-native-svg'
import StarComponent from '../components/StarComponent'

const HandleNavigation=({navigation,item})=>{

    navigation.navigate('BookingSummary',{...item,type:'services'})
}
const ServicesPage = () => {
    const route=useRoute()
const navigation=useNavigation()
    
    const params=route.params
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const{Colors}=Constants
    const [SelectedService, setSelectedService] = useState(null)
    const [SelectedItem, setSelectedItem] = useState(null)
    console.log('@@@@@@+>',SelectedItem)


const services = [
    { 
      name: 'Badri Cleanups', 
      location: 'Abu Hamour, Doha', 
      image: Jetski, 
      model: '2021 Cruising, 2021 Yamaha Waverunners', 
      status: 'completed', 
      date: '23, December, 2020', 
      time: 'Morning', 
      total: 200, 
      servicename: 'Cleaning', 
      size: '4 x 6' ,
      rating:4,
      desc:'Lorem ipsum dolor sit amet, consetetur sadipscing '
    },
    { 
      name: 'Luxury Auto Detailing', 
      location: 'Al Sadd, Doha', 
      image: Jetski, 
      model: '2022 Tesla Model X', 
      status: 'pending', 
      date: '15, March, 2021', 
      time: 'Afternoon', 
      rating:2,
      total: 350, 
      servicename: 'Detailing', 
      size: 'Full Size' , desc:'Lorem ipsum dolor sit amet, consetetur sadipscing '
    },
    { 
      name: 'Yacht Polishing', 
      location: 'The Pearl, Doha', 
      image: Jetski, 
      model: '2020 Azimut Grande', 
      status: 'in-progress', 
      date: '12, January, 2023', 
      time: 'Morning', 
      rating:3,
      total: 500, 
      servicename: 'Polishing', 
      size: '75 ft' , desc:'Lorem ipsum dolor sit amet, consetetur sadipscing '
    },
    { 
      name: 'Speedboat Maintenance', 
      location: 'Lusail Marina, Doha', 
      image: Jetski,  
      model: '2023 Bayliner VR6', 
      status: 'completed', 
      date: '5,November, 2022', 
      rating:5,
      time: 'Evening', 
      total: 250, 
      servicename: 'Maintenance', 
      size: '20 ft' , desc:'Lorem ipsum dolor sit amet, consetetur sadipscing '
    },
    { 
      name: 'Home Pool Cleaning', 
      location: 'West Bay, Doha', 
      image: Jetski, 
      rating:0,
      model: 'N/A', 
      status: 'completed', 
      date: '30, April, 2021', 
      time: 'Morning', 
      total: 150, 
      servicename: 'Cleaning', 
      size: '10 x 20' , desc:'Lorem ipsum dolor sit amet, consetetur sadipscing '
    },
    { 
      name: 'Garden Landscaping', 
      location: 'Al Waab, Doha', 
      image: Jetski, 
      model: '2022 Modern Designs', 
      rating:4,
      status: 'pending', 
      date: '20, February, 2024', 
      time: 'Afternoon', 
      total: 400, 
      servicename: 'Landscaping', 
      size: '30 x 40' , desc:'Lorem ipsum dolor sit amet, consetetur sadipscing '
    }
  ];

    const FlatlistSvg = () => {
        return (
          <View style={{position: 'absolute',bottom:0,right:0}}>

    <Svg
  
    width={26.578}
    height={58.781}
    viewBox="0 0 26.578 58.781"
  >
    <G id="Group_12679" data-name="Group 12679" transform="translate(0 0)">
      <Path
        id="Intersection_3"
        data-name="Intersection 3"
        d="M7.28,13.613,0,0H15.36l7.116,13.307a5.994,5.994,0,0,1-1.9.307Z"
        transform="translate(0 45.167)"
        fill="#0fc1a1"
      />
      <Path
        id="Intersection_2"
        data-name="Intersection 2"
        d="M0,0H15.359l5.134,9.6V24.632a6,6,0,0,1-4.252,5.741Z"
        transform="translate(6.085 28.149)"
        fill="#ff5f00"
      />
      <Path
        id="Intersection_6"
        data-name="Intersection 6"
        d="M0,0H15.359l4.827,9.027V37.751Z"
        transform="translate(6.391 0)"
        fill="#e50c58"
      />
    </G>
  </Svg>
</View>
        )}
  return (
    <ItemLayout name="Choose Service" onPress={()=>HandleNavigation({navigation:navigation,item:SelectedItem})}>
        <View style={{width:SCREEN_WIDTH*.9,alignSelf:'center'}}>
        <DrawerHeaderComponent type='filter' name={params?.type}/>
        <FlatList contentContainerStyle={{paddingBottom:SCREEN_WIDTH*.2,marginTop:SCREEN_WIDTH*.04}} showsVerticalScrollIndicator={false} data={services} renderItem={({item,index})=>{
            return(

                <Pressable style={{height:SCREEN_WIDTH*.42,flexDirection:'row',backgroundColor:Colors.Black_Bg,borderRadius:7,marginVertical:10,paddingHorizontal:SCREEN_WIDTH*.03,paddingVertical:SCREEN_WIDTH*.05}} onPress={()=>{setSelectedService(item.name),setSelectedItem(item)}}>
                   <View style={{position:'absolute',right:10,top:10, height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05,borderColor:Colors.Green1,borderWidth:0.5,borderRadius:SCREEN_WIDTH,alignItems:'center',justifyContent:'center'}}>
                   <View style={{ height:SCREEN_WIDTH*.03,width:SCREEN_WIDTH*.03,backgroundColor:SelectedService===item.name?Colors.Green1:null,borderRadius:SCREEN_WIDTH}}/>

                    </View>
                    <View style={{borderColor:Colors.Black,borderWidth:2,padding:SCREEN_WIDTH*.03,borderRadius:SCREEN_WIDTH,backgroundColor:'rgba(0,30,20,0.5)',height:SCREEN_WIDTH*.15,width:SCREEN_WIDTH*.15,alignItems:'center',justifyContent:'center'}} ><Image source={item.image} style={{height:SCREEN_WIDTH*.08,width:SCREEN_WIDTH*.08}}resizeMode='contain' /></View>
                   
                   <View style={{marginLeft:20,width:SCREEN_WIDTH*.6}}>
                    <View style={{borderBottomColor:Colors.Gray_Border,borderBottomWidth:.5,paddingBottom:SCREEN_WIDTH*.035}}>
                <Text style={{fontSize:18,fontFamily:"Gibson",color:Colors.White,textTransform:'uppercase',fontWeight:'400',marginBottom:SCREEN_WIDTH*.01}}>{item.name}</Text>
                <StarComponent maxStars={5} rating={item.rating}/>
                <Text style={{fontSize:16,fontFamily:"Gibson-Regular",color:Colors.White_Text,textTransform:'capitalize',marginTop:SCREEN_WIDTH*.03}}>{item.desc}</Text>
                    </View>
                    <Text style={{color:Colors.Green1,fontSize:28}}>230<Text style={{fontSize:10}}>QAR</Text></Text>
                    </View>
                    <FlatlistSvg/>
                </Pressable>
           
            )
        }}/>
     <View>


     </View>

     </View>
    </ItemLayout>
  )
}

export default ServicesPage