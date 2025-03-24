import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import UpperRightSvg from './UpperRightSvg'
import MembershipSvg from './MembershipSvg'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Background_Icon, BackgroundIconMembership, ChevronRight, ChevronRightWhite, king } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const SubText = "Conduct More Leasing, Services And Construction To Get More..."

const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const MembershipLayout = ({ children }) => {
  const Width = SCREEN_WIDTH * .89
  const Height = SCREEN_HEIGHT * .22
  return (
    <Svg style={{ zIndex: -1, position: 'absolute', bottom: 0, left: 0 }}
      width={Width}
      height={Height}
      viewBox={`0 0 ${Width} ${Height}`}
    >
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#0e1114" />
          <Stop offset={1} />

        </LinearGradient>
      </Defs>
      <Path
        id="Path_9272"
        stroke={Colors.Black_Bg}
        strokeWidth={Width * 0.015}
        data-name="Path 9272"
        d={`M${Width},0a6,6,0,0,1,6,${Height * 0.03}V${Height - 6}a6,6,0,0,1-6,5.993H6a6,6,0,0,1-6-5.993v-${Height * 0.1}s.1-${Height * 0.12},0-${Height * 0.12}c.986-${Height * 0.09},5.054-${Height * 0.21},33.944-${Height * 0.26},48.553-${Height * 0.08},86.648,36.038,160.27,12.111S${Width},0,${Width},0Z`}
        fill="url(#linear-gradient)"
      />
    </Svg>
  )
}

const Membershipcard = () => {
  const navigation = useNavigation()
    const {points,pointexpirydate,membershipName}=useSelector(state=>state.Membership)
  const language=useSelector(state=>state.Language.value)
  const CustomFlexDirection=Utils.flexDirection(language)
  const CustomImageTransform=Utils.ImageTransform(language)
  const CustomAlignSelf=Utils.alignSelf(language)
  const CustomTextAlign=Utils.textAlign(language)


  return (
    <View style={{ backgroundColor: "#0e1114", elevation: 100, height: SCREEN_HEIGHT * .23, overflow: "hidden", width: SCREEN_WIDTH * .9, alignSelf: 'center', borderRadius: SCREEN_WIDTH * .02 }}>
      <MembershipSvg />
      <Image source={BackgroundIconMembership} style={{ height: SCREEN_HEIGHT * .15, alignSelf: 'flex-end', right: 10, position: 'absolute', zIndex: -2 }} resizeMode='contain' />
      <View style={{ margin: SCREEN_WIDTH * .05 }}>
        <Text style={{ color: Colors.Green1, fontWeight: '500', zIndex: 10, fontFamily: 'Gibson', fontSize: 14 }}><Text style={{ fontSize: 24 }}>{points}</Text>Points</Text>
        <Text style={{ color: Colors.White_Text, fontWeight: '400', fontFamily: 'Gibson', fontSize: 12 }}>Expiring on {pointexpirydate} </Text>
      </View>
      <MembershipLayout />
      <View style={[{ position: 'absolute', bottom: SCREEN_HEIGHT*.015, marginHorizontal: SCREEN_WIDTH*.06, flexDirection: 'row', alignItems: 'center'},CustomFlexDirection,CustomAlignSelf]}>
        <View style={{ backgroundColor: Colors.Black_Bg, borderRadius: SCREEN_WIDTH * .02, alignItems: 'center', justifyContent: 'center', width: SCREEN_WIDTH * .1, height: SCREEN_HEIGHT * .065, padding: SCREEN_HEIGHT * .03 }}>
          <Image source={king} style={{ height: SCREEN_HEIGHT * .08, resizeMode: 'contain' }} />
        </View>
        <View style={{ marginHorizontal: SCREEN_WIDTH * .02 }}>
          <Pressable style={[{flexDirection:'row',alignItems:'center'},CustomFlexDirection]} onPress={() => navigation.navigate('MembershipDesc')} >
            <Text style={[{ color: Colors.Gold, fontWeight: '500', zIndex: 10, fontFamily: 'Gibson', fontSize: 18, textTransform: 'capitalize' },CustomTextAlign]}>{membershipName}</Text>
          <Image source={ChevronRightWhite} style={[{marginHorizontal:SCREEN_WIDTH*.01},CustomImageTransform]}/>
          </Pressable>
          <Text style={[{ color: Colors.White_Text, fontWeight: '400', fontFamily: 'Gibson', maxWidth: SCREEN_WIDTH * .45, marginVertical: SCREEN_HEIGHT * .005, fontSize: 12, textTransform: 'capitalize' },CustomTextAlign]}>{SubText}</Text>
        </View>

      </View>
    </View>
  )
}

export default Membershipcard