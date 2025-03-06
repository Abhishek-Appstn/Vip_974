import {View, Text, Image, SafeAreaView, Pressable, FlatList, Modal} from 'react-native';
import React, { useRef, useState } from 'react';
import {useRoute} from '@react-navigation/native';
import ItemLayout from '../components/ItemLayout';
import Constants from '../Constants';
import {calendar, ChevronLeft, ChevronRight, CompassNorthEast, CrossMark, Dew, Fanta, GoPro, LifeJacket, LocationPin, Minus, Pepsi, Plus, Tick, YamahaJetski1} from '../assets/Images';
import BookingLayout from '../components/BookingLayout';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import ActionSheet from 'react-native-actions-sheet'; 
import CustomButton from '../components/CustomButton/CustomButton';

const BookingSummary = () => {
  const route = useRoute();
  const {Colors} = Constants;
  const {SCREEN_HEIGHT, SCREEN_WIDTH} = Constants.SCREEN_DIMENSIONS;
  const [Choosen, setChoosen] = useState('')
  const [Visible, setVisible] = useState(false)

  const params = route.params;
  const ActionsheetRef=useRef()
  console.log(params);
  const paymentData=[
    {name:'Rent',amt:150},
    {name:'Drinks Box',amt:90},
    {name:'Home Businesses',amt:80},
    {name:'Fee',amt:30},

  ]
  const softDrinks = [
    { name: 'Coca-Cola', price: 50,image:Dew },
    { name: 'Pepsi', price: 45,image:Pepsi  },
    { name: 'Sprite', price: 40,image:Dew  },
    { name: 'Fanta', price: 42,image:Fanta },
    { name: 'Mountain Dew', price: 48,image:Dew  },
    { name: '7-Up', price: 38,image:Pepsi },
    { name: 'Thums Up', price: 47,image:Fanta},
    { name: 'Dr Pepper', price: 55,image:Dew  },
    { name: 'Limca', price: 43,image:Fanta  },
    { name: 'Mirinda', price: 40 ,image:Pepsi },
  ];
  const Services = [
  { name: 'Waterproof Phone Case Rental', price: 300,image:LifeJacket },
  { name: 'Life Jacket Upgrade (Premium Comfort)', price: 500,image:LifeJacket },
  { name: 'GoPro Camera Rental', price: 1500 ,image:GoPro},
  { name: 'Extra Fuel for Extended Rides', price: 800,image:LifeJacket },
  { name: 'Professional Instructor Assistance', price: 1000,image:GoPro },
  { name: 'Photo & Video Package', price: 2000,image:LifeJacket },
  { name: 'Sun Protection Kit (Sunscreen & Hat)', price: 400,image:LifeJacket },
  { name: 'Dry Bag for Belongings', price: 350,image:GoPro },
  { name: 'Locker Rental', price: 200,image:LifeJacket },]
  const ActionsheetComponent=()=>{
    return(
      <ActionSheet closable={true} containerStyle={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT*.9}}  ref={ActionsheetRef}>
      <View style={{marginTop:10,marginHorizontal:SCREEN_WIDTH*.07,}}>
        
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

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{textTransform:'uppercase',color:Colors.White,fontFamily:'Gibson',fontSize:18,fontWeight:'400'}}>{Choosen=='Drinks Box'?'Drinks Box':'Home Businesses'}</Text>
        <Text style={{color:Colors.Green1,fontFamily:'Gibson',fontSize:12}}>(3) Items</Text>
        </View>
      
<FlatList  contentContainerStyle={{marginTop:10,paddingBottom:50}} data={Choosen=='Drinks Box'?softDrinks:Services} renderItem={({item,index})=>{
  return(
    <Pressable style={{marginVertical:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
     
      <Image source={item.image} style={{height:SCREEN_WIDTH*.15,width:SCREEN_WIDTH*.15,borderRadius:SCREEN_WIDTH*.04/4,borderColor:Colors.White_Text,borderWidth:2}}/>
    <View style={{marginLeft:SCREEN_WIDTH*.02}}>
    <Text style={{color:Colors.White,fontFamily:'Gibson',fontSize:16,textTransform:'uppercase',width:SCREEN_WIDTH*.45}}>{item.name}</Text>
    <Text style={{color:Colors.Green1,fontFamily:'Gibson',fontSize:16}}>{item.price} QAR</Text>
    </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:SCREEN_WIDTH*.25}}>
    <Image
              source={Minus}
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
    <Text style={{color:Colors.Green1,fontFamily:'Gibson',fontSize:12,fontWeight:'500',}}>0</Text>

            <Image
              source={Plus}
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
    </Pressable>
  )
}}/>
  </View>

  </ActionSheet>
    )
  }
  const ModalComponent=()=>{
    return(
      <Modal visible={Visible} >
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'center'}}>
<View style={{height:SCREEN_WIDTH*.9,backgroundColor:Colors.Black,width:SCREEN_WIDTH*.8,borderRadius:15,alignItems:'center',paddingTop:SCREEN_WIDTH*.078}}>
<View style={{ height:SCREEN_WIDTH*.2,width:SCREEN_WIDTH*.2,backgroundColor:Colors.Green1,alignItems:'center',justifyContent:'center',padding:SCREEN_WIDTH*.01,borderRadius:SCREEN_WIDTH}}>
<Image source={Tick} style={{resizeMode:'contain'}}/>

</View>
<Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase',color:Colors.White,marginTop:SCREEN_WIDTH*.08}}>Rental Done Successfully</Text>
<Text style={{fontFamily:'Gibson',fontWeight:'light',fontSize:14,alignSelf:'center',width:SCREEN_WIDTH*.6,color:Colors.White,textAlign:'center',marginVertical:SCREEN_WIDTH*.04}}>Thank you. The lease has been successful. You can follow the order from the My Rentals  page</Text>
<CustomButton width={SCREEN_WIDTH*.55} title="My Rentals" onPress={()=>{setVisible(false)}}/>
</View>
        </View>
      </Modal>
    )
  }
const Timeslot=()=>{
    return(
       <View style={{marginTop:SCREEN_WIDTH*.04}}>
        <Text
            style={{
              fontFamily: 'Gibson',
              color: Colors.White,
              fontSize: 18,
              fontWeight: '400',marginBottom:SCREEN_WIDTH*.03
            }}>
            TIME SLOT
          </Text>
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
        <Pressable style={{backgroundColor:Colors.Green1,height:SCREEN_WIDTH*.244,top:-SCREEN_WIDTH*.11,zIndex:-1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}onPress={()=>{setVisible(true)}}>
   <Image source={ChevronRight} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/>
   <Image source={ChevronRight} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
   <Image source={ChevronRight} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/> 
   <Text style={{fontFamily:'Gibson',fontWeight:'semibold',fontSize:18,marginHorizontal:SCREEN_WIDTH*.045,textTransform:'uppercase'}}>{name}</Text>
   <Image source={ChevronLeft} style={{opacity:1,marginRight:SCREEN_WIDTH*.003}}/>
   <Image source={ChevronLeft} style={{opacity:.5,marginRight:SCREEN_WIDTH*.003}}/> 
   <Image source={ChevronLeft} style={{opacity:.3,marginRight:SCREEN_WIDTH*.003}}/> 
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
            <Image
              source={params.image}
              style={{
                height: SCREEN_WIDTH * 0.14,
                width: SCREEN_WIDTH * 0.14,
                resizeMode: 'cover',
                borderRadius: (SCREEN_WIDTH * 0.1) / 5,
              }}
            />
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
                {params.brand}
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
              {params.price}
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
        <View style={{marginTop: SCREEN_WIDTH * 0.05}}>
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
        </View>

        <Timeslot/>
      </View>
    );
  };
  const MiddleComponent=()=>{
    return(
        <FlatList data={params.addOn} contentContainerStyle={{marginHorizontal:SCREEN_WIDTH * 0.07,paddingVertical:SCREEN_WIDTH*.025}} scrollEnabled={false} renderItem={({item,index})=>{
            return(
<Pressable style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingBottom:SCREEN_WIDTH*.05,marginTop:SCREEN_WIDTH*.02,}} onPress={()=>{setChoosen(item.name),ActionsheetRef.current?.show()}}>
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
                color: Colors.Green1,
                fontSize: 12,
                fontFamily: 'Gibson',
                fontWeight: '450',
marginTop:SCREEN_WIDTH*.01
              }}>
              No Items Selected
            </Text>
   </View>
   <Image
              source={Plus}
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

          <FlatList scrollEnabled={false} data={paymentData} renderItem={({item,index})=>{
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
          <View>
       <View style={{backgroundColor:Colors.Black_Bg,height:SCREEN_HEIGHT*.44,width:SCREEN_WIDTH,borderRadius:15,zIndex:9}}>
       <SafeAreaView style={{width:SCREEN_WIDTH,alignSelf:'center',marginTop:SCREEN_WIDTH*.2,overflow:'hidden'}}>
     <View style={{marginHorizontal:SCREEN_WIDTH*.07}}>
     <DrawerHeaderComponent name={"Rent"} search={true} type='login'/>
     </View> 
     <HeaderComponent />
        </SafeAreaView>
   </View>
   <View style={{backgroundColor:Colors.Black,top:-SCREEN_WIDTH*.03,paddingTop:SCREEN_WIDTH*.04}}>
<MiddleComponent/>

   </View>
   <PaymentComponent/>

   </View>
   
<ButtonComponent name="Proceed to payment"/> 
<ActionsheetComponent/>
<ModalComponent/>
    </View>
  );
};

export default BookingSummary;
