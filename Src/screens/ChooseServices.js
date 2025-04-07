import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  FlatList,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../Constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent';
import { Background_Home_Icon, Background_Icon, Background_Icon_ServiceHeader, Background_Icon_Services, Tick, } from '../assets/Images';
import Svg, { G, Path } from 'react-native-svg';
import CustomButton from '../components/CustomButton/CustomButton';
import DataConstants from '../assets/DataConstants';
import Snackbar from 'react-native-snackbar';
import SelectionComponent from '../components/SelectionComponent';
import { useSelector } from 'react-redux';
import Utils from '../Utils';
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS;
const { Colors } = Constants;

const HeaderComponent = ({ params }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.Black_Bg,
        height: SCREEN_HEIGHT * .35,
        width: SCREEN_WIDTH,
        overflow: 'hidden',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,

      }}>
      <Image
        style={{
          position: 'absolute',
          right: 0,
          resizeMode: 'contain',
        }}
        source={Background_Icon_ServiceHeader}
      />

      <SafeAreaView style={{ marginHorizontal: SCREEN_WIDTH * .05 }}>
        <DrawerHeaderComponent name={params} type="login" />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: SCREEN_WIDTH * 0.6,
          }}>
          <Text
            style={{
              color: Colors.White,
              fontSize: 24,
              fontFamily: 'Gibson',
              textAlign: 'center',
              lineHeight: 30,
              textTransform: 'uppercase',
              fontWeight: Platform.OS == 'android' ? '600' : '400',
            }}>
            {DataConstants.ServiceSelectionHeaders({ type: params })}
          </Text>

          <Text
            style={{
              width: SCREEN_WIDTH * 0.7,
              color: Colors.White,
              fontSize: 16,
              fontFamily: 'Gibson-Regular',
              textAlign: 'center',
              marginTop: SCREEN_HEIGHT * .015,
              textTransform: 'capitalize',
            }}>
            {DataConstants.ServiceSelectionData({ type: params })}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const LowerSvg = () => {
  return (
    <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
      <Svg width={24.797} height={51.719} viewBox="0 0 24.797 51.719">
        <G
          id="Group_12648"
          data-name="Group 12648"
          transform="translate(0 0)">
          <Path
            id="Intersection_3"
            data-name="Intersection 3"
            d="M0,11.978,6.792,0h12a5.986,5.986,0,0,1,2.11.381l-6.576,11.6Z"
            transform="translate(24.797 51.719) rotate(180)"
            fill="#0fc1a1"
          />
          <Path
            id="Intersection_2"
            data-name="Intersection 2"
            d="M0,26.62,15.094,0a6,6,0,0,1,4.027,5.668v12.5l-4.79,8.447Z"
            transform="translate(19.121 51.387) rotate(180)"
            fill="#ff5f00"
          />
          <Path
            id="Intersection_6"
            data-name="Intersection 6"
            d="M0,33.216,18.834,0V25.275l-4.5,7.941Z"
            transform="translate(18.835 33.216) rotate(180)"
            fill="#e50c58"
          />
        </G>
      </Svg>
    </View>
  );
};
const SelectionBox = (image, name, index, Active, setActive, setSelectedItem, language) => {
  const CustomAlignSelf = Utils.alignSelf(language)
  return (
    <Pressable
      style={{
        backgroundColor: Colors.Black_Bg,
        height: SCREEN_WIDTH * 0.55,
        width: SCREEN_WIDTH * 0.42,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Active === index ? Colors.Green1 : null
      }}
      onPress={() => {
        setActive(index), setSelectedItem(name);
      }}>
      <LowerSvg />
      <SelectionComponent ActiveItem={Active} Item={index} style={[{ marginTop: SCREEN_HEIGHT * .016, marginHorizontal: SCREEN_WIDTH * .03, zindex: 10 }, CustomAlignSelf]} />
      <Image
        source={Background_Icon_Services}
        style={{
          position: 'absolute',
          right: 0,
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          height: SCREEN_WIDTH * 0.45,
          paddingTop: 10,
        }}>
        <Image
          source={image}
          style={{
            marginBottom: 10,
            alignSelf: 'center',
            width: SCREEN_WIDTH * 0.14,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 23,
            fontFamily: 'Gibson',
            textTransform: 'uppercase',
            fontWeight: 'semibold',
            marginTop: 30,
            color: Colors.White,
          }}>
          {name}
        </Text>
      </View>
    </Pressable>
  );
};
const ChooseServices = props => {
  const [Active, setActive] = useState(0);
  const [SelectedItem, setSelectedItem] = useState();
  const navigation = useNavigation();
  const params = props.route.params;
  const language = useSelector(state => state.Language.value)
  const Data = params == 'rent'
    ? DataConstants.RentData
    : params == 'services'
      ? DataConstants.ServicesData
      : params == 'build'
        ? DataConstants.BuildData
        : null


  const HandleNavigation = () => {
    Active !== null
      ? params == 'rent'
        ? (navigation.navigate('ScheduleServices', { type: params, subtype: SelectedItem }), setActive(null))
        : params == 'services' ? (navigation.navigate('ChooseLocation', { type: params, subtype: SelectedItem }), setActive(null)) : SelectedItem === 'Custom' ? (navigation.navigate('CustomBuild', { type: params, subtype: SelectedItem }), setActive(null)) : (navigation.navigate('SelectCabanas', { type: params, subtype: SelectedItem }), setActive(null))
      : Snackbar.show({
        text: "Select a service to Continue", backgroundColor: 'red'
      });
  };
  useEffect(() => {
    setSelectedItem(Data[0].name)
  }, [])
  return (
    <View style={{ backgroundColor: Colors.Black, height: SCREEN_HEIGHT }}>
      <HeaderComponent params={params} />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: SCREEN_WIDTH * .03,
            marginTop: SCREEN_WIDTH * 0.2,
          }}
          data={Data}
          scrollEnabled={false}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginHorizontal: SCREEN_WIDTH * .02 }}>
                {SelectionBox(item.image, item.name, index, Active, setActive, setSelectedItem, language)}
              </View>
            );
          }}
        />
        <View style={{ marginHorizontal: SCREEN_WIDTH * .05, justifyContent: 'flex-end', flex: 1, marginBottom: Platform.OS === 'android' ? SCREEN_HEIGHT * .05 : SCREEN_HEIGHT * .02 }}>
          <CustomButton title="Next" onPress={HandleNavigation} />
        </View>
      </SafeAreaView>
    </View>
  );

};

export default ChooseServices;
