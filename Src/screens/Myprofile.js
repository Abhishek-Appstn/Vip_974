import { View, Text, Image, SafeAreaView, FlatList, Pressable, ScrollView, Platform } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { Background_Icon, Background_Icon_ServiceHeader, ChevronRightWhite } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
import { useDispatch, useSelector } from 'react-redux'
import Utils from '../Utils'
import { setUserData } from '../redux/slice/UserSlice'
import IconComponent from '../components/IconComponent'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const HeaderComponent = () => {
  const { firstname, lastname, membershipType, profileImage, mobileNumber } = useSelector(state => state.User)
  const { points } = useSelector(state => state.Membership)

  const Data = useSelector(state => state.User)
  const dispatch = useDispatch()
  return (
    <View
      style={{
        backgroundColor: Colors.Black_Bg,
        height: SCREEN_HEIGHT * .5,
        width: SCREEN_WIDTH,
        overflow: 'hidden',
      }}>
      <Image
        style={{
          position: 'absolute',
          right: 0
        }}
        source={Background_Icon_ServiceHeader}
      />

      <SafeAreaView style={{ marginHorizontal: SCREEN_WIDTH * .05 }}>
        <DrawerHeaderComponent name="My Profile" search={true} type={"login"} />
        <View style={{ marginVertical: SCREEN_HEIGHT * .06, alignItems: 'center', justifyContent: 'center' }}>
          <Pressable style={{ borderColor: Colors.Green1, borderWidth: 1, height: SCREEN_WIDTH * .3, width: SCREEN_WIDTH * .3, borderRadius: SCREEN_HEIGHT, overflow: 'hidden', alignItems: "center", justifyContent: 'center' }} onPress={() => { dispatch(setUserData({ points: 1677 })) }}>
            <Image style={{ height: SCREEN_WIDTH * .28, width: SCREEN_WIDTH * .28, overflow: 'hidden', resizeMode: 'cover', borderRadius: SCREEN_HEIGHT }} source={profileImage} />
          </Pressable>
          <View style={{ marginTop: SCREEN_HEIGHT * .03, alignItems: 'center', height: SCREEN_HEIGHT * .08, justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 20, fontWeight: Platform.OS === 'android' ? '600' : "400" }}>{firstname} {lastname}</Text>
            <Text style={{ fontFamily: 'Gibson', color: Colors.Gold, fontWeight: '600', fontSize: 14 }}>{membershipType} ({points}) Points</Text>
            <Text style={{ fontFamily: 'Gibson', color: Colors.White }}>{mobileNumber}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const Myprofile = () => {
  const navigation = useNavigation()
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomImageTransform = Utils.ImageTransform(language)

  return (
    <ScrollView style={{ height: SCREEN_HEIGHT, backgroundColor: Colors.Black }}>
      <HeaderComponent />
      <FlatList scrollEnabled={false} contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .02 }} data={DataConstants.MyProfileDataItems} renderItem={({ item, index }) => {
        return (
          <Pressable style={[{ width: SCREEN_WIDTH * .94, height: SCREEN_HEIGHT * .1, backgroundColor: Colors.Black_Bg, alignSelf: 'center', flexDirection: 'row', marginVertical: SCREEN_HEIGHT * .01, alignItems: 'center', paddingHorizontal: SCREEN_WIDTH * .05, justifyContent: "space-between" }, CustomFlexDirection]} onPress={() => { navigation.navigate(item.navigate) }}>
            <View style={[{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }, CustomFlexDirection]}>
              <View style={[{ padding: SCREEN_WIDTH * .02, backgroundColor: Colors.Black, alignItems: 'center', justifyContent: 'center', borderRadius: SCREEN_WIDTH * .024, marginRight: SCREEN_WIDTH * .03 }]}>
                <Image source={item.icon} style={[{ height: SCREEN_WIDTH * .07, width: SCREEN_WIDTH * .07, resizeMode: 'contain' }]} />
              </View>
              <Text style={{ fontFamily: 'Gibson', fontSize: 18, color: Colors.White_Text, marginHorizontal: SCREEN_WIDTH * .02 }}>{item.title}</Text>
            </View>
            <Image style={[{ height: SCREEN_HEIGHT * .015 }, CustomImageTransform]} source={ChevronRightWhite} />
          </Pressable>
        )
      }} />
    </ScrollView>
  )
}

export default Myprofile