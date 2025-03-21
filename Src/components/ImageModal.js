import { View, Text, Modal, VirtualizedList, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import { CrossMark } from '../assets/Images'
import IconComponent from './IconComponent'

const ImageModal = ({ visible, image,setVisible }) => {
    const { SCREEN_HEIGHT, SCREEN_WIDTH } = Constants.SCREEN_DIMENSIONS
    const { Colors } = Constants
const Onpress=()=>{
    setVisible(false)
}
    return (
        <Modal visible={visible} transparent={true}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                <IconComponent image={CrossMark} style={{alignSelf:'flex-end',marginHorizontal:SCREEN_WIDTH*.05,backgroundColor:'#fff',borderColor:null}} onPress={Onpress}/>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Image source={image} style={{ width: SCREEN_WIDTH }} resizeMode='cover' />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default ImageModal