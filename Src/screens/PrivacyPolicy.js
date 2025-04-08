import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import DataConstants from '../assets/DataConstants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const PolicyDataRenderItem = ({ item, index, CustomTextAlign }) => {

    return (
        <View style={[{ marginVertical: SCREEN_HEIGHT * .02 },]}>
            <Text style={[{ color: Colors.White, fontSize: 16, fontWeight: '700', textTransform: 'uppercase' }, CustomTextAlign]}>{item.title}</Text>
            <Text style={{ color: Colors.White, fontSize: 16, fontWeight: '300', textAlign: 'justify', lineHeight: 20 }}>{item.text}</Text>
        </View>
    )
}

const PolicyDetails = () => {
    const language = useSelector(state => state.Language.value)
    const CustomTextAlign = Utils.textAlign(language)
    return (
        <FlatList bounces={false} scrollEventThrottle={17} contentContainerStyle={{ flexGrow: 1, marginTop: SCREEN_HEIGHT * .02, paddingBottom: SCREEN_HEIGHT * .1 }} data={DataConstants.PrivacyPolicyData} renderItem={item => PolicyDataRenderItem({ item: item.item, index: item.index, CustomTextAlign: CustomTextAlign })} />
    )
}

const PrivacyPolicy = () => {

    return (
        <View style={{ backgroundColor: Colors.Black_Bg, flex: 1 }}>
            <SafeAreaView>
                <View style={{ margin: SCREEN_WIDTH * .05 }}>
                    <DrawerHeaderComponent name='Privacy Policy' />
                    <PolicyDetails />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default PrivacyPolicy