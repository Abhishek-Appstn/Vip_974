import { View, Text, ScrollView, Image, StatusBar, Platform } from 'react-native'
import React from 'react'
import HomeHeaderComponent from '../components/HomeHeaderComponent'
import Constants from '../Constants'
import DataConstants from '../assets/DataConstants'
import Utils from '../Utils'
import { useSelector } from 'react-redux'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { Background_Home_Icon, DrawerLowerImage, Logo_White } from '../assets/Images'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeLowerSvg from '../components/HomeLowerSvg'
import Svg, { G, Path } from 'react-native-svg'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants
const { CompanyName, AboutCompanyData } = DataConstants
const LowerSvgImage = () => {
  return (
    <Svg
      width={64.652}
      height={102.223}
      viewBox="0 0 64.652 102.223"
    >
      <G
        id="Group_13716"
        data-name="Group 13716"
        transform="translate(-0.121 -136.942)"
      >
        <Path
          id="Intersection_1"
          data-name="Intersection 1"
          d="M-5.873,71.909,34.9,0V43.273L18.663,71.909Z"
          transform="translate(35.021 208.851) rotate(180)"
          fill="#e50c58"
        />
        <Path
          id="Intersection_3"
          data-name="Intersection 3"
          d="M0,58.258,33.033,0H57.57L24.537,58.258Z"
          transform="translate(64.774 239.164) rotate(180)"
          fill="#0fc1a1"
        />
        <Path
          id="Intersection_2"
          data-name="Intersection 2"
          d="M.766,76.04A8.826,8.826,0,0,0,0,75.091L42.578,0h6.989V30.948L24,76.04Z"
          transform="translate(49.818 239.164) rotate(180)"
          fill="#ff5f00"
        />
      </G>
    </Svg>
  )
}

const CompanyData = () => {
  return (
    <View style={{ paddingHorizontal: SCREEN_WIDTH * .05, paddingTop: SCREEN_HEIGHT * .04, flex: 1 }}>
      <Text style={[{ color: Colors.White, textAlign: 'center', fontSize: 18, fontFamily: 'Gibson', fontWeight: '400', },]}>{CompanyName} </Text>
      <Text style={{ color: Colors.White_Text, fontSize: 16, fontWeight: 'light', fontFamily: 'Gibson', marginTop: SCREEN_HEIGHT * .03, lineHeight: 20, }}>{AboutCompanyData}</Text>
    </View >
  )
}

const AboutUs = () => {
  const language = useSelector(state => state.Language.value)
  const CustomTextAlign = Utils.textAlign(language)
  const CustomAlignSelf = Utils.alignSelf(language)
  const CustomAlignItems = Utils.alignItems(language)
  const CustomFlexDirection = Utils.flexDirection(language)



  return (
    <View style={{ flex: 1, backgroundColor: Colors.Black }}>
      <Image source={Background_Home_Icon} style={{ position: 'absolute', right: 0, zIndex: 0 }} />

      <View style={{ backgroundColor: Colors.Black_Bg, paddingTop: Platform.OS == 'ios' ? SCREEN_HEIGHT * .05 : null }}>
        <DrawerHeaderComponent name={"About Us"} />

      </View>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={{ paddingBottom: SCREEN_HEIGHT * .1 }}>
        <View style={{ backgroundColor: Colors.Black_Bg, alignItems: 'center', }}>
          <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={Logo_White} style={{ alignSelf: 'center', height: SCREEN_HEIGHT * .12 }} resizeMode='contain' />

          </SafeAreaView>
          <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <LowerSvgImage />

          </View>
        </View >
        <CompanyData />

      </ScrollView>

    </View>

  )
}

export default AboutUs