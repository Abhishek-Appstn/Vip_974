import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native'
import React from 'react'
import ItemLayout from '../components/ItemLayout'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { CompassNorthEast, LocationPin, LocationPin_green, PickupDot, Towing } from '../assets/Images'
import TimeSlot from '../components/TimeSlot'
import IconComponent from '../components/IconComponent'
import { useNavigation } from '@react-navigation/native'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const RenderItem = ({ icon, Address, header }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: SCREEN_HEIGHT * .02, marginHorizontal: SCREEN_WIDTH * .02 }}>
            <IconComponent image={icon} style={{ height: SCREEN_WIDTH * .09, width: SCREEN_WIDTH * .09, borderWidth: 0 }} />
            <View style={{ marginHorizontal: SCREEN_WIDTH * .02 }}>
                <Text style={{ color: Colors.White, fontSize: 18, fontFamily: 'Gibson', textTransform: 'uppercase' }}>{header}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH * .7, marginTop: SCREEN_HEIGHT * .02 }}>
                    <Text style={{ lineHeight: 18, color: Colors.Green1, maxWidth: SCREEN_WIDTH * .3, fontSize: 14, fontFamily: 'Gibson' }}>{Address} Al Arab Mall, Qatar,Uae</Text>
                    <IconComponent image={CompassNorthEast} style={{ height: SCREEN_HEIGHT * .03, width: SCREEN_HEIGHT * .03 }} imageStyle={{ height: SCREEN_HEIGHT * .02 }} />
                </View>
            </View>
        </View>
    )
}

const TowingSummary = (props) => {
    const params = props?.route?.params
    const navigation = useNavigation()
    return (
        <ItemLayout colors={Colors.Black_Bg} buttonTitle={'View Services'} onPress={() => navigation.navigate('ServicesPage', params)}>
            <View style={{ flex: .65, paddingHorizontal: SCREEN_WIDTH * .05 }}>
                <DrawerHeaderComponent name={params?.subtype} />
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={Towing} style={{ height: SCREEN_WIDTH * .08, resizeMode: 'contain' }} />
                    <View style={{ marginHorizontal: SCREEN_WIDTH * .02 }}>
                        <Text style={{ color: Colors.White_Text, fontSize: 18, fontFamily: 'Gibson', textTransform: 'uppercase', width: SCREEN_WIDTH * .5 }}>Towing Service</Text>
                        <Text style={{ color: Colors.Orange1, fontSize: 12, width: SCREEN_WIDTH * .5 }}>{params?.length} x {params.width} M²</Text>

                    </View>
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end', paddingBottom: SCREEN_HEIGHT * .02 }}>
                    <TimeSlot selectedDate={params?.selectedDate} selectedTime={params?.selectedTime} iconContainer={{ borderColor: Colors.Green1, borderWidth: 0.25, borderRadius: 5 }} />
                </View>
            </View>
            <View style={{ flex: 1.5, paddingTop: SCREEN_HEIGHT * .01, paddingHorizontal: SCREEN_WIDTH * .05, backgroundColor: Colors.Black, }}>
                <Text style={{ color: Colors.White, textTransform: 'uppercase', fontSize: 16 }}>ENter Location </Text>
                <View style={{ backgroundColor: Colors.Black_Bg, width: SCREEN_WIDTH * .9, height: SCREEN_HEIGHT * .25, marginTop: SCREEN_HEIGHT * .03, }}>
                    <RenderItem header={"Pickup"} icon={PickupDot} Address={params?.location} />
                    <RenderItem header={"DropOff"} icon={LocationPin_green} Address={params?.location} />

                </View>
            </View>

        </ItemLayout>
    )
}

export default TowingSummary