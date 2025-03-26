import { Image, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const {Colors}=Constants
const {SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const IconComponent = ({image,style,onPress}) => {
  const language=useSelector(state=>state.Language.value)
  const CustomImageTransform=Utils.ImageTransform(language)
  return (
    <Pressable style={{zIndex:10}} onPress={onPress}>
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
          },style,CustomImageTransform]}
        />
    </Pressable>
    
  )
}

export default IconComponent