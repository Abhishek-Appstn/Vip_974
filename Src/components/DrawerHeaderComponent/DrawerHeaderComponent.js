import { View, Text, Image, Pressable, Platform, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { ArrowLeft, Drawer, Expand, Filter, Search } from '../../assets/Images'
import { useNavigation } from '@react-navigation/native'
import Utils from '../../Utils'
import { useSelector } from 'react-redux'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const HeaderIcons = ({ icon }) => {
  return (
    <View style={{ width: SCREEN_WIDTH * .15, height: SCREEN_HEIGHT * .07, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
      <Pressable>
        <Image source={icon} />
      </Pressable>
    </View>
  )
}

const TextView = () => {
  return (
    <View style={{ width: SCREEN_WIDTH * .6, alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * .07 }}>
      <Text style={{ color: Colors.White, fontFamily: 'Gibson', fontSize: 16, fontWeight: '400' }}>Header Text</Text>
    </View>
  )
}

const DrawerHeaderComponent = ({ name, leftimage, rightimage, type, search, back, active, setactive, setVisible }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: "red", height: SCREEN_HEIGHT * .07, alignItems: 'center', width: SCREEN_WIDTH * .9, overflow: 'hidden', marginTop: StatusBar.currentHeight, alignSelf: 'center' }}>
      <HeaderIcons icon={Drawer} />
      <TextView />
      <HeaderIcons icon={Search} />
    </View>
  )
}

export default DrawerHeaderComponent
