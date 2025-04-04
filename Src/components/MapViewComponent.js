import { View, Text, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import LocationComponent from './LocationComponent'
import { CompassNorthEast, LocationPin_green, Maps, PickupDot } from '../assets/Images'
import IconComponent from './IconComponent'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const DisplayComponent = ({ title, icon, address, style, borderStyle }) => {
    const language = useSelector(state => state.Language.value)
    const CustomTextAlign = Utils.textAlign(language)
    const CustomFlexDirection = Utils.flexDirection(language)
    return (
        <View style={[{ flexDirection: 'row', marginTop: SCREEN_HEIGHT * .03 }, style, CustomFlexDirection]}>
            <IconComponent image={icon} style={{ borderWidth: 0 }} />
            <View style={{ marginHorizontal: SCREEN_WIDTH * .05, }}>
                <Text style={[{ color: Colors.White, textTransform: "uppercase", fontSize: 18 }, CustomTextAlign]}>{title}</Text>
                <View style={[{ borderBottomColor: Colors.Gray_Border, borderBottomWidth: .17, paddingBottom: SCREEN_HEIGHT * .01, width: SCREEN_WIDTH * .7, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: SCREEN_HEIGHT * .01 }, borderStyle, CustomFlexDirection]}>
                    <Text style={{ color: Colors.Green1, fontSize: 14, fontWeight: 'light', maxWidth: SCREEN_WIDTH * .4 }}>{address}</Text>
                    <IconComponent image={CompassNorthEast} />
                </View>
            </View>
        </View>
    )
}
const PickupComponent = ({ data }) => {
    return (
        <View style={{ backgroundColor: Colors.Black_Bg, padding: SCREEN_WIDTH * .02, marginVertical: SCREEN_HEIGHT * .02, width: SCREEN_WIDTH * .9, alignSelf: 'center', paddingBottom: SCREEN_HEIGHT * .01 }}>
            <DisplayComponent title={"Pickup"} icon={PickupDot} address={data?.location} style={{ marginTop: SCREEN_HEIGHT * .01 }} />
            <DisplayComponent title={"Dropoff"} icon={LocationPin_green} address={data?.location} borderStyle={{ borderBottomWidth: 0 }} />
        </View>
    )
}

const MapViewComponent = ({ data, header, style }) => {
    const language = useSelector(state => state.Language.value)
    const CustomTextAlign = Utils.textAlign(language)
    return (
        <View style={[{ backgroundColor: Colors.Black, paddingHorizontal: SCREEN_WIDTH * .05, paddingVertical: SCREEN_HEIGHT * .02, }, style]}>
            <Text style={[{ color: Colors.White, textTransform: 'uppercase', fontFamily: 'Gibson', fontSize: 18, }, CustomTextAlign]}>{header}</Text>
            {data?.subtype == 'washing' || 'Washing' ? <View style={{ backgroundColor: Colors.Black_Bg, alignItems: 'center', marginVertical: SCREEN_HEIGHT * .02, width: SCREEN_WIDTH * .86, alignSelf: 'center', paddingBottom: SCREEN_HEIGHT * .01 }}>
                <Image source={Maps} style={{ alignSelf: 'center', height: SCREEN_HEIGHT * .25, width: SCREEN_WIDTH * .8 }} resizeMode='contain' />
                <LocationComponent width={SCREEN_WIDTH * .8} address={data?.location} style={{ paddingTop: SCREEN_HEIGHT * .007 }} />
            </View> : data?.subtype == 'towing' || 'Towing' ? <PickupComponent data={data} /> : null}
        </View>

    )
}

export default MapViewComponent