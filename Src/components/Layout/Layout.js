import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { Background_Icon, Logo_White } from '../../assets/Images'

const Layout = ({children}) => {
  return (
    <View style={{backgroundColor:Constants.Colors.Black_Bg,height:Constants.SCREEN_DIMENSIONS.SCREEN_HEIGHT,width:Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH}}>
    <Image style={{position:'absolute',top:0,right:-110,opacity:.45}} source={Background_Icon}/>
    {children}
        </View>
  )
}

export default Layout