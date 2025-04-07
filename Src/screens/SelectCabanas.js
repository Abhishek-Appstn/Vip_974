import { View, Text, SafeAreaView, FlatList, Pressable, Image, Platform } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import CabanaListRenderItem from '../components/CabanaListRenderItem'
import DataConstants from '../assets/DataConstants'

const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS


const SelectCabanas = (props) => {
  return (
    <View style={{ backgroundColor: Colors.Black, height: SCREEN_HEIGHT }}>
      <SafeAreaView style={{ width: SCREEN_WIDTH * .9, alignSelf: 'center', }}>
        <DrawerHeaderComponent name='Cabanas' type='login' />
        <FlatList bounces={false} contentContainerStyle={{ paddingBottom: Platform.OS === 'android' ? SCREEN_HEIGHT * .2 : SCREEN_HEIGHT * .1, marginTop: SCREEN_HEIGHT * .02 }} showsVerticalScrollIndicator={false} renderItem={item => <CabanaListRenderItem item={item.item} index={item.index} type="list" />} data={DataConstants.CabanaList} />
      </SafeAreaView>
    </View>
  )
}

export default SelectCabanas