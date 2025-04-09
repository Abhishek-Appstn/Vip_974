import { View, Text, ScrollView, Image, StatusBar, Platform } from 'react-native'
import React from 'react'
import HomeHeaderComponent from '../components/HomeHeaderComponent'
import Constants from '../Constants'
import DataConstants from '../assets/DataConstants'
import Utils from '../Utils'
import { useSelector } from 'react-redux'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { AboutUsfooter, Background_Home_Icon, Background_Icon_ServiceHeader, DrawerLowerImage, Logo_White } from '../assets/Images'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeLowerSvg from '../components/HomeLowerSvg'
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg";

const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants
const { CompanyName, AboutCompanyData } = DataConstants


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
    <View style={{ flex: 1, backgroundColor: Colors.Black_Bg }}>
      <Image
        style={{
          position: 'absolute',
          right: 0, top: 0, zIndex: 1
        }}
        source={Background_Icon_ServiceHeader}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerHeaderComponent name={"About Us"} />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={{ flex: 3, backgroundColor: Colors.Black }}  >
          <View style={{ backgroundColor: Colors.Black_Bg, alignItems: 'center' }}>
            <SafeAreaView style={{}}>
              <Image source={Logo_White} style={{ alignSelf: 'center', height: SCREEN_HEIGHT * .12 }} resizeMode='contain' />
            </SafeAreaView>

            <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
              <Image source={AboutUsfooter} style={{ height: SCREEN_HEIGHT * .12 }} resizeMode='contain' />
            </View>
          </View >
          <CompanyData />

        </ScrollView>
      </SafeAreaView>

    </View >

  )
}

export default AboutUs