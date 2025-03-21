import { View, Text, Image, ImageBackground, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { ChevronLeft, ChevronRight, CompassNorthEast, Location_White, LocationPin } from '../assets/Images'
import StarComponent from '../components/StarComponent'
import Utils from '../Utils'
import { useSelector } from 'react-redux'
import LocationComponent from '../components/LocationComponent'
import ImageModal from '../components/ImageModal'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const HandleNavigation = (name, item, navigation) => {
    navigation.navigate(name, item)
}

const HeaderComponent = ({ params,setVisible}) => {
    return (
        <ImageBackground source={params.image} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * .41 }}>
            <SafeAreaView>
                <View style={{ width: SCREEN_WIDTH * .88, alignSelf: 'center' }}>
                    <DrawerHeaderComponent name={'rent'} type='expand' search={true} setVisible={setVisible} />
                </View>
            </SafeAreaView>
        </ImageBackground>
        
    )
}

const LowerComponent = ({ params }) => {
    const navigation = useNavigation()
    const language = useSelector(state => state.language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    const CustomTextAlign = Utils.textAlign(language)
    const CustomAlignItems = Utils.alignItems(language)
    const CustomImageTransform = Utils.ImageTransform(language)

    return (
        <View>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }} style={{ top: -SCREEN_WIDTH * .04, backgroundColor: Colors.Black_Bg, height: SCREEN_HEIGHT * .51, width: SCREEN_WIDTH, borderRadius: 15 }}>
                <View style={{ width: SCREEN_WIDTH, alignSelf: 'center', overflow: 'hidden' }}>

                    <View style={[{ width: SCREEN_WIDTH, alignSelf: 'center', height: SCREEN_WIDTH * .3, backgroundColor: Colors.Black, borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: SCREEN_WIDTH * .055, justifyContent: 'space-between', paddingTop: SCREEN_WIDTH * .05,marginBottom:SCREEN_HEIGHT*.015 }, CustomFlexDirection]} >
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

                    <LocationComponent address={params.location} header={"Pickup Location"} />

                    <View style={[{ marginHorizontal: SCREEN_WIDTH * .05, marginTop: SCREEN_HEIGHT * .015 }, CustomAlignItems,]}>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.White, fontSize: 18, fontWeight: '400', textTransform: 'uppercase' }, CustomTextAlign]}>Details</Text>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.White_Text, fontSize: 14, lineHeight: 18, marginTop: SCREEN_WIDTH * .01 }, CustomTextAlign]}>{params.detail}</Text>
                        <Text style={[{ fontFamily: 'Gibson', color: Colors.White_Text, fontSize: 14, lineHeight: 18, marginTop: SCREEN_WIDTH * .025 }, CustomTextAlign]}>{params.detailSub}</Text>
                    </View>
                </View>
            </ScrollView>
            <Pressable style={{ backgroundColor: Colors.Green1, height: SCREEN_WIDTH * .26, top: -SCREEN_WIDTH * .07, zIndex: -1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} onPress={() => { HandleNavigation('BookingSummary', params, navigation) }}>
                <Image source={ChevronRight} style={{ opacity: .3, marginRight: SCREEN_WIDTH * .003 }} />
                <Image source={ChevronRight} style={{ opacity: .5, marginRight: SCREEN_WIDTH * .003 }} />
                <Image source={ChevronRight} style={{ opacity: 1, marginRight: SCREEN_WIDTH * .003 }} />
                <Text style={{ fontFamily: 'Gibson', fontWeight: 'semibold', fontSize: 18, marginHorizontal: SCREEN_WIDTH * .045, textTransform: 'uppercase' }}>{params.type == 'rent' ? "RENT NOW" : null}</Text>
                <Image source={ChevronLeft} style={{ opacity: 1, marginRight: SCREEN_WIDTH * .003 }} />
                <Image source={ChevronLeft} style={{ opacity: .5, marginRight: SCREEN_WIDTH * .003 }} />
                <Image source={ChevronLeft} style={{ opacity: .3, marginRight: SCREEN_WIDTH * .003 }} />
            </Pressable>
        </View>
    )
}


const ProductPage = (props) => {
    const [Visible, setVisible] = useState(false)
    const params = props.route.params
    return (
        <View>
            <HeaderComponent Visible={Visible} setVisible={setVisible} params={params} />
            <LowerComponent params={params} />
            <ImageModal visible={Visible} image={params.image} setVisible={setVisible} />

        </View>
    )
}

export default ProductPage