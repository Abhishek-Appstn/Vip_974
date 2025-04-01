import { View, Text, Image, Pressable, Platform, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { ArrowLeft, Drawer, Expand, Filter, Search } from '../../assets/Images'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import Utils from '../../Utils'
import { useSelector } from 'react-redux'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const HeaderIcons = ({ icon, onPress }) => {
  return (
    <View style={{ width: SCREEN_WIDTH * .12, height: SCREEN_HEIGHT * .07, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={onPress}>
        <Image source={icon} />
      </Pressable>
    </View>
  )
}

const TextView = ({ header }) => {
  return (
    <View style={{ width: SCREEN_WIDTH * .65, alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * .07 }}>
      <Text style={{ color: Colors.White, fontFamily: 'Gibson', fontSize: 16, fontWeight: '400', textTransform: 'uppercase' }}>{header}</Text>
    </View>
  )
}

const DrawerHeaderComponent = ({ name, leftimage, rightimage, type, search, back, active, setactive, setVisible }) => {
  const navigation = useNavigation()

  return (
    <View style={{ flexDirection: 'row', height: SCREEN_HEIGHT * .07, alignItems: 'center', width: SCREEN_WIDTH * .9, overflow: 'hidden', marginTop: StatusBar.currentHeight, alignSelf: 'center' }}>
      <HeaderIcons icon={type == 'home' ? Drawer : ArrowLeft} onPress={(() => { type == 'home' ? navigation.dispatch(DrawerActions.toggleDrawer()) : navigation.goBack() })} />
      <TextView header={name} />
      <HeaderIcons icon={Search} />
    </View>
  )
}

export default DrawerHeaderComponent
