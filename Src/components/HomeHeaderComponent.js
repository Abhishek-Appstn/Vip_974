import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import HomeLowerSvg from './HomeLowerSvg'
import DrawerHeaderComponent from './DrawerHeaderComponent/DrawerHeaderComponent'
import { Background_Icon, Logo_White } from '../assets/Images'
import AboutUsLowerSvg from './AboutUsLowerSvg'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const HomeHeaderComponent = ({ height, width, SvgHeight, SvgWidth, header, logoSize, headerText, svgStyle }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.Black_Bg,
        height: height ? height : SCREEN_HEIGHT * .45,
        width: width ? width : SCREEN_WIDTH,
        overflow: 'hidden',
      }}>
      <Image
        style={{
          position: 'absolute',
          top: 0,
          right: -110,
          opacity: 0.45,
          height: SCREEN_WIDTH * 0.7,
          resizeMode: 'contain',
        }}
        source={Background_Icon}
      />

      <SafeAreaView style={{}}>
        <DrawerHeaderComponent name={headerText} type={headerText !== 'Vip-974' ? 'login' : null} search={true} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: SCREEN_HEIGHT * 0.3,
          }}>
          <Image source={Logo_White} style={{ width: SCREEN_WIDTH * .2 }} resizeMode='contain' />
          <Text
            style={{
              width: SCREEN_WIDTH * 0.4,
              color: Colors.White,
              fontSize: 24,
              fontFamily: 'Gibson',
              textAlign: 'center',
              lineHeight: 30,
              marginTop: SCREEN_HEIGHT * .02,
            }}>
            {header ? header : null}
          </Text>
        </View>
      </SafeAreaView>
      <AboutUsLowerSvg />
    </View>


  )
}

export default HomeHeaderComponent