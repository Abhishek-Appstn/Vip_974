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

const ScheduleService = () => {
  const { Colors } = Constants;
  const navigation=useNavigation()
  const { SCREEN_HEIGHT,SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
  const [SelectedTime, setSelectedTime] = useState('');
const route=useRoute()
const params=route.params
console.log("#############",params)
const HandleNavigation=()=>{
  params?.type=='services'|| params?.type=='build'?
  navigation.navigate('CabanSize',params)
  :
  navigation.navigate('ServicesList',params)
}
  return (
    <ItemLayout name='Submit' colors={Colors.Black_Bg} onPress={HandleNavigation}>
      <View style={{marginHorizontal:SCREEN_WIDTH*.03}}>
<DrawerHeaderComponent type='login'name={params?.type?params.type:"Rent"} search={true}/>
</View>
<CustomCalenderStrip params={params}/>
    </ItemLayout>
  );
};

export default ScheduleService;
