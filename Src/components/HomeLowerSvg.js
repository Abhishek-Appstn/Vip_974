import { View } from 'react-native'
import React from 'react'
import Svg, { G, Path } from 'react-native-svg';

const HomeLowerSvg = ({style,height,width,viewBox}) => {
    return (
      <View style={{position: 'absolute', bottom: 0,...style}}>
        <Svg width={width?width:40.186} height={height?height:88.879} viewBox={viewBox?viewBox:"0 0 40.186 88.879"}>
          <G
            id="Group_13630"
            data-name="Group 13630"
            transform="translate(0 0)">
            <Path
              id="Intersection_3"
              data-name="Intersection 3"
              d="M0,20.585,11.007,0H34.232L23.225,20.585Z"
              transform="translate(40.186 88.879) rotate(180)"
              fill="#0fc1a1"
            />
            <Path
              id="Intersection_2"
              data-name="Intersection 2"
              d="M0,46.317,24.767,0h.22a6,6,0,0,1,6,6V31.8L23.225,46.317Z"
              transform="translate(30.986 88.879) rotate(180)"
              fill="#ff5f00"
            />
            <Path
              id="Intersection_6"
              data-name="Intersection 6"
              d="M0,57.082,30.523,0V43.433l-7.3,13.648Z"
              transform="translate(30.523 57.081) rotate(180)"
              fill="#e50c58"
            />
          </G>
        </Svg>
      </View>
    );
  };


export default HomeLowerSvg