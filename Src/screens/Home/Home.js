import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Constants from '../../Constants';
import {
  Background_Icon,
  Build_Icon,
  Drawer,
  Logo_White,
  Rent_Icon,
  Search,
  Service_Icon,
} from '../../assets/Images';
import Svg, {G, Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import DrawerHeaderComponent from '../../components/DrawerHeaderComponent/DrawerHeaderComponent';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
// const {Colors}=Constants.SCREEN_DIMENSIONS
  const UpperSvg = () => {
    return (
      <View style={{position: 'absolute', left: 20, top: -210}}>
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
  const navigation = useNavigation();
  const HandleNavigation = (name, params) => {
    navigation.navigate(name, params);
  };
  const LowerSvg = ({style}) => {
    return (
      <View style={{position: 'absolute', bottom: 0,...style}}>
        <Svg width={40.186} height={88.879} viewBox="0 0 40.186 88.879">
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

  const ServiceData = [
    {
      header: 'Rent',
      Description: 'the best water and desert bikes',
      icon: Rent_Icon,
      params: 'rent',
    },
    {
      header: 'Services',
      Description: 'towing and cleaning service for containers',
      icon: Service_Icon,
      params: 'services',
    },
    {
      header: 'Build',
      Description: 'Easily create your own Cabana',
      icon: Build_Icon,
      params: 'build',
    },
  ];
  const HeaderComponent = () => {
    return (
      <View
        style={{
          backgroundColor: Constants.Colors.Black_Bg,
          height: Constants.SCREEN_DIMENSIONS.SCREEN_HEIGHT / 2.25,
          width: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH,
          overflow: 'hidden',
        }}>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            right: -110,
            opacity: 0.45,
            height: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.7,
            resizeMode: 'contain',
          }}
          source={Background_Icon}
        />

        <SafeAreaView style={{marginHorizontal: 25}}>
          <DrawerHeaderComponent name="Vip-974" />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.7,
            }}>
            <Image source={Logo_White} />
            <Text
              style={{
                width: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.4,
                color: Constants.Colors.White_Text,
                fontSize: 24,
                fontFamily: 'Gibson-SemiBold',
                textAlign: 'center',
                lineHeight: 30,
                marginTop: 50,
              }}>
              Welcome to Vip-974
            </Text>
          </View>
        </SafeAreaView>
        <LowerSvg />
      </View>
    );
  };

  const FlatlistSvg = () => {
    return (
      <View style={{position: 'absolute', bottom: 0, right: 0}}>
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
const DrawerProgress=useDrawerProgress()
const animatedStyle = useAnimatedStyle(() => {
  const scale = interpolate(DrawerProgress.value, [0, 1], [1, 0.7]);
  const borderRadius = interpolate(DrawerProgress.value, [0, 1], [0, Constants.SCREEN_DIMENSIONS.SCREEN_HEIGHT*.03]);

  return {
    transform: [{ scale }],
    borderRadius, 
  };
});



  return (
    <View style={{backgroundColor:Constants.Colors.Black_Bg}}>
<UpperSvg/>
    <Animated.View style={[animatedStyle,{overflow:'hidden'}]}>
      <HeaderComponent />
      <View style={{backgroundColor: Constants.Colors.Black}}>
        <FlatList
          scrollEnabled={false}
          data={ServiceData}
          contentContainerStyle={{
            height: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 1.21,
            backgroundColor: Constants.Colors.Black,
            paddingHorizontal: 25,
            paddingTop: 19,
          }}
          renderItem={({item, index}) => {
            return (
              <Pressable
                style={{
                  height: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH / 3.3,
                  alignItems: 'center',
                  flexDirection: 'row',
                  backgroundColor: Constants.Colors.Black_Bg,
                  borderRadius: 7,
                  marginVertical: 10,
                  paddingHorizontal: 25,
                }}
                onPress={() => HandleNavigation('ChooseServices', item.params)}>
                <Pressable onPress={() => {}}>
                  <Image
                    source={item.icon}
                    style={{height: 75, width: 75}}
                    resizeMode="contain"
                  />
                </Pressable>
                <View
                  style={{
                    marginLeft: 20,
                    width: Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH * 0.5,
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: 'Gibson',
                      color: Constants.Colors.White_Text,
                      textTransform: 'uppercase',
                      fontWeight: '600',
                    }}>
                    {item.header}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Gibson-Regular',
                      color: Constants.Colors.Gray_Text,
                      textTransform: 'capitalize',
                    }}>
                    {item.Description}
                  </Text>
                </View>
                <FlatlistSvg />
              </Pressable>
            );
          }}
        />
      </View>
    </Animated.View>
    </View>

  );
};

export default Home;
