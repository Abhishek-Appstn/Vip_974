import { View, Text, Image, SafeAreaView, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { Background_Icon, ChevronRightWhite, Clipboard, Gift, Gift0, Profile, Profile_Damu, ProfileDP } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
const{Colors}=Constants
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const Data=[
   {icon:Profile, title:"Edit Profile",navigate:'EditProfile'},
   {icon:Clipboard, title:"My Activities",navigate:'MyActivities'},
   {icon:Gift0, title:"Membership",navigate:'Membership'},

]
const UserData={Name:'Hisham Tourbaq',Points:1039,MobileNo:'+97444621428'}
const HeaderComponent = () => {
    return (
      <View
        style={{
          backgroundColor: Colors.Black_Bg,
          height: SCREEN_HEIGHT* .5,
          width: SCREEN_WIDTH,
          overflow: 'hidden',
        }}>
        <Image
          style={{
            position: 'absolute',
            top: -20,
            right: -130,
            opacity: 0.45,
            height: SCREEN_WIDTH * 0.7,
            resizeMode: 'contain',
          }}
          source={Background_Icon}
        />

        <SafeAreaView style={{marginHorizontal: 25}}>
          <DrawerHeaderComponent name="My Profile" search={true} type={"login"}/>
            <View style={{marginTop:SCREEN_HEIGHT*.07,alignItems:'center',justifyContent:'center'}}>
                <View style={{borderColor:Colors.Green1,borderWidth:1 ,height:SCREEN_WIDTH*.3,width:SCREEN_WIDTH*.3,borderRadius:SCREEN_HEIGHT,overflow:'hidden',alignItems:"center",justifyContent:'center'}}>
                    <Image style={{height:SCREEN_WIDTH*.28,width:SCREEN_WIDTH*.28,overflow:'hidden',resizeMode:'cover',borderRadius:SCREEN_HEIGHT}} source={ProfileDP}/>
                </View>
                <View style={{marginTop:SCREEN_HEIGHT*.03,alignItems:'center',height:SCREEN_HEIGHT*.08,justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Gibson',color:Colors.White,fontSize:20,fontWeight:"500"}}>{UserData.Name}</Text>
                <Text style={{fontFamily:'Gibson',color:Colors.Gold,fontWeight:'600',fontSize:14}}>Gold ({UserData.Points}) Points</Text>
                <Text style={{fontFamily:'Gibson',color:Colors.White}}>{UserData.MobileNo}</Text>


                </View>
            </View>
        </SafeAreaView>
      </View>
    );
  };
const Myprofile = () => {
   const navigation=useNavigation()

  return (
<ScrollView style={{height:SCREEN_HEIGHT,backgroundColor:Colors.Black}}>
<HeaderComponent/>
<FlatList scrollEnabled={false} contentContainerStyle={{marginTop:SCREEN_HEIGHT*.02}} data={Data} renderItem={({item,index})=>{
    return(
        <Pressable style={{width:SCREEN_WIDTH*.94,height:SCREEN_HEIGHT*.08,backgroundColor:Colors.Black_Bg,alignSelf:'center',flexDirection:'row',marginVertical:SCREEN_HEIGHT*.01,alignItems:'center',paddingHorizontal:SCREEN_WIDTH*.05,justifyContent:"space-between"}}onPress={()=>{navigation.navigate(item.navigate)}}>
            <View style={{flexDirection:"row",justifyContent:'center',alignItems:'center'}}>
            <View style={{ height:SCREEN_WIDTH*.09,width:SCREEN_WIDTH*.09,backgroundColor:Colors.Black,alignItems:'center',justifyContent:'center',borderRadius:SCREEN_WIDTH*.024,marginRight:SCREEN_WIDTH*.03}}>
            <Image source={item.icon} style={{height:SCREEN_WIDTH*.07,width:SCREEN_WIDTH*.07,resizeMode:'contain'}}/>
            </View>
            <Text style={{fontFamily:'Gibson',fontSize:18,color:Colors.White_Text}}>{item.title}</Text>
            </View>

            <Image style={{height:SCREEN_HEIGHT*.015}} source={ChevronRightWhite}/>
        </Pressable>
    )
}}/>
</ScrollView>
  )
}

export default Myprofile