import {View, Text, Image, SafeAreaView} from 'react-native';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import {Logo_White} from '../../assets/Images';
import Constants from '../../Constants';
import Svg, {Path} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation=useNavigation()
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("Login")
  //   }, 3000);
  // }, [])
  
  const UpperSvg = () => {
    return (
      <View style={{position: 'absolute', right: -110, top: -228}}>
        <Svg
          id="Group_12531"
          data-name="Group 12531"
          width={223.778}
          height={405.401}
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
  const LowerSvg = () => {
    return (
      <View style={{position: 'absolute', left: -105, bottom: -190}}>
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
  return (
    <Layout>
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: Constants.SCREEN_DIMENSIONS.SCREEN_HEIGHT,
        }}>
        <Image source={Logo_White} />
        <UpperSvg />
        <LowerSvg />
      </SafeAreaView>
    </Layout>
  );
};

export default Splash;
