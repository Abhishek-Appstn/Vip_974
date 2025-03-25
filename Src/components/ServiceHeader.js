import { View, Text, Image } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import StarComponent from './StarComponent'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants


const ImageView = ({ data }) => {
    return (
        data.type == 'rent' ?
            <Image source={data.image} style={{ width: SCREEN_WIDTH * .135, height: SCREEN_HEIGHT * .065, borderRadius: SCREEN_WIDTH * .02 }} resizeMode='cover' /> : <Image source={data.image} style={{ width: SCREEN_WIDTH * .14, height: SCREEN_HEIGHT * .07, borderRadius: SCREEN_HEIGHT, borderColor: Colors.Gray_Border, borderWidth: 2 }} resizeMode='cover' />
    )
}
const HeaderText = ({ data,language }) => {
    const CustomTextAlign=Utils.textAlign(language)
    return (
        <View style={{ marginHorizontal: SCREEN_WIDTH * .02 }}>
            <Text style={[{ color: Colors.White, fontSize: 18, fontFamily: 'Gibson', textTransform: 'uppercase', marginVertical: SCREEN_WIDTH * 0.01, },CustomTextAlign]} >{data.name}</Text>
            {data.subtype !== 'towing' ?
                <Text style={[{ color: Colors.Orange1, fontSize: 12, fontFamily: 'Gibson', },CustomTextAlign]}>{data.type === 'rent' ? data.brand : `${data.size} CABANA`}</Text> : <StarComponent rating={5} maxStars={5} />}
        </View>
    )
}
const PriceHeader = ({ data }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            {data.type == 'rent' ? <>
                <Text style={{ color: Colors.Green1, fontSize: 23, fontFamily: 'Gibson', textTransform: 'uppercase', fontWeight: '600' }} >{data.price}</Text>
                <Text style={{ color: Colors.Green1, fontSize: 12, fontFamily: 'Gibson', fontWeight: 'regular' }} >QAR/Hour</Text>
            </>
                : data.subtype !== 'towing' ? <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ color: Colors.Green1, fontSize: 23, fontFamily: 'Gibson', textTransform: 'uppercase', fontWeight: '600' }} >{data.total}</Text>
                    <Text style={{ color: Colors.Green1, fontSize: 12, fontFamily: 'Gibson', fontWeight: 'regular' }}> QAR</Text>
                </View> :
                    <Text style={{ color: Colors.Orange1, fontSize: 12, fontFamily: 'Gibson', }}>{data.size} M² </Text>
            }
        </View>
    )
}
const ServiceHeader = ({ data, style }) => {
    const language=useSelector(state=>state.Language.value)
    const CustomFlexDirection=Utils.flexDirection(language)
    return (
        <View style={[{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', width: SCREEN_WIDTH * .9 }, style,CustomFlexDirection]}>
            <View style={[{ flexDirection: 'row', alignItems: 'center', },CustomFlexDirection]}>
                <ImageView data={data} />
                <HeaderText data={data} language={language}/>
            </View>
            <PriceHeader data={data} />
        </View>
    )
}

export default ServiceHeader