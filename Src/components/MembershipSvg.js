import React from 'react'
import { View } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'

const MembershipSvg = () => {
  return (
    <View style={{position:'absolute',right:0,top:0}}>
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={47.758}
    height={105.625}
    viewBox="0 0 47.758 105.625"
  
  >
    <G
      id="Group_12679"
      data-name="Group 12679"
      transform="translate(47.758 105.625) rotate(180)"
    >
      <Path
        id="Intersection_3"
        data-name="Intersection 3"
        d="M0,24.463,13.081,0h27.6L27.6,24.463Z"
        transform="translate(47.758 105.625) rotate(180)"
        fill="#0fc1a1"
      />
      <Path
        id="Intersection_2"
        data-name="Intersection 2"
        d="M0,55.044,29.433,0h1.392a6,6,0,0,1,6,6V37.794L27.6,55.044Z"
        transform="translate(36.825 105.625) rotate(180)"
        fill="#ff5f00"
      />
      <Path
        id="Intersection_6"
        data-name="Intersection 6"
        d="M0,67.838,36.275,0V51.616L27.6,67.838Z"
        transform="translate(36.275 67.838) rotate(180)"
        fill="#e50c58"
      />
    </G>
  </Svg>
  </View>
  
  )
}

export default MembershipSvg