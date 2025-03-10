import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ItemLayout from '../components/ItemLayout';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import Constants from '../Constants';
import {calendar, CompassNorthEast, Crane, LocationPin, LocationPin_green, PickupDot} from '../assets/Images';
import { useNavigation } from '@react-navigation/native';

const BuildLocations = () => {
  const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;
  const {Colors} = Constants;
const navigation=useNavigation()

const Data=[
  {name:'Pickup',pickupaddress:'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar',icon:PickupDot},
  {name:'DropOff',pickupaddress:'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar',icon:LocationPin_green},

]
const handleNavigation=()=>{
navigation.navigate('ServicesPage',{type:'services'})
}
  return (
    <ItemLayout name={'View Services'} colors={Colors.Black_Bg} onPress={handleNavigation}>
      <View style={{marginHorizontal: SCREEN_WIDTH * 0.04,paddingBottom:SCREEN_WIDTH*.05,borderBottomRightRadius:SCREEN_WIDTH*.5,borderBottomLeftRadius:SCREEN_WIDTH*.5}}>
        <DrawerHeaderComponent name="Locations" type="login" search={true} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: SCREEN_WIDTH * 0.04,
            backgroundColor: Colors.Black_Bg,
            borderColor: Colors.Gray_Border,
            borderBottomWidth: 0.25,
            paddingBottom: SCREEN_WIDTH * 0.04,
          }}>
          <Image source={Crane} />
          <View style={{marginHorizontal: SCREEN_WIDTH * 0.044}}>
            <Text style={{color: Colors.White, fontSize: 18}}>
              Towing Service
            </Text>
            <Text style={{color: Colors.Orange1, fontSize: 12}}>
              3.5 X 5 M²
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SCREEN_WIDTH * 0.01,
          }}>
          <View
            style={{
              backgroundColor: Colors.Black,
              padding: SCREEN_WIDTH * 0.02,
              borderColor: Colors.Green1,
              borderWidth: 1,
              borderRadius: SCREEN_WIDTH * 0.01,
            }}>
            <Image
              source={calendar}
              style={{
                height: SCREEN_WIDTH * 0.05,
                width: SCREEN_WIDTH * 0.05,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={{marginHorizontal: SCREEN_WIDTH * 0.03}}>
            <Text
              style={{
                fontFamily: 'Gibson',
                fontSize: 12,
                color: Colors.Green1,
                marginLeft: 8,
                marginVertical: 3,
              }}>
              23,December,2020
            </Text>
            <Text
              style={{
                fontFamily: 'Gibson-Regular',
                fontSize: 12,
                color: Colors.White,
                marginLeft: 5,
                marginVertical: 3,
              }}>
              7:00 am to 12:00pm
            </Text>
          </View>
        </View>
      
      </View>
      <View style={{backgroundColor:Colors.Black,height:SCREEN_WIDTH*1.44,padding:SCREEN_WIDTH*.03}}>
    
      <Text
              style={{
                fontFamily: 'Gibson-Regular',
                fontSize: 18,
                color: Colors.White,
                marginLeft: 5,
                marginVertical: 3,
                textTransform:'uppercase'
              }}>
             Enter Location
            </Text>
       
                  <View style={{height:SCREEN_WIDTH*.35,backgroundColor:Colors.Black_Bg,padding:SCREEN_WIDTH*.05,flexDirection:'row',}}>
                    <View
          style={{
           backgroundColor:Colors.Black,
           padding:SCREEN_WIDTH*.025,alignSelf:'flex-start',justifyContent:'center'
          }}>
            <Image source={Data[0].icon} style={{height:SCREEN_WIDTH*.04,width:SCREEN_WIDTH*.04,resizeMode:'contain'}}/>
            </View>
            
            
            <View style={{marginHorizontal:SCREEN_WIDTH*.02}}>
              <Text style={{color:Colors.White,fontSize:18}}>{Data[0].name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:Colors.Gray_Border,borderBottomWidth:.21,width:SCREEN_WIDTH*.75,paddingBottom:SCREEN_WIDTH*.045}}>
              <Text style={{color:Colors.Green1,fontSize:14,maxWidth:SCREEN_WIDTH*.5,lineHeight:20,marginTop:SCREEN_WIDTH*.04,}}>{Data[0].pickupaddress}</Text>

    <Image source={CompassNorthEast} style={{height:SCREEN_WIDTH*.08,width:SCREEN_WIDTH*.08,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',marginTop:SCREEN_WIDTH*.08,borderRadius:4,borderColor:Colors.Green1,borderWidth:.5}}/>
    </View>
    
    
    </View>
    
                    </View>
                    
                    <View style={{height:SCREEN_WIDTH*.35,backgroundColor:Colors.Black_Bg,padding:SCREEN_WIDTH*.05,flexDirection:'row',}}>
                    <View
          style={{
           backgroundColor:Colors.Black,
           padding:SCREEN_WIDTH*.025,alignSelf:'flex-start',justifyContent:'center'
          }}>
            <Image source={Data[1].icon} style={{height:SCREEN_WIDTH*.06,width:SCREEN_WIDTH*.06,resizeMode:'contain'}}/>
            </View>
            
            
            <View style={{marginHorizontal:SCREEN_WIDTH*.02}}>
              <Text style={{color:Colors.White,fontSize:18}}>{Data[1].name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:SCREEN_WIDTH*.75,paddingBottom:SCREEN_WIDTH*.045}}>
              <Text style={{color:Colors.Green1,fontSize:14,maxWidth:SCREEN_WIDTH*.5,lineHeight:20,marginTop:SCREEN_WIDTH*.04,}}>{Data[1].pickupaddress}</Text>

    <Image source={CompassNorthEast} style={{height:SCREEN_WIDTH*.08,width:SCREEN_WIDTH*.08,backgroundColor:Colors.Black, padding:SCREEN_WIDTH*.015,resizeMode:'contain',marginTop:SCREEN_WIDTH*.08,borderRadius:4,borderColor:Colors.Green1,borderWidth:.5}}/>
    </View>
    
    
    </View>
    
                    </View>
            </View>
    </ItemLayout>
  );
};

export default BuildLocations;
