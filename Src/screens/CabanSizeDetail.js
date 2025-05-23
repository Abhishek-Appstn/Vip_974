import { View, Text, Image, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Background_Icon, CabanSize } from '../assets/Images'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import CustomTextInput from '../components/CustomTextInput/CustomTextInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import Snackbar from 'react-native-snackbar'

const HandleNavigation = ({ navigation, params, SizeDimensions, Size }) => {
  SizeDimensions !== '' || Size !== '' ?
    params?.subtype !== 'Towing' ?
      navigation.navigate('ServicesPage', { ...params, Size }) :
      navigation.navigate('TowingSummary', { ...params, ...SizeDimensions }) : Snackbar.show({
        text: 'Enter size to continue', backgroundColor: 'red'
      })

}
const CabanSizeDetail = (props) => {
  const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
  const [Size, setSize] = useState('')
  const { Colors } = Constants
  const params = props.route.params
  const navigation = useNavigation()
  const HandleTextChange = (text, key) => {
    key ? setSizeDimensions({ ...SizeDimensions, [key]: text })
      :
      setSize(text)
  }
  const [SizeDimensions, setSizeDimensions] = useState({
    length: '',
    width: ''
  })

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <KeyboardAvoidingView behavior='padding' style={{ backgroundColor: Constants.Colors.Black_Bg, height: SCREEN_HEIGHT, width: SCREEN_WIDTH }}>
        {/* <Image style={{ position: 'absolute', top: 0, right: -110, opacity: .45, height: SCREEN_WIDTH * .7, resizeMode: 'contain' }} source={Background_Icon} /> */}
        <SafeAreaView style={{ width: SCREEN_WIDTH * .9, alignSelf: "center", flex: 1 }}>
          <DrawerHeaderComponent type='login' search={true} name="Size" />
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image source={CabanSize} style={{ height: SCREEN_WIDTH * .25, width: SCREEN_WIDTH * .25 }} />
            <Text style={{ fontSize: 24, fontFamily: 'Gibson', textTransform: 'uppercase', fontWeight: 'semibold', marginTop: 30, color: Colors.White }}>Caban Size</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Gibson', fontWeight: 'semibold', marginTop: 30, color: Colors.White, width: SCREEN_WIDTH * .7, textAlign: 'center', textTransform: 'capitalize' }}>Please enter the cubicle area to be washed in square meters</Text>
            <View style={{ marginVertical: SCREEN_WIDTH * .07 }}>
              {params?.subtype !== 'Towing'  ?
                <CustomTextInput value={Size} onChangeText={text => HandleTextChange(text)} name={"Caban Size"} type='size' /> :
                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', width: SCREEN_WIDTH * .9 }}>
                  <CustomTextInput width={SCREEN_WIDTH * .4} value={SizeDimensions.length} onChangeText={text => HandleTextChange(text, 'length')} name={"Length"} />
                  <CustomTextInput width={SCREEN_WIDTH * .4} value={SizeDimensions.width} onChangeText={text => HandleTextChange(text, 'width')} name={"Width"} />

                </View>
              }
            </View>
            <View style={{}}>
              <CustomButton title="NExt" width={SCREEN_WIDTH * .8} onPress={() => HandleNavigation({ navigation: navigation, params: params, SizeDimensions: SizeDimensions, Size: Size })} />

            </View>
          </View>

        </SafeAreaView>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback >

  )
}

export default CabanSizeDetail