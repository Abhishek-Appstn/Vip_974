import { View, Text, Image, SafeAreaView, Platform } from 'react-native';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { Logo_White } from '../../assets/Images';
import Constants from '../../Constants';
import Svg, { G, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const UpperSvg = () => {
  return (
    <Svg
      width={87}
      height={173}
      viewBox="0 0 87 173"
    >

      <G
        id="Mask_Group_663"
        data-name="Mask Group 663"
        transform="translate(-288)"
        clipPath="url(#clip-path)"
      >
        <G
          id="Group_12531"
          data-name="Group 12531"
          transform="translate(262.799 -232.234)"
        >
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
        </G>
      </G>
    </Svg>
  );
};
const LowerSvg = (props) => (
  < Svg
    width={SCREEN_WIDTH * .3}
    height={SCREEN_HEIGHT * .2}
    viewBox={`0 0 170 175`}
  >
    <G
      id="Mask_Group_662"
      data-name="Mask Group 662"
      transform="translate(0 -637)"
      clipPath="url(#clip-path)"
    >
      <G
        id="Group_12530"
        data-name="Group 12530"
        transform="translate(-107.723 636.91)"
      >
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
      </G>
    </G>
  </Svg >


);

const Splash = () => {
  const navigation = useNavigation()
  const CustomView = Platform.OS === 'ios' ? View : SafeAreaView
  return (
    <Layout>
      <CustomView style={{ height: SCREEN_HEIGHT, flex: 1, justifyContent: 'space-between' }}>

        <View style={{ justifyContent: 'flex-end', alignItems: "flex-end" }}>
          <UpperSvg />
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={Logo_White} />
        </View>

        <View style={{ justifyContent: 'flex-end' }}>
          <LowerSvg />
        </View>

      </CustomView>
    </Layout>
  );
};

export default Splash;



