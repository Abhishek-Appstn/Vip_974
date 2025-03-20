import { View, Text, Image, ImageBackground, SafeAreaView, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { Barcode, Call, ChevronLeft, ChevronRight, CompassNorthEast, CrossMark, email, LocationPin } from '../assets/Images'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
import LocationComponent from '../components/LocationComponent'
import ActionSheet from 'react-native-actions-sheet'
import QRCode from 'react-native-qrcode-svg'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants
const ActionsheetComponent = ({ ActionsheetRef, params }) => {
    return (
        <ActionSheet closable={true} containerStyle={{ backgroundColor: Colors.Black_Bg, height: SCREEN_HEIGHT * .9 }} ref={ActionsheetRef}>
            <View style={{ top: 10, marginHorizontal: SCREEN_WIDTH * .07, }}>

                <View
                    style={{
                        width: 40,
                        height: 5,
                        backgroundColor: '#ccc',
                        borderRadius: 2.5,
                        alignSelf: 'center',
                        marginVertical: 10,
                    }}
                />
                <Pressable style={{ position: 'absolute', right: 5, top: 3 }} onPress={() => ActionsheetRef.current?.hide()}>
                    <Image source={CrossMark} />
                </Pressable>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: SCREEN_WIDTH / 2.5, }}>
                <Text style={{ fontFamily: 'Gibson', fontSize: 23, color: Colors.White, marginVertical: SCREEN_WIDTH * .06, textTransform: 'uppercase', alignSelf: 'center' }}>{params.type == 'services' ? "Cleaning" : params.type == 'rent' ? 'Beach' : 'Build'}</Text>
                <Text style={{ fontFamily: 'Gibson', fontSize: 23, color: Colors.White, marginBottom: SCREEN_WIDTH * .06, alignSelf: 'center' }}>{params.type == 'services' ? `${params.size}M2 CABANA` : params.name}</Text>

                <View style={{ padding: SCREEN_WIDTH * .035, borderColor: Colors.White, borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                    <QRCode
                        value={JSON.stringify(params.name, params.brand, params.location, params.date)}
                        backgroundColor={Colors.Black_Bg} size={200}
                        color={Colors.White}
                    />
                </View>
                <Text style={{ fontFamily: 'Gibson', fontSize: 16, color: Colors.White_Text, marginVertical: SCREEN_WIDTH * .06, alignSelf: 'center', width: SCREEN_WIDTH * .55, textAlign: 'center' }}>Please take a screenshot to Scan this QR Code </Text>

            </View>
        </ActionSheet>
    )
}

const FeatureRenderItem = ({ item, index }) => {
    return (
        <View style={{ backgroundColor: Colors.Black, width: SCREEN_WIDTH * .29, height: SCREEN_HEIGHT * .05, marginHorizontal: SCREEN_WIDTH * .02, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
            <Image source={item.image} resizeMode='contain' style={{ height: SCREEN_WIDTH * .04, width: SCREEN_WIDTH * .04 }} />
            <View style={{ marginHorizontal: SCREEN_WIDTH * .02 }}>

                <Text style={{ color: Colors.Green1 }}>({item.qty}){item.featureName}</Text>
            </View>


        </View>
    )
}
const HeaderComponent = ({ params }) => {
    return (
        <ImageBackground source={params.image} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .9 }}>
            <SafeAreaView>
                <View style={{ width: SCREEN_WIDTH * .88, alignSelf: 'center' }}>
                    <DrawerHeaderComponent name={''} type='expand' search={true} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}


const LowerComponent = ({ params, ActionsheetRef, props, CustomFlexDirection, CustomAlignItems, CustomTextAlign, CustomAlignSelf }) => {
    const navigation = useNavigation()
    console.log("PARAmss@2", params.type);

    return (
        <View>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }} style={{ top: -SCREEN_WIDTH * .04, backgroundColor: Colors.Black_Bg, height: SCREEN_HEIGHT * .51, width: SCREEN_WIDTH, borderRadius: 15, zIndex: 9 }}>
                <View style={{ width: SCREEN_WIDTH, alignSelf: 'center', overflow: 'hidden' }}>

                    <View style={[{ width: SCREEN_WIDTH, alignSelf: 'center', height: SCREEN_WIDTH * .3, backgroundColor: Colors.Black, borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: SCREEN_WIDTH * .055, justifyContent: 'space-between', paddingTop: SCREEN_WIDTH * .05 }, CustomFlexDirection]} >
                        <View style={CustomAlignItems}>
                            <Text style={{ color: Colors.White, fontSize: 18, fontFamily: 'Gibson', textTransform: 'uppercase', marginVertical: SCREEN_WIDTH * .011 }}>{params.name}</Text>
                            <Text style={{ color: Colors.Orange1, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginVertical: SCREEN_WIDTH * .013 }}>{params.builder}</Text>
                            <Text style={{ maxWidth: SCREEN_WIDTH * .6, color: Colors.White, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginVertical: SCREEN_WIDTH * .011 }}>Starting Price</Text>
                        </View>
                        <View>
                            <Text style={{ color: Colors.White, fontSize: 18, fontFamily: 'Gibson', fontWeight: '400', textAlign: 'center' }}>{params.size} m²</Text>
                            <Text style={{ color: Colors.Green1, fontSize: 8, fontFamily: 'Gibson', fontWeight: '400', marginTop: SCREEN_HEIGHT * .01 }}><Text style={{ fontSize: 20 }}>{params.price}</Text> QAR</Text>

                        </View>
                    </View>

                    <View style={[{ margin: SCREEN_WIDTH * .05, marginTop: SCREEN_WIDTH * .05 }]}>
                        <View style={CustomAlignItems}>
                            <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', textTransform: 'uppercase', }}>Features</Text>
                            <FlatList contentContainerStyle={CustomFlexDirection} showsHorizontalScrollIndicator={false} horizontal data={params.features} renderItem={item => <FeatureRenderItem index={item.index} item={item.item} />} />

                        </View>
                        <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', marginTop: SCREEN_HEIGHT * .02 }}>LOCATION</Text>
                        <LocationComponent address={params.address} />
                    </View>

                    <View style={{ marginHorizontal: SCREEN_WIDTH * .05 }}>
                        <View>
                            <Text style={[{ fontFamily: 'Gibson', color: Colors.Orange1, fontSize: 16, fontWeight: '400', textTransform: 'uppercase' }, CustomTextAlign]}>{params.builder} Company</Text>

                            <View>
                                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, CustomFlexDirection]} >
                                    <Text style={{ lineHeight: 19, fontWeight: '400', color: Colors.White_Text, fontSize: 14, fontFamily: 'Gibson', textTransform: 'capitalize', maxWidth: SCREEN_WIDTH * .4, marginVertical: SCREEN_HEIGHT * .01 }}>{params.address}</Text>
                                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, CustomFlexDirection]} >

                                        <Image source={Call} style={{ height: SCREEN_WIDTH * .08, width: SCREEN_WIDTH * .08, backgroundColor: Colors.Black, padding: SCREEN_WIDTH * .015, resizeMode: 'contain', borderRadius: 4, borderColor: Colors.Green1, borderWidth: 0.5, marginHorizontal: SCREEN_WIDTH * .01 }} />
                                        <Image source={email} style={{ height: SCREEN_WIDTH * .08, width: SCREEN_WIDTH * .08, backgroundColor: Colors.Black, padding: SCREEN_WIDTH * .015, resizeMode: 'contain', borderRadius: 4, borderColor: Colors.Green1, borderWidth: 0.5 }} />
                                    </View>
                                </View>
                            </View>
                            <Text style={[{ fontFamily: 'Gibson', color: Colors.Green1, fontSize: 14, lineHeight: 18 }, CustomTextAlign]}>@{params.builder}</Text>
                        </View>
                        <View>


                        </View>

                    </View>
                </View>
            </ScrollView>
            <Pressable style={{ backgroundColor: Colors.Green1, height: SCREEN_WIDTH * .26, top: -SCREEN_WIDTH * .07, zIndex: -1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} onPress={() => { params.type === 'booked' ? ActionsheetRef.current.show() : navigation.navigate('RequestConfirmation') }}>
                {params.type == "booked" ? (
                    <>
                    <Image
                                     source={Barcode}
                                     style={{
                                       height: SCREEN_WIDTH * 0.08,
                                       width: SCREEN_WIDTH * 0.08,
                                       backgroundColor: Colors.Black,
                                       padding: SCREEN_WIDTH * 0.011,
                                       resizeMode: 'contain',
                                       borderRadius: 4,
                                       borderColor: Colors.Green1,
                                       borderWidth: 0.5,
                                     }}
                                   />

                        <Text style={{ fontFamily: 'Gibson', fontWeight: 'semibold', fontSize: 18, marginHorizontal: SCREEN_WIDTH * .045, textTransform: 'uppercase' }}>SCan Barcode</Text>

                    </>
                ) : (<><Image source={ChevronRight} style={{ opacity: .3, marginRight: SCREEN_WIDTH * .003 }} />
                    <Image source={ChevronRight} style={{ opacity: .5, marginRight: SCREEN_WIDTH * .003 }} />
                    <Image source={ChevronRight} style={{ opacity: 1, marginRight: SCREEN_WIDTH * .003 }} />
                    <Text style={{ fontFamily: 'Gibson', fontWeight: 'semibold', fontSize: 18, marginHorizontal: SCREEN_WIDTH * .045, textTransform: 'uppercase' }}>Pay now</Text>
                    <Image source={ChevronLeft} style={{ opacity: 1, marginRight: SCREEN_WIDTH * .003 }} />
                    <Image source={ChevronLeft} style={{ opacity: .5, marginRight: SCREEN_WIDTH * .003 }} />
                    <Image source={ChevronLeft} style={{ opacity: .3, marginRight: SCREEN_WIDTH * .003 }} />
                </>)}
            </Pressable>
        </View>
    )
}
const CabanaView = (props) => {
    const language = useSelector(state => state.language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    const CustomTextAlign = Utils.textAlign(language)
    const CustomAlignItems = Utils.alignItems(language)
    const CustomAlignSelf = Utils.alignSelf(language)

    const params = props.route.params
    const ActionsheetRef = useRef()





    return (
        <View>
            <HeaderComponent params={params} />
            <LowerComponent ActionsheetRef={ActionsheetRef} CustomTextAlign={CustomTextAlign} CustomFlexDirection={CustomFlexDirection} CustomAlignItems={CustomAlignItems} CustomAlignSelf={CustomAlignSelf} params={params} props={props} />
            <ActionsheetComponent params={params} ActionsheetRef={ActionsheetRef} />
        </View>
    )
}

export default CabanaView