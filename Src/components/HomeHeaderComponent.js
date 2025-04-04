import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import HomeLowerSvg from './HomeLowerSvg'
import DrawerHeaderComponent from './DrawerHeaderComponent/DrawerHeaderComponent'
import { Background_Home_Icon, Background_Icon, Logo_White } from '../assets/Images'
import AboutUsLowerSvg from './AboutUsLowerSvg'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const HomeHeaderComponent = ({ height, width, SvgHeight, SvgWidth, header, logoSize, headerText, svgStyle }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.Black_Bg,
        height: height ? height : null,
        flex: 1,
        width: width ? width : SCREEN_WIDTH,
        overflow: 'hidden',
        borderBottomLeftRadius: SCREEN_HEIGHT * .015,
        borderBottomRightRadius: SCREEN_HEIGHT * .015
      }}>
      <Image
        style={{
          position: 'absolute', right: 0,
          resizeMode: 'contain',
        }}
        source={Background_Home_Icon}
      />

      <SafeAreaView style={{}}>
        <DrawerHeaderComponent name={headerText} type={"home"} search={true} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Image source={Logo_White} style={{ width: SCREEN_WIDTH * .16, height: SCREEN_HEIGHT * .1 }} resizeMode='contain' />
          <Text
            style={{
              width: SCREEN_WIDTH * 0.4,
              color: Colors.White,
              fontSize: 22,
              fontFamily: 'Gibson',
              textAlign: 'center',
              lineHeight: 30,
              marginTop: SCREEN_HEIGHT * .02,
            }}>
            {header ? header : null}
          </Text>
        </View>
      </SafeAreaView>
      <HomeLowerSvg />
    </View>


  )
}

export default HomeHeaderComponent