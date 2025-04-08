import { View, Text, SafeAreaView, FlatList, ScrollView, Keyboard, TouchableWithoutFeedback, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import Layout from '../components/Layout/Layout'
import Constants from '../Constants'
import CustomTextInput from '../components/CustomTextInput/CustomTextInput'
import CustomButton from '../components/CustomButton/CustomButton'
import DataConstants from '../assets/DataConstants'
import { useNavigation } from '@react-navigation/native'
import Helpers from '../Helpers'
import Snackbar from 'react-native-snackbar'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const CreateSupportTicket = ({ FormData, setUnfilled, navigation }) => {
    const Filled = Object.values(FormData).every(value => value !== '')
    Filled ?
        Helpers({ type: 'email', data: FormData.Email }) ? Helpers({ type: 'mobilenumber', data: FormData.PhoneNumber }) ? (
            Snackbar.show({ text: `Ticket Created Successfully,\nOur team will get back to you, Soon`, backgroundColor: 'green' }), navigation.navigate("Home")) : Snackbar.show({ text: "Phone Number is invalid", backgroundColor: "red" }) : Snackbar.show({ text: "Email is invalid", backgroundColor: "red" }) : Snackbar.show({ text: "Pls fill all Fields", backgroundColor: 'red' }), FormData ? setUnfilled(Object.keys(FormData).filter((key) => FormData[key] === '')) : null;
}


const handleTextChange = ({ text, key, FormData, setFormData }) => {
    setFormData({
        ...FormData,
        [key]: text
    })
}
const RenderSupportFields = ({ item, index, data, setData, Unfilled }) => {

    return (
        <View behavior='padding' style={{}}>
            <CustomTextInput type={item.key == 'PhoneNumber' ? 'PhoneNumber' : null} error={Unfilled ? Unfilled.includes(item.key) ? true : false : null} multiline={item.title === 'Message' ? true : false} value={data[item.key]} name={item.title} onChangeText={text => handleTextChange({ text: text, key: item.key, FormData: data, setFormData: setData })} />
        </View>
    )
}

const SupportFields = ({ Data, setData, Unfilled, setUnfilled }) => {
    const navigation = useNavigation()

    return (
        <ScrollView scrollEventThrottle={16} bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: SCREEN_HEIGHT * .04, flexGrow: 1, }} >
            <Text style={{ fontSize: 32, fontWeight: '400', color: Colors.White, textTransform: 'uppercase', marginVertical: SCREEN_HEIGHT * .04, }}>Get In TOuch !</Text>
            <FlatList scrollEnabled={false} ListFooterComponentStyle={{ marginTop: SCREEN_HEIGHT * .04 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} data={DataConstants.SupportData} renderItem={item => RenderSupportFields({ item: item.item, index: item.index, data: Data, setData: setData, Unfilled: Unfilled })} />
        </ScrollView>
    )
}
const Support = () => {
    const navigation = useNavigation()
    const [Unfilled, setUnfilled] = useState()
    const [FormData, setFormData] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        PurposeOfContact: '',
        Message: ''
    })
    return (
        <Layout>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                <View style={{ flex: 1 }}>
                    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={{ flex: 1, margin: SCREEN_WIDTH * 0.05 }}>
                                <DrawerHeaderComponent name={"Support"} type={"login"} search={true} />
                                <SupportFields
                                    Data={FormData}
                                    setData={setFormData}
                                    Unfilled={Unfilled}
                                    setUnfilled={setUnfilled}
                                />
                            </View>
                        </SafeAreaView>
                    </KeyboardAvoidingView>

                    {/* Ensure the button stays fixed here */}
                    <View style={{
                        width: SCREEN_WIDTH * 0.9,
                        alignSelf: 'center',
                        marginBottom: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.02 : SCREEN_HEIGHT * 0.05
                    }}>
                        <CustomButton
                            title={"Send"}
                            onPress={() => CreateSupportTicket({ FormData: FormData, setUnfilled: setUnfilled, navigation: navigation })}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Layout>
    )
}

export default Support