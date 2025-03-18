import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const AboutUsLowerSvg = () => {
  return (
    <View style={{position:'absolute',bottom:0}}>
    <Svg
    width={64.652}
    height={102.223}
    viewBox="0 0 64.652 102.223"
  
  >
    <Path
      id="Intersection_1"
      data-name="Intersection 1"
      d="M-5.873,71.909,34.9,0V43.273L18.663,71.909Z"
      transform="translate(34.9 71.909) rotate(180)"
      fill="#e50c58"
    />
    <Path
      id="Intersection_3"
      data-name="Intersection 3"
      d="M0,58.258,33.033,0H57.57L24.537,58.258Z"
      transform="translate(64.652 102.223) rotate(180)"
      fill="#0fc1a1"
    />
    <Path
      id="Intersection_2"
      data-name="Intersection 2"
      d="M.766,76.04A8.826,8.826,0,0,0,0,75.091L42.578,0h6.989V30.948L24,76.04Z"
      transform="translate(49.697 102.222) rotate(180)"
      fill="#ff5f00"
    />
  </Svg>
  </View>

  )
}

export default AboutUsLowerSvg