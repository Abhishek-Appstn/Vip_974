import { View, Text, Pressable, Image, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { Barcode, ChevronLeft, ChevronRight } from '../assets/Images'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

export const LowerButtonComponent = ({ onPress, buttonTitle, height, type }) => {
  return (
    <Pressable style={{ height: height ? height : SCREEN_HEIGHT * .1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', zIndex: 10 }} onPress={onPress}>
      {type !== 'barcode' ?
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <Image key={index} source={ChevronRight} style={{ opacity: index !== 0 ? index * .5 : .3, marginRight: SCREEN_WIDTH * .003 }} />
          ))}
          <Text style={{ fontFamily: 'Gibson', fontWeight: 'semibold', fontSize: 18, marginHorizontal: SCREEN_WIDTH * .045, textTransform: 'uppercase' }}>{buttonTitle}</Text>
          {Array.from({ length: 3 }).map((_, index) => (
            <Image key={index} source={ChevronLeft} style={{ opacity: index !== 0 ? (3 - index) * 0.3 : 1, marginRight: SCREEN_WIDTH * 0.003 }} />
          ))}
        </> :
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

          <Image
            source={Barcode}
            style={{
              height: SCREEN_HEIGHT * 0.04,
              width: SCREEN_WIDTH * 0.08,
              backgroundColor: Colors.Black,
              padding: SCREEN_WIDTH * 0.011,
              resizeMode: 'contain',
              borderRadius: 4,
              borderColor: Colors.Green1,
              borderWidth: 0.5,
            }}
          />
          <Text style={{ fontFamily: 'Gibson', fontWeight: 'semibold', fontSize: 18, marginHorizontal: SCREEN_WIDTH * .045, textTransform: 'uppercase' }}>{buttonTitle}</Text>
        </View>

      }
    </Pressable>
  )
}
const ItemLayout = ({ buttonTitle, children, size, colors, onPress, screenname, padding, type }) => {

  return (
    <View style={{ backgroundColor: Colors.Green1, flex: 1 }}>
      <View style={{ backgroundColor: colors ? colors : Colors.Black, height: SCREEN_HEIGHT * .9, width: SCREEN_WIDTH, borderRadius: 15, overflow: "hidden", borderTopRightRadius: 0, borderTopLeftRadius: 0 }}>
        <SafeAreaView style={{ width: SCREEN_WIDTH, alignSelf: 'center' }}>
          {children}
        </SafeAreaView>
      </View>
      <LowerButtonComponent onPress={onPress} buttonTitle={buttonTitle} type={type} />
    </View>

  )
}

export default ItemLayout