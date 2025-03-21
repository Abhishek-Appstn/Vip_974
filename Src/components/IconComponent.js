import { Image, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
const {Colors}=Constants
const {SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const IconComponent = ({image,style,onPress}) => {
  return (
    <Pressable onPress={onPress}>
<Image
          source={image}
          style={[{
            height: SCREEN_WIDTH * 0.06,
            width: SCREEN_WIDTH * 0.06,
            backgroundColor: Colors.Black,
            padding: SCREEN_WIDTH * 0.015,
            resizeMode: 'contain',
            borderRadius: 4,
            borderColor: Colors.Green1,
            borderWidth: 0.5,
          },style]}
        />
    </Pressable>
    
  )
}

export default IconComponent