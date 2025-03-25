import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Constants from '../Constants'
import DataConstants from '../assets/DataConstants'
import { useSelector } from 'react-redux'
import Utils from '../Utils'
const {Colors}=Constants
const {SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const{paymentData,ServicePay}=DataConstants

const PaymentComponent = ({data,header,backgroundColor}) => {
    const language=useSelector(state=>state.Language.value)
    const CustomFlexDirection=Utils.flexDirection(language)
        const CustomTextAlign=Utils.textAlign(language)
    
    return (
        <View
            style={{
              backgroundColor: Colors.Black_Bg,borderRadius: SCREEN_WIDTH*.04, paddingHorizontal: SCREEN_WIDTH * .07, paddingVertical: SCREEN_WIDTH * .05,overflow:'hidden'
            }}>
            <Text
                style={[{
                    color: Colors.White,
                    fontSize: 20,
                    fontFamily: 'Gibson',
                    textTransform: 'uppercase',
                    fontWeight: '400',
                    marginVertical: SCREEN_WIDTH * 0.01,
                },CustomTextAlign]}>Payments</Text>

            <FlatList scrollEnabled={false} data={data.type=='rent'?paymentData:ServicePay} renderItem={({ item, index }) => {
                return (
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: SCREEN_WIDTH * .014 },CustomFlexDirection]}>
                        <Text
                            style={{
                                color: Colors.White,
                                fontSize: 16,
                                fontFamily: 'Gibson',
                                fontWeight: '400',
                                marginVertical: SCREEN_WIDTH * 0.01,
                            }}>{item.name}</Text>

                        <Text
                            style={{
                                color: Colors.White,
                                fontSize: 16,
                                fontFamily: 'Gibson',
                                textTransform: 'uppercase',
                                textAlign: 'right',
                                marginVertical: SCREEN_WIDTH * 0.01,
                            }}>{item.amt} QAR</Text>

                    </View>
                )
            }} />
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: SCREEN_WIDTH * .05 },CustomFlexDirection]}>

                <Text
                    style={{
                        color: Colors.White,
                        fontSize: 18,
                        fontFamily: 'Gibson',
                        fontWeight: 'bold',
                        marginVertical: SCREEN_WIDTH * 0.01,
                    }}>Total</Text>

                <Text style={{ fontSize: 31, fontWeight: 'bold', color:data.type==='rent'?Colors.White:Colors.Green1 }}>250<Text style={{ fontSize: 12, fontWeight: 'bold' }}>/ QAR</Text></Text>

            </View>
        </View>
    )
}

export default PaymentComponent





