import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tick } from '../assets/Images'
import Constants from '../Constants'
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const{Colors}=Constants
const SelectionComponent = ({ActiveItem,Item,style}) => {
    return (
        <View style={[{ height: SCREEN_WIDTH * .05, width: SCREEN_WIDTH * .05, borderRadius: SCREEN_HEIGHT, borderColor: Colors.Green1, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: Item === ActiveItem ? Colors.Green1 : null },style]}>
            {Item === ActiveItem ? <Image style={{ height: SCREEN_WIDTH * .03, width: SCREEN_WIDTH * .03 }} resizeMode='contain' source={Tick} /> : null}
        </View>
    )
}

export default SelectionComponent