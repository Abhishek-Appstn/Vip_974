import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from '../../Constants'
import { Background_Icon, Logo_White } from '../../assets/Images'
const{SCREEN_HEIGHT,SCREEN_WIDTH}=Constants.SCREEN_DIMENSIONS
const Layout = ({children,logoStyles}) => {
  
  return (
    <View style={{backgroundColor:Constants.Colors.Black_Bg,height:Constants.SCREEN_DIMENSIONS.SCREEN_HEIGHT,width:Constants.SCREEN_DIMENSIONS.SCREEN_WIDTH}}>
    <Image style={[{position:'absolute',top:0,right:-SCREEN_WIDTH*.34,opacity:.45,height:SCREEN_HEIGHT*.54,resizeMode:"contain"},logoStyles?{...logoStyles}:null,]} source={Background_Icon}/>
    {children}
        </View>
  )
}

export default Layout