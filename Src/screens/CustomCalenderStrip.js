import { View, Text, FlatList, Pressable, Image, SafeAreaView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from '../Constants';
import { ChevronLeft, ChevronLeftGreen, ChevronRight, ChevronRightGreen, Tick } from '../assets/Images';
import moment, { max } from 'moment';
import DataConstants from '../assets/DataConstants';
import Snackbar from 'react-native-snackbar';
import { useSelector } from 'react-redux';
import Utils from '../Utils';
import SelectionComponent from '../components/SelectionComponent';

const CustomCalenderStrip = ({ params, selectedDate, setselectedDate, selectedTime, setselectedTime }) => {
  const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;
  const { Colors } = Constants;
  const flatlistRef = useRef(null);
  const [SelectedMonth, setSelectedMonth] = useState(moment());
  const [Dates, setDates] = useState([]);
  const BookedSlots = ['5:00 AM', '5:00 PM',]
  const [AvailableSlots, setAvailableSlots] = useState([]);
  const IsInitialLoad = useRef(true)

  useEffect(() => {
    setselectedTime([])
    const Sof = SelectedMonth.clone().startOf('month');
    const EoM = SelectedMonth.clone().endOf('month');

    let sdate = Sof.clone();
    let TempDate = [];
    while (sdate <= EoM) {
      TempDate.push(sdate.clone());
      sdate.add(1, 'day');
    }
    setDates(TempDate);

    if (IsInitialLoad.current) {
      const TodaysIndex = TempDate.findIndex(date => date.isSame(moment(), 'day'));
      setTimeout(() => {
        if (TodaysIndex !== -1 && flatlistRef?.current) {
          try {
            flatlistRef?.current?.scrollToIndex({ index: TodaysIndex - 2.25, animated: true });
            IsInitialLoad.current = false;

          } catch (error) {
            console.error("Error scrolling to today's index:", error.message);
            throw error
          }
        }
      }, 700);
    } else {
      try {
        if (flatlistRef.current && TempDate.length > 0) {
          flatlistRef.current.scrollToIndex({ index: 0, animated: true });
        }
      } catch (error) {
        throw error
      }
      
    }
  }, [SelectedMonth]);


  useEffect(() => {
    setselectedTime([])
    const StartingTime = moment().startOf('day').hour(5)
    const EndingTime = moment().endOf('day').hour(20)
    let times = []
    while (StartingTime <= EndingTime) {
      times.push(StartingTime.format('h:mm A'))
      StartingTime.add(1, 'hour')
    }
    setAvailableSlots(times)
  }, [selectedDate])

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
    setselectedDate(date);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.isSame(selectedDate, 'day');
    return (
      <Pressable
        style={{ alignItems: 'center', borderRadius: 7, backgroundColor: isSelected ? Colors.Green1 : null, justifyContent: 'space-evenly', padding: SCREEN_WIDTH * .01, marginHorizontal: SCREEN_WIDTH * .03, height: SCREEN_WIDTH * .15, width: SCREEN_WIDTH * .12 }}
        onPress={() => handleDateSelect(item)}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Gibson',
            color: isSelected ? Colors.Black : Colors.White,
          }}
        >
          {item.format('ddd')}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Gibson',
            color: isSelected ? Colors.Black : Colors.White,
          }}
        >
          {item.format('D')}
        </Text>
        {moment(item).isSame(moment(), 'day') ? <View style={{ backgroundColor: Colors.Green1, height: SCREEN_WIDTH * .015, width: SCREEN_WIDTH * .015, borderRadius: SCREEN_WIDTH, position: 'absolute', bottom: 0 }} /> : null}
      </Pressable>
    );
  };
  const TimeDisplay = () => {
    const SelectedLength=selectedTime.length
const maxLength=3
const language=useSelector(state=>state.Language.value)
const CustomFlexDirection=Utils.flexDirection(language)
const CustomTextAlign=Utils.textAlign(language)
    return (
      <View style={{
        width: SCREEN_WIDTH, backgroundColor: Colors.Black, height: SCREEN_HEIGHT * .64, zIndex: -1, paddingHorizontal: SCREEN_WIDTH * .02, paddingTop: 20
      }}>
        <Text style={{ color: Colors.White, fontSize: 18, fontFamily: "Gibson-BoldItalic", fontWeight: '500' }}>Select Time</Text>
        {params.type === 'rent' ? <FlatList contentContainerStyle={{ marginTop: SCREEN_WIDTH * .02 }} scrollEnabled={false} numColumns={4} data={AvailableSlots} renderItem={({ item, index }) => {
          const Disabled =
            BookedSlots.includes(item)
              ? true
              : false
          return (

            <Pressable style={{ width: SCREEN_WIDTH * .18, height: SCREEN_WIDTH * .09, borderColor: Colors.Green1, borderWidth: 1, marginHorizontal: 10, marginVertical: 10, borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding: 3, backgroundColor: selectedTime.includes(item) ? Colors.Green1 : null, opacity: Disabled ? .6 : 1 }} onPress={() => { Disabled ? Snackbar.show({ text: `${item} Slot is Unavailable` }) : SelectedLength<maxLength? setselectedTime(prevSelectedTimes =>prevSelectedTimes.includes(item) ? prevSelectedTimes.filter(time => time !== item) 
                  : [...prevSelectedTimes, item] ):Snackbar.show({text:`You can select only ${maxLength} slots at a time`})}}>
              <Text style={{ color: Colors.White, fontFamily: 'Gibson-Regular', fontSize: 12 }}>{item}</Text>
            </Pressable>
          )
        }} /> : <FlatList contentContainerStyle={{ marginTop: SCREEN_WIDTH * .02 }} scrollEnabled={false} data={DataConstants.WashTimes} renderItem={({ item, index }) => {
          return (
            <Pressable style={[{ width: SCREEN_WIDTH * .9, height: SCREEN_WIDTH * .25, marginHorizontal: 10, marginVertical: 10, borderRadius: 4, alignItems: 'center', justifyContent: 'space-between', padding: 3, backgroundColor: Colors.Black_Bg, paddingHorizontal: SCREEN_WIDTH * .05, flexDirection:'row' },CustomFlexDirection]} onPress={() => { item.name === selectedTime ? setselectedTime(null) : setselectedTime(item.slot) }}>
              <View>
                <Text style={[{ color: Colors.White, fontFamily: 'Gibson-Regular', fontSize: 18, marginVertical: SCREEN_WIDTH * .012, textTransform: 'uppercase', fontWeight: '600'},CustomTextAlign]}>{item.name}</Text>
                <Text style={[{ color: Colors.Green1, fontFamily: 'Gibson-Regular', fontSize: 12, marginVertical: SCREEN_WIDTH * .012},CustomTextAlign]}>{item.slot}</Text>
              </View>
           <SelectionComponent ActiveItem={selectedTime} Item={item.slot}/>
            </Pressable>
          )
        }} />
        }
      </View>
    )
  }
  return (
    <SafeAreaView>
      <View style={{ height: SCREEN_WIDTH * 0.35, alignItems: 'center', justifyContent: 'center', paddingTop: SCREEN_WIDTH * .06, overflow: 'hidden' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: SCREEN_WIDTH * 0.9, borderBottomWidth: 0.2, borderColor: Colors.Gray_Border, paddingBottom: SCREEN_WIDTH * .04 }}>
          <Pressable onPress={() => HandleMonthChange('Sub')} style={{ padding: SCREEN_WIDTH * .015, paddingHorizontal: SCREEN_WIDTH * .02, borderColor: Colors.Green1, borderWidth: 1, borderRadius: 5 }}>
            <Image source={ChevronLeftGreen} />
          </Pressable>
          <Text style={{ fontSize: 19, color: Colors.White, fontWeight: '500' }}>{SelectedMonth.format('MMMM YYYY')}</Text>
          <Pressable onPress={() => HandleMonthChange('Add')} style={{ padding: SCREEN_WIDTH * .015, paddingHorizontal: SCREEN_WIDTH * .02, borderColor: Colors.Green1, borderWidth: 1, borderRadius: 5 }} >
            <Image source={ChevronRightGreen} />
          </Pressable>
        </View>
        <FlatList
          ref={flatlistRef}
          showsHorizontalScrollIndicator={false}
          data={Dates}
          contentContainerStyle={{ height: SCREEN_WIDTH * .15, alignItems: 'center', justifyContent: 'center', marginTop: SCREEN_WIDTH * .02, }}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.format('DD-MM-YYYY')}
        />
      </View>
      <TimeDisplay />
    </SafeAreaView>
  );
};

export default CustomCalenderStrip;
