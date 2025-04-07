import { View, Text, Image, ImageBackground, SafeAreaView, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { Barcode, Call, ChevronLeft, ChevronRight, CompassNorthEast, CrossMark, email, Expand, LocationPin } from '../assets/Images'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
import LocationComponent from '../components/LocationComponent'
import ActionSheet from 'react-native-actions-sheet'
import QRCode from 'react-native-qrcode-svg'
import { LowerButtonComponent } from '../components/ItemLayout'
import { Imagecarousal, ImageSelector } from './ProductPage'
import IconComponent from '../components/IconComponent'
import ImageModal from '../components/ImageModal'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const ActionsheetHeader = ({ ActionsheetRef }) => {
    return (
        <View style={{ top: 10, marginHorizontal: SCREEN_WIDTH * .07, }}>
            <View
                style={{
                    width: SCREEN_WIDTH * .4,
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
        </View>)
}
const ActionsheetData = ({ params }) => {
    return (
        <>
            <Text style={{ fontFamily: 'Gibson', fontSize: 23, color: Colors.White, marginVertical: SCREEN_WIDTH * .06, textTransform: 'uppercase', alignSelf: 'center' }}>{params?.type == 'services' ? "Cleaning" : params?.type == 'rent' ? 'Beach' : 'Build'}</Text>
            <Text style={{ fontFamily: 'Gibson', fontSize: 23, color: Colors.White, marginBottom: SCREEN_WIDTH * .06, alignSelf: 'center' }}>{params?.type == 'services' ? `${params?.size}M2 CABANA` : params?.name}</Text>
        </>

    )
}
const ActionsheetComponent = ({ ActionsheetRef, params }) => {
    return (
        <ActionSheet closable={true} containerStyle={{ backgroundColor: Colors.Black_Bg, height: SCREEN_HEIGHT * .9 }} ref={ActionsheetRef}>
            <ActionsheetHeader ActionsheetRef={ActionsheetRef} />
            <View style={{ alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * .8 }}>
                <ActionsheetData params={params} />

                <View style={{ padding: SCREEN_WIDTH * .035, borderColor: Colors.White, borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>

                    <QRCode
                        value={JSON.stringify(params.name, params.brand, params.location, params.date)}
                        backgroundColor={Colors.Black_Bg} size={SCREEN_WIDTH * .55}
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
        <View style={{ backgroundColor: Colors.Black, flex: 1, marginHorizontal: SCREEN_WIDTH * .02, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
            <Image source={item.image} resizeMode='contain' style={{ height: SCREEN_WIDTH * .04, width: SCREEN_WIDTH * .04 }} />
            <View style={{ marginHorizontal: SCREEN_WIDTH * .02 }}>

                <Text style={{ color: Colors.Green1 }}>({item.qty}){item.featureName}</Text>
            </View>
        </View>
    )
}
const HeaderComponent = ({ params, ActiveImage, setActiveImage, setVisible, Visible }) => {
    return (
        <View style={{}}>
            <Imagecarousal images={params.images} ActiveImage={ActiveImage} setActiveImage={setActiveImage} />
            <View style={{ position: 'absolute', width: SCREEN_WIDTH * .9, alignSelf: 'center', alignItems: 'center' }}>
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <DrawerHeaderComponent name={'rent'} setVisible={setVisible} rightimage={Expand} onRightPress={() => setVisible(true)} />
                    <ImageModal visible={Visible} image={params.images} setVisible={setVisible} index={ActiveImage} />
                </SafeAreaView>

            </View>
        </View>
    )
}


const LowerComponent = ({ params, ActionsheetRef, props, CustomFlexDirection, ActiveImage, CustomAlignItems, CustomTextAlign, CustomAlignSelf }) => {
    const navigation = useNavigation()
    return (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1, }} style={{ marginTop: -SCREEN_HEIGHT * .02, backgroundColor: Colors.Black_Bg, width: SCREEN_WIDTH, borderRadius: 15, overflow: 'hidden' }}>
            <View style={{ width: SCREEN_WIDTH, alignSelf: 'center', overflow: 'hidden' }}>
                <View style={{ backgroundColor: Colors.Black_M }}>
                    <View style={{ paddingTop: SCREEN_HEIGHT * .02 }}>
                        <ImageSelector length={params.images.length} ActiveImage={ActiveImage} />
                    </View>
                    <View style={[{ width: SCREEN_WIDTH, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: SCREEN_WIDTH * .9, justifyContent: 'space-between', paddingTop: SCREEN_HEIGHT * .01, borderColor: Colors.Gray_Text, paddingBottom: SCREEN_HEIGHT * .006, borderBottomWidth: SCREEN_WIDTH * 0.0007 }, CustomFlexDirection]} >

                        <View style={CustomAlignItems}>

                            <Text style={{ color: Colors.White, fontSize: 18, fontFamily: 'Gibson', textTransform: 'uppercase', marginVertical: SCREEN_HEIGHT * .004 }}>{params.name}</Text>
                            <Text style={{ color: Colors.Orange1, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginVertical: SCREEN_WIDTH * .01 }}>{params.builder}</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ color: Colors.White, fontSize: 18, fontFamily: 'Gibson', fontWeight: '400', textAlign: 'center' }}>{params.size} m²</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH * .9, alignItems: 'center', alignSelf: 'center', marginVertical: SCREEN_HEIGHT * .006 }}>
                        <Text style={{ maxWidth: SCREEN_WIDTH * .6, color: Colors.White, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginVertical: SCREEN_HEIGHT * .006 }}>Starting Price</Text>
                        <Text style={{ color: Colors.Green1, fontSize: 8, fontFamily: 'Gibson', fontWeight: '400', }}><Text style={{ fontSize: 20 }}>{params.price}</Text> QAR</Text>
                    </View>
                </View>



                <View style={[{ marginHorizontal: SCREEN_WIDTH * .05, marginTop: SCREEN_HEIGHT * .01, }]}>
                    <View style={[, CustomAlignItems,]}>
                        <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', textTransform: 'uppercase', marginVertical: SCREEN_HEIGHT * .01 }}>Features</Text>
                        <FlatList contentContainerStyle={CustomFlexDirection} showsHorizontalScrollIndicator={false} horizontal data={params.features} renderItem={item => <FeatureRenderItem index={item.index} item={item.item} />} />
                    </View>

                    <Text style={{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', marginBottom: SCREEN_HEIGHT * .01, marginTop: SCREEN_HEIGHT * .02 }}>LOCATION</Text>
                    <LocationComponent address={params.address} width={SCREEN_WIDTH * .87} />
                </View>

                <View style={{ marginHorizontal: SCREEN_WIDTH * .05, marginTop: SCREEN_HEIGHT * .02 }}>
                    <View>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.Orange1, fontSize: 16, fontWeight: '400', textTransform: 'uppercase' }, CustomTextAlign]}>{params.builder} Company</Text>

                        <View>
                            <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, CustomFlexDirection]} >
                                <Text style={{ lineHeight: 19, fontWeight: '400', color: Colors.White_Text, fontSize: 14, fontFamily: 'Gibson', textTransform: 'capitalize', maxWidth: SCREEN_WIDTH * .4, marginVertical: SCREEN_HEIGHT * .007 }}>{params.address}</Text>
                                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, CustomFlexDirection]} >

                                    <IconComponent image={email} style={{ height: SCREEN_WIDTH * .08, width: SCREEN_WIDTH * .08, }} />
                                    <IconComponent image={Call} style={{ height: SCREEN_WIDTH * .08, width: SCREEN_WIDTH * .08, marginLeft: SCREEN_HEIGHT * .01 }} />

                                </View>
                            </View>
                        </View>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.Green1, fontSize: 14, lineHeight: 18 }, CustomTextAlign]}>@{params.builder}</Text>
                    </View>
                    <View>


                    </View>

                </View>
            </View>
        </ScrollView >

    )
}
const CabanaView = (props) => {
    const language = useSelector(state => state.Language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    const CustomTextAlign = Utils.textAlign(language)
    const CustomAlignItems = Utils.alignItems(language)
    const CustomAlignSelf = Utils.alignSelf(language)
    const [ActiveImage, setActiveImage] = useState(0)
    const [Visible, setVisible] = useState(false)
    const navigation = useNavigation()
    const params = props.route.params
    const ActionsheetRef = useRef()


    return (
        <View style={{ flex: 1, backgroundColor: Colors.Green1 }}>
            <HeaderComponent params={params} ActiveImage={ActiveImage} setActiveImage={setActiveImage} Visible={Visible} setVisible={setVisible} />
            <LowerComponent ActiveImage={ActiveImage} ActionsheetRef={ActionsheetRef} CustomTextAlign={CustomTextAlign} CustomFlexDirection={CustomFlexDirection} CustomAlignItems={CustomAlignItems} CustomAlignSelf={CustomAlignSelf} params={params} props={props} />
            <ActionsheetComponent params={params} ActionsheetRef={ActionsheetRef} />
            <LowerButtonComponent onPress={() => { params.type === 'booked' ? ActionsheetRef.current.show() : navigation.navigate('RequestConfirmation') }} buttonTitle={params.type === 'booked' ? "Scan Barcode" : "Pay Now"} type={params.type === 'booked' ? 'barcode' : null} />
        </View>
    )
}

export default CabanaView