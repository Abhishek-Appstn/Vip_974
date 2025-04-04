import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import ItemLayout from '../components/ItemLayout'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import Svg, { G, Path } from 'react-native-svg'
import StarComponent from '../components/StarComponent'
import DataConstants from '../assets/DataConstants'
import Snackbar from 'react-native-snackbar'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
import SelectionComponent from '../components/SelectionComponent'

const HandleNavigation = ({ navigation, item, params }) => {
  item ?
    navigation.navigate('BookingSummary', { ...item, type: 'services', ...params }) : Snackbar.show({
      text: "Select a service to continue", backgroundColor: 'red'
    })
}
const FlatlistSvg = () => {
  return (
    <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
      <Svg
        width={26.578}
        height={58.781}
        viewBox="0 0 26.578 58.781"
      >
        <G id="Group_12679" data-name="Group 12679" transform="translate(0 0)">
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
  )
}
const ServicesPage = (props) => {
  const navigation = useNavigation()
  const params = props.route.params
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomAlignItems = Utils.alignItems(language)
  const CustomTextAlign = Utils.textAlign(language)


  const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
  const { Colors } = Constants
  const [SelectedService, setSelectedService] = useState(null)
  const [SelectedItem, setSelectedItem] = useState(null)

  return (
    <ItemLayout buttonTitle="Choose Service" onPress={() => HandleNavigation({ navigation: navigation, item: SelectedItem, params: params })}>
      <View style={{ width: SCREEN_WIDTH * .9, alignSelf: 'center' }}>
        <DrawerHeaderComponent type='filter' name={params?.type} />
        <View style={{ flex: 1 }}>

        </View>
        <FlatList contentContainerStyle={{ marginTop: SCREEN_WIDTH * .04, paddingBottom: SCREEN_HEIGHT * .3 }} showsVerticalScrollIndicator={false} data={DataConstants.ServicesList} renderItem={({ item, index }) => {
          return (
            <Pressable style={[{ flex: 1, flexDirection: 'row', backgroundColor: Colors.Black_Bg, borderRadius: 7, marginVertical: SCREEN_HEIGHT * .01, paddingHorizontal: SCREEN_WIDTH * .03, paddingVertical: SCREEN_WIDTH * .05, borderWidth: 1, borderColor: SelectedService === item.name ? Colors.Green1 : null }, CustomFlexDirection]} onPress={() => { setSelectedService(item.name), setSelectedItem(item) }}>
              <View style={{ borderColor: Colors.Black, borderWidth: 2, padding: SCREEN_WIDTH * .03, borderRadius: SCREEN_WIDTH, backgroundColor: 'rgba(0,30,20,0.5)', height: SCREEN_WIDTH * .15, width: SCREEN_WIDTH * .15, alignItems: 'center', justifyContent: 'center' }} ><Image source={item.image} style={{ height: SCREEN_WIDTH * .08, width: SCREEN_WIDTH * .08 }} resizeMode='contain' /></View>
              <View style={{ marginLeft: 20, width: SCREEN_WIDTH * .6 }}>
                <View style={[{ borderBottomColor: Colors.Gray_Border, borderBottomWidth: .5, paddingBottom: SCREEN_WIDTH * .035 }, CustomAlignItems]}>
                  <Text style={[{ fontSize: 18, fontFamily: "Gibson", color: Colors.White, textTransform: 'uppercase', fontWeight: '400', marginBottom: SCREEN_WIDTH * .01, }, CustomTextAlign]}>{item.name}</Text>
                  <StarComponent maxStars={5} rating={item.rating} />
                  <Text style={[{ fontSize: 16, fontFamily: "Gibson-Regular", color: Colors.White_Text, textTransform: 'capitalize', marginTop: SCREEN_WIDTH * .03 }, CustomTextAlign]}>{item.desc}</Text>
                </View>
                <Text style={[{ color: Colors.Green1, fontSize: 28, }, CustomTextAlign]}>{item.total}<Text style={{ fontSize: 10 }}> QAR</Text></Text>
              </View>
              <FlatlistSvg />
              <SelectionComponent ActiveItem={SelectedService} Item={item.name} />

            </Pressable>

          )
        }} />
        <View>


        </View>

      </View>
    </ItemLayout >
  )
}

export default ServicesPage