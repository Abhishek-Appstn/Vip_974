import { View, Text, Image } from 'react-native'
import React from 'react'
import { calendar } from '../assets/Images'
import Constants from '../Constants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const TimeSlot = ({ params, header, style, selectedDate, selectedTime }) => {
  const language = useSelector(state => state.Language.value)
  const CustomFlexDirection = Utils.flexDirection(language)
  const CustomAlignSelf = Utils.alignSelf(language)
  const CustomTextAlign = Utils.textAlign(language)


  return (
    <View style={[{ marginTop: SCREEN_HEIGHT * .02 }, style]}>
      {params?.type !== 'services' ? header ? <Text
        style={[{
          fontFamily: 'Gibson',
          color: Colors.White,
          fontSize: 18,
          fontWeight: '400', marginBottom: SCREEN_WIDTH * .03, textTransform: 'uppercase'
        }, CustomAlignSelf, CustomTextAlign]}>
        {header}
      </Text> : null : null}
      <View style={[{ flexDirection: 'row', }, CustomFlexDirection]}>
        <View style={{ padding: 7, backgroundColor: Colors.Black }}>
          <Image source={calendar} style={{ height: SCREEN_WIDTH * .05, width: SCREEN_WIDTH * .05, resizeMode: 'contain' }} />
        </View>
        <View style={{ marginHorizontal: SCREEN_WIDTH * .016, justifyContent: "center" }}>
          <Text style={[{ fontFamily: 'Gibson', fontSize: 12, color: Colors.Green1, marginBottom: SCREEN_HEIGHT * .006 }, CustomTextAlign]}>{selectedDate}</Text>
          <Text style={[{ fontFamily: 'Gibson-Regular', fontSize: 12, color: Colors.White },CustomTextAlign]}> {params?.type == 'rent' && selectedTime ? selectedTime.join(' | ') : selectedTime}</Text>
        </View>
      </View>
    </View>
  )
}

export default TimeSlot