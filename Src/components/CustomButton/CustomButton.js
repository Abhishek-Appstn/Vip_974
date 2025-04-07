import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const CustomButton = ({ title, onPress, width }) => {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: Constants.Colors.Green1, alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * .07, borderRadius: SCREEN_WIDTH * .02, width: width ? width : null }}>
      <Text style={{ textTransform: 'uppercase', fontSize: 18, fontFamily: 'Gibson' }}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton