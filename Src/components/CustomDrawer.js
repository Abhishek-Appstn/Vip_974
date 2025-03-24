import { View, Text, SafeAreaView, Image, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from '../Constants'
import { ChevronRightWhite, Gift, Home, Logout, PrivacyPolicy, Profile, Profile_Damu, ProfileDP, Support } from '../assets/Images'
import Svg, { Path } from 'react-native-svg'
import DataConstants from '../assets/DataConstants'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../redux/slice/languageSlice'
import Utils from '../Utils'
import { setUserData, Signout } from '../redux/slice/UserSlice'
import Snackbar from 'react-native-snackbar'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const LowerSvg = () => {
  return (
    <View style={{ position: 'absolute', left: -SCREEN_WIDTH * .28, bottom: -SCREEN_HEIGHT * .3, zIndex: -5 }}>
      <Svg
        id="Group_12530"
        data-name="Group 12530"
        width={277.526}
        height={365.168}
        viewBox="0 0 277.526 365.168">
        <Path
          id="Path_8641"
          data-name="Path 8641"
          d="M126.471,133.71h30.861L30.861,356.756H0Z"
          transform="translate(92.988 -51.685)"
          fill="#0fc1a1"
        />
        <Path
          id="Path_8642"
          data-name="Path 8642"
          d="M126.471,133.71h30.861L30.861,356.756H0Z"
          transform="translate(120.195 8.412)"
          fill="#8a50ee"
        />
        <Path
          id="Path_8645"
          data-name="Path 8645"
          d="M126.471,133.71h30.861L30.861,356.756H0Z"
          transform="translate(77.558 -133.71)"
          fill="#ff5f00"
        />
        <Path
          id="Path_8643"
          data-name="Path 8643"
          d="M126.471,133.71h30.861L30.861,356.756H0Z"
          transform="translate(89.74 8.412)"
          fill="#1e75d1"
        />
        <Path
          id="Path_8646"
          data-name="Path 8646"
          d="M126.471,133.71h30.861L30.861,356.756H0Z"
          transform="translate(0 -51.685)"
          fill="#e91ccf"
        />
        <Path
          id="Path_8644"
          data-name="Path 8644"
          d="M126.471,133.71h30.861L30.861,356.756H0Z"
          transform="translate(108.825 -133.71)"
          fill="#e50c58"
        />
      </Svg>
    </View>
  );
};
const CustomDrawer = (props) => {
  const memebershipData = useSelector(state => state.Membership)
  console.log("Memebership", memebershipData)
  const language = useSelector(state => state.Language.value)
  const { firstname, lastname, profileImage } = useSelector(state => state.User)
  const { membershipType, points, } = useSelector(state => state.Membership)


  const CustomAlignSelf = Utils.alignSelf(language)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomTextAlign = Utils.textAlign(language)
  const CustomJustifyContent = Utils.justifyContent(language)
  const CustomImageTransform = Utils.ImageTransform(language)
  const [SelectedLanguage, setSelectedLanguage] = useState('')
  const { navigation } = props;
  const Languages = ['Arabic', "English"]
  useEffect(() => {
    setSelectedLanguage(language)
  }, [language])

  const dispatch = useDispatch()
  return (
    <SafeAreaView style={{ backgroundColor: Colors.Black_Bg, flex: 1, overflow: 'hidden' }}>
      <View style={[{ marginVertical: SCREEN_HEIGHT * .1, marginHorizontal: SCREEN_WIDTH * .05 }, CustomAlignSelf]}>
        <View style={[{ height: SCREEN_WIDTH * .2, width: SCREEN_WIDTH * .2, borderRadius: SCREEN_HEIGHT, overflow: 'hidden' }, CustomAlignSelf]}>
          <Image style={{ height: SCREEN_WIDTH * .2, width: SCREEN_WIDTH * .2, }} source={profileImage} resizeMode='cover' />
        </View>
        <View style={[{ marginTop: SCREEN_HEIGHT * .01 }, CustomJustifyContent]}>
          <Text style={[{ fontSize: 18, fontWeight: '600', color: Colors.White, marginVertical: SCREEN_HEIGHT * .007 }, CustomTextAlign]}>{firstname} {lastname}</Text>
          <View style={[{ flexDirection: 'row', alignItems: 'center' }, CustomFlexDirection]}>
            <Image source={Gift} />
            <Text style={{ fontFamily: "Gibson", color: Colors.Green1, fontWeight: "900", marginHorizontal: SCREEN_WIDTH * .01 }}>{membershipType ? membershipType : 'Vip'}</Text>
            <Text style={{ fontFamily: "Gibson", color: Colors.White, }}>({points}) Point</Text>
            <Image source={ChevronRightWhite} style={[{ height: SCREEN_HEIGHT * .013, marginHorizontal: SCREEN_WIDTH * .01 }, CustomImageTransform]} resizeMode='contain' />
          </View>
          <View style={[{ flexDirection: 'row' }, Utils.flexDirection()]}>

            {Languages.map((language, index) => (
              <Pressable key={language} style={{ backgroundColor: language === SelectedLanguage ? Colors.Green1 : Colors.Black, marginVertical: SCREEN_HEIGHT * .01, width: SCREEN_HEIGHT * .1, borderRadius: SCREEN_WIDTH * .02, alignItems: "center", justifyContent: 'center', height: SCREEN_HEIGHT * .04, alignSelf: 'flex-end' }} onPress={() => { setSelectedLanguage(language), dispatch(setLanguage(language)) }}>
                <Text style={{ color: language === SelectedLanguage ? Colors.Black : Colors.White, fontSize: 14, fontWeight: '600' }}>{language}</Text>
              </Pressable>
            ))
            }
          </View>

          <FlatList contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .025 }} data={DataConstants.CustomDrawerData} keyExtractor={item => item.id} scrollEnabled={false} renderItem={({ item, index }) => {

            return (

              <Pressable style={[{ flexDirection: 'row', alignItems: 'center', padding: SCREEN_WIDTH * .03, marginTop: item.title === 'Logout' ? SCREEN_HEIGHT * .07 : 0, }, CustomAlignSelf, CustomFlexDirection]} onPress={() =>
                item.title === 'Logout'
                  ? (dispatch(Signout()), Snackbar.show({ text: "Logged Out Successfully" }))
                  : navigation.navigate('HomeStack', { screen: item.navigate })
              }>
                <Image source={item.icon} style={{ height: SCREEN_HEIGHT * .04, resizeMode: 'contain', marginRight: SCREEN_WIDTH * .04, }} />
                <Text style={{ color: Colors.White, fontWeight: '500', fontSize: 16, marginRight: SCREEN_WIDTH * .04, }}>{item.title}</Text>

              </Pressable>
            )
          }} />



        </View>
      </View>
      <LowerSvg />

    </SafeAreaView>
  )
}

export default CustomDrawer