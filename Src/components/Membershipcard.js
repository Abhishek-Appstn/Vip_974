import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import UpperRightSvg from './UpperRightSvg'
import MembershipSvg from './MembershipSvg'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Background_Icon, BackgroundIconMembership, ChevronRight, ChevronRightWhite, king } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
const {points}=DataConstants.UserData
const expiryDate='30 Jun 2021'
const SubText="Conduct More Leasing, Services And Construction To Get More..."
const MembershipType='Vip-Gold'

const{Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const MembershipLayout=({children})=>{
    return(
        <Svg style={{zIndex:-1,position:'absolute',bottom:0}}
        width={330}
        height={195.763}
        viewBox="0 0 336 195.763"
      >
        <Defs>
          <LinearGradient
            id="linear-gradient"
            x1={0.5}
            x2={0.5}
            y2={1}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#0e1114" />
            <Stop offset={1} />
            
          </LinearGradient>
        </Defs>
        <Path
          id="Path_9272"
          stroke={Colors.Black_Bg}
          strokeWidth={5}
          data-name="Path 9272"
          d="M330,0a6,6,0,0,1,6,5.993V189.771a6,6,0,0,1-6,5.993H6a6,6,0,0,1-6-5.993v-18.88s.1-23.761,0-23.7c.986-18.363,5.054-41.671,33.944-50.979,48.553-15.643,86.648,36.038,160.27,12.111S330,0,330,0Z"
          fill="url(#linear-gradient)"
        />
      </Svg>
    )
}

const Membershipcard = () => {
    const navigation=useNavigation()
  return (
  <View style={{backgroundColor:"#0e1114",elevation:100,height:SCREEN_HEIGHT*.2,overflow:"hidden",width:SCREEN_WIDTH*.8,alignSelf:'center',borderRadius:SCREEN_WIDTH*.02}}>
<MembershipSvg/>
<Image source={BackgroundIconMembership} style={{height:SCREEN_HEIGHT*.15,alignSelf:'flex-end',right:10,position:'absolute',zIndex:-2}}resizeMode='contain'/>
<View style={{margin:SCREEN_WIDTH*.05}}>
<Text style={{color:Colors.Green1,fontWeight:'500',zIndex:10,fontFamily:'Gibson',fontSize:14}}><Text style={{fontSize:24}}>{points}</Text>Points</Text>
<Text style={{color:Colors.White_Text,fontWeight:'400',fontFamily:'Gibson',fontSize:12}}>Expiring on {expiryDate} </Text>
</View>
<MembershipLayout/>
<View style={{position:'absolute',bottom:15,left:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <View style={{backgroundColor:Colors.Black_Bg,borderRadius:SCREEN_WIDTH*.02,alignItems:'center',justifyContent:'center'}}>
        <Image source={king} style={{height:SCREEN_HEIGHT*.08,resizeMode:'contain'}}/>
    </View>
    <View style={{marginLeft:SCREEN_WIDTH*.02}}>
   <Pressable onPress={()=>navigation.navigate('MembershipDesc') } > <Text style={{color:Colors.Gold,fontWeight:'500',zIndex:10,fontFamily:'Gibson',fontSize:18,textTransform:'capitalize'}}>{MembershipType} <Image source={ChevronRightWhite}/> </Text></Pressable>
    <Text style={{color:Colors.White_Text,fontWeight:'400',fontFamily:'Gibson',maxWidth:SCREEN_WIDTH*.45,marginVertical:SCREEN_HEIGHT*.005,fontSize:12,textTransform:'capitalize'}}>{SubText}</Text>

    </View>

</View>
  </View>
  )
}

export default Membershipcard