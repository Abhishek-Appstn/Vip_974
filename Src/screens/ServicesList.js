import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { calendar, Location_White, YamahaJetski1 } from '../assets/Images'
import StarComponent from '../components/StarComponent'
import { useNavigation } from '@react-navigation/native'

const ServicesList = () => {
    const{Colors}=Constants
    const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const data=[
        {name:'2021 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1,model:'2021 Cruising, 2021 Yamaha Waverunners',detail:' Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way',detailSub:'From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range supercharged',addOn:[{name:'Drinks Box'},{name:'Home Businesses'}]},
        {name:'2022 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2023 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2024 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2025 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2026 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2027 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2028 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2029 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2030 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2031 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},
        {name:'2032 FX SVHO',price:50,rating:5,brand:'Yamaha',location:'Abu Hamour, Doha',image:YamahaJetski1},

    ]
    const navigation=useNavigation()
    const HandleNavigation=(item)=>{
        navigation.navigate('ProductPage',item)
    }
  return (
    <View style={{height:SCREEN_HEIGHT,width:SCREEN_WIDTH,backgroundColor:Colors.Black}}>
     <View style={{height:SCREEN_WIDTH*.5,backgroundColor:Colors.Black_Bg,borderBottomRightRadius:15,borderBottomLeftRadius:15,paddingHorizontal:SCREEN_WIDTH*.08,paddingTop:SCREEN_WIDTH*.17}}>
<SafeAreaView>
    <DrawerHeaderComponent name="Beach" type='filter'/>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:55}}>
       <View style={{padding:7,backgroundColor:Colors.Black}}>
       <Image source={calendar} style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05, resizeMode:'contain'}} />
        </View> 
        <View>

        <Text style={{fontFamily:'Gibson',fontSize:12,color:Colors.Green1,marginLeft:8,marginVertical:3}}>23,December,2020</Text>
        <Text style={{fontFamily:'Gibson-Regular',fontSize:12,color:Colors.White,marginLeft:5,marginVertical:3}}>09:00 am | 10:00 am | 11:00 am</Text>
        </View>


    </View>
</SafeAreaView>
     </View>
     <SafeAreaView>
   <FlatList ListFooterComponent={<Text style={{color:Colors.White,alignSelf:'center'}}>--------End---------</Text>} keyExtractor={item=>item.name} data={data} contentContainerStyle={{marginTop:10,paddingBottom:200}}renderItem={({item,index})=>{
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
   }}/>
   </SafeAreaView>
    </View>
  )
}

export default ServicesList