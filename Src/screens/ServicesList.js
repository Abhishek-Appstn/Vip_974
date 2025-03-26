import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Constants from '../Constants'
import DrawerHeaderComponent from '../components/DrawerHeaderComponent/DrawerHeaderComponent'
import { calendar, Location_White, YamahaJetski1 } from '../assets/Images'
import StarComponent from '../components/StarComponent'
import { useNavigation } from '@react-navigation/native'
import DataConstants from '../assets/DataConstants'
import Utils from '../Utils'
import { useSelector } from 'react-redux'
import TimeSlot from '../components/TimeSlot'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
const { Colors } = Constants
const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS

const ServicesRenderItem = ({ item, index, params, CustomFlexDirection, CustomAlignItems }) => {
    const navigation = useNavigation()
    const HandleNavigation = (item) => {
        navigation.navigate('ProductPage', { ...item, ...params })
    }
    const animationProgress=useSharedValue(0)
    useEffect(() => {
     animationProgress.value=withDelay(index*300,withTiming(1,{duration:500}))
    }, [])
    const animatedStyle=useAnimatedStyle(()=>{
        return{
opacity:animationProgress.value,
transform:[
    {translateY:animationProgress.value*20-20

    }
]
        }
    }
    )
    return (
       <Animated.View style={[animatedStyle]}>
       <Pressable style={[{ width: SCREEN_WIDTH * .95, marginVertical: 8, alignSelf: 'center', height: SCREEN_WIDTH * .28, backgroundColor: Colors.Black_Bg, borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, justifyContent: 'space-between' }, CustomFlexDirection]} onPress={() => HandleNavigation(item)}>
            <View style={[{ flexDirection: 'row' }, CustomFlexDirection]}>
                <View style={{ height: SCREEN_WIDTH * .2, width: SCREEN_WIDTH * .2, borderRadius: 10, overflow: 'hidden' }}>
                    <Image source={item?.images[0]} resizeMode='cover' style={{ height: SCREEN_WIDTH * .2, width: SCREEN_WIDTH * .2 }} />
                </View>
                <View style={[{ marginHorizontal: SCREEN_WIDTH * .03 }, CustomAlignItems]}>
                    <Text style={{ color: Colors.White, fontSize: 18, fontFamily: 'Gibson', textTransform: 'uppercase', marginVertical: SCREEN_WIDTH * .011 }}>{item.name}</Text>
                    <StarComponent maxStars={5} rating={item.rating} />
                    <Text style={{ color: Colors.Orange1, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginVertical: SCREEN_WIDTH * .011 }}>{item.brand}</Text>
                    <View style={[{ flexDirection: 'row', marginVertical: SCREEN_WIDTH * .011 }, CustomFlexDirection]}>
                        <Image source={Location_White} />
                        <Text style={{ color: Colors.Gray_Text, fontSize: 12, fontFamily: 'Gibson', textTransform: 'capitalize', marginHorizontal: SCREEN_WIDTH * .01 }}>{item.location}</Text>

                    </View>

                </View>
            </View>
            <View>
                <Text style={{ color: Colors.Green1, fontSize: 24, fontFamily: 'Gibson', fontWeight: '600', textAlign: 'right' }}>{item.price}</Text>
                <Text style={{ color: Colors.Green1, fontSize: 12, fontFamily: 'Gibson', fontWeight: '600', textAlign: 'right' }}>QAR/hour</Text>


            </View>
        </Pressable>
        </Animated.View>
    )
}

const ServicesList = (props) => {
    const params = props.route.params
    const type = params.subtype
    const language = useSelector(state => state.Language.value)
    const CustomFlexDirection = Utils.flexDirection(language)
    const CustomAlignItems = Utils.alignItems(language)
    return (
        <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: Colors.Black, transform: [{ scaleX: 1 }] }}>
            <View style={{ height: SCREEN_WIDTH * .5, backgroundColor: Colors.Black_Bg, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, paddingHorizontal: SCREEN_WIDTH * .08, paddingTop: SCREEN_WIDTH * .17 }}>
                <SafeAreaView>
                    <DrawerHeaderComponent name={params.subtype} type='filter' />
                    <TimeSlot params={params} selectedDate={params.selectedDate} selectedTime={params.selectedTime} style={{ marginTop: SCREEN_HEIGHT * .05 }} />
                </SafeAreaView>
            </View>
            <SafeAreaView>
                <FlatList showsVerticalScrollIndicator={false} ListFooterComponent={<Text style={{ color: Colors.White, alignSelf: 'center', fontFamily: 'Gibson' }}>--------End---------</Text>} keyExtractor={item => item.name} data={type == 'Beach' ? DataConstants.BeachServiceData : DataConstants.DesertServiceData} contentContainerStyle={{ marginTop: SCREEN_HEIGHT*.015, paddingBottom: SCREEN_HEIGHT*.3 }} renderItem={item => <ServicesRenderItem item={item.item} index={item.index} params={params} CustomFlexDirection={CustomFlexDirection} CustomAlignItems={CustomAlignItems} />} />
            </SafeAreaView>
        </View>
    )
}

export default ServicesList