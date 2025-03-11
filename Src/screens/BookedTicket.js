import {View, Text, Image, SafeAreaView, Pressable, FlatList, Modal} from 'react-native';
import React, { useRef, useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Constants from '../Constants';
import {Barcode, calendar, ChevronLeft, ChevronRight, CompassNorthEast, CrossMark, Dew, Fanta, GoPro, LifeJacket, LocationPin, LocationPin_green, Maps, Minus, Pepsi, PickupDot, Plus, Tick, YamahaJetski1} from '../assets/Images';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import ActionSheet from 'react-native-actions-sheet'; 
import QRCode from 'react-native-qrcode-svg';

const BookedTicket = (props) => {
  console.log('props==>',props);
  
  const route = useRoute();
  const {Colors} = Constants;
  const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;
  const params = route.params;
  const ActionsheetRef=useRef()
console.log("@@@@@@@@@@@@@@@@@@",params)
  const paymentData=[
    {name:'Rent',amt:150},
    {name:'Drinks Box',amt:90},
    {name:'Home Businesses',amt:80},
    {name:'Fee',amt:30},

  ]
const Data=[
  {name:'Pickup',pickupaddress:'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar',icon:PickupDot},
  {name:'DropOff',pickupaddress:'Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar',icon:LocationPin_green},

]
  const ServiceData=[
    {name:'Rent',amt:150},
    {name:'Fee',amt:30},

  ]
  const ActionsheetComponent=()=>{
    return(
      <ActionSheet closable={true} containerStyle={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT*.9}}  ref={ActionsheetRef}>
         <View style={{top:10,marginHorizontal:SCREEN_WIDTH*.07,}}>
            
            <View
              style={{
                width: 40,
                height: 5,
                backgroundColor: '#ccc',
                borderRadius: 2.5,
                alignSelf: 'center',
                marginVertical: 10,
              }}
            />
            <Pressable style={{position:'absolute',right:5,top:3}} onPress={()=>ActionsheetRef.current?.hide()}>
            <Image source={CrossMark} />
            </Pressable>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:SCREEN_WIDTH/2.5,}}>
    <Text style={{fontFamily:'Gibson',fontSize:23,color:Colors.White,marginVertical:SCREEN_WIDTH*.06,textTransform:'uppercase',alignSelf:'center'}}>{params.type=='services'?"Cleaning":'Beach'}</Text>
    <Text style={{fontFamily:'Gibson',fontSize:23,color:Colors.White,marginBottom:SCREEN_WIDTH*.06,alignSelf:'center'}}>{params.type=='services'?`${params.size}M2 CABANA`:params.name}</Text>
     
     <View style={{padding:SCREEN_WIDTH*.035,borderColor:Colors.White,borderWidth:1,borderRadius:5,alignSelf:'center'}}> 
        <QRCode
      value={JSON.stringify(params.name,params.brand,params.location,params.date)}
    backgroundColor={Colors.Black_Bg}size={200}
      color={Colors.White}
    />
    </View>
    <Text style={{fontFamily:'Gibson',fontSize:16,color:Colors.White_Text,marginVertical:SCREEN_WIDTH*.06,alignSelf:'center',width:SCREEN_WIDTH*.55,textAlign:'center'}}>Please take a screenshot to Scan this QR Code </Text>

    </View>
  </ActionSheet>
    )
  }

  

 
const Timeslot=()=>{
    return(
       <View style={{marginTop:SCREEN_WIDTH*.04}}>
        {params.type!=='services'? <Text
            style={{
              fontFamily: 'Gibson',
              color: Colors.White,
              fontSize: 18,
              fontWeight: '400',marginBottom:SCREEN_WIDTH*.03
            }}>
            TIME SLOT
          </Text>:null}
           <View style={{flexDirection:'row',alignItems:'center'}}>
                 <View style={{padding:7,backgroundColor:Colors.Black}}>
                 <Image source={calendar} style={{height:SCREEN_WIDTH*.05,width:SCREEN_WIDTH*.05, resizeMode:'contain'}} />
                  </View> 
                  <View>
          
                  <Text style={{fontFamily:'Gibson',fontSize:12,color:Colors.Green1,marginLeft:8,marginVertical:3}}>23,December,2020</Text>
                  <Text style={{fontFamily:'Gibson-Regular',fontSize:12,color:Colors.White,marginLeft:5,marginVertical:3}}>09:00 am | 10:00 am | 11:00 am</Text>
                  </View>
       </View>
       </View>
    )
}
const ButtonComponent=({name})=>{
    return(
        <Pressable style={{backgroundColor:Colors.Green1,height:SCREEN_WIDTH*.244,top:-SCREEN_WIDTH*.11,zIndex:-1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}onPress={()=>{ActionsheetRef.current?.show()}}>
   <Image
                 source={Barcode}
                 style={{
                   height: SCREEN_WIDTH * 0.08,
                   width: SCREEN_WIDTH * 0.08,
                   backgroundColor: Colors.Black,
                   padding: SCREEN_WIDTH * 0.011,
                   resizeMode: 'contain',
                   borderRadius: 4,
                   borderColor: Colors.Green1,
                   borderWidth: 0.5,
                 }}
               />
   <Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase'}}>{name}</Text>
    </Pressable>
    )
}
  const HeaderComponent = () => {
    return (
      <View
        style={{
          marginHorizontal: SCREEN_WIDTH * 0.07,
          marginTop: SCREEN_WIDTH * 0.08,
          backgroundColor:Colors.Black_Bg
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {params.type!=='services'? <Image
                  source={params.image}
                  style={{
                    height: SCREEN_WIDTH * 0.14,
                    width: SCREEN_WIDTH * 0.14,
                    resizeMode: 'cover',
                    borderRadius: (SCREEN_WIDTH * 0.1) / 5,
                  }}
                />:
                <View style={{padding:SCREEN_WIDTH*.02,borderColor:Colors.Gray_Border,borderWidth:1,borderRadius:SCREEN_WIDTH}}>
                <Image
                  source={params.image}
                  style={{
                    height: SCREEN_WIDTH * 0.1,
                    width: SCREEN_WIDTH * 0.1,
                    resizeMode: 'contain',
                    borderRadius: SCREEN_WIDTH * 0.1
                  }}
                />
                </View>}
    
                <View style={{marginLeft: SCREEN_WIDTH * 0.03}}>
                  <Text
                    style={{
                      color: Colors.White,
                      fontSize: 18,
                      fontFamily: 'Gibson',
                      textTransform: 'uppercase',
                      marginVertical: SCREEN_WIDTH * 0.01,
                    }}>
                    {params.name}
                  </Text>
                  <Text
                    style={{
                      color: Colors.Orange1,
                      fontSize: 12,
                      fontFamily: 'Gibson',
                      textTransform: 'capitalize',
                    }}>
                   {params.type=='services'?`${params.size}  M² CABANA`: params.brand}
                  </Text>
                </View>
              </View>
          <View>
            <Text
              style={{
                color: Colors.Green1,
                fontSize: 24,
                fontFamily: 'Gibson',
                fontWeight: '600',
                textAlign: 'right',
              }}>
             {params.type=='services'?params.total: params.price}
            </Text>
            <Text
              style={{
                color: Colors.Green1,
                fontSize: 12,
                fontFamily: 'Gibson',
                fontWeight: '600',
              }}>
              QAR/hour
            </Text>
          </View>
        </View>
       {params.type!=='services'||params.type!=='build'? <View style={{marginTop: SCREEN_WIDTH * 0.05}}>
          <Text
            style={{
              fontFamily: 'Gibson',
              color: Colors.White,
              fontSize: 18,
              fontWeight: '400',
            }}>
            PICK UP LOCATION
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SCREEN_WIDTH * 0.02,
                justifyContent: 'center',
              }}>
              <Image
                source={LocationPin}
                style={{
                  height: SCREEN_WIDTH * 0.1,
                  width: SCREEN_WIDTH * 0.1,
                  backgroundColor: Colors.Black,
                  padding: SCREEN_WIDTH * 0.015,
                  resizeMode: 'contain',
                  borderRadius: 4,
                }}
              />
              <Text
                style={{
                  lineHeight: 19,
                  fontWeight: '400',
                  color: Colors.White_Text,
                  fontSize: 14,
                  fontFamily: 'Gibson',
                  textTransform: 'capitalize',
                  marginLeft: SCREEN_WIDTH * 0.01,
                  maxWidth: SCREEN_WIDTH * 0.4,
                }}>
                {params.location}
              </Text>
            </View>
            <Image
              source={CompassNorthEast}
              style={{
                height: SCREEN_WIDTH * 0.08,
                width: SCREEN_WIDTH * 0.08,
                backgroundColor: Colors.Black,
                padding: SCREEN_WIDTH * 0.015,
                resizeMode: 'contain',
                borderRadius: 4,
                borderColor: Colors.Green1,
                borderWidth: 0.5,
              }}
            />
          </View>
        </View>:null}

        <Timeslot/>
      </View>
    );
  };
  const MiddleComponent=()=>{
    return(
      params.type==='services'? <View style={{backgroundColor:Colors.Black,padding:SCREEN_WIDTH*.015,paddingBottom:params.type==='services'?40:0}}>
      
      <Text style={{textTransform:'uppercase',color:Colors.White,fontFamily:'Gibson',fontSize:18,fontWeight:'400'}}>Enter Location</Text>
      <Image source={Maps} style={{alignSelf:'center',marginVertical:SCREEN_WIDTH*.026}}/>
      <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:Colors.Black_Bg,padding:10
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: SCREEN_WIDTH * 0.02,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={LocationPin}
                      style={{
                        height: SCREEN_WIDTH * 0.1,
                        width: SCREEN_WIDTH * 0.1,
                        backgroundColor: Colors.Black,
                        padding: SCREEN_WIDTH * 0.015,
                        resizeMode: 'contain',
                        borderRadius: 4,
                      }}
                    />
                    <Text
                      style={{
                        lineHeight: 19,
                        fontWeight: '400',
                        color: Colors.White_Text,
                        fontSize: 14,
                        fontFamily: 'Gibson',
                        textTransform: 'capitalize',
                        marginLeft: SCREEN_WIDTH * 0.01,
                        maxWidth: SCREEN_WIDTH * 0.4,
                      }}>
                      {params.location}
                    </Text>
                  </View>
                  <Image
                    source={CompassNorthEast}
                    style={{
                      height: SCREEN_WIDTH * 0.08,
                      width: SCREEN_WIDTH * 0.08,
                      backgroundColor: Colors.Black,
                      padding: SCREEN_WIDTH * 0.015,
                      resizeMode: 'contain',
                      borderRadius: 4,
                      borderColor: Colors.Green1,
                      borderWidth: 0.5,
                    }}
                  />
                </View>
          </View>
      :params.type=='build'?
      <View style={{backgroundColor:Colors.Black,height:SCREEN_WIDTH*.7 ,padding:SCREEN_WIDTH*.03}}>
    
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
      :
        <FlatList data={params.addOn} contentContainerStyle={{marginHorizontal:SCREEN_WIDTH * 0.07,paddingVertical:SCREEN_WIDTH*.025}} scrollEnabled={false} renderItem={({item,index})=>{
            return(
<Pressable style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingBottom:SCREEN_WIDTH*.05,marginTop:SCREEN_WIDTH*.02,}}>
<View>
    <Text
                style={{
                  color: Colors.White,
                  fontSize: 18,
                  fontFamily: 'Gibson',
                  textTransform: 'uppercase',
                  marginVertical: SCREEN_WIDTH * 0.01,
                }}>
               {item.name}
              </Text>
              <Text
              style={{
                color: Colors.White_Text,
                fontSize: 12,
                fontFamily: 'Gibson',
                fontWeight: '450',
marginTop:SCREEN_WIDTH*.01
              }}>
              No Items Selected
            </Text>
   </View>
   </Pressable>
      )
    }}/>


    )
  }
  const PaymentComponent=()=>{
    return(
        <View
        style={{  
          backgroundColor:Colors.Black_Bg,top:-SCREEN_WIDTH*.075,borderRadius:15,paddingHorizontal:SCREEN_WIDTH*.07,paddingVertical:SCREEN_WIDTH*.05,
        }}>
               <Text
                style={{
                  color: Colors.White,
                  fontSize: 18,
                  fontFamily: 'Gibson',
                  textTransform: 'uppercase',
                  fontWeight:'400',
                  marginVertical: SCREEN_WIDTH * 0.01,
                }}>Payments</Text>

          <FlatList scrollEnabled={false} data={params.type=='services'?ServiceData:paymentData} renderItem={({item,index})=>{
            return(
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:SCREEN_WIDTH*.014}}>
<Text
                style={{
                  color: Colors.White,
                  fontSize: 16,
                  fontFamily: 'Gibson',
                  fontWeight:'400',
                  marginVertical: SCREEN_WIDTH * 0.01,
                }}>{item.name}</Text>

<Text
                style={{
                  color: Colors.White,
                  fontSize: 16,
                  fontFamily: 'Gibson',
                  textTransform: 'uppercase',
                  textAlign:'right',
                  marginVertical: SCREEN_WIDTH * 0.01,
                }}>{item.amt} QAR</Text>
                
                    </View>
            )
          }}/>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:SCREEN_WIDTH*.014}}>

      <Text
                style={{
                  color: Colors.White,
                  fontSize: 18,
                  fontFamily: 'Gibson',
                  fontWeight:'bold',
                  marginVertical: SCREEN_WIDTH * 0.01,
                }}>Total</Text>  

<Text style={{fontSize:31,fontWeight:'bold',color:Colors.White}}>250<Text style={{fontSize:12,fontWeight:'bold',color:Colors.White}}>/ QAR</Text></Text>         

</View>
            </View>
    )
  }
  return (
    <View>
          <View style={{}}>
       <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT*.3,width:SCREEN_WIDTH,borderRadius:15,zIndex:9}}>
       <SafeAreaView style={{width:SCREEN_WIDTH,alignSelf:'center',marginTop:SCREEN_WIDTH*.2,overflow:'hidden'}}>
     <View style={{marginHorizontal:SCREEN_WIDTH*.07}}>
     <DrawerHeaderComponent name={"Booked Ticket"} search={true} type='login'/>
     </View> 
     <HeaderComponent />
        </SafeAreaView>
   </View>
   <View style={{backgroundColor:Colors.Black_Bg,top:-SCREEN_WIDTH*.03,paddingTop:SCREEN_WIDTH*.04}}>
<MiddleComponent/>

   </View>
   <PaymentComponent/>

   </View>
   
<ButtonComponent name="scan Barcode "/> 
<ActionsheetComponent/>
    </View>
  );
};

export default BookedTicket;
