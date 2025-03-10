import { View, Text, FlatList, Pressable, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from '../Constants';
import { ChevronLeft, ChevronRight } from '../assets/Images';
import moment from 'moment';

const Test = () => {
  const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;
  const { Colors } = Constants;
  const flatlistRef = useRef(null);
  const [SelectedMonth, setSelectedMonth] = useState(moment());
  const [Dates, setDates] = useState([]);
  const [selectedDate, setselectedDate] = useState(moment());

  useEffect(() => {
    const Sof = SelectedMonth.clone().startOf('month');
    const EoM = SelectedMonth.clone().endOf('month');

    let sdate = Sof.clone();
    let TempDate = [];

    while (sdate <= EoM) {
      TempDate.push(sdate.clone());
      console.log(sdate.format('DD-MM-YYYY'));
      sdate.add(1, 'day');
    }

    setDates(TempDate);
    if (flatlistRef.current && Dates.length > 0) {
        flatlistRef.current.scrollToIndex({ index: 0, animated: true });
      }
  }, [SelectedMonth]);

  const HandleMonthChange = (type) => {
    switch (type) {
      case 'Add':
        setSelectedMonth((prevDate) => prevDate.clone().add(1, 'month'));
        break;
      case 'Sub':
        setSelectedMonth((prevDate) => prevDate.clone().subtract(1, 'month'));
        break;
      default:
        break;
    }
  };

  const handleDateSelect = (date) => {
    date===selectedDate?setselectedDate(null):
    setselectedDate(date);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.isSame(selectedDate, 'day');
    return (
      <Pressable
        style={{ alignItems: 'center',  borderRadius: 10,   backgroundColor: isSelected ? 'green' : 'blue', justifyContent: 'center',marginHorizontal:10,height:SCREEN_WIDTH*.15 }}
        onPress={() => handleDateSelect(item)}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
         
            marginHorizontal: 10,
          
          
          }}
        >
          {item.format('DD')}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: Colors.Black_Bg }}>
      <View style={{ backgroundColor: 'red', height: SCREEN_WIDTH * 0.35, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: SCREEN_WIDTH * 0.8 }}>
          <Pressable onPress={() => HandleMonthChange('Sub')}>
            <Image source={ChevronLeft} />
          </Pressable>
          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{SelectedMonth.format('MMMM YYYY')}</Text>
          <Pressable onPress={() => HandleMonthChange('Add')}>
            <Image source={ChevronRight} />
          </Pressable>
        </View>
        <FlatList
          ref={flatlistRef}
          showsHorizontalScrollIndicator={false}
          data={Dates}
          contentContainerStyle={{height:SCREEN_WIDTH*.15,alignItems:'center',justifyContent:'center'}}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.format('DD-MM-YYYY')}
          onScrollToIndexFailed={() => console.log('scrollToIndex failed')} // Additional log for debugging
        />
      </View>
    </View>
  );
};

export default Test;
