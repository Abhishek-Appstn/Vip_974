import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Constants from '../Constants'
import SelectorComponentRenderItem from '../components/SelectorComponentRenderItem'
import CabanaListRenderItem from '../components/CabanaListRenderItem'
import DataConstants from '../assets/DataConstants'
import moment from 'moment'

const MyBuilds = () => {
  const { Colors } = Constants
  const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
  const [SelectedIndex, setSelectedIndex] = useState(0)
  const [Data, setData] = useState([])
  const { MyBuildHeader, MybuildCustomData, MybuildStandardData } = DataConstants


  useEffect(() => {
    SelectedIndex === 0 ? setData(MybuildStandardData) : SelectedIndex === 1 ? setData(MybuildCustomData) : null
  }, [SelectedIndex])

  const sortedData = [...Data].sort((a, b) => {
    const dateA = moment(a.bookedDate, 'DD-MM-YYYY');
    const dateB = moment(b.bookedDate, 'DD-MM-YYYY');
    return dateA - dateB;
  });
  return (
    <View style={{ backgroundColor: Colors.Black_Bg, height: SCREEN_HEIGHT }}>
      <SafeAreaView style={{ alignSelf: 'center', flex: 1, marginHorizontal: SCREEN_WIDTH * .05 }}>
        <DrawerHeaderComponent name={"My Builds"} type={"login"} search={true} />
        <FlatList horizontal style={{ alignSelf: 'center', }} contentContainerStyle={{ justifyContent: 'space-between', width: SCREEN_WIDTH * .7, }} data={MyBuildHeader} renderItem={item => <SelectorComponentRenderItem item={item.item} index={item.index} SelectedIndex={SelectedIndex} setSelectedIndex={setSelectedIndex} />} />

        <FlatList keyExtractor={(item, index) => item.name} bounces={false} data={sortedData} showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .02,paddingBottom:SCREEN_HEIGHT*.025}} renderItem={item => <CabanaListRenderItem index={item.index} item={item.item} />} />

      </SafeAreaView>
    </View>
  )
}

export default MyBuilds