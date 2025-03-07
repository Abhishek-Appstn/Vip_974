import { View, Text, TouchableOpacity, Image, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import moment from 'moment';
import ItemLayout from '../components/ItemLayout';
import CalendarStrip from 'react-native-calendar-strip';
import Constants from '../Constants';
import { ChevronLeftGreen, ChevronRight, ChevronRightGreen } from '../assets/Images';
import { useNavigation, useRoute } from '@react-navigation/native';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';

const ScheduleService = () => {
  const { Colors } = Constants;
  const navigation=useNavigation()
  const { SCREEN_HEIGHT,SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
  const [currentDate, setCurrentDate] = useState(moment());
  const [SelectedTime, setSelectedTime] = useState('');
const route=useRoute()
const params=route.params
const HandleNavigation=()=>{
  navigation.navigate('ServicesList')
}
  const goToPreviousWeek = () => {
    const newDate = moment(currentDate).subtract(1, 'week');
    setCurrentDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = moment(currentDate).add(1, 'week');
    setCurrentDate(newDate);
  };
  const Data=[
    { id: '1', time: '12:00 AM' },
    { id: '2', time: '1:00 AM' },
    { id: '3', time: '2:00 AM' },
    { id: '4', time: '3:00 AM' },
    { id: '5', time: '4:00 AM' },
    { id: '6', time: '5:00 AM' },
    { id: '7', time: '6:00 AM' },
    { id: '8', time: '7:00 AM' },
    { id: '9', time: '8:00 AM' },
    { id: '10', time: '9:00 AM' },
    { id: '11', time: '10:00 AM' },
    { id: '12', time: '11:00 AM' },
    { id: '13', time: '12:00 PM' },
    { id: '14', time: '1:00 PM' },
    { id: '15', time: '2:00 PM' },
    { id: '16', time: '3:00 PM' },
    { id: '17', time: '4:00 PM' },
    { id: '18', time: '5:00 PM' },
    { id: '19', time: '6:00 PM' },
    { id: '20', time: '7:00 PM' },
    { id: '21', time: '8:00 PM' },
    { id: '22', time: '9:00 PM' },
    { id: '23', time: '10:00 PM' },
    { id: '24', time: '11:00 PM' }
  ]
  
const TimeDisplay=()=>{
    return(
       <View style={{marginTop:SCREEN_WIDTH*.06,width:SCREEN_WIDTH,backgroundColor:Colors.Black,height:SCREEN_HEIGHT*.6,zIndex:-1,paddingHorizontal:SCREEN_WIDTH*.02,paddingTop:20
       }}>
        <Text style={{color:Colors.White,fontSize:18,fontFamily:"Gibson-BoldItalic",fontWeight:'500'}}>Select Time</Text>
        <FlatList contentContainerStyle={{marginTop:SCREEN_WIDTH*.02}} scrollEnabled={false} numColumns={4} data={Data} renderItem={({item,index})=>{
return(
    <Pressable style={{width:SCREEN_WIDTH*.18,height:SCREEN_WIDTH*.09,borderColor:Colors.Green1,borderWidth:1,marginHorizontal:10,marginVertical:10,borderRadius:4,alignItems:'center',justifyContent:'center',padding:3,backgroundColor:item.time===SelectedTime?Colors.Green1:null}} onPress={()=>{item.time===SelectedTime?setSelectedTime(null):setSelectedTime(item.time)}}>
        <Text style={{color:Colors.White,fontFamily:'Gibson-Regular',fontSize:12}}>{item.time}</Text>
    </Pressable>
)
        }}/>
        </View>
    )
}
  return (
    <ItemLayout name='Submit' colors={Colors.Black_Bg} onPress={HandleNavigation}>
      <View style={{marginHorizontal:SCREEN_WIDTH*.03}}>
<DrawerHeaderComponent type='login'name={params?.type?params.type:"Rent"} search={true}/>
      <View style={{marginTop:20,backgroundColor:Colors.Black_Bg,marginHorizontal:SCREEN_WIDTH*.02}}>
                
        
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop:10,borderColor:Colors.Gray_Border,borderBottomWidth:.5,paddingBottom:10
          }}
        >
          <Pressable
            onPress={goToPreviousWeek} 
            style={{
              borderColor: Colors.Green1,
              borderWidth: 1,
              borderRadius:5,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
                      <Image source={ChevronLeftGreen} />

          </Pressable>

          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            {currentDate.format('MMMM YYYY')}
          </Text>

          <Pressable
            onPress={goToNextWeek} 
            style={{
              borderColor: Colors.Green1,
              borderWidth: 1,
              borderRadius:5,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
           <Image source={ChevronRightGreen} />
          </Pressable>
        </View>

        <CalendarStrip
          style={{ height: 50,marginTop:10,width:SCREEN_WIDTH*.95}}
          calendarHeaderStyle={{ display: 'none' }}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          highlightDateContainerStyle={{
            backgroundColor: Colors.Green1,
            borderRadius: 5,
          }}
          highlightDateNumberStyle={{
            color: Colors.Black,
            fontWeight: 'bold',
          }}
          highlightDateNameStyle={{
            color: Colors.Black,
            fontWeight: 'bold',
          }}
          iconLeft={null}
          iconRight={null}
          startingDate={currentDate} 
        />
      </View>
    </View>
    <TimeDisplay/>


    </ItemLayout>
  );
};

export default ScheduleService;
