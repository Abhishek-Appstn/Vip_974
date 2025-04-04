import { View, Text, Image, Pressable, Platform, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { ArrowLeft, Drawer, Expand, Filter, Search } from '../../assets/Images'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import Utils from '../../Utils'
import { useSelector } from 'react-redux'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const HeaderIcons = ({ icon, onPress, filter, onPressFilter }) => {
  return (
    <View style={{ width: filter ? SCREEN_WIDTH * .25 : SCREEN_WIDTH * .15, height: SCREEN_HEIGHT * .07, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
      {filter ? <Pressable onPress={onPressFilter}>
        <Image source={Filter} />
      </Pressable> : null}
      <Pressable onPress={onPress}>
        <Image source={icon} />
      </Pressable>

    </View>
  )
}

const TextView = ({ header }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * .07 }}>
      <Text style={{ color: Colors.White, fontFamily: 'Gibson', fontSize: 16, fontWeight: '400', textTransform: 'uppercase' }}>{header}</Text>
    </View>
  )
}

const DrawerHeaderComponent = ({ name, leftimage, rightimage, type, filter, back, active, setactive, setVisible, onRightPress, onLeftPress }) => {
  const navigation = useNavigation()

  return (
    <View style={{ flexDirection: 'row', height: SCREEN_HEIGHT * .07, alignItems: 'center', overflow: 'hidden', marginTop: StatusBar.currentHeight, alignSelf: 'center' }}>
      <HeaderIcons icon={leftimage ? leftimage : type == 'home' ? Drawer : ArrowLeft} onPress={(() => { type == 'home' ? navigation.dispatch(DrawerActions.toggleDrawer()) : navigation.goBack() })} />
      <TextView header={name} />
      <HeaderIcons icon={rightimage ? rightimage : Search} filter={filter} onPress={onRightPress ? onRightPress : null} />
    </View>
  )
}

export default DrawerHeaderComponent
