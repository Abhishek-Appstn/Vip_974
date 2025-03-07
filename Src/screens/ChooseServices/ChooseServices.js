import { View, Text, Image, SafeAreaView, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import Constants from '../../Constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import DrawerHeaderComponent from '../../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { Background_Icon, CabanaCustom, CabanaStandard, Jetski, QuadBike, ShowerHead, Towing } from '../../assets/Images'
import Svg, { G, Path } from 'react-native-svg'
import CustomButton from '../../components/CustomButton/CustomButton'

const ChooseServices = (route) => {
    const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
    const{Colors}=Constants
const [Active, setActive] = useState(null)
    const navigation=useNavigation({})
    const routes=useRoute()
    const params=routes.params
const RentData=[
    {name:'Beach',image:Jetski},
    {name:'Desert',image:QuadBike}

]

const ServicesData=[
    {name:'Washing',image:ShowerHead},
    {name:'Towing',image:Towing}

]

const BuildData=[
    {name:'Standard',image:CabanaStandard},
    {name:'Custom',image:CabanaCustom}

]
const HandleNavigation=()=>{
    Active!==null?
    params=='rent'?
    navigation.navigate('ScheduleServices'):navigation.navigate('ChooseLocation'):null

}
    const HeaderComponent=()=>{
        return(
             <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT/2.5,width:SCREEN_WIDTH,overflow:'hidden',borderRadius:10}}>
                <Image style={{position:'absolute',top:0,right:-110,opacity:.45,height:SCREEN_WIDTH*.7,resizeMode:'contain'}} source={Background_Icon}/>
              
               <SafeAreaView style={{marginHorizontal:25}}>
     <DrawerHeaderComponent name="Rent" type="login"/>
           <View style={{alignItems:'center',justifyContent:'center',height:SCREEN_WIDTH*.7}}>
                                        <Text style={{color:Colors.White,fontSize:24,fontFamily:'Gibson-BoldItalic',textAlign:'center',lineHeight:30,marginTop:29,textTransform:'uppercase',fontWeight:'400'}}>{params=='rent'?'Choose terrain':params=='services'?'Choose Service':params=='build'?'Choose Type':null}</Text>
                        
                         <Text style={{width:SCREEN_WIDTH*.7,color:Colors.White,fontSize:16,fontFamily:'Gibson-Regular',textAlign:'center',marginTop:19,textTransform:'capitalize'}}> {params=='rent'?'Please specify the type of vehicles you want, desert or beach':params=='services'?'Please choose the type of service you want':params=='build'?'Please choose the build type, Standerd or Custom':null}</Text>
                     </View>
            </SafeAreaView>
                    </View>
        )
    }
     const LowerSvg = () => {
        return (
          <View style={{position: 'absolute',bottom:0,left:0}}>
            <Svg
    width={24.797}
    height={51.719}
    viewBox="0 0 24.797 51.719"
  >
    <G id="Group_12648" data-name="Group 12648" transform="translate(0 0)">
      <Path
        id="Intersection_3"
        data-name="Intersection 3"
        d="M0,11.978,6.792,0h12a5.986,5.986,0,0,1,2.11.381l-6.576,11.6Z"
        transform="translate(24.797 51.719) rotate(180)"
        fill="#0fc1a1"
      />
      <Path
        id="Intersection_2"
        data-name="Intersection 2"
        d="M0,26.62,15.094,0a6,6,0,0,1,4.027,5.668v12.5l-4.79,8.447Z"
        transform="translate(19.121 51.387) rotate(180)"
        fill="#ff5f00"
      />
      <Path
        id="Intersection_6"
        data-name="Intersection 6"
        d="M0,33.216,18.834,0V25.275l-4.5,7.941Z"
        transform="translate(18.835 33.216) rotate(180)"
        fill="#e50c58"
      />
    </G>
  </Svg>
          </View>
        );
      };
    const SelectionBox=(image,name,index)=>{
        return(
            <Pressable style={{backgroundColor:Colors.Black_Bg,height:SCREEN_WIDTH*.55,width:SCREEN_WIDTH*.42,borderRadius:10,overflow:'hidden',}} onPress={()=>{Active===index?setActive(null):setActive(index)}}>
<LowerSvg/>
<View style={{position:'absolute',left:5,top:5,height:SCREEN_WIDTH*.065,width:SCREEN_WIDTH*.065,borderRadius:SCREEN_WIDTH*.075,borderColor:Colors.Green1,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
<View style={{height:SCREEN_WIDTH*.04,width:SCREEN_WIDTH*.04,borderRadius:SCREEN_WIDTH*.075,backgroundColor:Active==index?Colors.Green1:null}}>
</View></View>

<Image source={Background_Icon} style={{position:'absolute',left:-20,height:SCREEN_WIDTH*.35,resizeMode:'contain'}}/>
<View style={{alignSelf:'center',justifyContent:'center',height:SCREEN_WIDTH*.54,paddingTop:10}}>
   <Image source={image} style={{marginBottom:10,alignSelf:'center',width:SCREEN_WIDTH*.14,resizeMode:'contain'}}/>
   <Text style={{fontSize:23,fontFamily:'Gibson',textTransform:'uppercase',fontWeight:'semibold',marginTop:30,color:Colors.White}}>{name}</Text>
</View>
            </Pressable>
        )
    }
  return (
    <View style={{backgroundColor:Colors.Black,height:SCREEN_HEIGHT}}>
     <HeaderComponent/>

        <SafeAreaView>

     

     <FlatList contentContainerStyle={{justifyContent:'center',marginHorizontal:25,marginTop:SCREEN_WIDTH*.2}} data={params=="rent"?RentData:params=='services'?ServicesData:params=='build'?BuildData:null} scrollEnabled={false} numColumns={2} renderItem={({item,index})=>{
        return(
            <View style={{marginLeft:index!==0?17:0}}>

            {SelectionBox(item.image,item.name,index)}
            </View>
        )
        
     }}/>
        <View style={{marginHorizontal:20,marginTop:SCREEN_WIDTH*.14}}>
        <CustomButton title='Next' onPress={HandleNavigation}/>

        </View>

    </SafeAreaView>
    </View>

  )
}

export default ChooseServices