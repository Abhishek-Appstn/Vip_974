import { View, Text, SafeAreaView, Image, Pressable, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from '../Constants'
import { ChevronRightWhite, DrawerLowerImage, Gift, Home, Logout, PrivacyPolicy, Profile, Profile_Damu, ProfileDP, Support } from '../assets/Images'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import DataConstants from '../assets/DataConstants'
import { useDispatch, useSelector } from 'react-redux'
import { languageSignout, setLanguage } from '../redux/slice/languageSlice'
import Utils from '../Utils'
import { setUserData, Signout } from '../redux/slice/UserSlice'
import Snackbar from 'react-native-snackbar'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const LowerSvg = () => {
  return (
    <View style={{ position: 'absolute', bottom: 0 }}>
      <Image source={DrawerLowerImage} />
    </View>
  );
};
const CustomDrawer = (props) => {
  const language = useSelector(state => state.Language.value)
  const { firstname, lastname, profileImage } = useSelector(state => state.User)
  const { membershipType, points, } = useSelector(state => state.Membership)
  const CustomAlignSelf = Utils.alignSelf(language)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomTextAlign = Utils.textAlign(language)
  const CustomJustifyContent = Utils.justifyContent(language)
  const CustomImageTransform = Utils.ImageTransform(language)
  const [SelectedLanguage, setSelectedLanguage] = useState(language)
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

          <View style={[{ flexDirection: 'row' }, Utils.alignSelf(language)]}>
            {Languages.map((language, index) => (
              <Pressable key={language} style={{ backgroundColor: language === SelectedLanguage ? Colors.Green1 : Colors.Black, marginVertical: SCREEN_HEIGHT * .01, paddingHorizontal: SCREEN_WIDTH * .036, borderRadius: SCREEN_WIDTH * .02, borderTopLeftRadius: index !== 0 ? 0 : null, borderBottomLeftRadius: index !== 0 ? 0 : null, borderTopRightRadius: index == 0 ? 0 : null, borderBottomRightRadius: index == 0 ? 0 : null, alignItems: "center", justifyContent: 'center', paddingVertical: SCREEN_HEIGHT * .01, alignSelf: 'flex-end' }} onPress={() => { setSelectedLanguage(language), dispatch(setLanguage(language)) }}>
                <Text style={{ color: language === SelectedLanguage ? Colors.Black : Colors.White, fontSize: 14, fontWeight: '600' }}>{language}</Text>
              </Pressable>
            ))
            }
          </View>

          <FlatList contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .025 }} data={DataConstants.CustomDrawerData} keyExtractor={item => item.id} scrollEnabled={false} renderItem={({ item, index }) => {

            return (

              <Pressable style={[{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: SCREEN_WIDTH * .03, paddingVertical: SCREEN_HEIGHT * .012, marginTop: item.title === 'Logout' ? SCREEN_HEIGHT * .07 : 0, }, CustomAlignSelf, CustomFlexDirection]} onPress={() =>
                item.title === 'Logout'
                  ? (dispatch(Signout()), dispatch(languageSignout()), Snackbar.show({ text: "Logged Out Successfully" }))
                  : navigation.navigate('HomeStack', { screen: item.navigate })
              }>
                <Image source={item.icon} style={{ height: SCREEN_HEIGHT * .04, resizeMode: 'contain', marginRight: SCREEN_WIDTH * .04, }} />
                <Text style={{ color: Colors.White, fontWeight: Platform.OS === 'android' ? '400' : '500', fontSize: 16, marginRight: SCREEN_WIDTH * .04, }}>{item.title}</Text>

              </Pressable>
            )
          }} />



        </View>
      </View>
      <LowerSvg />

    </SafeAreaView >
  )
}

export default CustomDrawer