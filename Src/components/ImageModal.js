import React, { useEffect, useRef } from 'react'
import { View, Text, Modal, VirtualizedList, Image, SafeAreaView, FlatList } from 'react-native'

import Constants from '../Constants'
import { CrossMark } from '../assets/Images'
import IconComponent from './IconComponent'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
const { Colors } = Constants

const ImageRenderItem = ({ item, index }) => {
    return (
        <Image source={item} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, marginHorizontal: index > 0 ? SCREEN_WIDTH * .01 : 0, alignSelf: 'center' }} resizeMode='contain' />
    )
}
const ImageModal = ({ visible, image = [], setVisible, index }) => {
    let flatlistRef = useRef(null)

    useEffect(() => {
        console.log("index",flatlistRef?.current)
        try {
            if (flatlistRef?.current) {
                setTimeout(() => {
                     flatlistRef?.current?.scrollToIndex({index,animated:true});
                }, 200);
            }
        } catch (error) {
            console.log("Error @image", error)
        }
    }, [index,visible])

    const Onpress = () => {
        setVisible(false)
    }

    return (
        <Modal visible={visible} transparent={true}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                <IconComponent image={CrossMark} style={{ alignSelf: 'flex-end', marginHorizontal: SCREEN_WIDTH * .05, backgroundColor: Colors.White, borderColor: null }} onPress={Onpress} />
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <FlatList ref={flatlistRef} 
                    horizontal 
                    scrollEventThrottle={16} 
                    snapToInterval={SCREEN_WIDTH * 1.01} 
                    decelerationRate={"fast"} 
                    data={image} 
                    renderItem={item => <ImageRenderItem item={item.item} index={item.index} />} />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default ImageModal