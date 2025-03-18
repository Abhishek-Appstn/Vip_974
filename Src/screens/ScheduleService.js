import { View, Text, TouchableOpacity, Image, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import moment from 'moment';
import ItemLayout from '../components/ItemLayout';
import CalendarStrip from 'react-native-calendar-strip';
import Constants from '../Constants';
import { ChevronLeftGreen, ChevronRight, ChevronRightGreen } from '../assets/Images';
import { useNavigation, useRoute } from '@react-navigation/native';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import CustomCalenderStrip from './CustomCalenderStrip';
import Snackbar from 'react-native-snackbar';
const { Colors } = Constants;
const { SCREEN_HEIGHT,SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const ScheduleService = (props) => {
const params=props.route.params
  const navigation=useNavigation()
  const [selectedDate, setselectedDate] = useState(moment());
  const [selectedTime, setselectedTime] = useState();
console.log('Daaata',selectedDate,selectedTime)
const HandleNavigation=()=>{
  selectedDate?selectedTime?
  params?.type=='services'|| params?.type=='build'?
  navigation.navigate('CabanSize',{...params,selectedDate:selectedDate.format("DD MMMM YYYY"),selectedTime:selectedTime})
  :
  navigation.navigate('ServicesList',{...params,selectedDate:selectedDate.format("DD MMMM YYYY"),selectedTime:selectedTime}):Snackbar.show({text:"Select a time to continue",backgroundColor:'red'}):Snackbar.show({text:"Select a Date to continue",backgroundColor:'red'})
}
  return (
    <ItemLayout name='Submit' colors={Colors.Black_Bg} onPress={HandleNavigation}>
      <View style={{marginHorizontal:SCREEN_WIDTH*.03}}>
<DrawerHeaderComponent type='login'name={params?.type?params.type:"Rent"} search={true}/>
</View>
<CustomCalenderStrip params={params} selectedDate={selectedDate} selectedTime={selectedTime} setselectedDate={setselectedDate} setselectedTime={setselectedTime}/>
    </ItemLayout>
  );
};

export default ScheduleService;
