import { Image, Platform, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const IconComponent = ({ image, style, onPress, imageStyle }) => {
  const language = useSelector(state => state.Language.value)
  const CustomImageTransform = Utils.ImageTransform(language)
  return (
    <Pressable
      style={[
        {
          backgroundColor: Colors.Black,
          padding: Platform.OS === 'android' ? SCREEN_WIDTH * 0.01 : SCREEN_WIDTH * 0.015,
          borderRadius: 4,
          borderColor: Colors.Green1,
          borderWidth: 0.5, alignItems: 'center', justifyContent: 'center'
        },
        style,
        CustomImageTransform
      ]}
      onPress={onPress}
    >
      <Image
        source={image}
        style={[{
          height: SCREEN_HEIGHT * 0.025,
          width: SCREEN_WIDTH * 0.06,
          resizeMode: 'contain'
        }, imageStyle]}
      />
    </Pressable>

  )
}

export default IconComponent