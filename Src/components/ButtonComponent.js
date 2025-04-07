import { View, Text, Image, Pressable, Platform } from 'react-native'
import React from 'react'
import { Barcode } from '../assets/Images'
import Constants from '../Constants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const ButtonComponent = ({ title, style, Onpress }) => {
    const language = useSelector(state => state.Language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    return (
        <Pressable style={[{ backgroundColor: Colors.Green1, height: SCREEN_HEIGHT * .1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute', bottom: Platform.OS === 'android' ? SCREEN_HEIGHT * .05 : 0, width: SCREEN_WIDTH, zIndex: 10 }, style, CustomFlexDirection]} onPress={Onpress}>

        </Pressable>
    )
}

export default ButtonComponent

