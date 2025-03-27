import { View, Text, SafeAreaView, FlatList, Pressable, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { calendar, ChevronDown, Plus, YamahaJetski1 } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
import TimeSlot from '../components/TimeSlot'
import IconComponent from '../components/IconComponent'
import AnimatedListView  from '../components/AnimatedListView'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const HandleNavigation = ({ item, type, navigation }) => {

  navigation.navigate('BookedTicket', { ...item, type: type })
}


const RentRenderItem = ({ item, CustomFlexDirection, CustomTextAlign }) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => HandleNavigation({ item: item, type: "rent", navigation: navigation })} style={{ marginVertical: 10 }}>
      <View style={[{ flexDirection: 'row' }, CustomFlexDirection]}>
        <Image source={YamahaJetski1} style={{ height: SCREEN_WIDTH * .12, width: SCREEN_WIDTH * .12, borderRadius: 10 }} />
        <View style={{ marginHorizontal: SCREEN_WIDTH * .03 }}>
          <Text style={[{ fontFamily: 'Gibson', fontWeight: '500', fontSize: 18, textTransform: 'uppercase', color: Colors.White, }, CustomTextAlign]}>{item.name}</Text>
          <Text
            style={[{
              color: Colors.Orange1,
              fontSize: 12,
              fontFamily: 'Gibson',
              textTransform: 'capitalize',
              marginVertical: SCREEN_WIDTH * .015

            }, CustomTextAlign]}>
            {item.brand}
          </Text>
          <TimeSlot selectedDate={item.date} selectedTime={item.time} />
        </View>
      </View>
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SCREEN_WIDTH * .02 }, CustomFlexDirection]}>
        <Text style={{ fontFamily: 'Gibson', fontSize: 12, color: item.status == 'completed' ? Colors.Green1 : Colors.Orange1, marginVertical: 3, backgroundColor: item.status == 'completed' ? `${Colors.Green1}30` : `${Colors.Orange1}30`, padding: SCREEN_WIDTH * .015, borderRadius: 10, textTransform: 'capitalize' }}>{item.status}</Text>
        <Text style={{ fontFamily: 'Gibson', fontWeight: '600', fontSize: 20, color: Colors.White, marginVertical: 3, }}>250</Text>
      </View>
    </Pressable>
  )
}
const ServicesRenderItem = ({ item, index, CustomAlignSelf, CustomFlexDirection, CustomTextAlign }) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => HandleNavigation({ item: item, type: "services", navigation: navigation })} style={{ marginVertical: 10 }}>
      <View style={[{ flexDirection: 'row', width: SCREEN_WIDTH * .9 }, CustomFlexDirection]}>
        <Image source={YamahaJetski1} style={{ height: SCREEN_WIDTH * .15, width: SCREEN_WIDTH * .15, borderRadius: SCREEN_WIDTH, borderColor: Colors.Gray_Border, borderWidth: 3 }} />
        <View style={{ margin: SCREEN_WIDTH * .03, width: SCREEN_WIDTH * .6 }}>
          <Text style={[{ fontFamily: 'Gibson', fontWeight: '500', fontSize: 18, textTransform: 'uppercase', color: Colors.White, }, CustomTextAlign]}>{item.name}</Text>
          <Text
            style={[{
              color: Colors.Orange1,
              fontSize: 12,
              fontFamily: 'Gibson',
              textTransform: 'capitalize',
              marginVertical: SCREEN_WIDTH * .015
            }, CustomTextAlign]}>
            {item.servicename} | {item.size}
          </Text>
          <TimeSlot selectedDate={item.date} selectedTime={item.time} />
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SCREEN_WIDTH * .04 }, CustomFlexDirection]}>
            <Text style={{ fontFamily: 'Gibson', fontSize: 12, color: item.status == 'completed' ? Colors.Green1 : Colors.Orange1, marginVertical: 3, backgroundColor: item.status == 'completed' ? `${Colors.Green1}30` : `${Colors.Orange1}30`, padding: SCREEN_WIDTH * .015, borderRadius: 10, textTransform: 'capitalize' }}>{item.status}</Text>
            <Text style={{ fontFamily: 'Gibson', fontWeight: '600', fontSize: 20, color: Colors.White, marginVertical: 3, }}>{item.total}</Text>
          </View>
        </View>
      </View>

    </Pressable>
  )
}

const BuildRenderItem = ({ item, index, CustomFlexDirection, CustomTextAlign }) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => HandleNavigation({ item: item, type: "build", navigation: navigation })} style={{ paddingHorizontal: SCREEN_WIDTH * .02, marginVertical: 10, backgroundColor: Colors.Black_Bg, overflow: 'hidden', width: SCREEN_WIDTH * .9, padding: SCREEN_WIDTH * .03, }}>
      <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: `${Colors.Gray_Text}50`, paddingBottom: SCREEN_WIDTH * .04, borderBottomWidth: 1, width: SCREEN_WIDTH * .82, alignSelf: 'center', paddingTop: SCREEN_WIDTH * .02 }, CustomFlexDirection]}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={[{ fontFamily: 'Gibson', fontWeight: '400', fontSize: 18, textTransform: 'uppercase', color: Colors.White, }, CustomTextAlign]}>{item.name}</Text>
          <Text
            style={[{
              color: item.buildtype == 'standard' ? Colors.AccentColor4 : Colors.Orange1,
              fontSize: 12,
              fontFamily: 'Gibson',
              textTransform: 'capitalize',
              marginVertical: SCREEN_WIDTH * .015
            }, CustomTextAlign]}>
            {item.buildtype}
          </Text>

        </View>
       
        <IconComponent image={ChevronDown} imageStyle={{height: SCREEN_WIDTH * 0.045, width: SCREEN_WIDTH * 0.045,}} />
      </View>
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SCREEN_WIDTH * .02, alignItems: 'flex-end', paddingHorizontal: SCREEN_WIDTH * .017 }, CustomFlexDirection]}>
        <Text style={{ fontFamily: 'Gibson', fontSize: 12, color: item.status == 'completed' ? Colors.Green1 : Colors.Gray_Text, marginVertical: SCREEN_HEIGHT*.003, padding: SCREEN_WIDTH * .015, borderRadius: 10 }}>{item.date}</Text>
        <Text style={{ fontFamily: 'Gibson', fontSize: 8, color: Colors.Green1, marginVertical: SCREEN_HEIGHT*.003, }}><Text style={{ fontFamily: 'Gibson', fontWeight: '600', fontSize: 20, color: Colors.Green1, }}>{item.total} </Text>QAR</Text>
      </View>
    </Pressable>


  )
}

const ListRenderItem = ({ item, selectedType, CustomAlignSelf, CustomFlexDirection, CustomTextAlign }) => {

  switch (selectedType) {
    case 'Rent':
      return (
    <AnimatedListView >
        <RentRenderItem item={item} CustomAlignSelf={CustomAlignSelf} CustomFlexDirection={CustomFlexDirection} CustomTextAlign={CustomTextAlign} /></AnimatedListView>
      )
    case 'Services':
      return (
        <AnimatedListView >
        <ServicesRenderItem item={item} CustomAlignSelf={CustomAlignSelf} CustomFlexDirection={CustomFlexDirection} CustomTextAlign={CustomTextAlign} />

        </AnimatedListView>
      )
    case 'Build':
      return (
        <AnimatedListView>
        <BuildRenderItem item={item} CustomAlignSelf={CustomAlignSelf} CustomFlexDirection={CustomFlexDirection} CustomTextAlign={CustomTextAlign} />

        </AnimatedListView>
      )
  }

}



const MyActivities = () => {
  const { Colors } = Constants
  const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
  const { HistoryData, HistoryServicesData, HistoryBuildData, HistoryHeaders } = DataConstants
  const [selectedType, setselectedType] = useState('Rent')
  const [data, setData] = useState('')
  const navigation = useNavigation()
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomAlignSelf = Utils.alignSelf(language)
  const CustomTextAlign = Utils.textAlign(language)

  useEffect(() => {
    selectedType == 'Rent' ? setData(HistoryData) : selectedType == 'Services' ? setData(HistoryServicesData) : setData(HistoryBuildData)
  }, [selectedType])


  return (
    <View style={{ backgroundColor: Colors.Black_Bg, height: SCREEN_WIDTH * .5,paddingTop:Platform.OS==='android'?SCREEN_HEIGHT*.05:0 }}>
      <SafeAreaView>
        <View style={{ marginHorizontal: SCREEN_WIDTH * .07 }}>
          <DrawerHeaderComponent name='MY Activities' type='login' />
          <FlatList scrollEnabled={false} contentContainerStyle={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SCREEN_WIDTH * .129, overflow: 'hidden' }, CustomFlexDirection]} data={HistoryHeaders} renderItem={({ item, index }) => {
            return (
              <Pressable style={{ height: SCREEN_HEIGHT * .05, alignItems: 'center', justifyContent: "center", borderBottomWidth: 3, borderBottomColor: item.name === selectedType ? Colors.Green1 : Colors.Black_Bg, width: SCREEN_WIDTH * .22 }} onPress={() => { setselectedType(item.name) }}>
                <Text style={{ fontFamily: 'Gibson', fontSize: 18, color: item.name === selectedType ? Colors.Green1 : Colors.White }}>{item.name}</Text>
              </Pressable>
            )
          }} />
        </View>
        <View style={{ height: SCREEN_HEIGHT * .9, backgroundColor: Colors.Black }}>
          <FlatList contentContainerStyle={{ marginHorizontal: SCREEN_WIDTH * .07, paddingBottom: SCREEN_HEIGHT * .2, paddingTop: SCREEN_HEIGHT * .025 }} data={data} renderItem={item => <ListRenderItem item={item.item} selectedType={selectedType} CustomAlignSelf={CustomAlignSelf} CustomFlexDirection={CustomFlexDirection} CustomTextAlign={CustomTextAlign} />} />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default MyActivities

