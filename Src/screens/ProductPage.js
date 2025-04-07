import { View, Text, Image, ImageBackground, SafeAreaView, Pressable, ScrollView, FlatList, StatusBar, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { ChevronLeft, ChevronRight, CompassNorthEast, DesertBike, Expand, Location_White, LocationPin, YamahaJetski1 } from '../assets/Images'
import StarComponent from '../components/StarComponent'
import Utils from '../Utils'
import { useSelector } from 'react-redux'
import LocationComponent from '../components/LocationComponent'
import ImageModal from '../components/ImageModal'
import DataConstants from '../assets/DataConstants'
import { LowerButtonComponent } from '../components/ItemLayout'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants
const HandleNavigation = (name, item, navigation) => {
    navigation.navigate(name, item)
}

export const ImageSelector = ({ length, ActiveImage, setActiveImage }) => {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: Colors.Black }}>
            {Array.from({ length: length }).map((_, index) => (
                <Pressable key={index} style={{ width: SCREEN_WIDTH * .023, height: SCREEN_HEIGHT * .003, backgroundColor: ActiveImage === index ? Colors.Green1 : Colors.White, marginHorizontal: SCREEN_WIDTH * .01 }} onPress={() => setActiveImage(index)} />
            ))}
        </View>
    )
}
export const Imagecarousal = ({ images, ActiveImage, setActiveImage, setActive }) => {
    const imageRef = useRef()
    useEffect(() => {
        imageRef?.current ?
            imageRef.current.scrollToIndex({ index: ActiveImage, animated: true }) : null
    }, [ActiveImage])

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 30,
    })
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        viewableItems.length > 0 ?
            (setActiveImage(viewableItems[0].index)
                // setActive(viewableItems[0].item)
            )
            : null
    })
    return (
        <FlatList scrollEventThrottle={16} ref={imageRef} bounces={false} onViewableItemsChanged={onViewableItemsChanged.current} viewabilityConfig={viewabilityConfig.current} pagingEnabled={true} horizontal data={images} renderItem={({ item, index }) => {
            return (
                <Image source={item} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * .41, overflow: 'hidden' }} />
            )
        }} />
    )
}
const HeaderComponent = ({ params, Visible, setVisible, ActiveImage, setActiveImage }) => {
    const [Active, setActive] = useState('')
    return (
        <View style={{}}>
            <Imagecarousal setActive={setActive} images={params.images} setVisible={setVisible} ActiveImage={ActiveImage} setActiveImage={setActiveImage} />
            <View style={{ position: 'absolute', width: SCREEN_WIDTH * .9, alignSelf: 'center', alignItems: 'center' }}>
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <DrawerHeaderComponent name={'rent'} setVisible={setVisible} rightimage={Expand} onRightPress={() => setVisible(true)} />
                    <ImageModal visible={Visible} image={params.images} setVisible={setVisible} index={ActiveImage} />
                </SafeAreaView>

            </View>
        </View>
    )
}

const LowerComponent = ({ params, ActiveImage, setActiveImage }) => {
    const navigation = useNavigation()
    const language = useSelector(state => state.Language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    const CustomTextAlign = Utils.textAlign(language)
    const CustomAlignItems = Utils.alignItems(language)

    return (
        <SafeAreaView style={{ backgroundColor: Colors.Green1, }}>
            <ScrollView bounces={false} contentContainerStyle={{}} style={{ top: -SCREEN_WIDTH * .04, backgroundColor: Colors.Black_Bg, height: SCREEN_HEIGHT * .51, width: SCREEN_WIDTH, borderRadius: 15 }}>
                <View style={{ width: SCREEN_WIDTH, alignSelf: 'center', overflow: 'hidden' }}>
                    <View style={{ backgroundColor: Colors.Black, paddingTop: SCREEN_HEIGHT * .02 }}>
                        <ImageSelector length={params?.images?.length} ActiveImage={ActiveImage} setActiveImage={setActiveImage} />
                        <View style={[{ width: SCREEN_WIDTH, alignSelf: 'center', height: SCREEN_WIDTH * .3, backgroundColor: Colors.Black, borderRadius: 15, alignItems: 'center', paddingHorizontal: SCREEN_WIDTH * .055, justifyContent: 'space-between', paddingTop: SCREEN_WIDTH * .05, marginBottom: SCREEN_HEIGHT * .015, flexDirection: 'row' }, CustomFlexDirection]} >
                            <View style={CustomAlignItems}>
                                <Text style={{ color: Colors.Green1, fontSize: 18, fontFamily: 'Gibson', textTransform: 'uppercase', marginVertical: SCREEN_WIDTH * .011 }}>{params.name}</Text>
                                <StarComponent maxStars={5} rating={params.rating} />
                                <Text style={{ color: Colors.Orange1, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginVertical: SCREEN_WIDTH * .013 }}>{params.brand}</Text>
                                <Text style={{ maxWidth: SCREEN_WIDTH * .6, color: Colors.Gray_Text, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginVertical: SCREEN_WIDTH * .011 }}>{params.model}</Text>
                            </View>

                            <View>
                                <Text style={{ color: Colors.Green1, fontSize: 31, fontFamily: 'Gibson', fontWeight: '600', textAlign: 'center' }}>{params.price}</Text>
                                <Text style={{ color: Colors.Green1, fontSize: 12, fontFamily: 'Gibson', fontWeight: '600' }}>QAR/hour</Text>

                            </View>
                        </View>
                    </View>
                    <LocationComponent style={{ marginVertical: SCREEN_HEIGHT * .02, marginHorizontal: SCREEN_WIDTH * .05 }} width={SCREEN_WIDTH * .89} address={params.location} header={"Pickup Location"} />

                    <View style={[{ marginHorizontal: SCREEN_WIDTH * .05, marginTop: SCREEN_HEIGHT * .015 }, CustomAlignItems,]}>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', textTransform: 'uppercase' }, CustomTextAlign]}>Details</Text>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.White_Text, fontSize: 14, lineHeight: 18, marginTop: SCREEN_WIDTH * .01 }, CustomTextAlign]}>{params.detail}</Text>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.White_Text, fontSize: 14, lineHeight: 18, marginTop: SCREEN_WIDTH * .025 }, CustomTextAlign]}>{params.detailSub}</Text>
                    </View>
                </View>
            </ScrollView>
            <LowerButtonComponent buttonTitle={'Rent Now'} onPress={() => { HandleNavigation('BookingSummary', params, navigation) }} height={SCREEN_HEIGHT * .06} />

        </SafeAreaView>
    )
}


const ProductPage = (props) => {
    const [Visible, setVisible] = useState(false)
    const params = props.route.params
    const [ActiveImage, setActiveImage] = useState('')
    return (
        <View style={{ flex: 1, backgroundColor: Colors.Green1 }}>
            <HeaderComponent Visible={Visible} setVisible={setVisible} params={params} ActiveImage={ActiveImage} setActiveImage={setActiveImage} />
            <LowerComponent params={params} ActiveImage={ActiveImage} setActiveImage={setActiveImage} />

        </View>
    )
}

export default ProductPage