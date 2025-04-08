import { View, Text, FlatList, Pressable, ScrollView, Image, TextInput, Alert, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ItemLayout from '../components/ItemLayout'
import Constants from '../Constants'
import { Search, } from '../assets/Images'
import { useNavigation, useRoute } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
import Snackbar from 'react-native-snackbar'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
import SelectionComponent from '../components/SelectionComponent'
const { places } = DataConstants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const HandleNavigation = ({ Active, navigation, params }) => {
    Active !== null ?
        navigation.navigate('ScheduleServices', { location: Active, ...params }) : Snackbar.show({ text: "Please select an item to continue", backgroundColor: 'red' })
}
const RenderFlatlistItem = ({ item, index, Active, setActive }) => {
    const language = useSelector(state => state.Language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    return (
        <Pressable style={[{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginVertical: 10, alignItems: 'center' }, CustomFlexDirection]} onPress={() => { Active == item.name ? setActive(null) : setActive(item.name) }}>
            <Text style={{ fontSize: 16, fontFamily: 'Gibson', color: Colors.White, fontWeight: '400' }}>{item.name}</Text>
            <SelectionComponent ActiveItem={Active} Item={item.name} />
        </Pressable>
    )
}
const ChooseLocation = (props) => {
    const navigation = useNavigation()
    const language = useSelector(state => state.Language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    const CustomTextAlign = Utils.flexDirection(language)

    const params = props.route.params
    const [Active, setActive] = useState(null)
    return (
        <ItemLayout buttonTitle="Done" colors={Colors.Black_Bg} onPress={() => HandleNavigation({ navigation: navigation, Active: Active, params: params })} >
            <SafeAreaView>
                <View style={{ width: SCREEN_WIDTH * .9, alignSelf: 'center', marginTop: StatusBar.currentHeight }}>
                    <View style={[{ height: SCREEN_WIDTH * .15, backgroundColor: Colors.Black, alignItems: 'center', padding: SCREEN_WIDTH * .05, flexDirection: 'row', borderRadius: SCREEN_WIDTH * .02 }, CustomFlexDirection]}>
                        <Image source={Search} />
                        <TextInput placeholder='Search' placeholderTextColor={Colors.White} style={[{ height: SCREEN_WIDTH * .12, width: SCREEN_WIDTH * .78, color: Colors.White, marginHorizontal: SCREEN_WIDTH * .02, fontFamily: 'Gibson', fontWeight: '400' }, CustomTextAlign]} />
                    </View>
                    <FlatList bounces={false} showsVerticalScrollIndicator={false} ListHeaderComponent={<Text style={[{ color: Colors.White, fontSize: 18, textTransform: 'uppercase', marginTop: SCREEN_WIDTH * .05 }, CustomTextAlign]}>Choose Location</Text>} contentContainerStyle={{ paddingTop: SCREEN_WIDTH * .02, paddingBottom: SCREEN_HEIGHT * .25 }} data={places} renderItem={item => <RenderFlatlistItem item={item.item} index={item.index} Active={Active} setActive={setActive} />} />


                </View>
            </SafeAreaView>

        </ItemLayout>
    )
}

export default ChooseLocation