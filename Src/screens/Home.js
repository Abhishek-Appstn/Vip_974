import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../Constants';
import Svg, { G, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { Easing, interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import DataConstants from '../assets/DataConstants';
import HomeHeaderComponent from '../components/HomeHeaderComponent';
import { useDispatch, useSelector } from 'react-redux';
import Utils from '../Utils';
import { setMembership } from '../redux/slice/MembershipSlice';
import { setUserData } from '../redux/slice/UserSlice';
import { Profile_Damu } from '../assets/Images';

const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const HomeRenderItem = ({ item, index,CustomFlexDirection,CustomTextAlign }) => {
  const navigation = useNavigation();
  const HandleNavigation = (name, params) => {
    navigation.navigate(name, params);
  };
  return (
    <Pressable
      style={[{
        height: SCREEN_WIDTH / 3.3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.Black_Bg,
        borderRadius: SCREEN_WIDTH * .02,
        marginVertical: SCREEN_HEIGHT * .015,
        paddingHorizontal: SCREEN_WIDTH * .05,
      },CustomFlexDirection]}
      onPress={() => HandleNavigation('ChooseServices', item.params)}>
      <Image
          source={item.icon}
          style={{ height: SCREEN_HEIGHT * .08, width: SCREEN_WIDTH * .2, }}
          resizeMode="contain"
      />
      <View
        style={{
         marginHorizontal:SCREEN_WIDTH * .04,
          width: SCREEN_WIDTH * 0.5,
        }}>
        <Text
          style={[{
            fontSize: 24,
            fontFamily: 'Gibson',
            color: Colors.White_Text,
            textTransform: 'uppercase',
            fontWeight: '600',
          },CustomTextAlign]}>
          {item.header}
        </Text>
        <Text
          style={[{
            fontSize: 16,
            fontFamily: 'Gibson-Regular',
            color: Colors.Gray_Text,
            textTransform: 'capitalize',
            
          },CustomTextAlign]}>
          {item.Description}
        </Text>
      </View>
      
      <FlatlistSvg />
    </Pressable>
  );
}
const FlatlistSvg = () => {
  return (
    <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
      <Svg width={26.578} height={58.781} viewBox="0 0 26.578 58.781">
        <G
          id="Group_12679"
          data-name="Group 12679"
          transform="translate(0 0)">
          <Path
            id="Intersection_3"
            data-name="Intersection 3"
            d="M7.28,13.613,0,0H15.36l7.116,13.307a5.994,5.994,0,0,1-1.9.307Z"
            transform="translate(0 45.167)"
            fill="#0fc1a1"
          />
          <Path
            id="Intersection_2"
            data-name="Intersection 2"
            d="M0,0H15.359l5.134,9.6V24.632a6,6,0,0,1-4.252,5.741Z"
            transform="translate(6.085 28.149)"
            fill="#ff5f00"
          />
          <Path
            id="Intersection_6"
            data-name="Intersection 6"
            d="M0,0H15.359l4.827,9.027V37.751Z"
            transform="translate(6.391 0)"
            fill="#e50c58"
          />
        </G>
      </Svg>
    </View>
  );
};

const UpperSvg = () => {
  return (
    <View style={{ position: 'absolute', left: 20, top: -210,}}>
      <Svg
        id="Group_12531"
        data-name="Group 12531"
        width={223.778}
        height={305.401}
        viewBox="0 0 223.778 405.401">
        <Path
          id="Path_8641"
          data-name="Path 8641"
          d="M129.2,133.71h31.526L31.526,361.567H0Z"
          transform="translate(46.875 -49.916)"
          fill="#0fc1a1"
        />
        <Path
          id="Path_8642"
          data-name="Path 8642"
          d="M129.2,133.71h31.526L31.526,361.567H0Z"
          transform="translate(56.83 43.833)"
          fill="#e50c58"
        />
        <Path
          id="Path_8645"
          data-name="Path 8645"
          d="M129.2,133.71h31.526L31.526,361.567H0Z"
          transform="translate(31.112 -133.71)"
          fill="#1ec0de"
        />
        <Path
          id="Path_8643"
          data-name="Path 8643"
          d="M129.2,133.71h31.526L31.526,361.567H0Z"
          transform="translate(43.556 11.477)"
          fill="#ff5f00"
        />
        <Path
          id="Path_8646"
          data-name="Path 8646"
          d="M129.2,133.71h31.526L31.526,361.567H0Z"
          transform="translate(0 -133.71)"
          fill="#e91ccf"
        />
        <Path
          id="Path_8644"
          data-name="Path 8644"
          d="M129.2,133.71h31.526L31.526,361.567H0Z"
          transform="translate(63.053 -133.71)"
          fill="#8a50ee"
        />
      </Svg>
    </View>
  );
};

const Home = () => {
  const DrawerProgress = useDrawerProgress()
  const dispatch=useDispatch()
  const language=useSelector(state=>state.Language.value)
  const CustomFlexDirection=Utils.flexDirection(language)
  const CustomTextAlign=Utils.textAlign(language)
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(DrawerProgress.value, [0, 1], [1, 0.73]);
    const borderRadius = interpolate(DrawerProgress.value, [0, 1], [0, SCREEN_HEIGHT * 0.03]);
  
    return {
      transform: [{ scale }],
      borderRadius,
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
    };
  });
  
  
useEffect(() => {
  dispatch(setUserData({firstname:'Reese',lastname:'Carpenter',profileImage:Profile_Damu,    membershipType: 'Gold',mobileNumber: '+9742217718',
    email: 'Carpenter.Steve@yoohoo.com',
    qid: '100CBA20241001',}))
 dispatch(setMembership({points:1060,membershipType:'Gold',membershipName:'Vip-Gold',pointexpirydate:'30 Dec 2025'}))

}, [])

  return (
    <View style={{ backgroundColor: Colors.Black_Bg, flex: 1, overflow: 'hidden', zIndex: 1, paddingTop:Platform.OS==='android'?SCREEN_HEIGHT*.02:0 }}>
      <UpperSvg />
      <Animated.View style={[animatedStyle, { flex: 1, elevation: 10, shadowColor: Colors.Black, backgroundColor: Colors.Black_Bg, overflow: 'hidden', zIndex: 1,}]}>
        <HomeHeaderComponent header={DataConstants.HomeHeader} headerText={"Vip-974"} />
        <View style={{ backgroundColor: Colors.Black }}>
          <FlatList
            keyExtractor={item => item.header}
            scrollEnabled={false}
            data={DataConstants.HomeData}
            contentContainerStyle={{
              height: SCREEN_WIDTH * 1.21,
              backgroundColor: Colors.Black,
              paddingHorizontal: SCREEN_WIDTH * .05,
              paddingTop: SCREEN_HEIGHT * .014,
            }}
            renderItem={item => <HomeRenderItem item={item.item} index={item.index} CustomFlexDirection={CustomFlexDirection} CustomTextAlign={CustomTextAlign} />}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default Home;
